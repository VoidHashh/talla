// Tests de src/lib/fit.ts (fórmulas publicadas; medidas ficticias).
import { describe, expect, it } from 'vitest'
import { computeFit, stemLength, torsoLength } from '../src/lib/fit.ts'

describe('computeFit', () => {
  it('altura de sillín LeMond: entrepierna × 0,883 en todas las categorías', () => {
    expect(computeFit(80, 'carretera', {}).saddleHeight).toMatchObject({ value: 70.6, indicative: false })
    expect(computeFit(80, 'mtb', {}).saddleHeight.value).toBe(70.6)
  })

  it('alcance total (torso + brazo) / 2 + 4, orientativo, solo con esternón y brazo', () => {
    // torso = 145 − 82 = 63; (63 + 61) / 2 + 4 = 66
    const fit = computeFit(82, 'carretera', { sternum: 145, arm: 61 })
    expect(fit.totalReach).toMatchObject({ value: 66, indicative: true })
    expect(computeFit(82, 'carretera', { sternum: 145 }).totalReach).toBeNull()
  })

  it('manillar ≈ ancho de hombros, orientativo', () => {
    expect(computeFit(82, 'gravel', { shoulders: 41 }).barWidth).toMatchObject({ value: 41, indicative: true })
    expect(computeFit(82, 'gravel', {}).barWidth).toBeNull()
  })

  it('en MTB y e-MTB solo da la altura de sillín (las fórmulas de alcance y manillar son de carretera)', () => {
    const fit = computeFit(82, 'emtb', { sternum: 145, arm: 61, shoulders: 41 })
    expect(fit.totalReach).toBeNull()
    expect(fit.barWidth).toBeNull()
  })
})

describe('torsoLength y stemLength', () => {
  it('torso = esternón − entrepierna', () => {
    expect(torsoLength(145, 82)).toBe(63)
  })

  it('potencia = alcance total − tubo horizontal efectivo, en mm', () => {
    expect(stemLength(66, 548)).toBe(112)
    expect(stemLength(66, null)).toBeNull()
    expect(stemLength(null, 548)).toBeNull()
  })
})
