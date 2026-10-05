// Tests de la Fase 2 (CSV, validación, tabla de tallas). Todos los datos son FICTICIOS: ver tests/fixtures/README.md.
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { parseCsv } from '../scripts/lib/csv.ts'
import { BIKE_COLUMNS, validateBikes, validateBrands } from '../scripts/lib/validate-core.ts'
import { buildSizeTable, median } from '../scripts/lib/size-table.ts'
import { canonicalSizeLabel, sizeRank } from '../src/lib/sizes.ts'

const fixture = (name: string) => readFileSync(new URL(`./fixtures/${name}`, import.meta.url), 'utf8')
const BRANDS = new Set(['MarcaFicticiaA', 'MarcaFicticiaB'])

/** Fila ficticia válida; se sobrescriben los campos que interesan en cada test. */
function row(overrides: Partial<Record<(typeof BIKE_COLUMNS)[number], string>> = {}): string {
  const base: Record<string, string> = {
    brand: 'MarcaFicticiaA', model: 'Ficticio', year: '2026', category: 'carretera',
    size_label: 'M', size_cm: '54', height_min: '170', height_max: '180', stack: '550', reach: '390',
    price_eur: '1000', product_url: '', source_url: 'https://ficticia.invalid/tallas', verified_at: '2026-01-01',
    ...overrides,
  }
  return BIKE_COLUMNS.map((c) => base[c]).join(',')
}

function validate(...rows: string[]) {
  return validateBikes(parseCsv([BIKE_COLUMNS.join(','), ...rows].join('\n')), BRANDS)
}

describe('parseCsv', () => {
  it('lee comillas, comillas escapadas, BOM, CRLF y líneas en blanco', () => {
    const { header, records } = parseCsv('﻿a,b\r\n"x, y","di ""hola"""\r\n\r\n1,2\r\n')
    expect(header).toEqual(['a', 'b'])
    expect(records.map((r) => r.values)).toEqual([{ a: 'x, y', b: 'di "hola"' }, { a: '1', b: '2' }])
    expect(records.map((r) => r.line)).toEqual([2, 4])
  })

  it('cuenta líneas con saltos dentro de comillas', () => {
    const { records } = parseCsv('a\n"uno\ndos"\ntres\n')
    expect(records.map((r) => r.line)).toEqual([2, 4])
  })
})

describe('validateBrands', () => {
  it('acepta el fixture ficticio', () => {
    const { errors, brands } = validateBrands(parseCsv(fixture('brands-ficticio.csv')))
    expect(errors).toEqual([])
    expect([...brands]).toEqual(['MarcaFicticiaA', 'MarcaFicticiaB'])
  })

  it('detecta status no válido y marcas duplicadas', () => {
    const csv = 'brand,group,country,status,sizing_url,geometry_url\nX,,,activo,,\nX,,,quizá,,\n'
    const { errors } = validateBrands(parseCsv(csv))
    expect(errors.map((e) => e.message)).toEqual(['marca duplicada: X', 'status "quizá" no válido (activo / incierto)'])
  })
})

