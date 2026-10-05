# Prompt inicial para Claude Code

Pega esto en Claude Code dentro de una carpeta vacía que ya tenga el `CLAUDE.md`.

---

Lee CLAUDE.md y crea la base del proyecto en este orden. Para al final de cada fase y enséñame el resultado.

**Fase 1 — Esqueleto**
- Proyecto Vite + React + TS + Tailwind, configurado como PWA.
- Estructura: `data/`, `scripts/`, `src/lib/`, `src/components/`, `src/data/`.

**Fase 2 — Datos**
- `data/brands.csv` con columnas `brand,group,country,status,sizing_url,geometry_url`. Rellena solo `brand`, `group` y `status` con esta lista; las URLs las dejas vacías para que yo o un script posterior las completemos:
  Giant, Merida, Trek, Specialized, Scott, Canyon, Cube, Bianchi, Cannondale, Cervélo, Focus, Santa Cruz, Lapierre, Ghost, Haibike, Orbea, BH, Mondraker, MMR, Megamo, Berria, Massi, Conor, Coluer, Decathlon (Van Rysel/Triban), KTM, Pinarello, Colnago, Wilier, Basso, 3T, Aurum, Ridley, BMC, Factor, Look, Argon 18.
  Lapierre, Ghost y Haibike llevan `status=incierto` (grupo Accell en quiebra); el resto, `status=activo`.
- `data/bikes.csv` vacío, solo con la cabecera:
  `brand,model,year,category,size_label,size_cm,height_min,height_max,stack,reach,price_eur,product_url,source_url,verified_at`
- `scripts/validate.ts`. Debe comprobar:
  - campos obligatorios y que `source_url` no esté vacío;
  - que la marca exista en `brands.csv`;
  - que `height_min < height_max`;
  - que, dentro de un mismo modelo, stack y reach no decrezcan al subir de talla.
  
  Que liste los errores por fila y salga con código 1 si hay alguno.
- `scripts/build-data.ts`: valida y genera `src/data/bikes.json` y `src/data/size-table.json`. Esta última es la mediana de `height_min`/`height_max` por categoría y talla.

**Fase 3 — Lógica**
- `src/lib/sizing.ts` con `recommendSize()` y `rankBikes()` exactamente como dice CLAUDE.md.
- Tests en Vitest con datos de prueba **marcados como ficticios** en un fixture aparte (`tests/fixtures/`), nunca dentro de `data/`.

**Fase 4 — UI**
- Formulario (altura, entrepierna, categoría, presupuesto opcional).
- Pantalla "Calculando" (3–4 s, 4 mensajes, con el número real de bicis de la BBDD).
- Resultado gratis: talla grande y clara.
- Bloque premium bloqueado con CTA. Con `PREMIUM_UNLOCKED=true`, tarjetas del top 5: marca, modelo, talla, score, precio y botón a `product_url`.
- Mobile-first.

**Fase 5 — Carga de datos (solo plan, no ejecutar)**
Propón cómo rellenar `bikes.csv` marca a marca: qué páginas oficiales usar para la guía de tallas y la geometría, y si conviene un script por marca o carga manual asistida. No inventes ni rellenes ningún dato.
