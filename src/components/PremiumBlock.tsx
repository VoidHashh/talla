import { useState } from 'react'
import { stemLength, type FitResult, type FitValue } from '../lib/fit.ts'
import { formatBikeSize, formatNumber, formatPrice, sizeOrigin } from '../lib/format.ts'
import type { MatchStats, RankedBike } from '../lib/sizing.ts'
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
  /** Adelanto gratuito: cifras reales de las bicis que encajan (null mientras carga el catálogo). */
  teaser: { stats: MatchStats; scores: number[] } | null
}

export function PremiumBlock(props: Props) {
  const { unlocked, bikes, failed, height, fit, dropBar, price, onPriceChange, budget, teaser } = props
  if (!unlocked) return <Locked teaser={teaser} failed={failed} dropBar={dropBar} />
  return (
    <section id="premium" className="rounded-2xl border border-slate-200 p-5">
      <h2 className="text-lg font-bold text-slate-900">Las 5 bicis que mejor te encajan</h2>
      {failed ? (
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

const BENEFITS_DROP = [
  ['Tu top 5 de bicis', 'Marca, modelo, talla exacta, precio y enlace a la web oficial, elegidas entre todo el catálogo.'],
  ['La talla exacta en cada marca', 'Cada marca mide distinto: te decimos qué talla pedir en cada bici y por qué.'],
  ['Tu bike fit', 'Altura de sillín, alcance y ancho de manillar calculados con métodos publicados.'],
  ['La potencia para cada bici', 'Cuánta potencia necesitarías con esa talla para ir cómodo.'],
  ['Filtro de precio', 'Cambia el rango y el top 5 se recalcula al momento.'],
] as const

const BENEFITS_MTB = [
  BENEFITS_DROP[0],
  BENEFITS_DROP[1],
  ['Tu altura de sillín', 'Calculada con el método LeMond a partir de tu entrepierna.'],
  BENEFITS_DROP[4],
] as const

function Locked({ teaser, failed, dropBar }: { teaser: Props['teaser']; failed: boolean; dropBar: boolean }) {
  const [requested, setRequested] = useState(false)
  const stats = teaser?.stats
  const rows = teaser ? teaser.scores : [0, 0, 0, 0, 0]
  return (
    <section id="premium" className="overflow-hidden rounded-2xl border border-amber-300 bg-white shadow-sm">
      <div className="bg-slate-900 px-5 py-5 text-white">
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-400">Informe premium</p>
        <h2 className="mt-1 text-xl font-bold leading-snug">
          {failed
            ? 'Tu informe con las bicis que mejor te encajan'
            : !stats
              ? 'Buscando las bicis que encajan contigo…'
              : stats.bikes === 0
                ? 'Con este presupuesto no encontramos bicis para tus medidas'
                : `${formatNumber(stats.bikes)} bicis de ${stats.brands} marcas encajan con tus medidas`}
        </h2>
        {stats && stats.bikes > 0 && (
          <p className="mt-1 text-sm text-slate-300">
            {stats.minPrice !== null && <>Desde {formatPrice(stats.minPrice)}. </>}
            Te enseñamos las 5 que mejor te quedan.
          </p>
        )}
      </div>

      <div className="px-5 pt-4">
        <ol aria-hidden className="space-y-2">
          {rows.map((score, i) => (
            <li key={i} className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2.5">
              <span className="w-6 text-sm font-bold text-slate-400">#{i + 1}</span>
              <span className="flex-1 space-y-1.5 blur-[3px] select-none">
                <span className="block h-2.5 w-24 rounded bg-slate-300" />
                <span className="block h-3 w-40 rounded bg-slate-400" />
              </span>
              {score > 0 ? (
                <span className="text-right">
                  <span className="block text-lg font-extrabold leading-none text-slate-900">{Math.round(score)}</span>
                  <span className="block text-[10px] text-slate-500">ajuste</span>
                </span>
              ) : (
                <span className="h-6 w-8 rounded bg-slate-100" />
              )}
            </li>
          ))}
        </ol>

        <ul className="mt-5 space-y-3">
          {(dropBar ? BENEFITS_DROP : BENEFITS_MTB).map(([title, text]) => (
            <li key={title} className="flex gap-3">
              <span aria-hidden className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-slate-900">
                ✓
              </span>
              <span>
                <span className="block text-sm font-semibold text-slate-900">{title}</span>
                <span className="block text-sm text-slate-600">{text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-5 pt-5 pb-5">
        <button
          type="button"
          onClick={() => setRequested(true)}
          className="w-full rounded-xl bg-amber-400 px-4 py-4 text-lg font-bold text-slate-900 shadow-sm transition hover:bg-amber-300 active:scale-[0.99]"
        >
          Desbloquear mi informe completo
        </button>
        {requested ? (
          <p role="status" className="mt-3 text-center text-sm text-slate-600">
            El pago estará disponible muy pronto.
          </p>
        ) : (
          <p className="mt-3 text-center text-xs text-slate-500">
            Datos oficiales de las marcas: guías de tallas, geometrías y precios.
          </p>
        )}
      </div>
    </section>
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
