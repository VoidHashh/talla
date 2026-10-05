import { loadAndValidate, reportErrors } from './lib/load.ts'

const result = loadAndValidate()
if (reportErrors(result)) process.exit(1)
console.log(`OK: ${result.bikes.length} filas válidas en data/bikes.csv`)
