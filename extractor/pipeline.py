"""Pipeline por marca: descubrir → descargar → leer → normalizar → validar → data/staging/<marca>.csv."""
from __future__ import annotations

import csv
import datetime as dt
import gzip
import hashlib
import json
import re
import tomllib
from dataclasses import dataclass, field
from pathlib import Path
from urllib.parse import urljoin, urlsplit, urlunsplit

from . import readers
from .fetch import Blocked, Fetcher
from .geometry import (
    STANDARD_LETTERS, Geometry, best_geometry, heights_from_tables, heights_from_text, order_sizes, parse_matrix,
    size_parts,
)

ROOT = Path(__file__).resolve().parent.parent
STAGING = ROOT / "data" / "staging"
VISION = ROOT / "data" / "vision"

COLUMNS = [
    "brand", "family", "model", "model_year", "category", "size_label", "size_normalized", "size_cm",
    "height_min", "height_max", "height_original", "height_unit", "stack", "reach", "geometry_raw",
    "price_eur", "price_is_from", "product_url", "source_url", "extraction_method", "loaded_at",
]
CATEGORIES = {"carretera", "gravel", "mtb", "emtb"}
NOTATION = {"2XS": "XXS", "3XS": "XXXS", "2XL": "XXL", "3XL": "XXXL"}  # misma talla, distinta notación


def load_config():
    """Una configuración por marca en extractor/brands/<clave>.toml, en el orden de data/brands.csv."""
    brands = {}
    for path in sorted((ROOT / "extractor" / "brands").glob("*.toml")):
        with open(path, "rb") as f:
            brands[path.stem] = tomllib.load(f)
    with open(ROOT / "extractor" / "validation.toml", "rb") as f:
        validation = tomllib.load(f)
    return brands, validation


def load_size_labels() -> dict[tuple[str, str], str]:
    path = ROOT / "data" / "size-labels.csv"
    with open(path, encoding="utf-8", newline="") as f:
        return {(r["brand"], r["label"].strip().upper()): r["size_normalized"].strip() for r in csv.DictReader(f)}


@dataclass
class Product:
    url: str
    hints: str = ""  # texto extra para clasificar (tipo de producto, etiquetas, colección)


@dataclass
class Result:
    brand: str
    rows: list[dict] = field(default_factory=list)
    rejected: list[tuple[dict, str]] = field(default_factory=list)
    skipped: dict[str, int] = field(default_factory=dict)  # motivo → nº de productos
    failures: list[tuple[str, str]] = field(default_factory=list)  # (url, motivo) productos en alcance sin datos
    warnings: list[str] = field(default_factory=list)
    blocked_reason: str | None = None
    discovered: int = 0
    fetch_stats: dict = field(default_factory=dict)

    def skip(self, reason: str):
        self.skipped[reason] = self.skipped.get(reason, 0) + 1


# ---------------------------------------------------------------- descubrimiento
def canonical(url: str) -> str:
    p = urlsplit(url)
    return urlunsplit((p.scheme, p.netloc, p.path, "", ""))


