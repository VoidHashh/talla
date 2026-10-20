# CLAUDE.md — App Talla Bici

## Qué es
App web que recomienda talla de bicicleta de carretera, gravel, MTB o e-MTB a partir de las medidas del usuario.
- **Gratis:** talla recomendada (letra + cm, p. ej. "M · 54/55").
- **Premium:** top 5 de bicis concretas (marca, modelo, talla, precio, enlace) de la base de datos.

## Stack (no cambiar sin preguntar)
- Vite + React + TypeScript + Tailwind.
- Primeras pruebas en modo web: PWA desactivada (`disable: true` en vite.config.ts). La versión de móvil instalable se hace cuando todo funcione.
- Sin backend en el MVP. Datos en `data/bikes.csv`, que se compila con `npm run build:data` a `public/data/bikes.json` (la app lo descarga al abrirse), `src/data/size-table.json` y `src/data/catalog-stats.json`.
- `data/bikes.csv` solo se rellena desde staging con `npm run promote -- <marcas>` (marcas aprobadas por el usuario; sin argumentos, informe sin escribir).
- Tests con Vitest para la lógica de cálculo.
- UI en español de España.
- Carga de datos: extractor en Python (`extractor/`, venv en `.venv`; dependencias autorizadas: httpx, playwright, pdfplumber). Escribe `data/staging/<marca>.csv` y `reports/diff.md`; nunca toca `bikes.csv`.

## Reglas de datos (críticas)
1. **Nunca inventar datos.** Ni geometrías, ni rangos de altura, ni precios, ni modelos. Si falta un dato, el campo queda vacío.
2. Cada fila lleva `source_url` (página oficial de la marca de donde sale el dato), `extraction_method` (html/json/pdf/vision) y `loaded_at`.
3. **Geometría por talla obligatoria** (stack, reach y el resto de cotas publicadas). Una marca sin geometría publicada queda como bloqueada en el informe, nunca descartada en silencio.
3b. **Rango de altura opcional**: solo si la marca lo publica en su guía de tallas. No se deriva (las calculadoras no se usan). Extremos abiertos se guardan como intervalo abierto (`height_min` o `height_max` vacío). Pies/pulgadas se convierten a cm guardando el valor y la unidad originales.
3c. Equivalencias de talla solo las que publique la marca, en `data/size-labels.csv`. Familia = misma tabla de geometría del cuadro. Precio oficial en EUR (`price_is_from` para "desde"); USD/CHF vacíos. Solo el año de modelo vigente.
4. La tabla de talla de la parte gratis **se genera desde la BBDD** (mediana de los rangos de las marcas por talla y categoría, solo tallas con al menos 3 marcas). No se escribe a mano.
5. Solo carretera, gravel, MTB y e-MTB (categorías `carretera`, `gravel`, `mtb`, `emtb`). Sin urbanas ni otras eléctricas.
6. Solo las marcas de `data/brands.csv`. No añadir marcas sin que yo lo pida.

## Lógica (mantenerla simple)
- **Entrada:** altura (cm), entrepierna (cm), categoría (carretera / gravel / MTB / e-MTB) y presupuesto máximo opcional.
- **Gratis:** una sola talla estándar (solo tallas publicadas por al menos 3 marcas). Entre las que contienen la altura, la de centro más cercano; en un hueco, la más cercana. Nunca "te valen las dos".
- **Premium** (decidido con el usuario):
  1. Filtrar por categoría, presupuesto, precio y enlace. Si la marca publica rango de altura para esa talla, debe admitir la altura del usuario (un extremo vacío = sin límite por ese lado).
  2. Geometría de referencia: mediana de stack y de reach de las tallas cuyo rango publicado admite la altura (mediana por marca y luego entre marcas).
  3. Salto de talla de la categoría: distancia stack/reach mediana entre tallas consecutivas de un mismo cuadro.
  4. `score = 100 × (1 − distancia(stack/reach, referencia) / salto)`; score ≤ 0 queda fuera.
  5. Una bici por familia: la talla de mayor score en su montaje más barato, indicando cuántos montajes hay.
  6. Orden por score descendente; desempate por precio ascendente. Top 5.
- Nada de ángulos, calibrados ni avisos técnicos en la UI, salvo lo que el usuario ha pedido: cada bici del top 5 muestra su stack y reach y de dónde sale su talla (rango de la guía de la marca o "por geometría").
- **Bike fit premium** (decidido con el usuario; `src/lib/fit.ts`): solo fórmulas publicadas y siempre con su fuente en la UI. Medidas opcionales: esternón (torso = esternón − entrepierna), brazo y hombros.
  - Altura de sillín = entrepierna × 0,883 (LeMond/Guimard), todas las categorías.
  - Carretera/gravel: alcance total = (torso + brazo) / 2 + 4 cm (Competitive Cyclist, orientativo); manillar ≈ ancho de hombros (orientativo); potencia por bici = alcance total − tubo horizontal efectivo publicado (solo si la marca lo publica como efectivo/horizontal/virtual).
  - No hay fórmula publicada fiable de cuerpo → stack/reach: el bike fit no cambia el orden del top 5.

## UX
- Formulario → pantalla "Calculando" de 3–4 s con 4 mensajes secuenciales (p. ej. "Analizando proporciones…", "Comparando geometrías de N bicicletas…" con N real) → resultado.
- Bloque premium bloqueado con CTA. En el MVP el desbloqueo es un flag (`PREMIUM_UNLOCKED`); el pago se integra después.

## Estilo de trabajo
- Cambios pequeños y verificables. Ejecutar tests antes de dar algo por terminado.
- No añadir dependencias sin justificarlo en una línea.
- Respuestas breves: qué se ha hecho, qué falta y qué necesitas de mí.
