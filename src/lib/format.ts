import type { Bike, Category, SizeTableRow } from './types.ts'

export const CATEGORY_LABELS: Record<Category, string> = {
  carretera: 'Carretera',
  gravel: 'Gravel',
  mtb: 'MTB',
  emtb: 'e-MTB',
}

const number = new Intl.NumberFormat('es-ES', { maximumFractionDigits: 1 })
// useGrouping 'always': "1.500 €" (por defecto es-ES no separa los miles en números de 4 cifras).
const euros = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0, useGrouping: 'always' })

export const formatNumber = (n: number) => number.format(n)
export const formatPrice = (eur: number) => euros.format(eur)

/** "M · 54/55", o solo "M" si las marcas no publican talla en cm. */
export function formatSize(row: Pick<SizeTableRow, 'size_label' | 'size_cm_values'>): string {
  return row.size_cm_values.length > 0 ? `${row.size_label} · ${row.size_cm_values.join('/')}` : row.size_label
}

/** Modelos y marcas distintos que hay en la BBDD para una categoría (para la pantalla "Calculando"). */
export function catalogStats(bikes: Bike[], category: Category): { models: number; brands: number } {
  const inCategory = bikes.filter((b) => b.category === category)
  return {
    models: new Set(inCategory.map((b) => `${b.brand}|${b.model}`)).size,
    brands: new Set(inCategory.map((b) => b.brand)).size,
  }
}

/** Etiqueta de talla para mostrar: "56.0" → "56" (el dato guardado no cambia). */
export const formatSizeLabel = (label: string) => label.replace(/^(\d+)\.0$/, '$1')

/** Talla de una bici del top 5: la etiqueta de la marca y, si no la incluye ya, la talla en cm ("M · 54"). */
export function formatBikeSize(b: { size_label: string; size_cm: number | null }): string {
  const label = formatSizeLabel(b.size_label)
  if (b.size_cm === null) return label
  const cm = formatNumber(b.size_cm)
  return label.replace(',', '.').includes(String(b.size_cm)) || label.includes(cm) ? label : `${label} · ${cm}`
}

/** De dónde sale la talla de una bici del top 5: la guía de la marca o, si no publica alturas, la geometría. */
export function sizeOrigin(b: { brand: string; height_min: number | null; height_max: number | null }): string {
  const { brand, height_min: min, height_max: max } = b
  if (min !== null && max !== null) return `${brand} recomienda esta talla de ${formatNumber(min)} a ${formatNumber(max)} cm`
  if (min !== null) return `${brand} recomienda esta talla a partir de ${formatNumber(min)} cm`
  if (max !== null) return `${brand} recomienda esta talla hasta ${formatNumber(max)} cm`
  return `Talla elegida por geometría: ${brand} no publica alturas por talla`
}
