export const CATEGORIES = ['carretera', 'gravel', 'mtb', 'emtb'] as const
export type Category = (typeof CATEGORIES)[number]

export const EXTRACTION_METHODS = ['html', 'json', 'pdf', 'vision'] as const
export type ExtractionMethod = (typeof EXTRACTION_METHODS)[number]

/**
 * Una fila de data/bikes.csv ya validada, con los campos que usa la app (bikes.json).
 * Los datos ausentes son null, nunca estimados. geometry_raw, height_original y height_unit
 * se quedan en el CSV (trazabilidad) y no van al JSON.
 */
export interface Bike {
  brand: string
  /** Misma tabla de geometría del cuadro. */
  family: string
  model: string
  /** Año de modelo solo si la marca lo publica. */
  model_year: number | null
  category: Category
  size_label: string
  /** Talla en letra: la etiqueta si ya es una letra estándar o su equivalencia publicada (data/size-labels.csv);
   *  null si la talla no es una letra ("54") o la marca no publica equivalencia. */
  size_normalized: string | null
  size_cm: number | null
  /** Intervalo abierto: un extremo null significa "sin límite" publicado por ese lado. */
  height_min: number | null
  height_max: number | null
  stack: number
  reach: number
  /** Tubo horizontal efectivo en mm si la marca lo publica como tal (para la potencia del bike fit); si no, null. */
  top_tube_eff: number | null
  price_eur: number | null
  price_is_from: boolean
  product_url: string | null
  source_url: string
  extraction_method: ExtractionMethod
  loaded_at: string
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

/** Modelos y marcas distintos por categoría (para la pantalla "Calculando"). */
export type CatalogStats = Record<Category, { models: number; brands: number }>
