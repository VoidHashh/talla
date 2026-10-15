import { useState } from 'react'
import { formatPrice, formatSizeLabel } from '../lib/format.ts'
import type { RankedBike } from '../lib/sizing.ts'

interface Props {
  unlocked: boolean
  /** null mientras se descarga el catálogo. */
  bikes: RankedBike[] | null
  /** El catálogo no se pudo descargar. */
  failed: boolean
}

export function PremiumBlock({ unlocked, bikes, failed }: Props) {
  return (
    <section className="rounded-2xl border border-slate-200 p-5">
      <h2 className="text-lg font-bold text-slate-900">Las 5 bicis que mejor te encajan</h2>
      {!unlocked ? (
        <Locked />
      ) : failed ? (
        <p className="mt-4 text-sm text-slate-600">No hemos podido cargar las bicis. Revisa tu conexión y vuelve a intentarlo.</p>
      ) : bikes === null ? (
        <p role="status" className="mt-4 text-sm text-slate-600">Cargando bicis…</p>
      ) : (
        <BikeList bikes={bikes} />
      )}
    </section>
  )
}

function Locked() {
  const [requested, setRequested] = useState(false)
  return (
    <div className="mt-4">
      <div aria-hidden className="space-y-2 select-none blur-sm">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-16 rounded-xl bg-slate-100" />
        ))}
      </div>
      <p className="mt-4 text-sm text-slate-600">
        Marca, modelo, talla exacta y precio de las bicis de nuestra base de datos que mejor se ajustan a tus
        medidas y presupuesto.
      </p>
      <button
        type="button"
        onClick={() => setRequested(true)}
        className="mt-4 w-full rounded-xl bg-amber-400 px-4 py-4 text-lg font-semibold text-slate-900 transition hover:bg-amber-300"
      >
        Desbloquear mi top 5
      </button>
      {requested && (
        <p role="status" className="mt-3 text-center text-sm text-slate-600">
          El desbloqueo estará disponible muy pronto.
        </p>
      )}
    </div>
  )
}

function BikeList({ bikes }: { bikes: RankedBike[] }) {
  if (bikes.length === 0) {
    return (
      <p className="mt-4 text-sm text-slate-600">
        Ahora mismo no tenemos bicis en la base de datos que encajen con tus medidas y presupuesto.
      </p>
    )
  }
  return (
    <ol className="mt-4 space-y-3">
      {bikes.map((b, i) => (
        <li key={`${b.brand}|${b.family}`} className="rounded-xl border border-slate-200 p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                #{i + 1} · {b.brand}
              </p>
              <p className="text-base font-semibold text-slate-900">{b.model}</p>
              <p className="mt-1 text-sm text-slate-600">
                Talla {formatSizeLabel(b.size_label)}
                {b.size_cm !== null ? ` · ${b.size_cm}` : ''}
              </p>
              {b.variants > 1 && <p className="text-sm text-slate-500">{b.variants} montajes de este cuadro</p>}
            </div>
            <div className="text-right">
              <p className="text-2xl font-extrabold text-slate-900">{Math.round(b.score)}</p>
              <p className="text-xs text-slate-500">ajuste / 100</p>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between gap-3">
            <p className="text-lg font-bold text-slate-900">
              {b.price_is_from || b.variants > 1 ? 'Desde ' : ''}
              {formatPrice(b.price_eur!)}
            </p>
            <a
              href={b.product_url!}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
            >
              Ver en la web
            </a>
          </div>
        </li>
      ))}
    </ol>
  )
}
