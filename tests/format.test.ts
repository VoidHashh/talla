// Tests de src/lib/format.ts. Todos los datos son FICTICIOS: ver tests/fixtures/sizing-ficticio.ts.
import { describe, expect, it } from 'vitest'
import { catalogStats, formatNumber, formatPrice, formatBikeSize, formatSize, formatSizeLabel, sizeOrigin } from '../src/lib/format.ts'
import { fakeBike } from './fixtures/sizing-ficticio.ts'

describe('format', () => {
  it('formatSize junta letra y cm, o solo letra si no hay cm', () => {
    expect(formatSize({ size_label: 'M', size_cm_values: [54, 55] })).toBe('M · 54/55')
    expect(formatSize({ size_label: 'L', size_cm_values: [] })).toBe('L')
  })

  it('formatea números y precios en español', () => {
    expect(formatNumber(169.5)).toBe('169,5')
    expect(formatPrice(2499).replace(/\s/g, ' ')).toBe('2.499 €')
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

  it('formatSizeLabel quita el ".0" de las tallas numéricas y deja el resto igual', () => {
    expect(formatSizeLabel('56.0')).toBe('56')
    expect(formatSizeLabel('56.5')).toBe('56.5')
    expect(formatSizeLabel('L (57)')).toBe('L (57)')
  })

  it('formatBikeSize no repite la talla en cm si ya está en la etiqueta', () => {
    expect(formatBikeSize({ size_label: '56.0', size_cm: 56 })).toBe('56')
    expect(formatBikeSize({ size_label: 'L (57)', size_cm: 57 })).toBe('L (57)')
    expect(formatBikeSize({ size_label: '45.5', size_cm: 45.5 })).toBe('45.5')
    expect(formatBikeSize({ size_label: 'M', size_cm: 54 })).toBe('M · 54')
    expect(formatBikeSize({ size_label: 'M', size_cm: null })).toBe('M')
  })

  it('sizeOrigin explica de dónde sale la talla', () => {
    const b = { brand: 'MarcaFicticiaA', height_min: 171, height_max: 178 }
    expect(sizeOrigin(b)).toBe('MarcaFicticiaA recomienda esta talla de 171 a 178 cm')
    expect(sizeOrigin({ ...b, height_max: null })).toBe('MarcaFicticiaA recomienda esta talla a partir de 171 cm')
    expect(sizeOrigin({ ...b, height_min: null })).toBe('MarcaFicticiaA recomienda esta talla hasta 178 cm')
    expect(sizeOrigin({ ...b, height_min: null, height_max: null })).toBe(
      'Talla elegida por geometría: MarcaFicticiaA no publica alturas por talla',
    )
  })
})
