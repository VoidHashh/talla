import { useState, type FormEvent } from 'react'
import { CATEGORY_LABELS } from '../lib/format.ts'
import type { UserInput } from '../lib/sizing.ts'
import { CATEGORIES, type Category } from '../lib/types.ts'

interface Props {
  initial: UserInput | null
  onSubmit: (input: UserInput) => void
}

const toText = (n: number | undefined) => (n === undefined ? '' : String(n))

function validate(height: number, inseam: number, budget: number | undefined): string | null {
  if (!(height >= 120 && height <= 220)) return 'Introduce una altura entre 120 y 220 cm.'
  if (!(inseam >= 50 && inseam <= 110)) return 'Introduce una entrepierna entre 50 y 110 cm.'
  if (inseam >= height) return 'La entrepierna tiene que ser menor que la altura.'
  if (budget !== undefined && !(budget > 0)) return 'El presupuesto tiene que ser un número positivo.'
  return null
}

export function SizeForm({ initial, onSubmit }: Props) {
  const [height, setHeight] = useState(toText(initial?.height))
  const [inseam, setInseam] = useState(toText(initial?.inseam))
  const [category, setCategory] = useState<Category>(initial?.category ?? 'carretera')
  const [budget, setBudget] = useState(toText(initial?.budget))
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const parsed = {
      height: Number(height.replace(',', '.')),
      inseam: Number(inseam.replace(',', '.')),
      budget: budget.trim() === '' ? undefined : Number(budget.replace(/\./g, '').replace(',', '.')),
    }
    const message = validate(parsed.height, parsed.inseam, parsed.budget)
    setError(message)
    if (!message) onSubmit({ ...parsed, category })
  }

  const inputClass =
    'mt-1 block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-lg text-slate-900 ' +
    'focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20'

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <fieldset>
        <legend className="text-sm font-medium text-slate-700">Tipo de bici</legend>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {CATEGORIES.map((c) => (
            <label
              key={c}
              className={`cursor-pointer rounded-xl border px-3 py-3 text-center font-medium transition ${
                category === c
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-slate-300 bg-white text-slate-700 hover:border-slate-500'
              }`}
            >
              <input
                type="radio"
                name="category"
                value={c}
                checked={category === c}
                onChange={() => setCategory(c)}
                className="sr-only"
              />
              {CATEGORY_LABELS[c]}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid grid-cols-2 gap-3">
        <label className="block text-sm font-medium text-slate-700">
          Altura (cm)
          <input
            type="text"
            inputMode="decimal"
            placeholder="175"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className={inputClass}
            required
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Entrepierna (cm)
          <input
            type="text"
            inputMode="decimal"
            placeholder="82"
            value={inseam}
            onChange={(e) => setInseam(e.target.value)}
            className={inputClass}
            required
          />
        </label>
      </div>

      <label className="block text-sm font-medium text-slate-700">
        Presupuesto máximo (€) <span className="font-normal text-slate-500">· opcional</span>
        <input
          type="text"
          inputMode="numeric"
          placeholder="Sin límite"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className={inputClass}
        />
      </label>

      {error && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="w-full rounded-xl bg-slate-900 px-4 py-4 text-lg font-semibold text-white transition hover:bg-slate-700 active:scale-[0.99]"
      >
        Calcular mi talla
      </button>
    </form>
  )
}
