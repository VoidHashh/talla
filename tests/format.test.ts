// Tests de src/lib/format.ts. Todos los datos son FICTICIOS: ver tests/fixtures/sizing-ficticio.ts.
import { describe, expect, it } from 'vitest'
import { catalogStats, formatNumber, formatPrice, formatSize } from '../src/lib/format.ts'
import { fakeBike } from './fixtures/sizing-ficticio.ts'

describe('format', () => {
  it('formatSize junta letra y cm, o solo letra si no hay cm', () => {
    expect(formatSize({ size_label: 'M', size_cm_values: [54, 55] })).toBe('M · 54/55')
    expect(formatSize({ size_label: 'L', size_cm_values: [] })).toBe('L')
  })

  it('formatea números y precios en español', () => {
    expect(formatNumber(169.5)).toBe('169,5')
    expect(formatPrice(2499).replace(/\s/g, ' ')).toBe('2499 €')
    expect(formatPrice(12499).replace(/\s/g, ' ')).toBe('12.499 €')
  })

  it('catalogStats cuenta modelos y marcas distintos de la categoría', () => {
    const bikes = [
      fakeBike({ size_label: 'S' }),
      fakeBike({ size_label: 'M' }),
      fakeBike({ model: 'Otro' }),
      fakeBike({ brand: 'MarcaFicticiaB' }),
      fakeBike({ brand: 'MarcaFicticiaC', category: 'gravel' }),
    ]
    expect(catalogStats(bikes, 'carretera')).toEqual({ models: 3, brands: 2 })
    expect(catalogStats(bikes, 'mtb')).toEqual({ models: 0, brands: 0 })
  })
})
