import { formatPrice } from '../lib/format.ts'

export interface PriceRange {
  min?: number
  max?: number
}

interface Props {
  value: PriceRange
  onChange: (range: PriceRange) => void
  /** Presupuesto del formulario: se ofrece como primera opción. */
  budget?: number
}

const PRESETS: { label: string; range: PriceRange }[] = [
  { label: 'Todas', range: {} },
  { label: `Hasta ${formatPrice(1500)}`, range: { max: 1500 } },
  { label: `${formatPrice(1500)} – ${formatPrice(3000)}`, range: { min: 1500, max: 3000 } },
  { label: `${formatPrice(3000)} – ${formatPrice(5000)}`, range: { min: 3000, max: 5000 } },
  { label: `Más de ${formatPrice(5000)}`, range: { min: 5000 } },
]

const same = (a: PriceRange, b: PriceRange) => a.min === b.min && a.max === b.max

/** Filtro de precio del top 5: rangos fijos y, si lo hay, el presupuesto del formulario. */
export function PriceFilter({ value, onChange, budget }: Props) {
  const options = budget !== undefined
    ? [{ label: `Hasta ${formatPrice(budget)} (tu presupuesto)`, range: { max: budget } }, ...PRESETS]
    : PRESETS
  const unique = options.filter((o, i) => options.findIndex((x) => same(x.range, o.range)) === i)
  return (
    <div role="group" aria-label="Filtrar por precio" className="mt-4 flex flex-wrap gap-2">
      {unique.map((o) => {
        const active = same(o.range, value)
        return (
          <button
            key={o.label}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(o.range)}
            className={`shrink-0 rounded-full border px-3 py-1.5 text-sm font-medium transition ${
              active ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-300 bg-white text-slate-700 hover:border-slate-500'
            }`}
          >
            {o.label}
          </button>
        )
      })}
    </div>
  )
}
