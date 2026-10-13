"""Rangos de altura de Cube a partir de su calculador oficial (bikesizing.cube.eu), autorizado por el usuario.

El calculador recomienda talla solo en función de la altura (la entrepierna no cambia el resultado, comprobado),
pero rechaza entrepiernas incoherentes con la altura; por eso se envía una entrepierna proporcional (46 % de la
altura) que solo sirve para pasar esa validación. Para cada familia de geometría se consulta un modelo
representativo con alturas de 140 a 210 cm y se guarda, por talla, la altura mínima y máxima en la que el
calculador la recomienda (sola o "X o Y"). Alturas sin recomendación quedan en "raw" con el mensaje mostrado.

Uso (con una ventana de Chrome del usuario abierta con --remote-debugging-port=9333):
    python -m extractor.cube_sizing
Salida: data/heights/cube.json  {familia: {"product_id", "sizes": {talla: [min, max]}, "raw": {altura: texto}}}
"""
from __future__ import annotations

import csv
import json
import re
import time

from playwright.sync_api import sync_playwright

from .pipeline import ROOT

CDP = "http://127.0.0.1:9333"
OUT = ROOT / "data" / "heights" / "cube.json"
HEIGHTS = range(140, 211)
LEG_RATIO = 0.46


def ask(page, height: int) -> str:
    """Rellena el formulario como una persona y devuelve la recomendación (o el aviso que muestre)."""
    page.fill("input[name=heightMeasurement]", str(height))
    page.fill("input[name=legMeasurement]", str(round(height * LEG_RATIO)))
    try:
        with page.expect_response(lambda r: "getSizeRecommendation" in r.url, timeout=8000):
            page.get_by_text("CALCULAR TAMAÑO DE CUADRO").first.click()
    except Exception:  # sin petición: el formulario mostró un aviso de validación
        pass
    time.sleep(0.4)
    txt = page.inner_text("body")
    m = re.search(r"Su tamaño\s*(.+?)\n\s*\n", txt, re.S)
    if m:
        return re.sub(r"\s+", " ", m.group(1)).strip()
    warn = re.search(r"(La [^\n]*fuera[^\n]*)", txt)
    return "AVISO: " + warn.group(1)[:120] if warn else ""


def main():
    rows = list(csv.DictReader(open(ROOT / "data" / "staging" / "cube.csv", encoding="utf-8")))
    reps: dict[str, str] = {}
    for r in rows:
        fam = re.search(r"\[([0-9a-f]{8})\]$", r["family"]).group(1)
        pid = re.search(r"/(\d+)/?$", r["product_url"])
        if pid and fam not in reps:
            reps[fam] = pid.group(1)
    result = json.loads(OUT.read_text(encoding="utf-8")) if OUT.exists() else {}
    OUT.parent.mkdir(parents=True, exist_ok=True)
    with sync_playwright() as pw:
        page = pw.chromium.connect_over_cdp(CDP).contexts[0].new_page()
        try:
            for i, (fam, pid) in enumerate(reps.items()):
                if fam in result:
                    continue
                page.goto(f"https://bikesizing.cube.eu/iframe/{pid}?language=es&viewMode=cube", wait_until="domcontentloaded")
                page.wait_for_selector("input[name=heightMeasurement]", timeout=30000)
                time.sleep(1.5)
                raw, sizes = {}, {}
                for h in HEIGHTS:
                    txt = ask(page, h)
                    raw[h] = txt
                    if not txt or txt.startswith("AVISO"):
                        continue
                    for size in [s.strip() for s in txt.split(" o ") if s.strip()]:
                        lo, hi = sizes.get(size, [h, h])
                        sizes[size] = [min(lo, h), max(hi, h)]
                result[fam] = {"product_id": pid, "leg_ratio": LEG_RATIO, "sizes": sizes, "raw": raw}
                OUT.write_text(json.dumps(result, indent=1, ensure_ascii=False), encoding="utf-8")
                print(f"{i + 1}/{len(reps)} familia {fam} (producto {pid}): {sizes}", flush=True)
        finally:
            page.close()


if __name__ == "__main__":
    main()
