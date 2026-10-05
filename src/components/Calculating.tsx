import { useEffect, useState } from 'react'

interface Props {
  messages: string[]
  onDone: () => void
}

const STEP_MS = 900

/** Pantalla "Calculando": muestra los mensajes uno a uno (≈3,6 s con 4 mensajes) y avisa al terminar. */
export function Calculating({ messages, onDone }: Props) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (step >= messages.length) {
      onDone()
      return
    }
    const id = setTimeout(() => setStep((s) => s + 1), STEP_MS)
    return () => clearTimeout(id)
  }, [step, messages.length, onDone])

  const progress = Math.min(step + 1, messages.length) / messages.length

  return (
    <div className="flex flex-col items-center py-16 text-center" aria-live="polite">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-slate-900" />
      <ul className="mt-8 space-y-2">
        {messages.map((m, i) => (
          <li
            key={m}
            className={`transition-opacity duration-300 ${
              i < step ? 'text-slate-400' : i === step ? 'font-medium text-slate-900' : 'opacity-0'
            }`}
          >
            {i < step ? '✓ ' : ''}
            {m}
          </li>
        ))}
      </ul>
      <div className="mt-8 h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-slate-900 transition-[width] ease-linear"
          style={{ width: `${progress * 100}%`, transitionDuration: `${STEP_MS}ms` }}
        />
      </div>
    </div>
  )
}
