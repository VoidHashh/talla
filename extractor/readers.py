"""Lectores deterministas: tablas HTML, JSON-LD, JSON embebido y PDF. Devuelven matrices de texto."""
from __future__ import annotations

import html as htmllib
import json
import re
from html.parser import HTMLParser
from pathlib import Path

Matrix = list[list[str]]


class _TableParser(HTMLParser):
    """Extrae todas las <table> (incluidas anidadas) como matrices de texto, expandiendo colspan."""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.tables: list[Matrix] = []
        self._stack: list[dict] = []  # tablas abiertas
        self._skip = 0  # dentro de <script>/<style>

    def handle_starttag(self, tag, attrs):
        if tag in ("script", "style"):
            self._skip += 1
        elif tag == "table":
            self._stack.append({"rows": [], "row": None, "cell": None})
        elif self._stack:
            t = self._stack[-1]
            if tag == "tr":
                t["row"] = []
                t["comment"] = None
            elif tag in ("td", "th") and t["row"] is not None:
                if t["cell"] is not None:  # HTML malformado: <td>a<td>b sin cerrar
                    self._close_cell(t)
                span = dict(attrs).get("colspan") or "1"
                t["cell"] = {"text": [], "span": int(span) if span.isdigit() else 1}
            elif tag == "br" and t["cell"] is not None:
                t["cell"]["text"].append(" ")
            elif tag == "sup" and t["cell"] is not None:
                t["cell"]["text"].append("")

    def handle_endtag(self, tag):
        if tag in ("script", "style"):
            self._skip = max(0, self._skip - 1)
        elif tag == "table" and self._stack:
            t = self._stack.pop()
            self._close_row(t)
            if t["rows"]:
                self.tables.append(t["rows"])
        elif self._stack:
            t = self._stack[-1]
            if tag in ("td", "th"):
                self._close_cell(t)
            elif tag == "tr":
                self._close_row(t)

    def _close_cell(self, t):
        if t["cell"] is not None and t["row"] is not None:
            text = re.sub(r"\s+", " ", "".join(t["cell"]["text"])).strip()
            t["row"].extend([text] * t["cell"]["span"])
        t["cell"] = None

    def _close_row(self, t):
        self._close_cell(t)
        # Etiqueta de fila escrita como comentario HTML (<tr><!--Reach--><td>11</td>…): se antepone a la 1.ª celda.
        if t["row"] and t.get("comment") and (not t["row"][0] or t["row"][0].isdigit()):
            t["row"][0] = f"{t['row'][0]} {t['comment']}".strip()
        if t["row"]:
            t["rows"].append(t["row"])
        t["row"] = None
        t["comment"] = None

    def handle_comment(self, data):
        if self._stack:
            t = self._stack[-1]
            if t["row"] is not None and t["cell"] is None and not t["row"]:
                t["comment"] = re.sub(r"\s+", " ", data).strip()

    def handle_data(self, data):
        if not self._skip and self._stack and self._stack[-1]["cell"] is not None:
            self._stack[-1]["cell"]["text"].append(data)


def html_tables(html: str) -> list[Matrix]:
    p = _TableParser()
    p.feed(html)
    return p.tables


def json_ld(html: str) -> list[dict]:
    out = []
    for m in re.finditer(r'<script[^>]+application/ld\+json[^>]*>(.*?)</script>', html, re.S | re.I):
        try:
            data = json.loads(m.group(1).strip())
        except json.JSONDecodeError:
            continue
        items = data if isinstance(data, list) else data.get("@graph", [data]) if isinstance(data, dict) else []
        out.extend(i for i in items if isinstance(i, dict))
    return out


def meta_content(html: str, prop: str) -> str | None:
    m = re.search(rf'<meta[^>]+(?:property|name)=["\']{re.escape(prop)}["\'][^>]+content=["\']([^"\']*)', html, re.I)
    if not m:
        m = re.search(rf'<meta[^>]+content=["\']([^"\']*)["\'][^>]+(?:property|name)=["\']{re.escape(prop)}["\']', html, re.I)
    return htmllib.unescape(m.group(1)).strip() if m else None


