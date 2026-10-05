import { CATEGORY_LABELS, formatNumber, formatSize } from '../lib/format.ts'
import type { Category, SizeTableRow } from '../lib/types.ts'

interface Props {
  sizes: SizeTableRow[]
  category: Category
  height: number
}

export function SizeResult({ sizes, category, height }: Props) {
  if (sizes.length === 0) {
    return (
      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
        <p className="text-lg font-medium text-slate-900">
          No encontramos una talla publicada para tus medidas en esta categoría
        </p>
      </section>
    )
  }

  return (
    <section className="text-center">
      <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
        Tu talla · {CATEGORY_LABELS[category]} · {formatNumber(height)} cm
      </p>
      <div className={`mt-4 grid gap-3 ${sizes.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {sizes.map((s) => (
          <div key={s.size_label} className="rounded-2xl bg-slate-900 px-4 py-8 text-white">
            <p className="sr-only">{formatSize(s)}</p>
            <p aria-hidden className={`font-extrabold leading-none ${sizes.length > 1 ? 'text-6xl' : 'text-7xl'}`}>
              {s.size_label}
            </p>
            {s.size_cm_values.length > 0 && (
              <p aria-hidden className="mt-2 text-2xl font-bold">
                {s.size_cm_values.join('/')}
              </p>
            )}
            <p className="mt-3 text-sm text-slate-300">
              De {formatNumber(s.height_min)} a {formatNumber(s.height_max)} cm
            </p>
          </div>
        ))}
      </div>
      {sizes.length > 1 && (
        <p className="mt-3 text-sm text-slate-600">Estás entre dos tallas: te valen las dos.</p>
      )}
    </section>
  )
}