def discover(cfg: dict, fx: Fetcher, log) -> list[Product]:
    kind = cfg["discovery"]
    include = [re.compile(r) for r in cfg.get("include", [])]
    exclude = [re.compile(r) for r in cfg.get("exclude", [])]

    def keep(u: str) -> bool:
        return (not include or any(r.search(u) for r in include)) and not any(r.search(u) for r in exclude)

    found: dict[str, Product] = {}
    if kind == "sitemap":
        queue, seen = list(cfg["sitemaps"]), set()
        while queue:
            sm = queue.pop(0)
            if sm in seen:
                continue
            seen.add(sm)
            text = _sitemap_text(fx, sm)
            for loc in re.findall(r"<loc>\s*(.*?)\s*</loc>", text):
                loc = loc.replace("&amp;", "&")
                if "<sitemapindex" in text:
                    if not cfg.get("sitemap_filter") or re.search(cfg["sitemap_filter"], loc):
                        queue.append(loc)
                elif keep(loc):
                    found.setdefault(canonical(loc) if cfg.get("strip_query", True) else loc, Product(loc))
    elif kind == "shopify":
        base = cfg["shopify_base"].rstrip("/")
        sources = [f"{base}/collections/{c}/products.json" for c in cfg.get("shopify_collections", [])] or [f"{base}/products.json"]
        for src in sources:
            for page_no in range(1, 40):
                page = fx.get(f"{src}?limit=250&page={page_no}")
                try:
                    products = json.loads(page.text).get("products", [])
                except json.JSONDecodeError:
                    raise Blocked(f"products.json no es JSON en {src}")
                if not products:
                    break
                for p in products:
                    url = f"{base}/products/{p['handle']}"
                    hints = " ".join([p.get("product_type") or "", " ".join(p.get("tags") or []) if isinstance(p.get("tags"), list) else str(p.get("tags") or ""), src])
                    if keep(url + " " + hints):
                        found.setdefault(url, Product(url, hints))
    elif kind == "listing":
        link_re = re.compile(cfg["link_re"])
        for listing in cfg["listing_pages"]:
            pages = [listing] + [listing + cfg.get("paginate", "").format(n=n) for n in range(2, 30)] if cfg.get("paginate") else [listing]
            for lp in pages:
                try:
                    html = fx.get(lp, render=cfg.get("listing_render", False)).text
                except Blocked as e:
                    log(f"    · listado no disponible: {e}")
                    break
                new = 0
                # Enlaces en href y también URL absolutas dentro de JSON incrustado (https:\/\/…).
                flat = re.sub(r"\\+/", "/", html)
                candidates = re.findall(r'href=["\']([^"\'#]+)', html) + re.findall(r'https?://[^\s"\'<>\\]+', flat)
                for href in candidates:
                    u = urljoin(lp, href.replace("&amp;", "&"))
                    if link_re.search(u) and keep(u):
                        key = canonical(u) if cfg.get("strip_query", True) else u
                        if key not in found:
                            found[key] = Product(key, listing)
                            new += 1
                if new == 0 and lp != listing:
                    break
    else:
        raise ValueError(f"descubrimiento desconocido: {kind}")
    return list(found.values())


def _sitemap_text(fx: Fetcher, url: str) -> str:
    """Los sitemaps se piden con httpx aunque la marca use Chrome (Chrome muestra el XML como página)."""
    if url.endswith(".gz"):
        page = fx.get_binary(url, ".gz")
        return gzip.decompress(page.path.read_bytes()).decode("utf-8", "replace")
    try:
        return fx.get_binary(url, ".xml").path.read_text(encoding="utf-8", errors="replace")
    except Blocked:
        return fx.get(url).text


# ---------------------------------------------------------------- lectura de producto
def classify(cfg: dict, text: str) -> str | None:
    """Categoría según las reglas de la marca (primera que coincide). '' = fuera de alcance."""
    for pattern, category in cfg.get("categories", []):
        if re.search(pattern, text, re.I):
            return category or None
    return None


