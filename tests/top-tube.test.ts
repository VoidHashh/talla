// Tests de scripts/lib/top-tube.ts. Etiquetas con el formato que usan las marcas; valores FICTICIOS.
import { describe, expect, it } from 'vitest'
import { effectiveTopTube } from '../scripts/lib/top-tube.ts'

const g = (o: Record<string, string>) => JSON.stringify(o)

describe('effectiveTopTube', () => {
  it('lee la cota marcada como efectiva, horizontal o virtual', () => {
    expect(effectiveTopTube(g({ 'Stack': '550', '2 Top Tube (EFF)': '535,9' }))).toBe(535.9)
    expect(effectiveTopTube(g({ 'Longitud Tubo Superior, Hrz.': '544' }))).toBe(544)
    expect(effectiveTopTube(g({ Tubo_x: '1', 'Tubo Horizontal': '550 mm' }))).toBe(550)
    expect(effectiveTopTube(g({ '(Virtual) TT (O)': '530' }))).toBe(530)
  })

  it('convierte de cm a mm (por etiqueta, por valor o porque es < 100)', () => {
    expect(effectiveTopTube(g({ 'B Top Tube Horizontal (cm)': '54.4' }))).toBe(544)
    expect(effectiveTopTube(g({ 'E — Tubo superior efectivo': '51.7' }))).toBe(517)
  })

  it('no usa un "Top Tube" ambiguo, el real, ángulos ni distancias a otro punto', () => {
    expect(effectiveTopTube(g({ 'Top Tube': '550' }))).toBeNull()
    expect(effectiveTopTube(g({ 'C Top Tube Actual (cm)': '52' }))).toBeNull()
    expect(effectiveTopTube(g({ 'E Seat Tube Angle Effective': '73.5' }))).toBeNull()
    expect(effectiveTopTube(g({ 'H BB center to toptube center': '600' }))).toBeNull()
    expect(effectiveTopTube(g({ 'Altura Tubo Superior Bici': '780' }))).toBeNull()
  })

  it('devuelve null sin geometría o con JSON roto', () => {
    expect(effectiveTopTube('')).toBeNull()
    expect(effectiveTopTube('{roto')).toBeNull()
  })
})
