import { useState } from 'react'
import { stemLength, type FitResult, type FitValue } from '../lib/fit.ts'
import { formatBikeSize, formatNumber, formatPrice, sizeOrigin } from '../lib/format.ts'
import type { RankedBike } from '../lib/sizing.ts'
import { PriceFilter, type PriceRange } from './PriceFilter.tsx'

interface Props {
  unlocked: boolean
  /** null mientras se descarga el catálogo. */
  bikes: RankedBike[] | null
  /** El catálogo no se pudo descargar. */
  failed: boolean
  height: number
  fit: FitResult
  /** Carretera/gravel: el bike fit calcula alcance y manillar. */
  dropBar: boolean
  price: PriceRange
  onPriceChange: (range: PriceRange) => void
  budget?: number
}

export function PremiumBlock({ unlocked, bikes, failed, height, fit, dropBar, price, onPriceChange, budget }: Props) {
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
        <>
          <FitSummary fit={fit} dropBar={dropBar} />
          <p className="mt-4 text-sm text-slate-600">
            Para cada bici, la talla cuyo stack y reach más se parecen a lo que las marcas recomiendan para{' '}
            {formatNumber(height)} cm. El ajuste es 100 si coincide y baja cuanto más se aleja.
          </p>
          <PriceFilter value={price} onChange={onPriceChange} budget={budget} />
          <BikeList bikes={bikes} totalReach={fit.totalReach?.value ?? null} />
        </>
      )}
    </section>
  )
}

function FitRow({ label, unit, v }: { label: string; unit: string; v: FitValue }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-t border-slate-700 py-2 first:border-t-0">
      <div>
        <p className="text-sm text-slate-200">{label}</p>
        <p className="text-xs text-slate-400">
          {v.formula} · {v.source}
          {v.indicative ? ' · orientativo' : ''}
        </p>
      </div>
      <p className="shrink-0 text-xl font-bold text-white">
        {v.indicative ? '≈ ' : ''}
        {formatNumber(v.value)} {unit}
      </p>
    </div>
  )
}

function FitSummary({ fit, dropBar }: { fit: FitResult; dropBar: boolean }) {
  const missing = dropBar && (!fit.totalReach || !fit.barWidth)
  return (
    <div className="mt-4 rounded-xl bg-slate-900 p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-amber-400">Tu bike fit</p>
      <div className="mt-1">
        <FitRow label="Altura de sillín (eje del pedalier → sillín)" unit="cm" v={fit.saddleHeight} />
        {fit.totalReach && <FitRow label="Alcance total (tubo horizontal + potencia)" unit="cm" v={fit.totalReach} />}
        {fit.barWidth && <FitRow label="Ancho de manillar (centro a centro)" unit="cm" v={fit.barWidth} />}
      </div>
      {missing && (
        <p className="mt-2 text-xs text-slate-400">
          Añade la altura del esternón, el largo de brazo y el ancho de hombros en «Bike fit premium» para calcular el
          alcance, el manillar y la potencia de cada bici.
        </p>
      )}
      <p className="mt-2 text-xs text-slate-500">
        Son puntos de partida publicados, no sustituyen a un estudio biomecánico.
      </p>
    </div>
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
        medidas y presupuesto, con tu bike fit.
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

function StemLine({ bike, totalReach }: { bike: RankedBike; totalReach: number | null }) {
  if (totalReach === null) return null
  const stem = stemLength(totalReach, bike.top_tube_eff)
  if (stem === null) {
    return <p className="text-sm text-slate-500">Potencia: {bike.brand} no publica el tubo horizontal efectivo</p>
  }
  return (
    <p className="text-sm font-medium text-amber-700">
      Potencia orientativa con esta talla: ≈ {stem} mm{' '}
      <span className="font-normal text-slate-500">(tubo horizontal {formatNumber(bike.top_tube_eff!)} mm)</span>
    </p>
  )
}

function BikeList({ bikes, totalReach }: { bikes: RankedBike[]; totalReach: number | null }) {
  if (bikes.length === 0) {
    return (
      <p className="mt-4 text-sm text-slate-600">
        No tenemos bicis que encajen con tus medidas en este rango de precio. Prueba con otro rango.
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
              <p className="mt-1 text-sm text-slate-600">Talla {formatBikeSize(b)}</p>
              <p className="text-sm text-slate-500">{sizeOrigin(b)}</p>
              <p className="text-sm text-slate-600">
                Stack {formatNumber(b.stack)} mm · Reach {formatNumber(b.reach)} mm
              </p>
              <StemLine bike={b} totalReach={totalReach} />
              {b.variants > 1 && <p className="text-sm text-slate-500">{b.variants} montajes de este cuadro</p>}
            </div>
            <div className="text-right">
              <p className="text-2xl font-extrabold text-slate-900">{Math.round(b.score)}</p>
              <p className="whitespace-nowrap text-xs text-slate-500">ajuste / 100</p>
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
