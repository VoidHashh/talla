import { mkdirSync, writeFileSync } from 'node:fs'
import { loadAndValidate, reportErrors, ROOT } from './lib/load.ts'
import { buildSizeTable } from './lib/size-table.ts'

const result = loadAndValidate()
if (reportErrors(result)) {
  console.error('\nNo se generan los JSON hasta corregir los errores.')
  process.exit(1)
}

const outDir = `${ROOT}src/data/`
mkdirSync(outDir, { recursive: true })

const sizeTable = buildSizeTable(result.bikes)
writeFileSync(`${outDir}bikes.json`, JSON.stringify(result.bikes, null, 2) + '\n')
writeFileSync(`${outDir}size-table.json`, JSON.stringify(sizeTable, null, 2) + '\n')

console.log(`src/data/bikes.json: ${result.bikes.length} filas`)
for (const [category, rows] of Object.entries(sizeTable)) {
  console.log(`src/data/size-table.json [${category}]: ${rows.length} tallas`)
}