def product_meta(html: str, url: str, cfg: dict) -> dict:
    lds = readers.json_ld(html)
    name = None
    for ld in lds:
        if str(ld.get("@type")) in ("Product", "ProductGroup", "['Product']") and ld.get("name"):
            name = str(ld["name"]).strip()
            break
    if cfg.get("name_source") == "h1":
        name = readers.h1_text(html) or name
    name = name or readers.meta_content(html, "og:title") or readers.h1_text(html) or ""
    for suffix in cfg.get("name_strip", []):
        name = re.sub(suffix, "", name, flags=re.I).strip()
    name = re.sub(r"\s+", " ", name)

    prices, low = [], False

    def walk(node):
        nonlocal low
        if isinstance(node, dict):
            cur = str(node.get("priceCurrency", "")).upper()
            for k in ("price", "lowPrice"):
                if k in node and cur == "EUR":
                    try:
                        prices.append(float(str(node[k]).replace(",", ".")))
                        low = low or k == "lowPrice"
                    except ValueError:
                        pass
            for v in node.values():
                walk(v)
        elif isinstance(node, list):
            for v in node:
                walk(v)

    walk(lds)
    if not prices and cfg.get("price_re"):
        # Webs españolas sin JSON-LD de precio: regex de la marca (grupo 1), siempre en euros.
        for m in re.finditer(cfg["price_re"], html):
            try:
                raw = m.group(1).strip()
                if "," in raw or re.fullmatch(r"\d{1,3}(\.\d{3})+", raw):  # formato español: 9.190,00 / 3.299
                    raw = raw.replace(".", "").replace(",", ".")
                prices.append(float(raw))
            except ValueError:
                pass
            break
    if cfg.get("price_cents"):
        prices = [p / 100 for p in prices]
    prices = [p for p in prices if p > 0]
    price = min(prices) if prices else None
    is_from = bool(price) and (low or len(set(prices)) > 1 or bool(cfg.get("price_is_from")))

    crumbs = []
    for ld in lds:
        if ld.get("@type") == "BreadcrumbList":
            for it in ld.get("itemListElement", []):
                item = it.get("item")
                n = it.get("name") or (item.get("name") if isinstance(item, dict) else None)
                if n:
                    crumbs.append(str(n))

    year = None
    patterns = cfg.get("year_re", []) + [
        r'"(?:modelYear|model_year|modelyear)"\s*:\s*"?(20[2-3]\d)',
        r"(?:model\s*year|año\s*(?:de\s*)?modelo|modelljahr|année\s*modèle|anno\s*modello)\s*:?\s*(20[2-3]\d)",
    ]
    for pat in patterns:
        m = re.search(pat, url + " " + html, re.I)
        if m:
            year = int(m.group(1)) if len(m.group(1)) == 4 else 2000 + int(m.group(1))
            break
    if year is None:
        m = re.search(r"\b(20[2-3]\d)\b", name) or re.search(r"[-_/(](20[2-3]\d)(?:[-_/).]|$)", urlsplit(url).path)
        if m:
            year = int(m.group(1))
    return {"name": name, "price": price, "is_from": is_from, "crumbs": " / ".join(crumbs), "year": year}


