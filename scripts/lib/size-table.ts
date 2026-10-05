import { CATEGORIES, type Bike, type SizeTable, type SizeTableRow } from '../../src/lib/types.ts'
import { canonicalSizeLabel } from '../../src/lib/sizes.ts'

export function median(values: number[]): number {
  const s = [...values].sort((a, b) => a - b)
  const mid = Math.floor(s.length / 2)
  return s.length % 2 === 1 ? s[mid] : (s[mid - 1] + s[mid]) / 2
}

/**
 * Tabla de tallas gratuita. Para cada categoría y talla:
 * 1. Mediana de los rangos de cada marca (para que una marca con muchos modelos no pese más).
 * 2. Mediana entre marcas.
 * Solo entran filas con height_min y height_max publicados.
 */
export function buildSizeTable(bikes: Bike[]): SizeTable {
  const table = {} as SizeTable

  for (const category of CATEGORIES) {
    // talla → marca → filas
    const bySize = new Map<string, Map<string, Bike[]>>()
    for (const b of bikes) {
      if (b.category !== category || b.height_min === null || b.height_max === null) continue
      const label = canonicalSizeLabel(b.size_label)
      const byBrand = bySize.get(label) ?? new Map<string, Bike[]>()
      byBrand.set(b.brand, [...(byBrand.get(b.brand) ?? []), b])
      bySize.set(label, byBrand)
    }

    const rows: SizeTableRow[] = []
    for (const [size_label, byBrand] of bySize) {
      const brandMins: number[] = []
      const brandMaxs: number[] = []
      const cms = new Set<number>()
      for (const brandBikes of byBrand.values()) {
        brandMins.push(median(brandBikes.map((b) => b.height_min!)))
        brandMaxs.push(median(brandBikes.map((b) => b.height_max!)))
        for (const b of brandBikes) if (b.size_cm !== null) cms.add(b.size_cm)
      }
      rows.push({
        size_label,
        height_min: median(brandMins),
        height_max: median(brandMaxs),
        size_cm_values: [...cms].sort((a, b) => a - b),
        brands: byBrand.size,
      })
    }
    rows.sort((a, b) => a.height_min - b.height_min || a.height_max - b.height_max)
    table[category] = rows
  }
  return table
}