def h1_text(html: str) -> str | None:
    m = re.search(r"<h1[^>]*>(.*?)</h1>", html, re.S | re.I)
    return htmllib.unescape(re.sub(r"<[^>]+>|\s+", " ", m.group(1))).strip() if m else None


def embedded_json(html: str) -> list:
    """JSON incrustado habitual: __NEXT_DATA__, application/json y window.X = {...}."""
    out = []
    for m in re.finditer(r'<script[^>]+type=["\']application/json["\'][^>]*>(.*?)</script>', html, re.S | re.I):
        try:
            out.append(json.loads(m.group(1)))
        except json.JSONDecodeError:
            pass
    for m in re.finditer(r"window\.(?:__remixContext|__INITIAL_STATE__|__PRELOADED_STATE__)\s*=\s*(\{.*?\});?\s*</script>", html, re.S):
        try:
            out.append(json.loads(m.group(1)))
        except json.JSONDecodeError:
            pass
    return out


def json_tables(data) -> list[Matrix]:
    """Busca en un JSON estructuras de tabla con 'stack' y 'reach' y las devuelve como matrices."""
    found: list[Matrix] = []

    def walk(node):
        if isinstance(node, dict):
            # Forma {header: [...], body: [[...], ...]} o {rows: [{label, values}]}
            header, body = node.get("header"), node.get("body")
            if isinstance(header, list) and isinstance(body, list):
                m = [[_cell(c) for c in header]] + [[_cell(c) for c in r] for r in body if isinstance(r, list)]
                if _has_geo(m):
                    found.append(m)
            # Forma {head|headData: [cotas…], info: {opción: {talla: [valores…]}}} (p. ej. Orbea MTB).
            # Con varias opciones (flip-chip) se usa la primera publicada.
            info, labels = node.get("info"), node.get("headData")
            if isinstance(info, dict) and info and isinstance(labels, list):
                first = next(iter(info.values()))
                if isinstance(first, dict) and first and all(isinstance(v, list) for v in first.values()):
                    sizes = list(first.keys())
                    m = [[""] + sizes] + [[_cell(lbl)] + [_cell(first[s][i]) if i < len(first[s]) else "" for s in sizes]
                                          for i, lbl in enumerate(labels)]
                    if _has_geo(m):
                        found.append(m)
            rows = node.get("rows")
            heads = node.get("headers") or node.get("header")
            if isinstance(heads, list) and isinstance(rows, list) and rows and all(isinstance(r, list) for r in rows):
                # Forma {headers: [...], rows: [[...], ...]} (p. ej. Remix/Contentful)
                m = [[_cell(c) for c in heads]] + [[_cell(c) for c in r] for r in rows]
                if _has_geo(m):
                    found.append(m)
            if isinstance(rows, list) and rows and all(isinstance(r, dict) for r in rows):
                m = _rows_of_dicts(rows, node)
                if m and _has_geo(m):
                    found.append(m)
            for v in node.values():
                walk(v)
        elif isinstance(node, list):
            for v in node:
                walk(v)
        elif isinstance(node, str) and ("stack" in node.lower() or "Stack" in node) and node.strip()[:1] in "[{":
            try:
                walk(json.loads(node))
            except json.JSONDecodeError:
                pass

    walk(data)
    return found


def _cell(c) -> str:
    if isinstance(c, dict):
        for k in ("c", "value", "text", "label", "name"):
            if k in c:
                return str(c[k])
        return ""
    return "" if c is None else str(c)


