// Bike fit premium (decidido con el usuario). Solo fórmulas publicadas; cada resultado lleva su fuente para
// citarla en la UI. Ninguna convierte las medidas del cuerpo en un stack/reach "ideal": no hay fórmula publicada
// fiable para eso (ver CLAUDE.md). El orden del top 5 no depende de esto.
import type { Category } from './types.ts'

/** Medidas opcionales del bike fit, en cm. */
export interface FitMeasures {
  /** Del suelo a la hendidura del esternón, de pie y descalzo. */
  sternum?: number
  /** Del acromion (punta del hombro) al centro del puño cerrado, con el brazo estirado. */
  arm?: number
  /** Entre los dos acromiones. */
  shoulders?: number
}

export interface FitValue {
  value: number
  /** Cómo se calcula, para mostrarlo tal cual. */
  formula: string
  source: string
  /** Fórmula con una sola fuente o regla general: se presenta como orientativa. */
  indicative: boolean
}

export interface FitResult {
  /** Eje del pedalier → parte alta del sillín, en cm. */
  saddleHeight: FitValue
  /** Tubo horizontal efectivo + potencia, en cm. Solo carretera/gravel, con esternón y brazo. */
  totalReach: FitValue | null
  /** Ancho de manillar centro a centro, en cm. Solo carretera/gravel, con hombros. */
  barWidth: FitValue | null
}

export const SOURCES = {
  lemond: 'Método LeMond/Guimard',
  competitiveCyclist: 'Método clásico de Competitive Cyclist',
  shoulders: 'Regla habitual de fitters y Shimano (acromion a acromion)',
} as const

const DROP_BAR: readonly Category[] = ['carretera', 'gravel']
const round1 = (n: number) => Math.round(n * 10) / 10

/** Torso = altura del esternón − entrepierna (Competitive Cyclist mide el torso de la entrepierna al esternón). */
export const torsoLength = (sternum: number, inseam: number) => sternum - inseam

export function computeFit(inseam: number, category: Category, m: FitMeasures): FitResult {
  const dropBar = DROP_BAR.includes(category)
  const saddleHeight: FitValue = {
    value: round1(inseam * 0.883),
    formula: `${inseam} cm × 0,883`,
    source: SOURCES.lemond,
    indicative: false,
  }
  let totalReach: FitValue | null = null
  if (dropBar && m.sternum !== undefined && m.arm !== undefined) {
    const torso = torsoLength(m.sternum, inseam)
    totalReach = {
      value: round1((torso + m.arm) / 2 + 4),
      formula: `(torso ${round1(torso)} + brazo ${m.arm}) / 2 + 4`,
      source: SOURCES.competitiveCyclist,
      indicative: true,
    }
  }
  const barWidth: FitValue | null =
    dropBar && m.shoulders !== undefined
      ? { value: m.shoulders, formula: `hombros ${m.shoulders} cm`, source: SOURCES.shoulders, indicative: true }
      : null
  return { saddleHeight, totalReach, barWidth }
}

/**
 * Potencia orientativa en mm para una talla concreta: alcance total − tubo horizontal efectivo publicado por la
 * marca. null si falta cualquiera de los dos.
 */
export function stemLength(totalReachCm: number | null | undefined, topTubeEffMm: number | null): number | null {
  if (totalReachCm == null || topTubeEffMm === null) return null
  return Math.round(totalReachCm * 10 - topTubeEffMm)
}
