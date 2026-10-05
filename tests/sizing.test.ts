// Tests de src/lib/sizing.ts. Todos los datos son FICTICIOS: ver tests/fixtures/sizing-ficticio.ts.
import { describe, expect, it } from 'vitest'
import { rankBikes, recommendSize, sizeScore } from '../src/lib/sizing.ts'
import { FAKE_SIZE_TABLE, fakeBike } from './fixtures/sizing-ficticio.ts'

const labels = (rows: { size_label: string }[]) => rows.map((r) => r.size_label)
const input = { height: 175, inseam: 82, category: 'carretera' as const }

describe('recommendSize', () => {
  it('devuelve la talla cuyo rango contiene la altura', () => {
    expect(labels(recommendSize(FAKE_SIZE_TABLE, { height: 165, category: 'carretera' }))).toEqual(['S'])
    expect(labels(recommendSize(FAKE_SIZE_TABLE, { height: 185, category: 'carretera' }))).toEqual(['L'])
  })

  it('devuelve las dos tallas si la altura cae en ambas', () => {
    expect(labels(recommendSize(FAKE_SIZE_TABLE, { height: 171, category: 'carretera' }))).toEqual(['S', 'M'])
  })

  it('incluye los extremos del rango', () => {
    expect(labels(recommendSize(FAKE_SIZE_TABLE, { height: 160, category: 'carretera' }))).toEqual(['S'])
    expect(labels(recommendSize(FAKE_SIZE_TABLE, { height: 192, category: 'carretera' }))).toEqual(['L'])
  })

  it('no devuelve nada fuera de rango o en un hueco entre tallas', () => {
    expect(recommendSize(FAKE_SIZE_TABLE, { height: 150, category: 'carretera' })).toEqual([])
    expect(recommendSize(FAKE_SIZE_TABLE, { height: 181.2, category: 'carretera' })).toEqual([])
    expect(recommendSize(FAKE_SIZE_TABLE, { height: 175, category: 'mtb' })).toEqual([])
  })

  it('usa la tabla de la categoría pedida', () => {
    expect(labels(recommendSize(FAKE_SIZE_TABLE, { height: 169, category: 'gravel' }))).toEqual(['M'])
  })
})

describe('sizeScore', () => {
  it('vale 100 en el centro, 0 en los extremos y es lineal', () => {
    expect(sizeScore(175, 170, 180)).toBe(100)
    expect(sizeScore(170, 170, 180)).toBe(0)
    expect(sizeScore(180, 170, 180)).toBe(0)
    expect(sizeScore(177.5, 170, 180)).toBe(50)
  })
})

describe('rankBikes', () => {
  it('filtra por categoría', () => {
    const bikes = [fakeBike({ model: 'Carretera' }), fakeBike({ model: 'Gravel', category: 'gravel' })]
    expect(rankBikes(bikes, input).map((b) => b.model)).toEqual(['Carretera'])
  })

  it('filtra por presupuesto (incluido el límite) solo si se indica', () => {
    const bikes = [
      fakeBike({ model: 'Barata', price_eur: 1500 }),
      fakeBike({ model: 'Justa', price_eur: 2000 }),
      fakeBike({ model: 'Cara', price_eur: 2001 }),
    ]
    expect(rankBikes(bikes, { ...input, budget: 2000 }).map((b) => b.model)).toEqual(['Barata', 'Justa'])
    expect(rankBikes(bikes, input)).toHaveLength(3)
  })

  it('solo incluye tallas cuyo rango contiene la altura (extremos incluidos)', () => {
    const bikes = [
      fakeBike({ model: 'Dentro', height_min: 170, height_max: 180 }),
      fakeBike({ model: 'Borde', height_min: 175, height_max: 185 }),
      fakeBike({ model: 'Fuera', height_min: 176, height_max: 186 }),
    ]
    expect(rankBikes(bikes, input).map((b) => b.model)).toEqual(['Dentro', 'Borde'])
  })

  it('calcula el score con la fórmula de CLAUDE.md', () => {
    const [bike] = rankBikes([fakeBike({ height_min: 168, height_max: 180 })], input)
    // centro 174, semirango 6 → 100 × (1 − 1/6)
    expect(bike.score).toBeCloseTo(83.333, 3)
  })

  it('deja una sola talla por modelo: la de mayor score', () => {
    const bikes = [
      fakeBike({ size_label: 'S', height_min: 160, height_max: 176 }),
      fakeBike({ size_label: 'M', height_min: 170, height_max: 180 }),
      fakeBike({ model: 'Otro', size_label: 'M', height_min: 170, height_max: 182 }),
    ]
    const ranked = rankBikes(bikes, input)
    expect(ranked.map((b) => `${b.model} ${b.size_label}`)).toEqual(['Modelo Ficticio M', 'Otro M'])
  })

  it('ordena por score descendente y desempata por precio ascendente', () => {
    const bikes = [
      fakeBike({ model: 'Score bajo', height_min: 172, height_max: 190, price_eur: 500 }),
      fakeBike({ model: 'Empate cara', price_eur: 3000 }),
      fakeBike({ model: 'Empate barata', price_eur: 1000 }),
    ]
    expect(rankBikes(bikes, input).map((b) => b.model)).toEqual(['Empate barata', 'Empate cara', 'Score bajo'])
  })

  it('devuelve como mucho 5', () => {
    const bikes = Array.from({ length: 8 }, (_, i) => fakeBike({ model: `Ficticio ${i}`, price_eur: 1000 + i }))
    const ranked = rankBikes(bikes, input)
    expect(ranked.map((b) => b.model)).toEqual(['Ficticio 0', 'Ficticio 1', 'Ficticio 2', 'Ficticio 3', 'Ficticio 4'])
  })

  it('excluye filas sin rango de altura, precio o enlace de producto', () => {
    const bikes = [
      fakeBike({ model: 'Sin rango', height_min: null, height_max: null }),
      fakeBike({ model: 'Sin precio', price_eur: null }),
      fakeBike({ model: 'Sin enlace', product_url: null }),
      fakeBike({ model: 'Sin geometría', stack: null, reach: null, size_cm: null }),
    ]
    expect(rankBikes(bikes, input).map((b) => b.model)).toEqual(['Sin geometría'])
  })

  it('devuelve lista vacía si no hay datos', () => {
    expect(rankBikes([], input)).toEqual([])
  })
})
