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
            elif tag in ("td", "th") and t["row"] is not None:
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
        if t["row"]:
            t["rows"].append(t["row"])
        t["row"] = None

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
            rows = node.get("rows")
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
