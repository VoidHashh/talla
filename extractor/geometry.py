"""Interpreta una matriz (tabla) de geometría: tallas, stack, reach, altura del ciclista y resto de cotas."""
from __future__ import annotations

import re
from html import unescape as htmlunescape
from dataclasses import dataclass, field

STACK_RE = re.compile(r"\bstacks?\b|^pila$", re.I)
REACH_RE = re.compile(r"\breachs?\b|^alcance$", re.I)
# Variantes que no son el stack/reach del cuadro.
NOT_FRAME_RE = re.compile(
    r"\+|effective|efectiv|effektiv|\b3d\b|cockpit|handlebar|manillar|lenker|with bar|con manillar|to stem|stem\b|potencia|vorbau|spacer",
    re.I,
)
FRAME_RE = re.compile(r"cuadro|frame|rahmen|cadre|telaio", re.I)
HEIGHT_RE = re.compile(
    r"altura del ciclista|altura en cm|altura recomendada|altura usuario|estatura|rider height|body height|"
    r"body size|height of rider|rider size|körpergröße|korpergrosse|taille du cycliste|taille cycliste|"
    r"statura|fit guide|altura \(cm\)|^altura$|rider height range|height \(cm\)|recommended height|your height",
    re.I,
)
NOT_HEIGHT_RE = re.compile(r"sill|seat|saddle|pedal|bb\b|caja|horquilla|fork|stand|tubo|stack|head|tube|bottom|inseam|entrepierna|schritt", re.I)
SIZE_WORD_RE = re.compile(r"^(talla|tallas|size|sizes|taille|größe|grosse|rahmengröße|taglia|frame size|geometr\w*|tamaño)$", re.I)
STANDARD_LETTERS = {"3XS", "XXXS", "2XS", "XXS", "XS", "S", "M", "L", "XL", "XXL", "2XL", "3XL", "XXXL", "S/M", "M/L"}


@dataclass
class Height:
    min: float | None
    max: float | None
    original: str
    unit: str  # "cm" | "m" | "ft-in" | "in"


@dataclass
class Geometry:
    sizes: list[str]
    stack: list[float | None]
    reach: list[float | None]
    heights: list[Height | None] | None
    rows: dict[str, list[str]]  # todas las cotas publicadas, texto original
    warnings: list[str] = field(default_factory=list)


def parse_number(text: str) -> float | None:
    mm = re.match(r"\s*(-?\d+(?:[.,]\d+)?)\s*mm\b", text)
    if mm:  # valor en mm seguido de otras unidades ("548 mm 21.57 in")
        text = mm.group(1)
    t = text.strip().replace(" ", "").replace("\xa0", "").replace(" ", "")
    t = re.sub(r"(mm|cm|°|º)$", "", t, flags=re.I)
    if not t or not re.search(r"\d", t):
        return None
    if re.fullmatch(r"\d{1,2}\.\d{3}", t):  # 1.006 → 1006 (separador de miles)
        t = t.replace(".", "")
    elif re.fullmatch(r"\d{1,2},\d{3}", t):
        t = t.replace(",", "")
    t = t.replace(",", ".")
    m = re.fullmatch(r"-?\d+(\.\d+)?", t)
    return float(t) if m else None


_FT_IN = re.compile(r"(\d)\s*(?:'|’|′|ft)\s*(\d{1,2}(?:\.\d+)?)?\s*(?:\"|”|″|''|in)?")