def find_geometry(html: str, page_url: str, cfg: dict, fx: Fetcher, brand_key: str) -> tuple[Geometry | None, str, str, str | None]:
    """(geometría, método, url fuente, motivo si falla) probando HTML → JSON → PDF → imagen."""
    height_re = re.compile(cfg["height_re"], re.I) if cfg.get("height_re") else None

    if cfg.get("geometry_url"):
        m = re.search(cfg["geometry_url_param"], page_url + " " + html)
        if m:
            gurl = cfg["geometry_url"].format(*m.groups())
            try:
                ghtml = fx.get(gurl, render=cfg.get("render", False)).text
                if cfg.get("geometry_table_after"):
                    # Página con varias tablas (guía global): solo lo que sigue al nombre del modelo.
                    # De todas las menciones del modelo, la más cercana a la tabla que la sigue (no la del menú).
                    best = None
                    for a in re.finditer(cfg["geometry_table_after"].format(re.escape(m.group(1))), ghtml, re.I):
                        t = ghtml.find("<table", a.end())
                        if t != -1 and (best is None or t - a.end() < best[1] - best[0]):
                            best = (a.end(), t)
                    if not best:
                        return None, "", gurl, f"modelo '{m.group(1)}' no encontrado en {gurl}"
                    ghtml = ghtml[best[0]:]
                gtables = readers.html_tables(ghtml)
                if cfg.get("geometry_table_after"):
                    gtables = gtables[:1]
                if cfg.get("json_key"):
                    for data in readers.json_after_key(ghtml, cfg["json_key"]):
                        jg = best_geometry(readers.json_tables(data), height_re, cfg.get('geometry_unit'))
                        if jg and not best_geometry(gtables, height_re, cfg.get('geometry_unit')):
                            if jg.heights is None:
                                jg.heights = heights_from_tables(gtables, jg.sizes)
                            return jg, "json", gurl, None
                g = best_geometry(gtables, height_re, cfg.get('geometry_unit'))
                if g:
                    if g.heights is None:
                        g.heights = heights_from_tables(gtables, g.sizes) or heights_from_text(ghtml, g.sizes)
                    return g, "html", gurl, None
            except Blocked as e:
                return None, "", gurl, str(e)

    tables = readers.html_tables(html)
    if cfg.get("collapse_unit_columns"):
        tables = [readers.collapse_unit_columns(t) for t in tables]
    if cfg.get("size_attr"):
        tables += readers.attr_tables(html, cfg["size_attr"])
    if cfg.get("size_tabs_re"):
        tables += readers.tab_tables(html, cfg["size_tabs_re"])
    g = best_geometry(tables, height_re, cfg.get('geometry_unit'))
    if g:
        if g.heights is None:
            g.heights = heights_from_tables(tables, g.sizes) or heights_from_text(html, g.sizes)
        return g, "html", page_url, None
    json_sources = readers.embedded_json(html)
    if cfg.get("json_key"):
        json_sources += readers.json_after_key(html, cfg["json_key"])
    for data in json_sources:
        g = best_geometry(readers.json_tables(data), height_re, cfg.get('geometry_unit'))
        if g:
            return g, "json", page_url, None

    if cfg.get("geometry_pdf_re"):
        m = re.search(cfg["geometry_pdf_re"], html, re.I)
        if m:
            purl = urljoin(page_url, m.group(1) if m.groups() else m.group(0))
            try:
                pdf = fx.get_binary(purl, ".pdf")
                g = best_geometry(readers.pdf_tables(pdf.path), height_re, cfg.get('geometry_unit'))
                if g:
                    return g, "pdf", purl, None
                return None, "", purl, "PDF sin tabla de stack/reach legible"
            except Blocked as e:
                return None, "", purl, str(e)

    if cfg.get("geometry_img_re"):
        m = re.search(cfg["geometry_img_re"], html, re.I)
        if m:
            iurl = urljoin(page_url, m.group(1) if m.groups() else m.group(0))
            return vision_geometry(iurl, fx, brand_key, height_re)

    return None, "", page_url, "sin tabla de geometría en la página"


def vision_geometry(img_url: str, fx: Fetcher, brand_key: str, height_re) -> tuple[Geometry | None, str, str, str | None]:
    """Tablas en imagen: se descargan a data/vision/<marca>/ y se transcriben con visión (Claude, en sesión).

    Esquema de la transcripción (<sha>.json): {"image_url", "header": [...], "rows": [[etiqueta, v1, v2, ...], ...]}
    """
    folder = VISION / brand_key
    folder.mkdir(parents=True, exist_ok=True)
    sha = hashlib.sha1(img_url.encode()).hexdigest()[:16]
    transcript = folder / f"{sha}.json"
    if transcript.exists():
        t = json.loads(transcript.read_text(encoding="utf-8"))
        g = parse_matrix([t["header"]] + t["rows"], height_re)
        return (g, "vision", img_url, None) if g else (None, "", img_url, "transcripción sin stack/reach")
    suffix = Path(urlsplit(img_url).path).suffix.lower() or ".png"
    page = fx.get_binary(img_url, suffix)
    target = folder / f"{sha}{suffix}"
    if not target.exists():
        target.write_bytes(page.path.read_bytes())
    queue = folder / "queue.json"
    q = json.loads(queue.read_text(encoding="utf-8")) if queue.exists() else {}
    q[sha] = {"image_url": img_url, "file": target.name}
    queue.write_text(json.dumps(q, indent=2, ensure_ascii=False), encoding="utf-8")
    return None, "", img_url, "tabla en imagen pendiente de transcripción por visión"


