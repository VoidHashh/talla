import { CATEGORIES, type Bike, type Category } from '../../src/lib/types.ts'
import { sizeRank } from '../../src/lib/sizes.ts'
import type { CsvTable } from './csv.ts'

export const BRAND_COLUMNS = ['brand', 'group', 'country', 'status', 'sizing_url', 'geometry_url']
export const BRAND_STATUSES = ['activo', 'incierto']

export const BIKE_COLUMNS = [
  'brand', 'model', 'year', 'category', 'size_label', 'size_cm', 'height_min', 'height_max',
  'stack', 'reach', 'price_eur', 'product_url', 'source_url', 'verified_at',
] as const

const REQUIRED = ['brand', 'model', 'year', 'category', 'size_label', 'source_url', 'verified_at']
const NUMERIC = ['year', 'size_cm', 'height_min', 'height_max', 'stack', 'reach', 'price_eur']

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
    if (v.year && !Number.isInteger(Number(v.year))) rowErrors.push(`year "${v.year}" no es un año`)
    if (v.brand && !brands.has(v.brand)) rowErrors.push(`la marca "${v.brand}" no está en brands.csv`)
    if (v.category && !(CATEGORIES as readonly string[]).includes(v.category)) {
      rowErrors.push(`category "${v.category}" no válida (${CATEGORIES.join(' / ')})`)
    }
    if (v.source_url && !isHttpUrl(v.source_url)) rowErrors.push('source_url no es una URL http(s)')
    if (v.product_url && !isHttpUrl(v.product_url)) rowErrors.push('product_url no es una URL http(s)')
    if (v.verified_at && !isIsoDate(v.verified_at)) rowErrors.push(`verified_at "${v.verified_at}" no es una fecha AAAA-MM-DD`)

    const hMin = num(v.height_min ?? '')
    const hMax = num(v.height_max ?? '')
    if ((hMin === null) !== (hMax === null)) {
      rowErrors.push('height_min y height_max van juntos: o los dos o ninguno')
    } else if (hMin !== null && hMax !== null && !(hMin < hMax)) {
      rowErrors.push(`height_min (${hMin}) debe ser menor que height_max (${hMax})`)
    }

    const key = [v.brand, v.model, v.year, v.category, v.size_label].join('|')
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
        model: v.model,
        year: Number(v.year),
        category: v.category as Category,
        size_label: v.size_label,
        size_cm: num(v.size_cm),
        height_min: hMin,
        height_max: hMax,
        stack: num(v.stack),
        reach: num(v.reach),
        price_eur: num(v.price_eur),
        product_url: v.product_url || null,
        source_url: v.source_url,
        verified_at: v.verified_at,
      },
    })
  }

  errors.push(...checkGeometryProgression(valid))
  errors.sort((a, b) => a.line - b.line)
  return { errors, bikes: errors.length === 0 ? valid.map((x) => x.bike) : [] }
}

/** Dentro de un mismo modelo, stack y reach no pueden decrecer al subir de talla. */
function checkGeometryProgression(rows: { line: number; bike: Bike }[]): RowError[] {
  const errors: RowError[] = []
  const groups = new Map<string, { line: number; bike: Bike }[]>()
  for (const row of rows) {
    const b = row.bike
    const key = [b.brand, b.model, b.year, b.category].join('|')
    groups.set(key, [...(groups.get(key) ?? []), row])
  }

  for (const group of groups.values()) {
    if (group.length < 2) continue
    const byCm = group.every((r) => r.bike.size_cm !== null)
    const byLetter = group.every((r) => sizeRank(r.bike.size_label) !== null)
    if (!byCm && !byLetter) {
      const { brand, model } = group[0].bike
      errors.push({
        line: group[0].line,
        message: `no se pueden ordenar las tallas de ${brand} ${model}: falta size_cm o hay etiquetas no reconocidas`,
      })
      continue
    }
    const key = (r: { bike: Bike }) => (byCm ? r.bike.size_cm! : sizeRank(r.bike.size_label)!)
    const sorted = [...group].sort((a, b) => key(a) - key(b))

    for (const field of ['stack', 'reach'] as const) {
      let prev: { line: number; bike: Bike } | null = null
      for (const row of sorted) {
        const value = row.bike[field]
        if (value === null) continue
        if (prev && value < prev.bike[field]!) {
          errors.push({
            line: row.line,
            message: `${field} decrece al subir de talla: ${prev.bike.size_label}=${prev.bike[field]} (línea ${prev.line}) → ${row.bike.size_label}=${value}`,
          })
        }
        prev = row
      }
    }
  }
  return errors
}
