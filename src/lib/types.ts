export const CATEGORIES = ['carretera', 'gravel', 'mtb', 'emtb'] as const
export type Category = (typeof CATEGORIES)[number]

/** Una fila de data/bikes.csv ya validada. Los datos ausentes son null, nunca estimados. */
export interface Bike {
  brand: string
  model: string
  year: number
  category: Category
  size_label: string
  size_cm: number | null
  height_min: number | null
  height_max: number | null
  stack: number | null
  reach: number | null
  price_eur: number | null
  product_url: string | null
  source_url: string
  verified_at: string
}

/** Fila de la tabla de tallas gratuita: mediana de los rangos publicados por las marcas. */
export interface SizeTableRow {
  size_label: string
  height_min: number
  height_max: number
  /** Tallas en cm que usan las marcas para esta letra, ordenadas y sin repetir. */
  size_cm_values: number[]
  /** Número de marcas que aportan datos a esta fila. */
  brands: number
}

export type SizeTable = Record<Category, SizeTableRow[]>
