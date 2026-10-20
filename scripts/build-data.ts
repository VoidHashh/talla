import { mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { loadAndValidate, reportErrors, ROOT } from './lib/load.ts'
import { buildSizeTable } from './lib/size-table.ts'
import { catalogStats } from '../src/lib/format.ts'
import { CATEGORIES, type CatalogStats } from '../src/lib/types.ts'

const result = loadAndValidate()
if (reportErrors(result)) {
  console.error('\nNo se generan los JSON hasta corregir los errores.')
  process.exit(1)
}

const srcDir = `${ROOT}src/data/`
const publicDir = `${ROOT}public/data/`
mkdirSync(srcDir, { recursive: true })
mkdirSync(publicDir, { recursive: true })

// La tabla gratis y los contadores van en el JS (pequeños). Las bicis son miles de filas: van aparte como
// fichero estático que la app descarga al abrirse, compacto.
// Parte gratis: solo tallas estándar (las publican al menos 3 marcas), decisión del usuario.
const sizeTable = buildSizeTable(result.bikes, 3)
const stats = Object.fromEntries(CATEGORIES.map((c) => [c, catalogStats(result.bikes, c)])) as CatalogStats
writeFileSync(`${publicDir}bikes.json`, JSON.stringify(result.bikes) + '\n')
writeFileSync(`${srcDir}size-table.json`, JSON.stringify(sizeTable, null, 2) + '\n')
writeFileSync(`${srcDir}catalog-stats.json`, JSON.stringify(stats, null, 2) + '\n')
// Totales del catálogo para los textos de portada (modelos y marcas distintos en todas las categorías).
const total = {
  models: new Set(result.bikes.map((b) => `${b.brand}|${b.model}`)).size,
  brands: new Set(result.bikes.map((b) => b.brand)).size,
}
writeFileSync(`${srcDir}catalog-total.json`, JSON.stringify(total, null, 2) + '\n')
rmSync(`${srcDir}bikes.json`, { force: true })

console.log(`public/data/bikes.json: ${result.bikes.length} filas`)
for (const [category, rows] of Object.entries(sizeTable)) {
  console.log(`src/data/size-table.json [${category}]: ${rows.length} tallas · ${stats[category as keyof CatalogStats].models} modelos`)
}
