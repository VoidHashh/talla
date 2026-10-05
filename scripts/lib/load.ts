import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import type { Bike } from '../../src/lib/types.ts'
import { parseCsv } from './csv.ts'
import { validateBikes, validateBrands, type RowError } from './validate-core.ts'

export const ROOT = fileURLToPath(new URL('../../', import.meta.url))
export const BRANDS_CSV = `${ROOT}data/brands.csv`
export const BIKES_CSV = `${ROOT}data/bikes.csv`

export interface LoadResult {
  brandErrors: RowError[]
  bikeErrors: RowError[]
  bikes: Bike[]
}

export function loadAndValidate(): LoadResult {
  const { errors: brandErrors, brands } = validateBrands(parseCsv(readFileSync(BRANDS_CSV, 'utf8')))
  const { errors: bikeErrors, bikes } = validateBikes(parseCsv(readFileSync(BIKES_CSV, 'utf8')), brands)
  return { brandErrors, bikeErrors, bikes }
}

/** Imprime los errores agrupados por fichero y fila. Devuelve true si hubo alguno. */
export function reportErrors({ brandErrors, bikeErrors }: LoadResult): boolean {
  for (const [file, errors] of [['data/brands.csv', brandErrors], ['data/bikes.csv', bikeErrors]] as const) {
    if (errors.length === 0) continue
    console.error(`\n${file}: ${errors.length} error(es)`)
    for (const e of errors) console.error(`  línea ${e.line}: ${e.message}`)
  }
  return brandErrors.length + bikeErrors.length > 0
}
