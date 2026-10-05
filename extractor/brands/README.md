# Configuración (un fichero por marca: <clave>.toml, sin cabecera [sección]) de descubrimiento por marca. La lectura usa adaptadores por tipo de fuente (HTML, JSON, PDF, imagen).
# Claves:
#   name            nombre exacto en data/brands.csv
#   discovery       "sitemap" | "shopify" | "listing"
#   sitemaps / sitemap_filter / include / exclude   (sitemap)
#   shopify_base / shopify_collections              (shopify)
#   listing_pages / link_re / paginate / listing_render  (listing)
#   categories      [[regex, categoría], ...] primera coincidencia; categoría "" = fuera de alcance
#   classify_by_url true (por defecto): clasifica antes de descargar; false: tras leer migas/nombre
#   year_re         regex con el año de modelo (grupo 1); browser = siempre Chrome; render = páginas con JS
#   geometry_pdf_re / geometry_img_re   enlace al PDF o imagen de geometría (grupo 1)
#   exclude_name    regex sobre el nombre del producto (cuadros sueltos, kits…)

