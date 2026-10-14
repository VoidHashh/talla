import { CATEGORIES, EXTRACTION_METHODS, type Bike, type Category, type ExtractionMethod } from '../../src/lib/types.ts'
import { sizeRank } from '../../src/lib/sizes.ts'
import type { CsvTable } from './csv.ts'

export const BRAND_COLUMNS = ['brand', 'group', 'country', 'status', 'sizing_url', 'geometry_url']
export const BRAND_STATUSES = ['activo', 'incierto']

/** Mismas columnas que data/staging/<marca>.csv (lo escribe el extractor). */
export const BIKE_COLUMNS = [
  'brand', 'family', 'model', 'model_year', 'category', 'size_label', 'size_normalized', 'size_cm',
  'height_min', 'height_max', 'height_original', 'height_unit', 'stack', 'reach', 'geometry_raw',
  'price_eur', 'price_is_from', 'product_url', 'source_url', 'extraction_method', 'loaded_at',
] as const

// Geometría obligatoria (stack y reach); altura, precio y año solo si la marca los publica.
const REQUIRED = [
  'brand', 'family', 'model', 'category', 'size_label', 'stack', 'reach',
  'source_url', 'extraction_method', 'loaded_at',
]
const NUMERIC = ['model_year', 'size_cm', 'height_min', 'height_max', 'stack', 'reach', 'price_eur']
const HEIGHT_UNITS = ['cm', 'in', 'ft-in']

export interface RowError {
  line: number
  message: string
}

function checkHeader(header: string[], expected: readonly string[], errors: RowError[]) {
  if (header.join(',') !== expected.join(',')) {
    errors.push({ line: 1, message: `cabecera incorrecta. Esperada: ${expected.join(',')}` })
  }
}

