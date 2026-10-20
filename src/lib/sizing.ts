import type { FitMeasures } from './fit.ts'
import type { Bike, Category, SizeTable, SizeTableRow } from './types.ts'

export interface UserInput {
  height: number
  inseam: number
  category: Category
  /** Presupuesto máximo en euros; undefined = sin límite. */
  budget?: number
  /** Medidas del bike fit premium (opcionales). */
  fit?: FitMeasures
}

export interface RankedBike extends Bike {
  score: number
  /** Montajes (modelos) del mismo cuadro dentro del presupuesto; se muestra el más barato. */
  variants: number
}

export interface Geometry {
  stack: number
  reach: number
}

const TOP_N = 5

/**
 * Gratis: una sola talla. La que tiene el centro de su rango mediano más cerca de la altura entre las que la
 * contienen; si la altura cae en un hueco entre dos tallas, la más cercana. null fuera de la tabla.
 */
export function recommendSize(sizeTable: SizeTable, input: Pick<UserInput, 'height' | 'category'>): SizeTableRow | null {
  const rows = sizeTable[input.category]
  const { height } = input
  if (rows.length === 0) return null
  if (height < Math.min(...rows.map((r) => r.height_min)) || height > Math.max(...rows.map((r) => r.height_max))) return null
  const gap = (r: SizeTableRow) => Math.max(r.height_min - height, 0, height - r.height_max)
  const offCenter = (r: SizeTableRow) => Math.abs(height - (r.height_min + r.height_max) / 2)
  return [...rows].sort((a, b) => gap(a) - gap(b) || offCenter(a) - offCenter(b))[0]
}

function median(values: number[]): number {
  const s = [...values].sort((a, b) => a - b)
  const mid = Math.floor(s.length / 2)
  return s.length % 2 === 1 ? s[mid] : (s[mid - 1] + s[mid]) / 2
}

/** El rango publicado por la marca admite la altura. Un extremo vacío no limita por ese lado. */
export function heightFits(b: Pick<Bike, 'height_min' | 'height_max'>, height: number): boolean {
  return (b.height_min === null || b.height_min <= height) && (b.height_max === null || height <= b.height_max)
}

const hasRange = (b: Bike) => b.height_min !== null || b.height_max !== null

/**
 * Geometría de referencia para una altura: mediana del stack y del reach de las tallas que las marcas
 * recomiendan para esa altura (primero mediana por marca, luego entre marcas, para que una marca con
 * muchos modelos no pese más). null si ninguna marca publica una talla para esa altura.
 */
export function referenceGeometry(bikes: Bike[], category: Category, height: number): Geometry | null {
  const byBrand = new Map<string, Bike[]>()
  for (const b of bikes) {
    if (b.category !== category || !hasRange(b) || !heightFits(b, height)) continue
    const rows = byBrand.get(b.brand) ?? []
    rows.push(b)
    byBrand.set(b.brand, rows)
  }
  if (byBrand.size === 0) return null
  const brands = [...byBrand.values()]
  return {
    stack: median(brands.map((rows) => median(rows.map((b) => b.stack)))),
    reach: median(brands.map((rows) => median(rows.map((b) => b.reach)))),
  }
}

const distance = (a: Geometry, b: Geometry) => Math.hypot(a.stack - b.stack, a.reach - b.reach)

/** Salto de talla típico de la categoría: distancia stack/reach mediana entre tallas consecutivas de un mismo cuadro. */
export function sizeStep(bikes: Bike[], category: Category): number | null {
  const families = new Map<string, Map<string, Geometry>>()
  for (const b of bikes) {
    if (b.category !== category) continue
    const key = `${b.brand}|${b.family}`
    const sizes = families.get(key) ?? new Map<string, Geometry>()
    sizes.set(`${b.stack}|${b.reach}`, { stack: b.stack, reach: b.reach })
    families.set(key, sizes)
  }
  const steps: number[] = []
  for (const sizes of families.values()) {
    const sorted = [...sizes.values()].sort((a, b) => a.stack - b.stack || a.reach - b.reach)
    for (let i = 1; i < sorted.length; i++) steps.push(distance(sorted[i - 1], sorted[i]))
  }
  return steps.length > 0 ? median(steps) : null
}

/** 100 si la geometría coincide con la referencia; 0 a un salto de talla; negativo más allá. */
export function geometryScore(bike: Geometry, reference: Geometry, step: number): number {
  return 100 * (1 - distance(bike, reference) / step)
}

/** Una fila entra en el ranking solo si tiene precio y enlace (la geometría es obligatoria en la BBDD). */
function isRankable(b: Bike): b is Bike & { price_eur: number; product_url: string } {
  return b.price_eur !== null && b.product_url !== null
}

const byScoreThenPrice = (a: RankedBike, b: RankedBike) =>
  b.score - a.score ||
  a.price_eur! - b.price_eur! ||
  a.brand.localeCompare(b.brand) ||
  a.model.localeCompare(b.model)

/**
 * Premium: top 5 de bicis para el usuario.
 * 1. Categoría, presupuesto, precio y enlace; si la marca publica rango de altura, debe admitir la altura.
 * 2. Score por cercanía de stack/reach a la geometría de referencia (0 a un salto de talla; más lejos, fuera).
 * 3. Una bici por familia (mismo cuadro): la talla con mejor score en su montaje más barato.
 * 4. Orden por score y, a igualdad, por precio.
 */
export function rankBikes(bikes: Bike[], input: UserInput): RankedBike[] {
  const { height, category, budget } = input
  const reference = referenceGeometry(bikes, category, height)
  const step = sizeStep(bikes, category)
  if (!reference || !step) return []

  const families = new Map<string, RankedBike[]>()
  for (const b of bikes) {
    if (b.category !== category || !isRankable(b)) continue
    if (budget !== undefined && b.price_eur > budget) continue
    if (!heightFits(b, height)) continue
    const score = geometryScore(b, reference, step)
    if (score <= 0) continue
    const key = `${b.brand}|${b.family}`
    const rows = families.get(key) ?? []
    rows.push({ ...b, score, variants: 1 })
    families.set(key, rows)
  }

  const best: RankedBike[] = []
  for (const rows of families.values()) {
    const top = [...rows].sort(byScoreThenPrice)[0]
    const variants = new Set(rows.filter((r) => r.size_label === top.size_label).map((r) => r.model)).size
    best.push({ ...top, variants })
  }
  return best.sort(byScoreThenPrice).slice(0, TOP_N)
}