def _rows_of_dicts(rows: list[dict], parent: dict) -> Matrix | None:
    label_key = next((k for k in ("label", "name", "title", "measure") if k in rows[0]), None)
    values_key = next((k for k in ("values", "sizes", "cells", "data") if k in rows[0]), None)
    if not label_key or not values_key:
        return None
    sizes = parent.get("sizes") or parent.get("columns") or parent.get("header")
    m = []
    if isinstance(sizes, list):
        m.append([""] + [_cell(s) for s in sizes])
    for r in rows:
        vals = r.get(values_key)
        if isinstance(vals, dict):
            if not m:
                m.append([""] + list(vals.keys()))
            vals = list(vals.values())
        if isinstance(vals, list):
            m.append([_cell(r.get(label_key))] + [_cell(v) for v in vals])
    return m


def _has_geo(m: Matrix) -> bool:
    text = " ".join(" ".join(r) for r in m).lower()
    return "stack" in text and "reach" in text


def pdf_tables(path: Path) -> list[Matrix]:
    import pdfplumber

    out: list[Matrix] = []
    with pdfplumber.open(path) as pdf:
        for page in pdf.pages:
            for t in page.extract_tables():
                out.append([[re.sub(r"\s+", " ", c or "").strip() for c in row] for row in t])
    return out


