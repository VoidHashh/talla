import { useEffect, useState } from 'react'
import type { Bike } from './types.ts'

/** URL del catálogo (fichero estático generado por scripts/build-data.ts). */
const BIKES_URL = `${import.meta.env.BASE_URL}data/bikes.json`

export type BikesState = { status: 'loading' } | { status: 'ready'; bikes: Bike[] } | { status: 'error' }

/** Descarga el catálogo una vez al montar la app (mientras el usuario rellena el formulario). */
export function useBikes(): BikesState {
  const [state, setState] = useState<BikesState>({ status: 'loading' })
  useEffect(() => {
    let cancelled = false
    fetch(BIKES_URL)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.json() as Promise<Bike[]>
      })
      .then((bikes) => !cancelled && setState({ status: 'ready', bikes }))
      .catch(() => !cancelled && setState({ status: 'error' }))
    return () => {
      cancelled = true
    }
  }, [])
  return state
}
