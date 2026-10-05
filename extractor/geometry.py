"""Interpreta una matriz (tabla) de geometría: tallas, stack, reach, altura del ciclista y resto de cotas."""
from __future__ import annotations

import re
from dataclasses import dataclass, field

STACK_RE = re.compile(r"\bstack\b|^pila$", re.I)
REACH_RE = re.compile(r"\breach\b|^alcance$", re.I)
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
    lower_open = bool(re.search(r"[≤<]|hasta|up to|bis\b|jusqu|menos de|under|below", low))
    upper_open = bool(re.search(r"[≥>]|\+\s*$|desde|from|ab\b|à partir|más de|over|above", low))

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


def parse_matrix(m: list[list[str]], height_re: re.Pattern | None = None) -> Geometry | None:
    """Devuelve la geometría si la matriz contiene filas de stack y reach con valores por talla."""
    if not m or len(m) < 2:
        return None
    first_row = " ".join(m[0][1:])
    if STACK_RE.search(first_row) and REACH_RE.search(first_row):
        m = _transpose(m)

    # Fila de cabecera: la primera con ≥2 celdas que parecen tallas.
    header_idx, start = None, None
    for i, row in enumerate(m[:4]):
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

    rows: dict[str, list[str]] = {}
    for row in m[header_idx + 1 :]:
        label = " ".join(c for c in row[:start] if c).strip()
        values = (row[start : start + n] + [""] * n)[:n]
        if not label or not any(values):
            continue
        if label in rows:
            label = f"{label} #{sum(1 for k in rows if k.startswith(label))+1}"
        rows[label] = values

    def pick(rx):
        cands = [k for k in rows if rx.search(k) and not NOT_FRAME_RE.search(k)]
        # Preferir la fila en mm si hay varias unidades.
        cands.sort(key=lambda k: (
            0 if FRAME_RE.search(k) else 1,
            0 if "mm" in k.lower() else 1 if not re.search(r"inch|\bin\b|\"|pulg", k, re.I) else 2,
        ))
        return cands[0] if cands else None

    k_stack, k_reach = pick(STACK_RE), pick(REACH_RE)
    if not k_stack or not k_reach:
        return None

    warnings: list[str] = []

    def nums(key):
        vals = [parse_number(v) for v in rows[key]]
        if any(v is not None and v < 100 for v in vals):  # en cm o pulgadas: no se usa como mm
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


def best_geometry(matrices, height_re=None) -> Geometry | None:
    """La tabla con más tallas que tenga stack y reach numéricos."""
    best = None
    for m in matrices:
        g = parse_matrix(m, height_re)
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


def heights_from_text(html: str, sizes: list[str]) -> list[Height | None] | None:
    """Guía de tallas maquetada sin <table>: cada talla seguida de su rango en cm, en orden.

    Solo se acepta si aparecen TODAS las tallas de la geometría, en orden y con rangos crecientes.
    """
    text = re.sub(r"<script.*?</script>|<style.*?</style>", " ", html, flags=re.S | re.I)
    text = re.sub(r"<[^>]+>", " | ", text)
    text = re.sub(r"(\s*\|\s*)+", " | ", re.sub(r"&#39;|&apos;", "'", text))
    rng = r"((?:[<>≤≥]\s*)?1\d{2}\s*cm(?:\s*\|?\s*[^|]{0,12}\|?\s*)?(?:\s*[-–]\s*(?:\|\s*)*1\d{2}\s*cm)?|1\d{2}\s*[-–]\s*1\d{2}\s*cm|1\d{2}\s*cm\s*\+)"
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
            mins = [h.min or h.max for h in out]
            if all(a < b for a, b in zip(mins, mins[1:])):
                return out
    return None

