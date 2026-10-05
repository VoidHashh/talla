// Solo variantes de notación de la misma talla. Etiquetas propias de cada marca ("SM", "MD", "ML"…)
// no se interpretan aquí: sus equivalencias, si la marca las publica, están en data/size-labels.csv.
const ALIASES: Record<string, string> = {
  XXXS: '3XS',
  '2XS': 'XXS',
  '2XL': 'XXL',
  XXXL: '3XL',
}

const ORDER = ['3XS', 'XXS', 'XS', 'S', 'S/M', 'M', 'M/L', 'L', 'XL', 'XXL', '3XL']

/** Normaliza la notación de una talla ("2xs" → "XXS", " m/l " → "M/L"). */
export function canonicalSizeLabel(label: string): string {
  const clean = label.trim().toUpperCase().replace(/\s+/g, '')
  return ALIASES[clean] ?? clean
}

/** Posición de una talla en letras, o null si la etiqueta no es una letra conocida. */
export function sizeRank(label: string): number | null {
  const i = ORDER.indexOf(canonicalSizeLabel(label))
  return i === -1 ? null : i
}
