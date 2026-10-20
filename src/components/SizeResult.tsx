import { CATEGORY_LABELS, formatNumber, formatSize } from '../lib/format.ts'
import type { Category, SizeTableRow } from '../lib/types.ts'

interface Props {
  size: SizeTableRow | null
  category: Category
  height: number
}

export function SizeResult({ size, category, height }: Props) {
  if (!size) {
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
      <div className="mt-4 rounded-2xl bg-slate-900 px-4 py-8 text-white">
        <p className="sr-only">{formatSize(size)}</p>
        <p aria-hidden className="text-7xl font-extrabold leading-none">
          {size.size_label}
        </p>
        {size.size_cm_values.length > 0 && (
          <p aria-hidden className="mt-2 text-2xl font-bold">
            {size.size_cm_values.join('/')}
          </p>
        )}
        <p className="mt-3 text-sm text-slate-300">
          Talla estándar de {formatNumber(size.height_min)} a {formatNumber(size.height_max)} cm
        </p>
      </div>
      <p className="mt-3 text-sm text-slate-600">
        Es la talla que recomiendan para tu altura las guías de {size.brands} marcas.
      </p>
      <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-left">
        <p className="text-sm font-semibold text-slate-900">Ojo: cada marca mide a su manera</p>
        <p className="mt-1 text-sm text-slate-700">
          Con la misma altura puedes ser una S en una marca y una M en otra, así que antes de comprar conviene mirar la
          geometría de cada bici.{' '}
          <a href="#premium" className="font-semibold text-amber-700 underline underline-offset-2">
            Mira tu talla exacta en cada bici
          </a>
        </p>
      </div>
    </section>
  )
}
