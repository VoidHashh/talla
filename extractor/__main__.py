"""Uso:
  python -m extractor run canyon specialized   # marcas concretas (claves de brands.toml)
  python -m extractor run --all                # todas
  python -m extractor report                   # regenera reports/diff.md
  python -m extractor inspect canyon           # resumen legible del staging de una marca
Opciones de run: --limit N (máx. productos por marca), --refresh (ignora el caché de descargas).
"""
from __future__ import annotations

import argparse
import csv
import json
import sys
import time

from . import report
from .pipeline import ROOT, load_config, run_brand, write_outputs


def main(argv=None):
    sys.stdout.reconfigure(encoding="utf-8", line_buffering=True)
    ap = argparse.ArgumentParser(prog="extractor")
    sub = ap.add_subparsers(dest="cmd", required=True)
    run = sub.add_parser("run")
    run.add_argument("brands", nargs="*")
    run.add_argument("--all", action="store_true")
    run.add_argument("--limit", type=int)
    run.add_argument("--refresh", action="store_true")
    sub.add_parser("report")
    ins = sub.add_parser("inspect")
    ins.add_argument("brands", nargs="+")
    args = ap.parse_args(argv)
    if args.cmd == "inspect":
        for k in args.brands:
            inspect(k)
        return

    brands, validation = load_config()
    by_name = {v["name"]: k for k, v in brands.items()}
    with open(ROOT / "data" / "brands.csv", encoding="utf-8", newline="") as f:
        order = [(by_name.get(r["brand"]), r["brand"]) for r in csv.DictReader(f)]
    if args.cmd == "run":
        keys = list(brands) if args.all else args.brands
        unknown = [k for k in keys if k not in brands]
        if unknown:
            ap.error(f"marcas desconocidas: {unknown}. Disponibles: {list(brands)}")
        for k in keys:
            t0 = time.time()
            print(f"\n=== {brands[k]['name']} ===")
            res = run_brand(k, brands[k], validation, limit=args.limit, refresh=args.refresh)
            s = write_outputs(k, res)
            print(f"  → {report.status(s)}: {s['models']} modelos, {s['rows']} tallas, {s['families']} familias"
                  f"{' — ' + s['blocked_reason'] if s['blocked_reason'] else ''} ({time.time() - t0:.0f} s)")
    path = report.build(order)
    print(f"\nInforme: {path}")


def inspect(key: str):
    rows = list(csv.DictReader(open(ROOT / "data" / "staging" / f"{key}.csv", encoding="utf-8")))
    s = json.loads((ROOT / "data" / "staging" / f"{key}.summary.json").read_text(encoding="utf-8"))
    print(f"### {key}: {s['models']} modelos, {s['rows']} tallas, {s['families']} familias | candidatos {s['discovered']} | "
          f"fallos {len(s['failures'])} | rechazadas {len(s['rejected'])} | descartes {s['skipped']} | bloqueo: {s['blocked_reason']}")
    for f in s["failures"][:5]:
        print("  FALLO", f["url"], "—", f["reason"])
    for r in s["rejected"][:5]:
        print("  RECHAZO", r)
    for w in s["warnings"][:5]:
        print("  AVISO", w)
    seen = set()
    for r in rows:
        if r["model"] in seen:
            continue
        seen.add(r["model"])
        ms = [x for x in rows if x["model"] == r["model"]]
        h = [f"{x['height_min'] or '≤'}-{x['height_max'] or '∞'}" for x in ms] if ms[0]["height_original"] else "sin altura"
        print(f"  {r['model'][:45]:45} {r['category']:9} año={r['model_year'] or '-':4} €={r['price_eur'] or '-'}"
              f"{'+' if r['price_is_from'] == 'true' else ''} [{r['extraction_method']}]")
        print(f"      tallas={[x['size_label'] for x in ms]} stack={[x['stack'] for x in ms]} reach={[x['reach'] for x in ms]} altura={h}")


if __name__ == "__main__":
    main()
