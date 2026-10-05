// Lector CSV mínimo (RFC 4180: comillas, comillas escapadas, saltos de línea dentro de comillas).
// Propio para no añadir dependencias: los CSV del proyecto son pequeños y controlados.

export interface CsvRecord {
  /** Línea del fichero donde empieza el registro (la cabecera es la 1). */
  line: number
  values: Record<string, string>
  fieldCount: number
}

export interface CsvTable {
  header: string[]
  records: CsvRecord[]
}

function parseRows(text: string): { line: number; fields: string[] }[] {
  const rows: { line: number; fields: string[] }[] = []
  let fields: string[] = []
  let field = ''
  let inQuotes = false
  let line = 1
  let rowLine = 1
  let i = text.charCodeAt(0) === 0xfeff ? 1 : 0

  const endRow = () => {
    fields.push(field)
    const isBlank = fields.length === 1 && fields[0].trim() === ''
    if (!isBlank) rows.push({ line: rowLine, fields })
    fields = []
    field = ''
  }

  for (; i < text.length; i++) {
    const c = text[i]
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"'
          i++
        } else {
          inQuotes = false
        }
      } else {
        if (c === '\n') line++
        field += c
      }
    } else if (c === '"') {
      inQuotes = true
    } else if (c === ',') {
      fields.push(field)
      field = ''
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++
      endRow()
      line++
      rowLine = line
    } else {
      field += c
    }
  }
  if (field !== '' || fields.length > 0) endRow()
  return rows
}

export function parseCsv(text: string): CsvTable {
  const rows = parseRows(text)
  if (rows.length === 0) return { header: [], records: [] }
  const header = rows[0].fields.map((h) => h.trim())
  const records = rows.slice(1).map(({ line, fields }) => {
    const values: Record<string, string> = {}
    header.forEach((h, i) => {
      values[h] = (fields[i] ?? '').trim()
    })
    return { line, values, fieldCount: fields.length }
  })
  return { header, records }
}
