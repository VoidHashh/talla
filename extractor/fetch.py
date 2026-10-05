"""Descarga con httpx y, si hay bloqueo (403, verificación o página vacía), Chrome real visible vía Playwright.

Prohibido por diseño: proxies, plugins de camuflaje, rotar el User-Agent y servicios de captcha.
Si aparece una verificación en Chrome, se pausa y se avisa por consola: la resuelve una persona en la ventana.
"""
from __future__ import annotations

import hashlib
import json
import random
import re
import sys
import time
import urllib.robotparser
from dataclasses import dataclass
from pathlib import Path
from urllib.parse import urlsplit

import httpx

UA = "Mozilla/5.0 (compatible; TallaBici/0.1; +https://github.com/VoidHashh/talla)"
ROBOTS_AGENT = "TallaBici"
HTTP_DELAY_S = 1.5
BROWSER_DELAY_S = (2.0, 5.0)
CHALLENGE_WAIT_S = 15 * 60

CHALLENGE_RE = re.compile(
    r"just a moment|cf-chl|challenge-platform|captcha|access denied|attention required|"
    r"are you a robot|verify you are human|verifica que eres|px-captcha|_incapsula_|request unsuccessful",
    re.I,
)


@dataclass
class Page:
    url: str
    final_url: str
    status: int
    text: str
    method: str  # "httpx" | "browser"
    path: Path | None = None  # ficheros binarios (PDF, imagen)


class Blocked(Exception):
    """La página no se puede obtener (robots.txt, error o verificación sin resolver)."""


def looks_blocked(status: int, text: str) -> bool:
    if status in (401, 403, 429, 503):
        return True
    return len(text) < 80_000 and bool(CHALLENGE_RE.search(text[:30_000]))


def visible_text_len(html: str) -> int:
    body = re.sub(r"<script.*?</script>|<style.*?</style>|<[^>]+>", " ", html, flags=re.S | re.I)
    return len(re.sub(r"\s+", " ", body).strip())