def attr_tables(html: str, size_attr: str) -> list[Matrix]:
    """Tablas maquetadas con <div>: una celda de etiqueta seguida de celdas con atributo de talla.

    Ejemplo: <div class="cell label"><b>J</b><div>Stack</div><div>cm</div></div><div data-geometry-size="XS">54.0</div>…
    La etiqueta es todo el texto entre el inicio de la celda "label" y la siguiente celda con talla.
    """
    def text(s: str) -> str:
        return htmllib.unescape(re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", s))).strip()

    labels = [(m.start(), m.end()) for m in re.finditer(r'<\w+[^>]*class="[^"]*\blabel\b[^"]*"[^>]*>', html, re.I)]
    cells = [(m.start(), m.group(2).strip(), text(m.group(3)))
             for m in re.finditer(rf'<(\w+)[^>]*\b{re.escape(size_attr)}="([^"]*)"[^>]*>(.*?)</\1>', html, re.S | re.I)]
    events = sorted([(a, "L", b) for a, b in labels] + [(a, "C", (sz, v)) for a, sz, v in cells], key=lambda e: e[0])
    rows: list[tuple[str, list[tuple[str, str]]]] = []
    for i, (pos, kind, data) in enumerate(events):
        if kind == "L":
            nxt = events[i + 1][0] if i + 1 < len(events) else len(html)
            rows.append((text(html[data:nxt]), []))
        elif rows:
            rows[-1][1].append(data)
    rows = [(lbl, cs) for lbl, cs in rows if cs and any(re.search(r"\d", v) for _, v in cs)]
    if not rows:
        return []
    sizes: list[str] = []
    for _, cs in rows:
        for sz, _v in cs:
            if sz not in sizes:
                sizes.append(sz)
    matrix = [[""] + sizes]
    for lbl, cs in rows:
        d = dict(cs)
        matrix.append([lbl] + [d.get(sz, "") for sz in sizes])
    return [matrix]


def tab_tables(html: str, id_re: str) -> list[Matrix]:
    r"""Geometría con una pestaña por talla: <a href="#ID">S</a> … <div id="ID"> con pares <th>cota</th><td>valor</td>.

    id_re: regex del id de las pestañas (p. ej. 'geometry-\d+'). La etiqueta de talla es el texto de la pestaña,
    más el valor de la fila "Size" del panel si existe (p. ej. "M (55)").
    """
    def text(s: str) -> str:
        return re.sub(r"\s+", " ", htmllib.unescape(re.sub(r"<[^>]+>", " ", s))).strip()

    tabs = re.findall(rf'<a[^>]+href="#({id_re})"[^>]*>(.*?)</a>', html, re.S)
    if len(tabs) < 2:
        return []
    labels, cols = [], []
    for pid, lab in tabs:
        start = re.search(rf'<div[^>]+id="{re.escape(pid)}"[^>]*>', html)
        if not start:
            return []
        nxt = re.search(rf'<div[^>]+id="(?:{id_re})"', html[start.end():])
        pane = html[start.end(): start.end() + nxt.start()] if nxt else html[start.end(): start.end() + 60_000]
        kv = {}
        for th, td in re.findall(r"<th[^>]*>(.*?)</th>\s*<td[^>]*>(.*?)</td>", pane, re.S):
            kv.setdefault(text(th), text(td))
        size = text(lab).split(" ")[0]
        labels.append(f"{size} ({kv['Size']})" if kv.get("Size") else size)
        cols.append(kv)
    keys = [k for k in cols[0] if k != "Size"]
    return [[[""] + labels] + [[k] + [c.get(k, "") for c in cols] for k in keys]]


def json_after_key(html: str, key: str) -> list:
    """Objetos JSON que siguen a "key": en la página, aunque estén escapados dentro de un atributo."""
    flat = html.replace(r"\u0022", '"').replace("&quot;", '"')
    flat = re.sub(r"\\+/", "/", flat)
    dec = json.JSONDecoder()
    out = []
    for m in re.finditer(rf'"{re.escape(key)}"\s*:\s*', flat):
        try:
            obj, _ = dec.raw_decode(flat, m.end())
        except json.JSONDecodeError:
            continue
        out.append(obj)
    return out


def collapse_unit_columns(m: Matrix) -> Matrix:
    """Tablas que repiten cada valor (mm, mm, in) con cabecera desalineada: una columna por talla en mm/°.

    Solo se transforma una fila si, quitando lo que no está en mm o grados, quedan exactamente n valores
    o 2n valores en parejas idénticas (n = nº de tallas de la cabecera). Si no, la fila se deja como estaba.
    """
    if not m:
        return m
    sizes = [c for c in m[0] if c.strip()]
    n = len(sizes)
    out = [[""] + sizes]
    for row in m[1:]:
        label = " ".join(c for c in row if c and not re.search(r"\d", c)).strip() or (row[0] if row else "")
        vals = [c for c in row if re.search(r"\d\s*(mm|°)\s*$", c)]
        if len(vals) == 2 * n and all(vals[i] == vals[i + 1] for i in range(0, 2 * n, 2)):
            vals = vals[0::2]
        if len(vals) == n:
            out.append([label] + vals)
    return out


def span_tables(html: str, header: str, label: str, value: str, start: str = "", end: str = "") -> list[Matrix]:
    """Tablas hechas con <span class=…>: cabecera de tallas, etiqueta de fila y valores (clases como regex).

    start/end: regex que delimitan el bloque de la tabla dentro de la página (opcional).
    """
    if start:
        m = re.search(start, html)
        if not m:
            return []
        html = html[m.start():]
    if end:
        m = re.search(end, html)
        if m:
            html = html[: m.start()]

    def text(s: str) -> str:
        return htmllib.unescape(re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", s))).replace("\xa0", " ").strip()

    sizes: list[str] = []
    rows: list[list[str]] = []
    for m in re.finditer(r'<span[^>]*class="([^"]*)"[^>]*>(.*?)</span>', html, re.S):
        cls, content = m.group(1), text(m.group(2))
        if re.fullmatch(header, cls):
            if not rows and content:
                sizes.append(content)
        elif re.fullmatch(label, cls):
            rows.append([content])
        elif re.fullmatch(value, cls) and rows:
            rows[-1].append(content)
    if not sizes or not rows:
        return []
    return [[[""] + sizes] + [r for r in rows if len(r) > 1]]


def titled_tables(html: str) -> list[tuple[str, Matrix]]:
    """Cada <table> con el último encabezado o texto destacado que la precede (nombre de familia en guías)."""
    out = []
    pos = 0
    for m in re.finditer(r"<table\b.*?</table>", html, re.S | re.I):
        before = html[pos:m.start()]
        heads = re.findall(r"<(h[1-6]|strong|b|p|span|div)[^>]*>([^<]{2,60})</\1>", before[-4000:], re.I)
        title = htmllib.unescape(heads[-1][1]).strip() if heads else ""
        tables = html_tables(m.group(0))
        if tables:
            out.append((title, tables[0]))
        pos = m.end()
    return out
