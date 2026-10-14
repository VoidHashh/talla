// Pasa filas de data/staging/<marca>.csv a data/bikes.csv, solo para las marcas que se indiquen.
//
//   npm run promote                      → informe por marca (no escribe nada)
//   npm run promote -- Canyon Trek       → sustituye en bikes.csv las filas de esas marcas por las de staging
//
// Todo o nada: si el bikes.csv resultante no pasa la validación, no se escribe.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { parseCsv, toCsvLine, type CsvTable } from './lib/csv.ts'
import { BIKES_CSV, BRANDS_CSV, ROOT } from './lib/load.ts'
import { BIKE_COLUMNS, validateBikes, validateBrands, type RowError } from './lib/validate-core.ts'
import { buildSizeTable } from './lib/size-table.ts'
import { formatSize } from '../src/lib/format.ts'
import type { Bike } from '../src/lib/types.ts'

const STAGING = `${ROOT}data/staging/`

interface Staged {
  file: string
  brand: string
  table: CsvTable
  status: string
}

function loadStaging(): Staged[] {
  const out: Staged[] = []
  for (const file of readdirSync(STAGING).filter((f) => f.endsWith('.csv')).sort()) {
    const table = parseCsv(readFileSync(STAGING + file, 'utf8'))
    let status = ''
    try {
      const s = JSON.parse(readFileSync(STAGING + file.replace(/\.csv$/, '.summary.json'), 'utf8'))
      status = s.blocked_reason ? 'bloqueada' : (s.warnings?.length || s.failures?.length || s.rejected?.length) ? 'con avisos' : 'OK'
    } catch {
      status = '¿sin resumen?'
    }
    const brand = table.records[0]?.values.brand ?? ''
    out.push({ file, brand, table, status })
  }
  return out
}

const pad = (v: string | number, n: number) => String(v).padEnd(n)
const padL = (v: string | number, n: number) => String(v).padStart(n)

function report(staged: Staged[], brands: Set<string>, current: CsvTable) {
  const inBikes = new Map<string, number>()
  for (const r of current.records) inBikes.set(r.values.brand, (inBikes.get(r.values.brand) ?? 0) + 1)

  console.log(
    `${pad('marca', 14)}${pad('extractor', 12)}${padL('tallas', 7)}${padL('modelos', 9)}${padL('altura', 8)}${padL('abierta', 9)}` +
      `${padL('precio', 8)}${padL('errores', 9)}${padL('en bikes', 10)}`,
  )
  const all: Bike[] = []
  for (const s of staged) {
    if (s.table.records.length === 0) {
      console.log(`${pad(s.brand || s.file, 14)}${pad(s.status, 12)}${padL(0, 7)}`)
      continue
    }
    const { errors, bikes } = validateBikes(s.table, brands)
    all.push(...bikes)
    const rows = s.table.records.map((r) => r.values)
    const models = new Set(rows.map((r) => r.model)).size
    const closed = rows.filter((r) => r.height_min && r.height_max).length
    const open = rows.filter((r) => !!r.height_min !== !!r.height_max).length
    const priced = rows.filter((r) => r.price_eur).length
    console.log(
      `${pad(s.brand, 14)}${pad(s.status, 12)}${padL(rows.length, 7)}${padL(models, 9)}${padL(closed, 8)}${padL(open, 9)}` +
        `${padL(priced, 8)}${padL(errors.length, 9)}${padL(inBikes.get(s.brand) ?? 0, 10)}`,
    )
    if (errors.length > 0 && bikes.length === 0) {
      for (const e of errors.slice(0, 3)) console.log(`    línea ${e.line}: ${e.message}`)
      if (errors.length > 3) console.log(`    … y ${errors.length - 3} más`)
    }
  }

  // Vista previa de la tabla gratis si se pasaran todas las marcas válidas.
  console.log('')
  console.log('Tabla gratis con todas las marcas válidas (talla: altura mediana · marcas):')
  for (const [category, rows] of Object.entries(buildSizeTable(all))) {
    const cells = rows.map((r) => `${formatSize(r)} ${r.height_min}-${r.height_max} (${r.brands})`)
    console.log(`  ${pad(category, 10)} ${cells.join(' | ')}`)
  }
}

function promote(names: string[], staged: Staged[], brands: Set<string>, current: CsvTable) {
  const key = (s: string) => s.toLowerCase().replace(/[\s_-]+/g, '')
  const chosen: Staged[] = []
  for (const name of names) {
    const s = staged.find((x) => key(x.brand) === key(name) || key(x.file.replace(/\.csv$/, '')) === key(name))
    if (!s || s.table.records.length === 0) {
      console.error(`No hay filas en staging para "${name}".`)
      process.exit(1)
    }
    chosen.push(s)
  }
  for (const s of chosen) {
    if (s.table.header.join(',') !== BIKE_COLUMNS.join(',')) {
      console.error(`${s.file}: la cabecera no coincide con la de bikes.csv.`)
      process.exit(1)
    }
  }

  // Filas actuales de las demás marcas + las de staging de las elegidas, agrupadas en el orden de brands.csv.
  const replaced = new Set(chosen.map((s) => s.brand))
  const rows = [
    ...current.records.filter((r) => !replaced.has(r.values.brand)).map((r) => r.values),
    ...chosen.flatMap((s) => s.table.records.map((r) => r.values)),
  ]
  const order = [...brands]
  const stable = rows.map((r, i) => ({ r, i }))
  stable.sort((a, b) => order.indexOf(a.r.brand) - order.indexOf(b.r.brand) || a.i - b.i)
  const text = [toCsvLine([...BIKE_COLUMNS]), ...stable.map(({ r }) => toCsvLine(BIKE_COLUMNS.map((c) => r[c] ?? '')))].join('\n') + '\n'

  const { errors } = validateBikes(parseCsv(text), brands)
  if (errors.length > 0) {
    printErrors(errors)
    console.error('\nNo se ha escrito data/bikes.csv.')
    process.exit(1)
  }
  writeFileSync(BIKES_CSV, text)
  for (const s of chosen) console.log(`${s.brand}: ${s.table.records.length} tallas → data/bikes.csv`)
  console.log(`data/bikes.csv: ${stable.length} filas. Siguiente paso: npm run build:data`)
}

function printErrors(errors: RowError[]) {
  console.error(`data/bikes.csv resultante: ${errors.length} error(es)`)
  for (const e of errors.slice(0, 30)) console.error(`  línea ${e.line}: ${e.message}`)
  if (errors.length > 30) console.error(`  … y ${errors.length - 30} más`)
}

const { brands } = validateBrands(parseCsv(readFileSync(BRANDS_CSV, 'utf8')))
const current = parseCsv(readFileSync(BIKES_CSV, 'utf8'))
const staged = loadStaging()
const names = process.argv.slice(2)
if (names.length === 0) report(staged, brands, current)
else promote(names, staged, brands, current)
