# CLAUDE.md — App Talla Bici

## Qué es
App web (PWA) que recomienda talla de bicicleta de carretera, gravel, MTB o e-MTB a partir de las medidas del usuario.
- **Gratis:** talla recomendada (letra + cm, p. ej. "M · 54/55").
- **Premium:** top 5 de bicis concretas (marca, modelo, talla, precio, enlace) de la base de datos.

## Stack (no cambiar sin preguntar)
- Vite + React + TypeScript + Tailwind.
- Sin backend en el MVP. Datos en `data/bikes.csv`, que se compila a `src/data/bikes.json` mediante un script.
- Tests con Vitest para la lógica de cálculo.
- UI en español de España.
- Carga de datos: extractor en Python (`extractor/`, venv en `.venv`; dependencias autorizadas: httpx, playwright, pdfplumber). Escribe `data/staging/<marca>.csv` y `reports/diff.md`; nunca toca `bikes.csv`.

## Reglas de datos (críticas)
1. **Nunca inventar datos.** Ni geometrías, ni rangos de altura, ni precios, ni modelos. Si falta un dato, el campo queda vacío.
2. Cada fila lleva `source_url` (página oficial de la marca de donde sale el dato), `extraction_method` (html/json/pdf/vision) y `loaded_at`.
3. **Geometría por talla obligatoria** (stack, reach y el resto de cotas publicadas). Una marca sin geometría publicada queda como bloqueada en el informe, nunca descartada en silencio.
3b. **Rango de altura opcional**: solo si la marca lo publica en su guía de tallas. No se deriva (las calculadoras no se usan). Extremos abiertos se guardan como intervalo abierto (`height_min` o `height_max` vacío). Pies/pulgadas se convierten a cm guardando el valor y la unidad originales.
3c. Equivalencias de talla solo las que publique la marca, en `data/size-labels.csv`. Familia = misma tabla de geometría del cuadro. Precio oficial en EUR (`price_is_from` para "desde"); USD/CHF vacíos. Solo el año de modelo vigente.
4. La tabla de talla de la parte gratis **se genera desde la BBDD** (mediana de los rangos de las marcas por talla y categoría). No se escribe a mano.
5. Solo carretera, gravel, MTB y e-MTB (categorías `carretera`, `gravel`, `mtb`, `emtb`). Sin urbanas ni otras eléctricas.
6. Solo las marcas de `data/brands.csv`. No añadir marcas sin que yo lo pida.

## Lógica (mantenerla simple)
- **Entrada:** altura (cm), entrepierna (cm), categoría (carretera / gravel / MTB / e-MTB) y presupuesto máximo opcional.
- **Gratis:** la talla cuyo rango mediano contiene la altura. Si cae en dos, se muestran las dos.
- **Premium:**
  1. Filtrar por categoría y presupuesto.
  2. Quedarse con las tallas cuyo rango [altura_min, altura_max] contiene la altura del usuario.
  3. `score = 100 × (1 − |altura − centro| / (semirango))`.
  4. Una sola talla por modelo (la de mayor score).
  5. Orden por score descendente; desempate por precio ascendente.
  6. Top 5.
  - Pendiente de definir con el usuario: el ranking premium debe usar stack y reach, una bici por familia, y tratar los extremos de altura vacíos como sin límite.
- Nada de ángulos, fórmulas de bike fit, calibrados ni avisos técnicos en la UI.

## UX
- Formulario → pantalla "Calculando" de 3–4 s con 4 mensajes secuenciales (p. ej. "Analizando proporciones…", "Comparando geometrías de N bicicletas…" con N real) → resultado.
- Bloque premium bloqueado con CTA. En el MVP el desbloqueo es un flag (`PREMIUM_UNLOCKED`); el pago se integra después.

## Estilo de trabajo
- Cambios pequeños y verificables. Ejecutar tests antes de dar algo por terminado.
- No añadir dependencias sin justificarlo en una línea.
- Respuestas breves: qué se ha hecho, qué falta y qué necesitas de mí.
