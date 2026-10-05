import type { Bike, Category, SizeTableRow } from './types.ts'

export const CATEGORY_LABELS: Record<Category, string> = {
  carretera: 'Carretera',
  gravel: 'Gravel',
  mtb: 'MTB',
  emtb: 'e-MTB',
}

const number = new Intl.NumberFormat('es-ES', { maximumFractionDigits: 1 })
const euros = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })

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
