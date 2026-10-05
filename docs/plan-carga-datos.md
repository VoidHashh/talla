# Plan de carga de datos (Fase 5)

**Estado:** propuesta, sin ejecutar. No se ha cargado ningún dato en `data/bikes.csv`.
**Base:** revisión de las webs oficiales de las 37 marcas hecha el 2026-10-05. Se ha mirado solo **dónde y cómo** publica cada marca los datos, no las cifras. Lo marcado "no verificado" hay que comprobarlo antes de cargar, y todo se revalida en el momento de la carga.

## 1. Resumen

- **El cuello de botella es la regla 3**: el rango de altura de cada talla tiene que publicarlo la propia marca. De las 37 marcas, solo 9 lo publican en un formato que se puede leer y procesar automáticamente. Otras 10 lo publican en PDF o imagen, o tienen la web bloqueada o sin verificar. Otras 15 solo ofrecen una calculadora interactiva o no lo publican. De 3 marcas no hay datos todavía.
- **Precio en euros**: varias marcas venden solo a través de tiendas y no muestran precio, o lo muestran solo en USD o CHF. Esas bicis pueden alimentar la **tabla gratis**, que solo necesita los rangos de altura, pero no el **ranking premium**.
- **La geometría** (stack y reach) aparece en casi todas las marcas. No es lo que limita.
- **Propuesta: un sistema mixto.**
  - Extractores automáticos para las webs que sirven el contenido directamente, sin generarlo con JavaScript. Uno común para las 8 marcas que usan la plataforma de tiendas Shopify y uno por marca para el resto.
  - **Carga asistida** para PDF, imágenes y webs que bloquean bots: yo extraigo los datos de la fuente oficial y tú revisas los cambios antes de guardarlos.
  - **No se saltan protecciones anti-bot.**

## 2. Mapa por marca

Leyenda: ✅ publicado y verificado · 🟡 publicado pero difícil (PDF, imagen, web bloqueada) o verificado a medias · ❌ no publicado (solo calculadora o nada) · ? sin verificar.

### Nivel A — script automático: rangos, geometría y precio en € en HTML o JSON

| Marca | Altura por talla | Stack/Reach | Precio € | Formato | Notas |
|---|---|---|---|---|---|
| Giant | ✅ ficha ES | ✅ ficha | ✅ | HTML | Letras XS–XL y M/L; varios años de modelo en las URL |
| Canyon | ✅ página de geometría `/productpdf/geometry/?pid=N` | ✅ misma página | ✅ es-es | HTML | Letras de 3XS a 2XL; algún extremo abierto (≤ / ≥) |
| Megamo | ✅ ficha ES ("FIT GUIDE") | ✅ ficha | ✅ | HTML | Rangos distintos según el modelo; URL con "(26)" |
| Berria | ✅ ficha | ✅ ficha | ✅ "precio estimado" | Shopify | Tallas numéricas; extremo abierto ">192"; precio según configuración |
| Santa Cruz | ✅ ficha en-eu | ✅ ficha | ✅ en-eu | Shopify | Etiquetas XS/SM/MD/LG/XL/XXL; rangos contiguos comparten extremo |
| MMR | ✅ ficha ("Estatura") | ✅ ficha | ✅ | Shopify | ⚠️ columnas aparentemente desalineadas (4 valores para 5 tallas): revisar a mano |
| 3T | ✅ ficha ("Rider Height") | ✅ ficha | ✅ | Shopify | Dominio oficial **3t.bike** (3t.cc está en venta); sin web en español; una ficha por montaje |
| BMC | ✅ ficha ("Rider Height") | ✅ ficha | ✅ es.bmc-switzerland.com | Shopify | Tallas numéricas; extremos abiertos "<166" y ">190"; una ficha por montaje |
| Aurum | ✅ guía global `/size-guide/` | ✅ misma guía | ✅ /es/ | HTML (WordPress) | Una tabla por modelo; tallas numéricas |

### Nivel B — carga asistida: datos publicados pero difíciles de extraer

