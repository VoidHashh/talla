"""reports/diff.md: estado por marca y diff de data/staging/*.csv frente a data/bikes.csv."""
from __future__ import annotations

import csv
import datetime as dt
import json
import tomllib
from collections import defaultdict
from pathlib import Path

from .pipeline import ROOT, STAGING

REPORT = ROOT / "reports" / "diff.md"


def status(s: dict) -> str:
    if s["rows"] == 0:
        return "bloqueada"
    if s["rejected"] or s["failures"] or s["warnings"]:
        return "con avisos"
    return "OK"


def _read_csv(path: Path) -> list[dict]:
    with open(path, encoding="utf-8", newline="") as f:
        return list(csv.DictReader(f))


def build(brand_order: list[tuple[str, str]]) -> Path:
    notes_path = ROOT / "extractor" / "report_notes.toml"
    notes = {k: v.get("note", "") for k, v in tomllib.loads(notes_path.read_text(encoding="utf-8")).items()} if notes_path.exists() else {}
    current = defaultdict(dict)
    for r in _read_csv(ROOT / "data" / "bikes.csv"):
        current[r["brand"]][(r["model"], r["size_label"])] = r

    lines = [
        "# Informe de carga — staging vs data/bikes.csv",
        "",
        f"Generado: {dt.datetime.now():%Y-%m-%d %H:%M}. `data/bikes.csv` no se ha modificado.",
        "",
        "| Marca | Estado | Modelos | Tallas | Familias | Con altura | Con precio € | Motivo / avisos |",
        "|---|---|---:|---:|---:|---:|---:|---|",
    ]
    sections = []
    for key, name in brand_order:
        sp = STAGING / f"{key}.summary.json"
        if key is None:
            lines.append(f"| {name} | bloqueada | 0 | 0 | 0 | 0 | 0 | {notes.get(name) or 'sin configuración de descubrimiento'} |")
            continue
        if not sp.exists():
            lines.append(f"| {name} | sin ejecutar | – | – | – | – | – | |")
            continue
        s = json.loads(sp.read_text(encoding="utf-8"))
        st = status(s)
        reason = s["blocked_reason"] or ""
        extra = []
        if s["failures"]:
            extra.append(f"{len(s['failures'])} productos sin datos")
        if s["rejected"]:
            extra.append(f"{len(s['rejected'])} tallas rechazadas")
        if s["warnings"]:
            extra.append(f"{len(s['warnings'])} avisos")
        lines.append(
            f"| {name} | {st} | {s['models']} | {s['rows']} | {s['families']} | {s['with_height']} | {s['with_price']} | "
            f"{'; '.join([reason] + extra if reason else extra)} |"
        )
        sections.append(_section(key, name, s, st, current.get(name, {}), notes.get(name, "")))

    lines += ["", "Columnas: *Tallas* = filas (modelo × talla); *Con altura* = tallas con rango de altura publicado; "
              "*Con precio €* = modelos con precio oficial en euros.", ""]
    REPORT.parent.mkdir(parents=True, exist_ok=True)
    REPORT.write_text("\n".join(lines + sections) + "\n", encoding="utf-8")
    return REPORT


def _section(key: str, name: str, s: dict, st: str, current: dict, note: str = "") -> str:
    out = ["", f"## {name} — {st}", ""]
    if note:
        out += [f"**Nota:** {note}", ""]
    if s["blocked_reason"]:
        out.append(f"**Motivo:** {s['blocked_reason']}")
        out.append("")
    staging_path = STAGING / f"{key}.csv"
    rows = _read_csv(staging_path) if staging_path.exists() else []
    new = {(r["model"], r["size_label"]): r for r in rows}
    added = [k for k in new if k not in current]
    removed = [k for k in current if k not in new]
    changed = [k for k in new if k in current and any(new[k].get(c, "") != current[k].get(c, "") for c in ("stack", "reach", "height_min", "height_max", "price_eur"))]
    out.append(f"Diff con bikes.csv: **+{len(added)}** tallas nuevas, **−{len(removed)}** que desaparecen, **~{len(changed)}** con cambios. "
               f"Productos candidatos: {s['discovered']}. Métodos: {', '.join(s['methods']) or '–'}. "
               f"Descargas: {s['fetch']}.")
    out.append("")

    fams = defaultdict(list)
    for r in rows:
        fams[r["family"]].append(r)
    if fams:
        out += ["| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |", "|---|---|---|---|---|---|---|"]
        for fam, frows in sorted(fams.items()):
            first_model = frows[0]["model"]
            sizes = [r for r in frows if r["model"] == first_model]
            models = {}
            for r in frows:
                models[r["model"]] = (r["price_eur"] + ("+" if r["price_is_from"] == "true" else "")) if r["price_eur"] else "s/p"
            heights = " · ".join(
                f"{r['height_min'] or '≤'}–{r['height_max'] or '∞'}" if r["height_original"] else "—" for r in sizes
            )
            out.append(
                f"| {fam} | {sizes[0]['category']} | {' · '.join(r['size_label'] for r in sizes)} | "
                f"{' · '.join(r['stack'] for r in sizes)} | {' · '.join(r['reach'] for r in sizes)} | {heights} | "
                f"{'; '.join(f'{m} ({p})' for m, p in sorted(models.items()))} |"
            )
        out.append("")
    if s["rejected"]:
        out.append("<details><summary>Tallas rechazadas por la validación</summary>\n")
        for r in s["rejected"][:200]:
            out.append(f"- {r['model']} {r['size']}: {r['reason']}")
        out.append("\n</details>\n")
    if s["failures"]:
        out.append("<details><summary>Productos en alcance sin datos</summary>\n")
        for f in s["failures"][:200]:
            out.append(f"- {f['url']} — {f['reason']}")
        if len(s["failures"]) > 200:
            out.append(f"- … y {len(s['failures']) - 200} más")
        out.append("\n</details>\n")
    if s["warnings"]:
        out.append("<details><summary>Avisos</summary>\n")
        for w in s["warnings"][:200]:
            out.append(f"- {w}")
        out.append("\n</details>\n")
    if s["skipped"]:
        out.append("Descartados: " + ", ".join(f"{k}: {v}" for k, v in s["skipped"].items()))
    if removed:
        out.append(f"\nDesaparecen de bikes.csv: {', '.join(f'{m} {t}' for m, t in removed[:50])}")
    return "\n".join(out)
