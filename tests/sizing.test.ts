// Tests de src/lib/sizing.ts. Todos los datos son FICTICIOS: ver tests/fixtures/sizing-ficticio.ts.
import { describe, expect, it } from 'vitest'
import { geometryScore, heightFits, rankBikes, recommendSize, referenceGeometry, sizeStep } from '../src/lib/sizing.ts'
import { FAKE_SIZE_TABLE, fakeBike } from './fixtures/sizing-ficticio.ts'

const input = { height: 175, inseam: 82, category: 'carretera' as const }

describe('recommendSize', () => {
  const size = (height: number, category: 'carretera' | 'gravel' | 'mtb' = 'carretera') =>
    recommendSize(FAKE_SIZE_TABLE, { height, category })?.size_label ?? null

  it('devuelve una sola talla: la que contiene la altura', () => {
    expect(size(165)).toBe('S')
    expect(size(185)).toBe('L')
  })

  it('si la altura cae en dos tallas, la del centro más cercano', () => {
    // S 160-172 (centro 166), M 170-181 (centro 175.5): 171 está más cerca del centro de M.
    expect(size(171)).toBe('M')
    expect(size(170)).toBe('S')
  })

  it('incluye los extremos del rango', () => {
    expect(size(160)).toBe('S')
    expect(size(192)).toBe('L')
  })

  it('en un hueco entre tallas elige la más cercana', () => {
    // M acaba en 181 y L empieza en 181.5.
    expect(size(181.2)).toBe('M')
    expect(size(181.4)).toBe('L')
  })

  it('no devuelve nada fuera de la tabla o sin datos de la categoría', () => {
    expect(size(150)).toBeNull()
    expect(size(193)).toBeNull()
    expect(size(175, 'mtb')).toBeNull()
  })

  it('usa la tabla de la categoría pedida', () => {
    expect(size(169, 'gravel')).toBe('M')
  })
})

/**
 * Catálogo ficticio de carretera:
 * - MarcaFicticiaA (rangos publicados): S 530/380 (160-170), M 550/390 (170-180), L 570/400 (180-190).
 * - MarcaFicticiaB (rangos publicados): S 540/382 (162-172), M 560/392 (172-182).
 * - MarcaFicticiaC (sin rangos): 545/388 y 575/400.
 * Para 175 cm: referencia = mediana(A: 550/390, B: 560/392) = 555/391. Salto de talla = hypot(20, 10).
 */
const A = { brand: 'MarcaFicticiaA', family: 'Familia A' }
const B = { brand: 'MarcaFicticiaB', family: 'Familia B' }
const C = { brand: 'MarcaFicticiaC', family: 'Familia C', height_min: null, height_max: null }
const CATALOG = [
  fakeBike({ ...A, model: 'A1', size_label: 'S', stack: 530, reach: 380, height_min: 160, height_max: 170 }),
  fakeBike({ ...A, model: 'A1', size_label: 'M', stack: 550, reach: 390, height_min: 170, height_max: 180 }),
  fakeBike({ ...A, model: 'A1', size_label: 'L', stack: 570, reach: 400, height_min: 180, height_max: 190 }),
  fakeBike({ ...B, model: 'B1', size_label: 'S', stack: 540, reach: 382, height_min: 162, height_max: 172 }),
  fakeBike({ ...B, model: 'B1', size_label: 'M', stack: 560, reach: 392, height_min: 172, height_max: 182 }),
  fakeBike({ ...C, model: 'C1', size_label: 'M', stack: 545, reach: 388 }),
  fakeBike({ ...C, model: 'C1', size_label: 'L', stack: 575, reach: 400 }),
]
const STEP = Math.hypot(20, 10)
const models = (rows: { model: string; size_label: string }[]) => rows.map((r) => `${r.model} ${r.size_label}`)

describe('heightFits', () => {
  it('incluye los extremos y trata un extremo vacío como sin límite', () => {
    expect(heightFits({ height_min: 170, height_max: 180 }, 170)).toBe(true)
    expect(heightFits({ height_min: 170, height_max: 180 }, 180.5)).toBe(false)
    expect(heightFits({ height_min: 188, height_max: null }, 205)).toBe(true)
    expect(heightFits({ height_min: null, height_max: 155 }, 156)).toBe(false)
    expect(heightFits({ height_min: null, height_max: null }, 120)).toBe(true)
  })
})

describe('referenceGeometry', () => {
  it('hace la mediana por marca y luego entre marcas de las tallas publicadas para esa altura', () => {
    expect(referenceGeometry(CATALOG, 'carretera', 175)).toEqual({ stack: 555, reach: 391 })
  })

  it('no usa marcas sin rango publicado ni otras categorías', () => {
    const gravel = fakeBike({ ...A, category: 'gravel', stack: 900, reach: 900 })
    expect(referenceGeometry([...CATALOG, gravel], 'carretera', 175)).toEqual({ stack: 555, reach: 391 })
  })

  it('admite intervalos abiertos y devuelve null si ninguna marca cubre la altura', () => {
    const tall = fakeBike({ ...A, size_label: 'XL', stack: 600, reach: 410, height_min: 188, height_max: null })
    expect(referenceGeometry([...CATALOG, tall], 'carretera', 200)).toEqual({ stack: 600, reach: 410 })
    expect(referenceGeometry(CATALOG, 'carretera', 140)).toBeNull()
  })
})

