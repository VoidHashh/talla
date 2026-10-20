import { useState, type FormEvent } from 'react'
import type { FitMeasures } from '../lib/fit.ts'
import { CATEGORY_LABELS } from '../lib/format.ts'
import type { UserInput } from '../lib/sizing.ts'
import { CATEGORIES, type Category } from '../lib/types.ts'
import { BodyDiagram, DIAGRAM_BG, type Measure } from './BodyDiagram.tsx'

interface Props {
  initial: UserInput | null
  onSubmit: (input: UserInput) => void
}

const toText = (n: number | undefined) => (n === undefined ? '' : String(n))
const parseNum = (s: string) => (s.trim() === '' ? undefined : Number(s.replace(',', '.')))

function validate(height: number, inseam: number, budget: number | undefined, fit: FitMeasures): string | null {
  if (!(height >= 120 && height <= 220)) return 'Introduce una altura entre 120 y 220 cm.'
  if (!(inseam >= 50 && inseam <= 110)) return 'Introduce una entrepierna entre 50 y 110 cm.'
  if (inseam >= height) return 'La entrepierna tiene que ser menor que la altura.'
  if (budget !== undefined && !(budget > 0)) return 'El presupuesto tiene que ser un número positivo.'
  if (fit.sternum !== undefined && !(fit.sternum >= inseam + 30 && fit.sternum <= height - 15)) {
    return 'La altura del esternón tiene que estar entre tu entrepierna + 30 cm y tu altura − 15 cm. Revisa la medida B.'
  }
  if (fit.arm !== undefined && !(fit.arm >= 45 && fit.arm <= 90)) return 'Introduce un largo de brazo (E) entre 45 y 90 cm.'
  if (fit.shoulders !== undefined && !(fit.shoulders >= 28 && fit.shoulders <= 55)) {
    return 'Introduce un ancho de hombros (F) entre 28 y 55 cm.'
  }
  return null
}

const HELP: Record<Measure, string> = {
  A: 'De pie, descalzo y contra la pared: del suelo a lo alto de la cabeza.',
  C: 'Descalzo, con un libro entre las piernas apretado hacia arriba como un sillín: del suelo al canto del libro.',
  B: 'De pie y descalzo: del suelo a la hendidura del esternón (la “V” entre las clavículas).',
  E: 'Brazo estirado hacia un lado: de la punta del hombro (el hueso del acromion) al centro del puño cerrado.',
  F: 'De la punta de un hombro a la del otro (de acromion a acromion), por la espalda.',
}

export function SizeForm({ initial, onSubmit }: Props) {
  const [height, setHeight] = useState(toText(initial?.height))
  const [inseam, setInseam] = useState(toText(initial?.inseam))
  const [category, setCategory] = useState<Category>(initial?.category ?? 'carretera')
  const [budget, setBudget] = useState(toText(initial?.budget))
  const [sternum, setSternum] = useState(toText(initial?.fit?.sternum))
  const [arm, setArm] = useState(toText(initial?.fit?.arm))
  const [shoulders, setShoulders] = useState(toText(initial?.fit?.shoulders))
  const [showFit, setShowFit] = useState(initial?.fit !== undefined)
  const [active, setActive] = useState<Measure | null>(null)
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const parsed = {
      height: Number(height.replace(',', '.')),
      inseam: Number(inseam.replace(',', '.')),
      budget: budget.trim() === '' ? undefined : Number(budget.replace(/\./g, '').replace(',', '.')),
    }
    const fit: FitMeasures = showFit ? { sternum: parseNum(sternum), arm: parseNum(arm), shoulders: parseNum(shoulders) } : {}
    const message = validate(parsed.height, parsed.inseam, parsed.budget, fit)
    setError(message)
    const hasFit = Object.values(fit).some((v) => v !== undefined)
    if (!message) onSubmit({ ...parsed, category, fit: hasFit ? fit : undefined })
  }

  const inputClass =
    'mt-1 block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-lg text-slate-900 ' +
    'focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30'

  const field = (m: Measure, label: string, value: string, set: (v: string) => void, placeholder: string) => (
    <label className="block text-sm font-medium text-slate-700">
      <span className="mr-1.5 inline-flex h-5 w-5 items-center justify-center rounded bg-slate-900 text-xs font-bold text-white">
        {m}
      </span>
      {label}
      <input
        type="text"
        inputMode="decimal"
        placeholder={placeholder}
        value={value}
        onChange={(e) => set(e.target.value)}
        onFocus={() => setActive(m)}
        onBlur={() => setActive(null)}
        className={inputClass}
      />
    </label>
  )

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

      <div className="rounded-2xl border border-slate-200 p-4" style={{ backgroundColor: DIAGRAM_BG }}>
        <BodyDiagram active={active} premium={showFit} />
        <p className="mt-2 min-h-10 text-center text-sm text-slate-600">
          {active ? HELP[active] : 'Toca una medida para ver cómo tomarla.'}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {field('A', 'Altura (cm)', height, setHeight, '175')}
        {field('C', 'Entrepierna (cm)', inseam, setInseam, '82')}
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

      <div className="rounded-2xl border border-amber-300 bg-amber-50/60 p-4">
        <button
          type="button"
          onClick={() => setShowFit((v) => !v)}
          aria-expanded={showFit}
          className="flex w-full items-center justify-between text-left"
        >
          <span>
            <span className="flex items-center gap-2 font-semibold text-slate-900">
              Bike fit
              <span className="rounded bg-slate-900 px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-amber-400">
                PREMIUM
              </span>
            </span>
            <span className="block text-sm text-slate-600">
              3 medidas más y tu informe incluye altura de sillín, alcance, ancho de manillar y la potencia para cada
              bici.
            </span>
          </span>
          <span aria-hidden className="ml-3 text-xl text-slate-500">
            {showFit ? '−' : '+'}
          </span>
        </button>
        {showFit && (
          <div className="mt-4 space-y-3">
            {field('B', 'Altura del esternón (cm)', sternum, setSternum, '143')}
            <div className="grid grid-cols-2 gap-3">
              {field('E', 'Largo de brazo (cm)', arm, setArm, '61')}
              {field('F', 'Ancho de hombros (cm)', shoulders, setShoulders, '40')}
            </div>
            <p className="text-xs text-slate-500">
              Opcional. Tardas un par de minutos con una cinta métrica; el resultado aparece en tu informe premium.
            </p>
          </div>
        )}
      </div>

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