describe('validateBikes', () => {
  it('acepta el fixture ficticio y convierte los campos', () => {
    const { errors, bikes } = validateBikes(parseCsv(fixture('bikes-ficticio.csv')), BRANDS)
    expect(errors).toEqual([])
    expect(bikes).toHaveLength(6)
    expect(bikes[3]).toMatchObject({ stack: null, reach: null, price_eur: null, product_url: null })
    expect(bikes[4]).toMatchObject({ category: 'gravel', price_eur: 1800 })
  })

  it('acepta un bikes.csv vacío (solo cabecera)', () => {
    expect(validate()).toEqual({ errors: [], bikes: [] })
  })

  it('exige campos obligatorios, incluido source_url', () => {
    const { errors, bikes } = validate(row({ source_url: '', model: '' }))
    expect(errors.map((e) => e.message)).toEqual([
      'model es obligatorio y está vacío',
      'source_url es obligatorio y está vacío',
    ])
    expect(bikes).toEqual([])
  })

  it('permite dejar vacíos los datos no publicados', () => {
    const { errors } = validate(row({ size_cm: '', height_min: '', height_max: '', stack: '', reach: '', price_eur: '' }))
    expect(errors).toEqual([])
  })

  it('rechaza marcas que no están en brands.csv', () => {
    expect(validate(row({ brand: 'Inventada' })).errors[0].message).toBe('la marca "Inventada" no está en brands.csv')
  })

  it('exige height_min < height_max y que vayan juntos', () => {
    expect(validate(row({ height_min: '180', height_max: '180' })).errors[0].message).toMatch(/debe ser menor/)
    expect(validate(row({ height_max: '' })).errors[0].message).toMatch(/van juntos/)
  })

  it('valida categoría, números, URLs, fecha y columnas', () => {
    const msgs = validate(
      row({ category: 'bmx' }),
      row({ size_label: 'L', price_eur: 'mil' }),
      row({ size_label: 'XL', source_url: 'web de la marca' }),
      row({ size_label: 'S', verified_at: '01/01/2026' }),
      'MarcaFicticiaA,corta',
    ).errors.map((e) => `${e.line}: ${e.message}`)
    expect(msgs[0]).toBe('2: category "bmx" no válida (carretera / gravel / mtb / emtb)')
    expect(msgs[1]).toBe('3: price_eur "mil" no es un número positivo')
    expect(msgs[2]).toBe('4: source_url no es una URL http(s)')
    expect(msgs[3]).toBe('5: verified_at "01/01/2026" no es una fecha AAAA-MM-DD')
    expect(msgs[4]).toBe('6: tiene 2 columnas, se esperaban 14')
  })

  it('detecta filas duplicadas', () => {
    expect(validate(row(), row()).errors[0].message).toMatch(/fila duplicada.*línea 2/)
  })

  it('detecta stack o reach que decrecen al subir de talla (orden por size_cm)', () => {
    const { errors } = validate(
      row({ size_label: 'L', size_cm: '56', stack: '570', reach: '385' }),
      row({ size_label: 'M', size_cm: '54', stack: '550', reach: '390' }),
    )
    expect(errors).toEqual([{ line: 2, message: 'reach decrece al subir de talla: M=390 (línea 3) → L=385' }])
  })

  it('ordena por letra si falta size_cm y salta huecos de geometría', () => {
    const { errors } = validate(
      row({ size_label: 'S', size_cm: '', stack: '540' }),
      row({ size_label: 'M', size_cm: '', stack: '' }),
      row({ size_label: 'L', size_cm: '', stack: '530' }),
    )
    expect(errors.map((e) => e.message)).toEqual(['stack decrece al subir de talla: S=540 (línea 2) → L=530'])
  })

  it('avisa si no puede ordenar las tallas de un modelo', () => {
    const { errors } = validate(row({ size_label: '54A', size_cm: '' }), row({ size_label: '56A', size_cm: '' }))
    expect(errors[0].message).toMatch(/no se pueden ordenar las tallas/)
  })
})

describe('tallas', () => {
  it('normaliza etiquetas y las ordena', () => {
    expect(canonicalSizeLabel(' 2xs ')).toBe('XXS')
    expect(canonicalSizeLabel('ml')).toBe('M/L')
    expect(sizeRank('XS')! < sizeRank('S/M')!).toBe(true)
    expect(sizeRank('54')).toBeNull()
  })
})

describe('buildSizeTable', () => {
  it('calcula la mediana', () => {
    expect(median([3, 1, 2])).toBe(2)
    expect(median([4, 1, 3, 2])).toBe(2.5)
  })

  it('hace la mediana por marca y luego entre marcas, por categoría', () => {
    const { bikes } = validateBikes(parseCsv(fixture('bikes-ficticio.csv')), BRANDS)
    const table = buildSizeTable(bikes)
    // carretera M: marca A → mediana(170,172)=171 / mediana(180,182)=181; marca B → 168 / 178.
    // Entre marcas: mediana(171,168)=169.5 / mediana(181,178)=179.5
    expect(table.carretera).toEqual([
      { size_label: 'S', height_min: 160, height_max: 170, size_cm_values: [52], brands: 1 },
      { size_label: 'M', height_min: 169.5, height_max: 179.5, size_cm_values: [54, 55], brands: 2 },
    ])
    expect(table.gravel).toEqual([
      { size_label: 'M', height_min: 170, height_max: 180, size_cm_values: [54], brands: 1 },
    ])
    expect(table.mtb).toEqual([
      { size_label: 'L', height_min: 175, height_max: 188, size_cm_values: [], brands: 1 },
    ])
  })

  it('ignora filas sin rango de altura', () => {
    const { bikes } = validate(row({ height_min: '', height_max: '' }))
    expect(buildSizeTable(bikes)).toEqual({ carretera: [], gravel: [], mtb: [], emtb: [] })
  })
})