| Marca | Altura por talla | Stack/Reach | Precio € | Problema |
|---|---|---|---|---|
| Colnago | ✅ guía global por modelo `/es-es/size-guide` | ✅ ficha | ? (USD en en-us) | Se puede extraer con script; sin € verificado, de momento solo serviría para la tabla gratis |
| KTM | 🟡 **imagen** ("Your frame size by body height") | ✅ HTML | 🟡 solo PVP recomendado, no en todos | Hay que transcribir la imagen y revisarla |
| Bianchi | 🟡 PDF de guía de tallas (no abierto) | 🟡 tabla sin stack/reach visibles | ✅ | Tallas en cm |
| Pinarello | 🟡 tabla en pies/pulgadas (no verificada) | ✅ | ❌ | Habría que convertir unidades; sin precio, no entra en ranking |
| Trek | 🟡 guía de carretera y MTB (no está claro si es tabla) | ? | ✅ | La web genera el contenido con JavaScript |
| Scott | ? | 🟡 manuales en PDF | ? | La web genera el contenido con JavaScript; no se encontró la web española |
| Lapierre | 🟡 quizá en el PDF de catálogo para distribuidores (no abierto) | ✅ ficha | ✅ | Shopify |
| Specialized | ? | ? | ✅ (según resultados de búsqueda) | Bloquea a los bots (error 403) |
| Decathlon | ✅ ficha (según resultados de búsqueda) | ? | ✅ | Bloquea a los bots (error 403); excluir "producto ocasión" (segunda mano) |
| Orbea | ? (hay "Guía de tallas") | ? | ? | Protección anti-bot de Cloudflare (error 403) |

### Nivel C — sin rangos de altura publicados: hoy no entran ni en el ranking ni en la tabla gratis

| Marca | Lo que hay |
|---|---|
| Merida | Calculadora SMARTFIT; sin precio (solo tiendas) |
| Cervélo | Herramienta de ajuste "px fit"; sin precio en € |
| Cannondale | Calculadora; geometría en **imagen** |
| Focus | Widget "Sizefinder"; geometría y € sí |
| Ghost | Widget de talla; geometría y € sí |
| Haibike | Widget de talla; **solo e-bikes**, así que solo encaja en `emtb` |
| BH | Calculadora "¿Cuál es mi talla?"; geometría y € sí |
| Mondraker | La "guía de tallas" solo repite la geometría; sin alturas |
| Conor | Calculadora que da la talla en pulgadas; geometría en imagen |
| Wilier | Widget externo "Find your size"; geometría y € sí |
| Ridley | Calculadora; geometría en datos JSON incrustados en la página |
| Factor | Formulario de recomendación; solo USD |
| Look | La tabla de tallas tiene "xxx" en lugar de valores |
| Massi | Geometría en imagen; sin altura ni precio |
| Argon 18 | "Find your size" interactivo (no verificado); solo USD |

### Sin verificar

**Cube** (redirige a info.cube.eu), **Coluer** (no se abrió ninguna ficha) y **Basso** (geometría en datos JSON incrustados en la página; altura no verificada).

## 3. Decisiones que necesito de ti

1. **Calculadoras.** Preguntar a una calculadora muchas alturas y deducir de ahí el rango sería *derivar* el dato, y la regla 3 lo prohíbe. **Recomendación: no usarlas.** Las marcas del nivel C quedan fuera hasta que publiquen una tabla.
2. **Extremos abiertos** ("<166", ">192", "≤ 160"). Con esos datos no hay centro ni semirrango con los que calcular el score. **Recomendación:** dejar vacío el rango de esa talla, que entonces no entra. La alternativa es admitir rangos abiertos, lo que exige cambiar la lógica.
3. **Pies y pulgadas.** Convertir a cm es una conversión exacta, no una estimación. **Recomendación:** permitirlo, redondear al cm y anotarlo en la fila.
4. **Etiquetas de talla.** Hay tallas numéricas (Specialized, BMC, Aurum…) y letras no estándar (SM/MD/LG en Santa Cruz y BH, LA en BH). ⚠️ Ahora mismo el código trata "SM" como "S/M", pero en Santa Cruz y BH "SM" significa S.
   - **Propuesta:** un fichero `data/size-labels.csv` (marca, etiqueta de la marca, letra) que recoja solo las equivalencias que publique la propia marca.
   - Las tallas sin letra publicada entran en el ranking premium, pero no en la tabla gratis.
   - Requiere un ajuste pequeño de código.
5. **Montajes.** Muchas marcas tienen una ficha y un precio por montaje del mismo cuadro, por ejemplo Expert, Comp y Pro. Si cada montaje cuenta como modelo distinto, el top 5 puede llenarse de montajes del mismo cuadro.
   - **Propuesta:** una fila por montaje, más una columna `family`, y el ranking muestra una sola bici por familia. Esto cambia el esquema del CSV.
   - Alternativa sin cambiar el esquema: cargar un solo montaje por familia.
6. **Precio.** **Recomendación:**
   - aceptar el precio oficial que publica la marca en su web de España o de la UE, incluido el "desde X €" de las bicis configurables;
   - no convertir USD ni CHF: si no hay precio en euros, el campo queda vacío.
