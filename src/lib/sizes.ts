const ALIASES: Record<string, string> = {
  XXXS: '3XS',
  '2XS': 'XXS',
  SM: 'S/M',
  ML: 'M/L',
  '2XL': 'XXL',
  XXXL: '3XL',
}

const ORDER = ['3XS', 'XXS', 'XS', 'S', 'S/M', 'M', 'M/L', 'L', 'XL', 'XXL', '3XL']

/** Normaliza una etiqueta de talla ("2xs" → "XXS", "ml" → "M/L"). */
export function canonicalSizeLabel(label: string): string {
  const clean = label.trim().toUpperCase().replace(/\s+/g, '')
  return ALIASES[clean] ?? clean
}

/** Posición de una talla en letras, o null si la etiqueta no es una letra conocida. */
export function sizeRank(label: string): number | null {
  const i = ORDER.indexOf(canonicalSizeLabel(label))
  return i === -1 ? null : i
}