class Fetcher:
    def __init__(self, root: Path, brand_key: str, force_browser: bool = False, refresh: bool = False, log=print):
        self.cache = root / "data" / "raw" / brand_key
        self.cache.mkdir(parents=True, exist_ok=True)
        self.profile = self.cache / ".chrome-profile"
        self.force_browser = force_browser
        self.refresh = refresh
        self.log = log
        self.client = httpx.Client(
            headers={"User-Agent": UA, "Accept-Language": "es-ES,es;q=0.9,en;q=0.8"},
            follow_redirects=True,
            timeout=45,
        )
        self._robots: dict[str, urllib.robotparser.RobotFileParser | None] = {}
        self._last_http = 0.0
        self._pw = None
        self._ctx = None
        self.stats = {"httpx": 0, "browser": 0, "cache": 0, "challenges": 0}

    # ---------- utilidades ----------
    def _key(self, url: str, kind: str) -> Path:
        return self.cache / f"{kind}-{hashlib.sha1(url.encode()).hexdigest()[:16]}"

    def allowed(self, url: str) -> bool:
        parts = urlsplit(url)
        host = f"{parts.scheme}://{parts.netloc}"
        if host not in self._robots:
            rp = urllib.robotparser.RobotFileParser()
            try:
                r = self.client.get(f"{host}/robots.txt")
                rp.parse(r.text.splitlines() if r.status_code == 200 else [])
                self._robots[host] = rp
            except httpx.HTTPError:
                self._robots[host] = None
        rp = self._robots[host]
        return True if rp is None else rp.can_fetch(ROBOTS_AGENT, url)

    def _http_wait(self):
        wait = HTTP_DELAY_S - (time.time() - self._last_http)
        if wait > 0:
            time.sleep(wait)
        self._last_http = time.time()

    # ---------- API ----------
    def get(self, url: str, render: bool = False) -> Page:
        """HTML de una página. render=True fuerza Chrome (páginas que se pintan con JS)."""
        key = self._key(url, "browser" if render else "page")
        meta_path = key.with_suffix(".json")
        if not self.refresh and meta_path.exists():
            meta = json.loads(meta_path.read_text(encoding="utf-8"))
            self.stats["cache"] += 1
            return Page(text=key.with_suffix(".html").read_text(encoding="utf-8"), **meta)

        if not self.allowed(url):
            raise Blocked(f"robots.txt no permite {url}")

        page = None
        if not (render or self.force_browser):
            page = self._get_http(url)
            if page and looks_blocked(page.status, page.text):
                self.log(f"    · httpx bloqueado ({page.status}) → Chrome: {url}")
                page = None
        if page is None:
            page = self._get_browser(url)

        key.with_suffix(".html").write_text(page.text, encoding="utf-8")
        meta = {k: v for k, v in page.__dict__.items() if k not in ("text", "path")}
        meta_path.write_text(json.dumps(meta), encoding="utf-8")
        return page

    def get_binary(self, url: str, suffix: str) -> Page:
        """Descarga un PDF o una imagen al caché y devuelve su ruta."""
        path = self._key(url, "bin").with_suffix(suffix)
        if not self.refresh and path.exists():
            self.stats["cache"] += 1
            return Page(url, url, 200, "", "cache", path)
        if not self.allowed(url):
            raise Blocked(f"robots.txt no permite {url}")
        self._http_wait()
        r = self.client.get(url)
        self.stats["httpx"] += 1
        if r.status_code != 200:
            raise Blocked(f"HTTP {r.status_code} en {url}")
        path.write_bytes(r.content)
        return Page(url, str(r.url), r.status_code, "", "httpx", path)

    def _get_http(self, url: str) -> Page | None:
        self._http_wait()
        try:
            r = self.client.get(url)
        except httpx.HTTPError as e:
            self.log(f"    · httpx error {type(e).__name__}: {url}")
            return None
        self.stats["httpx"] += 1
        if r.status_code == 404:
            raise Blocked(f"HTTP 404 en {url}")
        return Page(url, str(r.url), r.status_code, r.text, "httpx")

    # ---------- Chrome real (visible) ----------
    def _browser(self):
        if self._ctx is None:
            from playwright.sync_api import sync_playwright

            self._pw = sync_playwright().start()
            self._ctx = self._pw.chromium.launch_persistent_context(
                str(self.profile), channel="chrome", headless=False, locale="es-ES",
                viewport={"width": 1280, "height": 900},
            )
        return self._ctx

    def _get_browser(self, url: str) -> Page:
        ctx = self._browser()
        page = ctx.pages[0] if ctx.pages else ctx.new_page()
        time.sleep(random.uniform(*BROWSER_DELAY_S))
        try:
            resp = page.goto(url, wait_until="domcontentloaded", timeout=60_000)
        except Exception as e:  # noqa: BLE001 - errores de red de Playwright
            raise Blocked(f"Chrome no pudo abrir {url}: {e}") from e
        try:
            page.wait_for_load_state("networkidle", timeout=15_000)
        except Exception:  # noqa: BLE001 - networkidle no siempre llega; seguimos con lo cargado
            pass
        status = resp.status if resp else 0
        html = page.content()
        if looks_blocked(status, html):
            self.stats["challenges"] += 1
            self._wait_for_human(page, url)
            html = page.content()
            status = 200
        # Algunas tablas se pintan tarde: un pequeño margen y desplazamiento para disparar la carga diferida.
        page.mouse.wheel(0, 4000)
        time.sleep(1.0)
        html = page.content()
        self.stats["browser"] += 1
        return Page(url, page.url, status, html, "browser")

    def _wait_for_human(self, page, url: str):
        msg = (
            "\n" + "!" * 70 + f"\n  VERIFICACIÓN EN CHROME: resuélvela en la ventana abierta.\n  URL: {url}\n"
            f"  El script espera hasta {CHALLENGE_WAIT_S // 60} min y continúa solo.\n" + "!" * 70
        )
        self.log(msg)
        print("\a", end="", file=sys.stderr, flush=True)
        try:
            page.bring_to_front()
        except Exception:  # noqa: BLE001
            pass
        deadline = time.time() + CHALLENGE_WAIT_S
        while time.time() < deadline:
            time.sleep(5)
            try:
                html = page.content()
            except Exception:  # noqa: BLE001 - la página navega mientras se resuelve
                continue
            if not looks_blocked(200, html) and visible_text_len(html) > 500:
                self.log("  ✓ verificación resuelta, continúo")
                return
        raise Blocked(f"verificación sin resolver en {url}")

    def close(self):
        if self._ctx is not None:
            self._ctx.close()
            self._pw.stop()
        self.client.close()
