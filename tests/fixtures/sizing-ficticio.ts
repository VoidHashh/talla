// DATOS FICTICIOS para los tests de src/lib/sizing.ts. Marcas, modelos, medidas, precios y URLs inventados.
// No copiar nunca nada de aquí a data/.
import type { Bike, SizeTable } from '../../src/lib/types.ts'

export function fakeBike(overrides: Partial<Bike> = {}): Bike {
  return {
    brand: 'MarcaFicticiaA',
    model: 'Modelo Ficticio',
    year: 2026,
    category: 'carretera',
    size_label: 'M',
    size_cm: 54,
    height_min: 170,
    height_max: 180,
    stack: 550,
    reach: 390,
    price_eur: 2000,
    product_url: 'https://ficticia.invalid/producto',
    source_url: 'https://ficticia.invalid/tallas',
    verified_at: '2026-01-01',
    ...overrides,
  }
}

export const FAKE_SIZE_TABLE: SizeTable = {
  carretera: [
    { size_label: 'S', height_min: 160, height_max: 172, size_cm_values: [52], brands: 2 },
    { size_label: 'M', height_min: 170, height_max: 181, size_cm_values: [54, 55], brands: 2 },
    { size_label: 'L', height_min: 181.5, height_max: 192, size_cm_values: [56], brands: 2 },
  ],
  gravel: [{ size_label: 'M', height_min: 168, height_max: 178, size_cm_values: [54], brands: 1 }],
  mtb: [],
  emtb: [],
}