def parse_height(text: str) -> Height | None:
    t = text.strip()
    if not t or t in "-–—/" or t.lower() in ("n/a", "na", "x", "xxx"):
        return None
    low = t.lower()
    # "< 165" / "165 >" = hasta 165 ; "> 188" / "188 <" / "188+" = desde 188
    lower_open = bool(re.match(r"\s*[≤<]", t) or re.search(r"\d\s*[≥>]\s*$", t)
                      or re.search(r"hasta|up to|bis\b|jusqu|menos de|under|below", low))
    upper_open = bool(re.match(r"\s*[≥>]", t) or re.search(r"\d\s*[≤<]\s*$|\+\s*$", t)
                      or re.search(r"desde|from|ab\b|à partir|más de|over|above", low))

    if _FT_IN.search(t) and ("'" in t or "’" in t or "′" in t or "ft" in low):
        vals = [int(a) * 30.48 + float(b or 0) * 2.54 for a, b in _FT_IN.findall(t)]
        unit, orig_vals = "ft-in", vals
    else:
        nums = [float(n.replace(",", ".")) for n in re.findall(r"\d+(?:[.,]\d+)?", t)]
        if not nums:
            return None
        if all(n < 3 for n in nums):  # metros: 1,65 - 1,71
            vals, unit = [n * 100 for n in nums], "m"
        elif all(50 <= n <= 90 for n in nums) and ("in" in low or '"' in t):
            vals, unit = [n * 2.54 for n in nums], "in"
        else:
            vals, unit = nums, "cm"
        orig_vals = vals
    vals = [round(v) for v in orig_vals]
    if len(vals) >= 2:
        return Height(min(vals[0], vals[1]), max(vals[0], vals[1]), t, unit)
    if lower_open:
        return Height(None, vals[0], t, unit)
    if upper_open:
        return Height(vals[0], None, t, unit)
    return None  # un número suelto sin signo no es un rango publicado


def _is_size_like(cell: str) -> bool:
    c = cell.strip()
    if not c or len(c) > 16 or SIZE_WORD_RE.match(c):
        return False
    if re.fullmatch(r"\d{2,3}(\.\d)? ?cm", c, re.I):
        return True
    if re.search(r"mm|°|stack|reach|cm\b", c, re.I):
        return False
    up = c.upper()
    if up in STANDARD_LETTERS or re.fullmatch(r"(\d?X{0,3}[SML]|SM|MD|LG|LA|XS|XL|XXL|XXS|\dX[SL])\b.*", up):
        return True
    return bool(re.fullmatch(r"\d{2,3}(\.\d)?( ?cm)?(\s*[/(].*)?", c))


def _transpose(m):
    width = max(len(r) for r in m)
    rows = [r + [""] * (width - len(r)) for r in m]
    return [list(col) for col in zip(*rows)]


