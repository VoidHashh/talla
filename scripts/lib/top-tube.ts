// Tubo horizontal efectivo de una talla, leído de su geometría publicada (geometry_raw). Solo se usa una cota que
// la marca identifica explícitamente como efectiva / horizontal / virtual: un "Top Tube" a secas puede ser el tubo
// real (inclinado) y daría una potencia equivocada. Sin ese dato, null.

const TOP_TUBE = /top\s*-?\s*tube|toptube|tubo\s+(superior|horizontal)|horizontal\s+tube|\btt\b/i
const EFFECTIVE = /efectiv|effective|\beff\b|horizontal|\bhrz\b|virtual/i
const NOT_LENGTH = /angle|ángulo|seat|reach|center|centre|altura|height|stack|actual/i

/** Longitud en mm del tubo horizontal efectivo, o null si la marca no lo publica como tal. */
export function effectiveTopTube(geometryRaw: string): number | null {
  if (!geometryRaw) return null
  let geometry: Record<string, string>
  try {
    geometry = JSON.parse(geometryRaw)
  } catch {
    return null
  }
  for (const [key, value] of Object.entries(geometry)) {
    if (!TOP_TUBE.test(key) || !EFFECTIVE.test(key) || NOT_LENGTH.test(key)) continue
    const m = String(value).match(/\d+(?:[.,]\d+)?/)
    if (!m) continue
    const n = Number(m[0].replace(',', '.'))
    // En cm si lo dice la etiqueta o el valor, o si es < 100 (ningún tubo horizontal mide menos de 100 mm; Trek
    // publica "51.7" sin unidad).
    const mm = /\bcm\b|\(cm\)/i.test(key) || /\bcm\b/i.test(String(value)) || n < 100 ? n * 10 : n
    // Rango plausible de un tubo horizontal efectivo de carretera/gravel/MTB en mm.
    if (mm >= 400 && mm <= 750) return Math.round(mm * 10) / 10
  }
  return null
}