describe('sizeStep', () => {
  it('es la distancia mediana entre tallas consecutivas del mismo cuadro, sin contar montajes repetidos', () => {
    const repeated = fakeBike({ ...A, model: 'A2', size_label: 'M', stack: 550, reach: 390 })
    expect(sizeStep([...CATALOG, repeated], 'carretera')).toBeCloseTo(STEP, 6)
    expect(sizeStep(CATALOG, 'mtb')).toBeNull()
  })
})

describe('geometryScore', () => {
  it('vale 100 en la referencia, 0 a un salto de talla y es lineal', () => {
    const ref = { stack: 555, reach: 391 }
    expect(geometryScore(ref, ref, 20)).toBe(100)
    expect(geometryScore({ stack: 575, reach: 391 }, ref, 20)).toBe(0)
    expect(geometryScore({ stack: 545, reach: 391 }, ref, 20)).toBe(50)
  })
})

describe('rankBikes', () => {
  it('puntúa por cercanía a la geometría de referencia, también a las marcas sin rangos', () => {
    const ranked = rankBikes(CATALOG, input)
    expect(models(ranked)).toEqual(['A1 M', 'B1 M', 'C1 M'])
    expect(ranked[0].score).toBeCloseTo(100 * (1 - Math.hypot(5, 1) / STEP), 6)
    expect(ranked[2].score).toBeCloseTo(100 * (1 - Math.hypot(10, 3) / STEP), 6)
  })

  it('respeta el rango de altura de la marca aunque la geometría se acerque', () => {
    // La L de A (180-190) no admite 175 cm; tampoco la S (160-170).
    expect(models(rankBikes(CATALOG, input)).filter((m) => m.startsWith('A1'))).toEqual(['A1 M'])
  })

  it('trata un extremo de altura vacío como sin límite', () => {
    const open = fakeBike({ brand: 'MarcaFicticiaB', family: 'Abierta', model: 'B2', stack: 556, reach: 391, height_min: 170, height_max: null })
    expect(models(rankBikes([...CATALOG, open], input))[0]).toBe('B2 M')
    const tooShort = { ...open, height_min: 176 }
    expect(models(rankBikes([...CATALOG, tooShort], input))).not.toContain('B2 M')
  })

  it('deja fuera las tallas a más de un salto de talla', () => {
    const far = fakeBike({ ...C, family: 'Lejos', model: 'C2', stack: 600, reach: 420 })
    expect(models(rankBikes([...CATALOG, far], input))).not.toContain('C2 M')
  })

  it('deja una bici por familia: la talla de mejor score en su montaje más barato, con nº de montajes', () => {
    const cara = fakeBike({ ...A, model: 'A1 Pro', size_label: 'M', stack: 550, reach: 390, height_min: 170, height_max: 180, price_eur: 5000 })
    const ranked = rankBikes([...CATALOG, cara], input)
    expect(ranked.filter((b) => b.brand === 'MarcaFicticiaA')).toEqual([
      expect.objectContaining({ model: 'A1', size_label: 'M', price_eur: 2000, variants: 2 }),
    ])
  })

  it('filtra por presupuesto (incluido el límite) y solo cuenta los montajes dentro de él', () => {
    const cara = fakeBike({ ...A, model: 'A1 Pro', size_label: 'M', stack: 550, reach: 390, price_eur: 5000 })
    const ranked = rankBikes([...CATALOG, cara], { ...input, budget: 2000 })
    expect(ranked.find((b) => b.brand === 'MarcaFicticiaA')).toMatchObject({ model: 'A1', variants: 1 })
    expect(rankBikes(CATALOG, { ...input, budget: 1999 })).toEqual([])
  })

  it('filtra por categoría', () => {
    expect(rankBikes(CATALOG, { ...input, category: 'gravel' })).toEqual([])
  })

  it('ordena por score descendente y desempata por precio ascendente', () => {
    const twin = fakeBike({ ...C, family: 'Gemela', model: 'C3', stack: 545, reach: 388, price_eur: 1000 })
    expect(models(rankBikes([...CATALOG, twin], input))).toEqual(['A1 M', 'B1 M', 'C3 M', 'C1 M'])
  })

  it('devuelve como mucho 5', () => {
    const many = Array.from({ length: 8 }, (_, i) =>
      fakeBike({ ...C, family: `F${i}`, model: `Ficticio ${i}`, stack: 555, reach: 391, price_eur: 1000 + i }),
    )
    const ranked = rankBikes([...CATALOG, ...many], input)
    expect(ranked.map((b) => b.model)).toEqual(['Ficticio 0', 'Ficticio 1', 'Ficticio 2', 'Ficticio 3', 'Ficticio 4'])
  })

  it('excluye filas sin precio o sin enlace de producto', () => {
    const sinPrecio = fakeBike({ ...C, family: 'X', model: 'Sin precio', stack: 555, reach: 391, price_eur: null })
    const sinEnlace = fakeBike({ ...C, family: 'Y', model: 'Sin enlace', stack: 555, reach: 391, product_url: null })
    expect(models(rankBikes([...CATALOG, sinPrecio, sinEnlace], input))).toEqual(['A1 M', 'B1 M', 'C1 M'])
  })

  it('devuelve lista vacía si no hay datos o ninguna marca publica talla para esa altura', () => {
    expect(rankBikes([], input)).toEqual([])
    expect(rankBikes(CATALOG, { ...input, height: 140 })).toEqual([])
  })
})