# ---------------------------------------------------------------- normalización y validación
def fmt(v) -> str:
    if v is None:
        return ""
    if isinstance(v, float):
        return str(int(v)) if v.is_integer() else f"{v:.1f}"
    return str(v)


def normalize_label(brand: str, label: str, labels: dict) -> tuple[str, str]:
    up = re.sub(r"\s+", "", label.upper())
    if up in STANDARD_LETTERS:
        return NOTATION.get(up, up), ""
    if (brand, up) in labels:
        return labels[(brand, up)], ""
    letter, cm = size_parts(label)
    return (NOTATION.get(letter, letter) if letter else ""), fmt(cm)


# Cotas que dependen del montaje (potencia, manillar, bielas, sillín) o del ciclista: no definen el cuadro.
COMPONENT_ROW_RE = re.compile(
    r"efectiv|effective|effektiv|\+|stem|potencia|vorbau|handlebar|manillar|lenker|crank|biela|kurbel|"
    r"altura del sill[ií]n|saddle height|sattelhöhe|seat ?post|tija|seat height|bar width|ancho|altura en cm|"
    r"rider height|body height|estatura|"
    r"körper|taille du|inseam|entrepierna|wheel size|rueda|tire|neum",
    re.I,
)


def family_key(g: Geometry) -> str:
    """Misma tabla de geometría del cuadro = misma familia (se ignoran filas de componentes y de ciclista)."""
    frame = sorted((k, v) for k, v in g.rows.items() if not COMPONENT_ROW_RE.search(k))
    payload = json.dumps([g.sizes, frame], ensure_ascii=False)
    return hashlib.sha1(payload.encode()).hexdigest()[:8]


def family_name(models: list[str]) -> str:
    words = [m.split() for m in models]
    common = []
    for parts in zip(*words):
        if len(set(p.lower() for p in parts)) == 1:
            common.append(parts[0])
        else:
            break
    return " ".join(common) if common else sorted(models, key=len)[0]


def validate_family(rows: list[dict], vcfg: dict) -> tuple[list[dict], list[tuple[dict, str]], list[str]]:
    ok, bad, warns = [], [], []
    ranges = vcfg["ranges"]
    cat = rows[0]["category"]
    over = vcfg.get(cat, {})

    def rng(name):
        return over.get(name, ranges[name])

    # Altura: mismo número de tallas que la geometría; si no, se descarta la altura (es opcional).
    with_h = [r for r in rows if r["height_original"]]
    if with_h and len(with_h) != len(rows):
        warns.append(f"{rows[0]['model']}: altura en {len(with_h)} de {len(rows)} tallas → altura descartada")
        for r in rows:
            r.update(height_min="", height_max="", height_original="", height_unit="")

    # Progresión por grupo de rueda: algunas tablas mezclan tallas 27.5 y 29 ("M - 27.5", "S - 29").
    def wheel(label: str) -> str:
        m = re.search(r"(?:-|/|\s)\s*(2[4-9](?:\.5)?|650b|700c)\s*\"?\s*$", label, re.I)
        return m.group(1).lower() if m else ""

    prev: dict[tuple[str, str], float] = {}
    family_error = None
    for r in rows:
        for k in ("stack", "reach"):
            v = float(r[k]) if r[k] else None
            key = (wheel(r["size_label"]), k)
            if v is not None and key in prev and v < prev[key]:
                family_error = f"{k} decrece al subir de talla ({r['size_label']}: {fmt(v)} < {fmt(prev[key])})"
            if v is not None:
                prev[key] = v

    for r in rows:
        errs = []
        for col in ("brand", "family", "model", "category", "size_label", "stack", "reach", "product_url", "source_url", "extraction_method", "loaded_at"):
            if not r[col]:
                errs.append(f"falta {col}")
        if r["category"] and r["category"] not in CATEGORIES:
            errs.append(f"categoría {r['category']} fuera de alcance")
        for col, key in (("stack", "stack"), ("reach", "reach"), ("price_eur", "price_eur")):
            if r[col]:
                lo, hi = rng(key)
                if not lo <= float(r[col]) <= hi:
                    errs.append(f"{col}={r[col]} fuera del rango plausible [{lo}, {hi}]")
        lo, hi = rng("height")
        for col in ("height_min", "height_max"):
            if r[col] and not lo <= float(r[col]) <= hi:
                errs.append(f"{col}={r[col]} fuera del rango plausible [{lo}, {hi}]")
        if r["height_min"] and r["height_max"] and not float(r["height_min"]) < float(r["height_max"]):
            errs.append("height_min ≥ height_max")
        if family_error:
            errs.append(family_error)
        if errs:
            bad.append((r, "; ".join(errs)))
        else:
            ok.append(r)
    return ok, bad, warns