7. **Anti-bot.** Specialized, Decathlon y Orbea bloquean a los bots. **Recomendación:** no saltarse el bloqueo. Dos opciones: carga asistida a partir de páginas que guardes tú desde tu navegador, o dejarlas para el final.
8. **Año de modelo.** **Recomendación:** cargar solo el año de modelo vigente en la web española el día de la carga.

## 4. Cómo se cargaría

- **Un extractor por marca** (`scripts/sources/<marca>.ts`):
  - descarga con un User-Agent identificado, como máximo una petición cada 2 s y respetando `robots.txt`;
  - guarda el HTML en `data/raw/<marca>/` (fuera de git) para poder auditarlo;
  - escribe `data/staging/<marca>.csv` con `source_url` (la URL exacta de la ficha) y `verified_at` (la fecha de descarga).
- **Extractor común para Shopify**: Santa Cruz, MMR, 3T, BMC, Berria, Lapierre, Ghost y Haibike. Lista los productos con `products.json` y lee la tabla del HTML de cada ficha.
- **Validación y fusión:**
  - `npm run validate` sobre el CSV intermedio (`data/staging/`);
  - un script `merge.ts` sustituye en `bikes.csv` las filas de esa marca;
  - tú revisas el diff de git antes de hacer el commit.
- **Carga asistida:**
  - yo leo la página o el PDF oficial (o el HTML que guardes tú), relleno el CSV intermedio y te enseño una comparación fila a fila con la fuente;
  - si el dato viene en imagen, lo transcribo y la revisión es obligatoria.
- **Revalidación**: un script vuelve a descargar las fuentes, compara y marca las filas con `verified_at` de hace más de 6 meses.
- **Dependencia previsible:** una librería para leer el HTML, probablemente `cheerio`. La justificaré cuando toque.

## 5. Orden propuesto

1. **Piloto con Canyon.** Vende directamente, tiene carretera, gravel y MTB, y su página de geometría es HTML estático. Sirve para probar el proceso de principio a fin.
2. El resto del nivel A: Giant, Megamo, BMC, MMR, Berria, 3T, Aurum y Santa Cruz.
3. Nivel B asistido: Colnago, KTM, Bianchi, Trek, Pinarello, Lapierre y Scott.
4. Las webs bloqueadas (Specialized, Decathlon, Orbea), según lo que decidas en el punto 3.7.
5. Verificar Cube, Coluer y Basso.
6. Revisar el nivel C cada 6 meses, por si alguna marca publica su tabla.

Con el nivel A habría unas 9 marcas en el ranking. Carretera y gravel quedan bien cubiertas. MTB y e-MTB dependerían sobre todo de Megamo, Berria, Santa Cruz y MMR.

## 6. Otros hallazgos

- **Accell** (Lapierre, Ghost y Haibike) está en concurso de acreedores desde el 5-ago-2026. Las webs siguen activas. Por tu decisión, siguen con `status=activo`.
- **Haibike** solo vende e-bikes, así que solo encaja en `emtb`.
- **3T**: el dominio oficial es `3t.bike`.

## 7. URLs oficiales de referencia (verificadas el 2026-10-05)

Sirven como punto de partida. La columna `sizing_url` de `brands.csv` solo tiene sentido en las marcas con guía global (Aurum, Colnago y quizá Trek); en el resto, la fuente de cada fila es la propia ficha (`source_url`).

- Giant (ficha con altura y geometría): https://www.giant-bicycles.com/es/tcr-advanced-2-pc-2027
- Canyon (página de geometría con altura): https://www.canyon.com/en-us/productpdf/geometry/?pid=2855
- Megamo: https://www.megamo.com/es/bicicletas/gravel/west/west-15-(26)
- Berria: https://berriabikes.com/en/products/belador-essential-105-2027
- Santa Cruz: https://www.santacruzbicycles.com/en-eu/products/stigmata-force-1x-axs-rsv-2027
- MMR: https://mmrbikes.com/products/aelion-sl-10
- 3T: https://3t.bike/products/strada-italia-force-1x13-xplr-sharq
- BMC: https://bmc-switzerland.com/products/teammachine-r-01-one-bikes-bmc-26a-000006 (precio en €: https://es.bmc-switzerland.com/es/products/teammachine-r-01-one-bikes-bmc-26a-000006)
- Aurum (guía global): https://aurumbikes.com/size-guide/
- Colnago (guía global): https://www.colnago.com/es-es/size-guide
- Bianchi (PDF de tallas, sin abrir): https://www.bianchi.com/wp-content/uploads/2026/07/GuidaAlleTaglie_SizeGuides_July2026.pdf
- Trek (guía de carretera, no está claro si contiene tabla): https://www.trekbikes.com/es/es_ES/road_buyers_guide/bike_size/
