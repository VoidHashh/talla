import type { Bike, Category, SizeTable, SizeTableRow } from './types.ts'

export interface UserInput {
  height: number
  inseam: number
  category: Category
  /** Presupuesto máximo en euros; undefined = sin límite. */
  budget?: number
}

export interface RankedBike extends Bike {
  score: number
}

const TOP_N = 5

/** Gratis: las tallas cuyo rango mediano contiene la altura (una o dos si se solapan). */
export function recommendSize(sizeTable: SizeTable, input: Pick<UserInput, 'height' | 'category'>): SizeTableRow[] {
  return sizeTable[input.category].filter((s) => s.height_min <= input.height && input.height <= s.height_max)
}

/** 100 en el centro del rango de la talla, 0 en los extremos. */
export function sizeScore(height: number, min: number, max: number): number {
  const center = (min + max) / 2
  const halfRange = (max - min) / 2
  return 100 * (1 - Math.abs(height - center) / halfRange)
}

/** Una fila entra en el ranking solo si tiene todos los datos que usa: rango de altura, precio y enlace. */
function isRankable(b: Bike): b is Bike & { height_min: number; height_max: number; price_eur: number; product_url: string } {
  return b.height_min !== null && b.height_max !== null && b.price_eur !== null && b.product_url !== null
}

const byScoreThenPrice = (a: RankedBike, b: RankedBike) =>
  b.score - a.score ||
  a.price_eur! - b.price_eur! ||
  a.brand.localeCompare(b.brand) ||
  a.model.localeCompare(b.model)

/** Premium: top 5 de bicis para el usuario, una talla por modelo. */
export function rankBikes(bikes: Bike[], input: UserInput): RankedBike[] {
  const { height, category, budget } = input

  const bestPerModel = new Map<string, RankedBike>()
  for (const b of bikes) {
    if (b.category !== category || !isRankable(b)) continue
    if (budget !== undefined && b.price_eur > budget) continue
    if (height < b.height_min || height > b.height_max) continue

    const ranked = { ...b, score: sizeScore(height, b.height_min, b.height_max) }
    const key = `${b.brand}|${b.model}`
    const current = bestPerModel.get(key)
    if (!current || byScoreThenPrice(ranked, current) < 0) bestPerModel.set(key, ranked)
  }

  return [...bestPerModel.values()].sort(byScoreThenPrice).slice(0, TOP_N)
}