# ---------------------------------------------------------------- marca completa
def run_brand(key: str, cfg: dict, vcfg: dict, limit: int | None = None, refresh: bool = False, log=print) -> Result:
    res = Result(cfg["name"])
    labels = load_size_labels()
    fx = Fetcher(ROOT, key, force_browser=cfg.get("browser", False), refresh=refresh, log=log)
    today = dt.date.today().isoformat()
    try:
        try:
            products = discover(cfg, fx, log)
        except Blocked as e:
            res.blocked_reason = f"descubrimiento: {e}"
            return res
        res.discovered = len(products)
        log(f"  {cfg['name']}: {len(products)} productos candidatos")
        if not products:
            res.blocked_reason = "no se encontraron productos (sitemap/listado/JSON)"
            return res

        built: list[tuple[dict, Geometry, str]] = []  # (meta, geometría, método)
        pre_cat = cfg.get("classify_by_url", True)
        n_fetched = 0
        for i, prod in enumerate(products):
            if limit and n_fetched >= limit:
                break
            category = classify(cfg, prod.url + " " + prod.hints) if pre_cat else None
            if pre_cat and category is None:
                res.skip("fuera de alcance (URL/tipo)")
                continue
            try:
                page = fx.get(prod.url, render=cfg.get("render", False))
            except Blocked as e:
                res.failures.append((prod.url, str(e)))
                continue
            n_fetched += 1
            meta = product_meta(page.text, prod.url, cfg)
            if not pre_cat:
                brand_cat = ""
                if cfg.get("category_text_re"):
                    m = re.search(cfg["category_text_re"], page.text)
                    brand_cat = m.group(1) if m else ""
                category = classify(cfg, " ".join([prod.url, prod.hints, meta["crumbs"], meta["name"], brand_cat]))
                if category is None:
                    res.skip("fuera de alcance (categoría)")
                    continue
            if cfg.get("exclude_name") and re.search(cfg["exclude_name"], meta["name"], re.I):
                res.skip("excluido por nombre (cuadro, kit, junior…)")
                continue
            g, method, src, why = find_geometry(page.text, page.final_url or prod.url, cfg, fx, key)
            if g is None and page.method == "httpx" and not cfg.get("no_render_retry"):
                # Página vacía o pintada con JS: segundo intento con Chrome.
                try:
                    rpage = fx.get(prod.url, render=True)
                    g, method, src, why = find_geometry(rpage.text, rpage.final_url or prod.url, cfg, fx, key)
                    if g is not None:
                        meta = product_meta(rpage.text, prod.url, cfg) if not meta["name"] else meta
                except Blocked as e:
                    why = str(e)
            if g is None:
                res.failures.append((prod.url, why or "sin geometría"))
                continue
            g = order_sizes(g)
            meta.update(category=category, url=prod.url)
            built.append((meta, g, method if page.method == "httpx" else method, src))
            if (i + 1) % 25 == 0:
                log(f"    … {i+1}/{len(products)} revisados, {len(built)} con geometría")

        # Solo el año de modelo vigente: por nombre de modelo, el año más reciente.
        latest: dict[str, int] = {}
        for meta, *_ in built:
            if meta["year"]:
                base = re.sub(r"\b20[2-3]\d\b", "", meta["name"]).strip().lower()
                latest[base] = max(latest.get(base, 0), meta["year"])
        rows_by_family: dict[str, list[list[dict]]] = {}
        seen_models = set()
        for meta, g, method, src in built:
            base = re.sub(r"\b20[2-3]\d\b", "", meta["name"]).strip().lower()
            if meta["year"] and meta["year"] < latest.get(base, 0):
                res.skip("año de modelo anterior")
                continue
            if (meta["name"].lower(), meta["year"]) in seen_models:
                res.skip("duplicado (mismo modelo)")
                continue
            seen_models.add((meta["name"].lower(), meta["year"]))
            if not meta["name"]:
                res.failures.append((meta["url"], "sin nombre de modelo"))
                continue
            fam = family_key(g)
            rows = []
            for j, size in enumerate(g.sizes):
                h = g.heights[j] if g.heights and j < len(g.heights) else None
                norm, cm = normalize_label(res.brand, size, labels)
                rows.append({
                    "brand": res.brand, "family": fam, "model": meta["name"], "model_year": fmt(meta["year"]),
                    "category": meta["category"], "size_label": size, "size_normalized": norm, "size_cm": cm,
                    "height_min": fmt(h.min) if h else "", "height_max": fmt(h.max) if h else "",
                    "height_original": h.original if h else "", "height_unit": h.unit if h else "",
                    "stack": fmt(g.stack[j]), "reach": fmt(g.reach[j]),
                    "geometry_raw": json.dumps({k: v[j] for k, v in g.rows.items()}, ensure_ascii=False),
                    "price_eur": fmt(meta["price"]), "price_is_from": "true" if meta["is_from"] else ("false" if meta["price"] else ""),
                    "product_url": meta["url"], "source_url": src, "extraction_method": method, "loaded_at": today,
                })
            for w in g.warnings:
                res.warnings.append(f"{meta['name']}: {w}")
            rows_by_family.setdefault(fam, []).append(rows)

        for fam, models in rows_by_family.items():
            names = [m[0]["model"] for m in models]
            fname = family_name(names)
            for rows in models:
                for r in rows:
                    r["family"] = f"{fname} [{fam}]"
                ok, bad, warns = validate_family(rows, vcfg)
                res.rows.extend(ok)
                res.rejected.extend(bad)
                res.warnings.extend(warns)
        if not res.rows and not res.blocked_reason:
            reasons = {}
            for _, why in res.failures:
                reasons[why.split(" en http")[0]] = reasons.get(why.split(" en http")[0], 0) + 1
            top = max(reasons, key=reasons.get) if reasons else (next(iter(res.skipped), "sin productos en alcance"))
            res.blocked_reason = f"sin filas válidas: {top}"
        return res
    finally:
        res.fetch_stats = dict(fx.stats)
        fx.close()


def write_outputs(key: str, res: Result):
    STAGING.mkdir(parents=True, exist_ok=True)
    with open(STAGING / f"{key}.csv", "w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=COLUMNS)
        w.writeheader()
        w.writerows(res.rows)
    summary = {
        "brand": res.brand,
        "discovered": res.discovered,
        "rows": len(res.rows),
        "models": len({r["model"] for r in res.rows}),
        "families": len({r["family"] for r in res.rows}),
        "rejected": [{"model": r["model"], "size": r["size_label"], "reason": why} for r, why in res.rejected],
        "skipped": res.skipped,
        "failures": [{"url": u, "reason": w} for u, w in res.failures],
        "warnings": res.warnings,
        "blocked_reason": res.blocked_reason,
        "fetch": res.fetch_stats,
        "methods": sorted({r["extraction_method"] for r in res.rows}),
        "with_height": sum(1 for r in res.rows if r["height_original"]),
        "with_price": len({r["model"] for r in res.rows if r["price_eur"]}),
        "generated_at": dt.datetime.now().isoformat(timespec="seconds"),
    }
    (STAGING / f"{key}.summary.json").write_text(json.dumps(summary, indent=2, ensure_ascii=False), encoding="utf-8")
    return summary