def parse_matrix(m: list[list[str]], height_re: re.Pattern | None = None, unit: str | None = None) -> Geometry | None:
    """Devuelve la geometría si la matriz contiene filas de stack y reach con valores por talla."""
    if not m or len(m) < 2:
        return None
    # Tallas en filas y cotas en columnas (a veces con una fila de título antes, p. ej. "Road" en PDFs).
    for i in (0, 1):
        if i < len(m) and STACK_RE.search(" ".join(m[i][1:])) and REACH_RE.search(" ".join(m[i][1:])):
            m = _transpose(m[i:])
            break

    # Fila de cabecera: si empieza por "Talla/Size" es la cabecera; si no, la primera con ≥2 celdas que parecen tallas.
    header_idx, start = None, None
    if len(m[0]) > 1 and SIZE_WORD_RE.match(m[0][0].strip()) and all(c.strip() for c in m[0][1:3]):
        header_idx, start = 0, 1
    for i, row in enumerate(m[:4] if header_idx is None else []):
        idx = [j for j, c in enumerate(row) if j > 0 and _is_size_like(c)]
        if len(idx) >= 2:
            header_idx, start = i, idx[0]
            break
    if header_idx is None:
        # Sin cabecera de tallas reconocible: usar la primera fila tal cual.
        header_idx, start = 0, 1
    header = m[header_idx]
    sizes = [c.strip() for c in header[start:]]
    while sizes and not sizes[-1]:
        sizes.pop()
    if len(sizes) < 1:
        return None
    n = len(sizes)
    pre_warnings: list[str] = []

    rows: dict[str, list[str]] = {}
    for row in m[header_idx + 1 :]:
        label = " ".join(c for c in row[:start] if c).strip()
        values = (row[start : start + n] + [""] * n)[:n]
        if not any(values):
            continue
        if not label:
            # Sin etiqueta solo se conserva si todos los valores son rangos de altura en cm ("155-165 cm").
            if not all(re.search(r"\d\s*cm", v, re.I) for v in values if v.strip()):
                continue
            label = "(altura, fila sin etiqueta)"
        if label in rows:
            label = f"{label} #{sum(1 for k in rows if k.startswith(label))+1}"
        rows[label] = values

    # Columnas consecutivas con la misma talla: copias por colspan (valores iguales) o varias posiciones
    # publicadas por talla (p. ej. geometría "Alta"/"Baja"); en ese caso se usa la primera publicada.
    keep = [j for j in range(n) if not (j > 0 and sizes[j] == sizes[j - 1])]
    if any(j > 0 and sizes[j] == sizes[j - 1] and any(v[j] != v[j - 1] for v in rows.values()) for j in range(n)):
        pre_warnings.append("varias posiciones de geometría por talla: se usa la primera publicada")
    # Bloque de tallas repetido (p. ej. S M L XL S M L XL = posición alta/baja): se usa el primero.
    labels = [sizes[j] for j in keep]
    for k in range(1, len(labels) // 2 + 1):
        if labels[k:2 * k] == labels[:k] and len(labels) % k == 0 and labels == labels[:k] * (len(labels) // k):
            keep = keep[:k]
            pre_warnings.append("bloques de tallas repetidos (p. ej. posición alta/baja): se usa el primero")
            break
    if len(keep) != n:
        sizes = [sizes[j] for j in keep]
        rows = {k2: [v[j] for j in keep] for k2, v in rows.items()}
        n = len(sizes)

    def pick(rx):
        # Títulos tipo "Fit (Stack and Reach)" no son una fila de datos.
        cands = [k for k in rows if rx.search(k) and not NOT_FRAME_RE.search(k)
                 and not (STACK_RE.search(k) and REACH_RE.search(k))]
        # Preferir la fila en mm si hay varias unidades.
        cands.sort(key=lambda k: (
            0 if FRAME_RE.search(k) else 1,
            0 if "mm" in k.lower() else 1 if not re.search(r"inch|\bin\b|\"|pulg", k, re.I) else 2,
        ))
        return cands[0] if cands else None

    k_stack, k_reach = pick(STACK_RE), pick(REACH_RE)
    if not k_stack or not k_reach:
        return None

    warnings: list[str] = list(pre_warnings)

    def nums(key):
        cells = rows[key]
        # Dos posiciones publicadas (flip-chip "Hi/Lo"): se usa la primera; el texto original queda en geometry_raw.
        if any(re.fullmatch(r"\s*\d+(?:[.,]\d+)?\s*/\s*\d+(?:[.,]\d+)?\s*", v) for v in cells):
            warnings.append(f"'{key}' publica dos posiciones (p. ej. Hi/Lo): se usa la primera")
            cells = [v.split("/")[0] for v in cells]
        vals = [parse_number(v) for v in cells]
        declared_cm = bool(re.search(r"\(cm\)|\bcm\b|en cm|in cm", key, re.I)) or unit == "cm"
        if declared_cm and all(v is None or 25 <= v <= 90 for v in vals):
            warnings.append(f"'{key}' publicado en cm: convertido a mm (×10)")
            return [v * 10 if v is not None else None for v in vals]
        if any(v is not None and v < 100 for v in vals):  # en cm o pulgadas sin declarar: no se usa como mm
            warnings.append(f"'{key}' no parece estar en mm")
            return [None] * n
        return vals

    stack, reach = nums(k_stack), nums(k_reach)

    heights = None
    hre = height_re or HEIGHT_RE
    k_h = next((k for k in rows if hre.search(k) and not NOT_HEIGHT_RE.search(k)), None)
    if not k_h:
        # Fila sin etiqueta cuyos valores son todos rangos de altura plausibles ("155-165 cm").
        for k, vals in rows.items():
            if NOT_HEIGHT_RE.search(k) or not re.search(r"cm", " ".join(vals), re.I):
                continue
            hs = [parse_height(v) for v in vals if v.strip()]
            if hs and all(h and all(x is None or 120 <= x <= 215 for x in (h.min, h.max)) for h in hs):
                k_h = k
                break
    if k_h:
        heights = [parse_height(v) for v in rows[k_h]]
        published = sum(1 for v in rows[k_h] if v.strip())
        if published != n:
            warnings.append(f"altura publicada en {published} de {n} tallas")
    return Geometry(sizes, stack, reach, heights, rows, warnings)


def best_geometry(matrices, height_re=None, unit=None) -> Geometry | None:
    """La tabla con más tallas que tenga stack y reach numéricos."""
    best = None
    for m in matrices:
        g = parse_matrix(m, height_re, unit)
        if g and any(v is not None for v in g.stack) and (best is None or len(g.sizes) > len(best.sizes)):
            best = g
    return best


def size_parts(label: str) -> tuple[str | None, float | None]:
    """Letra estándar y talla en cm cuando la propia etiqueta publica ambas ("M (54)", "54 / M", "XS 470")."""
    up = label.upper().replace(" ", "")
    letter = None
    m = re.search(r"(?<![A-Z])(XXXS|3XS|XXS|2XS|XS|S/M|M/L|XXL|2XL|3XL|XXXL|XL|S|M|L)(?![A-Z])", up)
    if m:
        letter = m.group(1)
    num = None
    n = re.search(r"\d+(?:[.,]\d)?", label)
    if n:
        v = float(n.group(0).replace(",", "."))
        if 40 <= v <= 66:
            num = v
        elif 400 <= v <= 660:
            num = v / 10  # mm → cm (conversión exacta)
    return letter, num


def heights_from_text(html: str, sizes: list[str], require_cm: bool = True) -> list[Height | None] | None:
    """Guía de tallas maquetada sin <table>: cada talla seguida de su rango en cm, en orden.

    Solo se acepta si aparecen TODAS las tallas de la geometría, en orden y con rangos crecientes.
    """
    text = re.sub(r"<script.*?</script>|<style.*?</style>", " ", html, flags=re.S | re.I)
    text = htmlunescape(re.sub(r"<[^>]+>", " | ", text)).replace("\xa0", " ")
    text = re.sub(r"(\s*\|\s*)+", " | ", text)
    rng = r"((?:[<>≤≥]\s*)?1\d{2}\s*cm(?:\s*\|?\s*[^|]{0,12}\|?\s*)?(?:\s*[-–]\s*(?:\|\s*)*1\d{2}\s*cm)?|1\d{2}\s*[-–]\s*1\d{2}\s*cm|1\d{2}\s*cm\s*\+)"
    if not require_cm:  # guías que publican "165 - 172", "< 165", "188 <" sin unidad (en cm)
        rng = r"((?:[<>≤≥]\s*)?1\d{2}(?:\s*[-–]\s*1\d{2})?(?:\s*[<>+])?)"
    for start in [m.start() for m in re.finditer(rf"\|\s*{re.escape(sizes[0])}\s*\|", text)]:
        pos, out = start, []
        for size in sizes:
            m = re.compile(rf"\|\s*{re.escape(size)}\s*\|(.{{0,160}}?){rng}", re.S).search(text, pos)
            if not m or m.start() - pos > 400:
                break
            raw = re.sub(r"\s*\|\s*", " ", m.group(2))
            raw = re.sub(r"\d'\d+\"?", "", raw).strip()
            out.append(parse_height(raw))
            pos = m.end()
        if len(out) == len(sizes) and all(out):
            # Rangos no decrecientes ("< 165" seguido de "165 - 172" es válido) y no todos iguales.
            mins = [h.min or h.max for h in out]
            if all(a <= b for a, b in zip(mins, mins[1:])) and len(set(mins)) > 1:
                return out
    return None



def heights_from_tables(matrices, sizes: list[str]) -> list[Height | None] | None:
    """Tabla de tallas aparte de la geometría (talla en la 1.ª columna, una columna de altura del ciclista).

    Solo se acepta si la columna de tallas coincide exactamente con las tallas de la geometría.
    """
    for m in matrices:
        if len(m) < 2:
            continue
        def bare(s: str) -> str:
            return re.sub(r"\s*\(.*\)\s*$", "", s).strip()

        col0 = [bare(r[0]) for r in m[1:] if r]
        if col0 != [bare(s) for s in sizes]:
            continue
        for j, head in enumerate(m[0]):
            if j == 0 or NOT_HEIGHT_RE.search(head):
                continue
            if HEIGHT_RE.search(head) or re.match(r"\s*(altura|height|estatura|körpergröße|taille)\b", head, re.I):
                hs = [parse_height(r[j]) if j < len(r) else None for r in m[1:]]
                if all(hs) and all(120 <= x <= 215 for h in hs for x in (h.min, h.max) if x is not None):
                    return hs
    return None


_RANK = {k: i for i, ks in enumerate(
    [["XXXS", "3XS"], ["XXS", "2XS"], ["XS"], ["S"], ["S/M"], ["M"], ["M/L"], ["L"], ["XL"], ["XXL", "2XL"], ["XXXL", "3XL"]]
) for k in ks}


def order_sizes(g: Geometry) -> Geometry:
    """Ordena las columnas de menor a mayor cuando todas las tallas son letras estándar o todas numéricas.

    Algunas marcas publican la tabla desordenada (p. ej. M, L, XS, S, XL); si no se puede ordenar con
    seguridad, se deja el orden publicado.
    """
    labels = [re.sub(r"\s+", "", s.upper()) for s in g.sizes]
    if all(lbl in _RANK for lbl in labels):
        keys = [_RANK[lbl] for lbl in labels]
    elif all(re.fullmatch(r"\d{2,3}(\.\d)?", lbl) for lbl in labels):
        keys = [float(lbl) for lbl in labels]
    else:
        return g
    idx = sorted(range(len(keys)), key=lambda i: keys[i])
    if idx == list(range(len(keys))):
        return g

    def pick(seq):
        return [seq[i] for i in idx] if seq is not None else None

    return Geometry(
        sizes=pick(g.sizes), stack=pick(g.stack), reach=pick(g.reach), heights=pick(g.heights),
        rows={k: pick(v) for k, v in g.rows.items()}, warnings=g.warnings + ["columnas de talla reordenadas"],
    )


def heights_from_dl(html: str, sizes: list[str]) -> list[Height | None] | None:
    """Guía de tallas en <dl><dt class="name">S</dt><dd class="graph">… 157 cm … 169 cm …</dd></dl> (Giant).

    Solo se acepta si aparecen TODAS las tallas de la geometría, cada una con dos valores en cm.
    """
    found = re.findall(
        r"<dt[^>]*class=[\"']?name[\"']?[^>]*>\s*([^<]+?)\s*</dt>\s*<dd[^>]*class=[\"']?graph[\"']?[^>]*>(.*?)</dd>",
        html, re.S,
    )
    by_size = {}
    for label, body in found:
        nums = re.findall(r"(\d{3})\s*cm", re.sub(r"<[^>]+>", " ", body))
        if len(nums) == 2:
            by_size[label.strip()] = parse_height(f"{nums[0]}-{nums[1]} cm")
    out = [by_size.get(sz) for sz in sizes]
    return out if all(out) else None


def apply_row_alias(matrices, alias: dict[str, str]):
    """Renombra etiquetas de fila/cabecera según la marca (equivalencias publicadas por ella, ver config)."""
    norm = {k.strip().lower(): v for k, v in alias.items()}
    out = []
    for m in matrices:
        m = [list(r) for r in m]
        for r in m:
            for j in (0, 1):
                if j < len(r) and r[j].strip().lower() in norm:
                    r[j] = norm[r[j].strip().lower()]
        if m:
            m[0] = [norm.get(c.strip().lower(), c) for c in m[0]]
        out.append(m)
    return out