function isHttpUrl(value: string): boolean {
  try {
    const url = new URL(value)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

function isIsoDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false
  const d = new Date(`${value}T00:00:00Z`)
  return !Number.isNaN(d.getTime()) && d.toISOString().startsWith(value)
}

const num = (v: string): number | null => (v === '' ? null : Number(v))

export function validateBrands(table: CsvTable): { errors: RowError[]; brands: Set<string> } {
  const errors: RowError[] = []
  const brands = new Set<string>()
  checkHeader(table.header, BRAND_COLUMNS, errors)
  for (const r of table.records) {
    const { brand, status, sizing_url, geometry_url } = r.values
    if (r.fieldCount !== BRAND_COLUMNS.length) {
      errors.push({ line: r.line, message: `tiene ${r.fieldCount} columnas, se esperaban ${BRAND_COLUMNS.length}` })
    }
    if (!brand) errors.push({ line: r.line, message: 'brand vacío' })
    else if (brands.has(brand)) errors.push({ line: r.line, message: `marca duplicada: ${brand}` })
    else brands.add(brand)
    if (!BRAND_STATUSES.includes(status)) {
      errors.push({ line: r.line, message: `status "${status}" no válido (${BRAND_STATUSES.join(' / ')})` })
    }
    for (const [col, v] of [['sizing_url', sizing_url], ['geometry_url', geometry_url]]) {
      if (v && !isHttpUrl(v)) errors.push({ line: r.line, message: `${col} no es una URL http(s)` })
    }
  }
  return { errors, brands }
}

/** Valida bikes.csv. Devuelve los errores por fila y las bicis de las filas sin errores. */
export function validateBikes(table: CsvTable, brands: Set<string>): { errors: RowError[]; bikes: Bike[] } {
  const errors: RowError[] = []
  checkHeader(table.header, BIKE_COLUMNS, errors)

  const valid: { line: number; bike: Bike }[] = []
  const seen = new Map<string, number>()

  for (const r of table.records) {
    const v = r.values
    const rowErrors: string[] = []

    if (r.fieldCount !== BIKE_COLUMNS.length) {
      rowErrors.push(`tiene ${r.fieldCount} columnas, se esperaban ${BIKE_COLUMNS.length}`)
    }
    for (const col of REQUIRED) {
      if (!v[col]) rowErrors.push(`${col} es obligatorio y está vacío`)
    }
    for (const col of NUMERIC) {
      const n = num(v[col] ?? '')
      if (n !== null && !(Number.isFinite(n) && n > 0)) rowErrors.push(`${col} "${v[col]}" no es un número positivo`)
    }
    if (v.model_year && !Number.isInteger(Number(v.model_year))) rowErrors.push(`model_year "${v.model_year}" no es un año`)
    if (v.brand && !brands.has(v.brand)) rowErrors.push(`la marca "${v.brand}" no está en brands.csv`)
    if (v.category && !(CATEGORIES as readonly string[]).includes(v.category)) {
      rowErrors.push(`category "${v.category}" no válida (${CATEGORIES.join(' / ')})`)
    }
    if (v.extraction_method && !(EXTRACTION_METHODS as readonly string[]).includes(v.extraction_method)) {
      rowErrors.push(`extraction_method "${v.extraction_method}" no válido (${EXTRACTION_METHODS.join(' / ')})`)
    }
    if (v.source_url && !isHttpUrl(v.source_url)) rowErrors.push('source_url no es una URL http(s)')
    if (v.product_url && !isHttpUrl(v.product_url)) rowErrors.push('product_url no es una URL http(s)')
    if (v.loaded_at && !isIsoDate(v.loaded_at)) rowErrors.push(`loaded_at "${v.loaded_at}" no es una fecha AAAA-MM-DD`)
    if (!['', 'true', 'false'].includes(v.price_is_from ?? '')) rowErrors.push(`price_is_from "${v.price_is_from}" no es true/false`)
    if (v.geometry_raw) {
      try {
        JSON.parse(v.geometry_raw)
      } catch {
        rowErrors.push('geometry_raw no es JSON')
      }
    }

    // Altura: intervalo abierto permitido (un extremo vacío = sin límite publicado por ese lado).
    const hMin = num(v.height_min ?? '')
    const hMax = num(v.height_max ?? '')
    if (hMin !== null && hMax !== null && !(hMin < hMax)) {
      rowErrors.push(`height_min (${hMin}) debe ser menor que height_max (${hMax})`)
    }
    if (hMin !== null || hMax !== null) {
      if (!v.height_original) rowErrors.push('height_original es obligatorio si hay altura (valor publicado tal cual)')
      if (!HEIGHT_UNITS.includes(v.height_unit ?? '')) rowErrors.push(`height_unit "${v.height_unit}" no válida (${HEIGHT_UNITS.join(' / ')})`)
    }

    const key = [v.brand, v.model, v.model_year, v.category, v.size_label].join('|')
    const firstLine = seen.get(key)
    if (firstLine !== undefined) rowErrors.push(`fila duplicada (misma marca, modelo, año, categoría y talla que la línea ${firstLine})`)
    else seen.set(key, r.line)

    if (rowErrors.length > 0) {
      for (const message of rowErrors) errors.push({ line: r.line, message })
      continue
    }

    valid.push({
      line: r.line,
      bike: {
        brand: v.brand,
        family: v.family,
        model: v.model,
        model_year: num(v.model_year),
        category: v.category as Category,
        size_label: v.size_label,
        size_normalized: v.size_normalized || null,
        size_cm: num(v.size_cm),
        height_min: hMin,
        height_max: hMax,
        stack: Number(v.stack),
        reach: Number(v.reach),
        price_eur: num(v.price_eur),
        price_is_from: v.price_is_from === 'true',
        product_url: v.product_url || null,
        source_url: v.source_url,
        extraction_method: v.extraction_method as ExtractionMethod,
        loaded_at: v.loaded_at,
      },
    })
  }

  errors.push(...checkHeightProgression(valid))
  errors.sort((a, b) => a.line - b.line)
  return { errors, bikes: errors.length === 0 ? valid.map((x) => x.bike) : [] }
}

/**
 * Dentro de un mismo modelo, los rangos de altura no pueden bajar al subir de talla.
 * Orden de tallas: size_cm si todas lo tienen; si no, la letra normalizada; si no, el orden del fichero
 * (el extractor escribe las tallas en el orden publicado). La progresión de stack/reach ya la valida el
 * extractor por grupo de rueda, porque una talla pequeña con rueda menor puede tener menos stack.
 */
function checkHeightProgression(rows: { line: number; bike: Bike }[]): RowError[] {
  const errors: RowError[] = []
  const groups = new Map<string, { line: number; bike: Bike }[]>()
  for (const row of rows) {
    const b = row.bike
    const key = [b.brand, b.model, b.model_year, b.category].join('|')
    groups.set(key, [...(groups.get(key) ?? []), row])
  }

  for (const group of groups.values()) {
    if (group.length < 2) continue
    const byCm = group.every((r) => r.bike.size_cm !== null)
    const byLetter = group.every((r) => r.bike.size_normalized !== null && sizeRank(r.bike.size_normalized) !== null)
    const key = (r: { line: number; bike: Bike }) =>
      byCm ? r.bike.size_cm! : byLetter ? sizeRank(r.bike.size_normalized!)! : r.line
    const sorted = [...group].sort((a, b) => key(a) - key(b))

    for (const field of ['height_min', 'height_max'] as const) {
      let prev: { line: number; bike: Bike } | null = null
      for (const row of sorted) {
        const value = row.bike[field]
        if (value === null) continue
        if (prev && value < prev.bike[field]!) {
          errors.push({
            line: row.line,
            message: `${field} baja al subir de talla: ${prev.bike.size_label}=${prev.bike[field]} (línea ${prev.line}) → ${row.bike.size_label}=${value}`,
          })
        }
        prev = row
      }
    }
  }
  return errors
}
