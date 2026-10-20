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
    brand: 'MarcaFicticiaA', family: 'Familia Ficticia', model: 'Ficticio', model_year: '2026', category: 'carretera',
    size_label: 'M', size_normalized: 'M', size_cm: '54', height_min: '170', height_max: '180',
    height_original: '170-180', height_unit: 'cm', stack: '550', reach: '390', geometry_raw: '',
    price_eur: '1000', price_is_from: 'false', product_url: '', source_url: 'https://ficticia.invalid/tallas',
    extraction_method: 'html', loaded_at: '2026-01-01',
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
    expect(bikes[2]).toMatchObject({ price_is_from: true, product_url: null })
    expect(bikes[3]).toMatchObject({ price_eur: null, price_is_from: false, product_url: null, extraction_method: 'pdf' })
    expect(bikes[4]).toMatchObject({ category: 'gravel', price_eur: 1800, model_year: null, stack: 570 })
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
    const { errors } = validate(
      row({ model_year: '', size_cm: '', height_min: '', height_max: '', height_original: '', height_unit: '', price_eur: '', price_is_from: '' }),
    )
    expect(errors).toEqual([])
  })

  it('exige geometría (stack y reach)', () => {
    expect(validate(row({ stack: '', reach: '' })).errors.map((e) => e.message)).toEqual([
      'stack es obligatorio y está vacío',
      'reach es obligatorio y está vacío',
    ])
  })

  it('rechaza marcas que no están en brands.csv', () => {
    expect(validate(row({ brand: 'Inventada' })).errors[0].message).toBe('la marca "Inventada" no está en brands.csv')
  })

  it('exige height_min < height_max y acepta intervalos abiertos', () => {
    expect(validate(row({ height_min: '180', height_max: '180' })).errors[0].message).toMatch(/debe ser menor/)
    const open = validate(row({ height_min: '188', height_max: '', height_original: '188 <' }))
    expect(open.errors).toEqual([])
    expect(open.bikes[0]).toMatchObject({ height_min: 188, height_max: null })
  })

  it('exige el valor original y la unidad si hay altura', () => {
    expect(validate(row({ height_original: '', height_unit: 'm' })).errors.map((e) => e.message)).toEqual([
      'height_original es obligatorio si hay altura (valor publicado tal cual)',
      'height_unit "m" no válida (cm / in / ft-in)',
    ])
  })

  it('valida categoría, números, URLs, fecha y columnas', () => {
    const msgs = validate(
      row({ category: 'bmx' }),
      row({ size_label: 'L', price_eur: 'mil' }),
      row({ size_label: 'XL', source_url: 'web de la marca' }),
      row({ size_label: 'S', loaded_at: '01/01/2026' }),
      'MarcaFicticiaA,corta',
      row({ size_label: 'XS', extraction_method: 'ocr', geometry_raw: '{roto' }),
    ).errors.map((e) => `${e.line}: ${e.message}`)
    expect(msgs[0]).toBe('2: category "bmx" no válida (carretera / gravel / mtb / emtb)')
    expect(msgs[1]).toBe('3: price_eur "mil" no es un número positivo')
    expect(msgs[2]).toBe('4: source_url no es una URL http(s)')
    expect(msgs[3]).toBe('5: loaded_at "01/01/2026" no es una fecha AAAA-MM-DD')
    expect(msgs[4]).toBe('6: tiene 2 columnas, se esperaban 21')
    expect(msgs.slice(-2)).toEqual([
      '7: extraction_method "ocr" no válido (html / json / pdf / vision)',
      '7: geometry_raw no es JSON',
    ])
  })

  it('detecta filas duplicadas', () => {
    expect(validate(row(), row()).errors[0].message).toMatch(/fila duplicada.*línea 2/)
  })

  it('detecta rangos de altura que bajan al subir de talla (orden por size_cm)', () => {
    const { errors } = validate(
      row({ size_label: 'L', size_cm: '56', height_min: '168', height_max: '185' }),
      row({ size_label: 'M', size_cm: '54', height_min: '170', height_max: '180' }),
    )
    expect(errors).toEqual([{ line: 2, message: 'height_min baja al subir de talla: M=170 (línea 3) → L=168' }])
  })

  it('ordena por la talla normalizada si falta size_cm y salta huecos de altura', () => {
    const { errors } = validate(
      row({ size_label: 'SM', size_normalized: 'S', size_cm: '', height_min: '165', height_max: '175' }),
      row({ size_label: 'MD', size_normalized: 'M', size_cm: '', height_min: '', height_max: '', height_original: '', height_unit: '' }),
      row({ size_label: 'LG', size_normalized: 'L', size_cm: '', height_min: '160', height_max: '185' }),
    )
    expect(errors.map((e) => e.message)).toEqual(['height_min baja al subir de talla: SM=165 (línea 2) → LG=160'])
  })

  it('sin size_cm ni letra conocida usa el orden del fichero', () => {
    const { errors } = validate(
      row({ size_label: '1', size_normalized: '1', size_cm: '', height_min: '170', height_max: '180' }),
      row({ size_label: '2', size_normalized: '2', size_cm: '', height_min: '165', height_max: '178' }),
    )
    expect(errors.map((e) => e.line)).toEqual([3, 3])
  })
})

describe('tallas', () => {
  it('normaliza etiquetas y las ordena', () => {
    expect(canonicalSizeLabel(' 2xs ')).toBe('XXS')
    expect(canonicalSizeLabel(' m/l ')).toBe('M/L')
    // "SM" es S en unas marcas y S/M en otras: sin equivalencia publicada no se normaliza.
    expect(canonicalSizeLabel('sm')).toBe('SM')
    expect(sizeRank('SM')).toBeNull()
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

  it('con minBrands deja solo las tallas que publican al menos esas marcas', () => {
    const { bikes } = validateBikes(parseCsv(fixture('bikes-ficticio.csv')), BRANDS)
    expect(buildSizeTable(bikes, 2).carretera.map((r) => r.size_label)).toEqual(['M'])
    expect(buildSizeTable(bikes, 2).gravel).toEqual([])
  })

  it('ignora filas sin rango de altura o con intervalo abierto', () => {
    const { bikes } = validate(
      row({ height_min: '', height_max: '', height_original: '', height_unit: '' }),
      row({ size_label: 'L', size_normalized: 'L', height_min: '188', height_max: '', height_original: '188 <' }),
    )
    expect(buildSizeTable(bikes)).toEqual({ carretera: [], gravel: [], mtb: [], emtb: [] })
  })

  it('agrupa por la talla normalizada (equivalencia publicada) y omite las tallas sin letra', () => {
    const { errors, bikes } = validate(
      row({ size_label: 'MD', size_normalized: 'M' }),
      row({ model: 'Solo cm', size_label: '56', size_normalized: '', size_cm: '56' }),
    )
    expect(errors).toEqual([])
    expect(bikes[1].size_normalized).toBeNull()
    expect(buildSizeTable(bikes).carretera.map((r) => r.size_label)).toEqual(['M'])
  })
})
