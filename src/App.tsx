import { useCallback, useMemo, useState } from 'react'
import { Calculating } from './components/Calculating.tsx'
import { PremiumBlock } from './components/PremiumBlock.tsx'
import { SizeForm } from './components/SizeForm.tsx'
import { SizeResult } from './components/SizeResult.tsx'
import { PREMIUM_UNLOCKED } from './config.ts'
import bikesJson from './data/bikes.json'
import sizeTableJson from './data/size-table.json'
import { catalogStats } from './lib/format.ts'
import { rankBikes, recommendSize, type UserInput } from './lib/sizing.ts'
import type { Bike, SizeTable } from './lib/types.ts'

const BIKES = bikesJson as Bike[]
const SIZE_TABLE = sizeTableJson as SizeTable

type Screen = 'form' | 'calculating' | 'result'

export default function App() {
  const [screen, setScreen] = useState<Screen>('form')
  const [input, setInput] = useState<UserInput | null>(null)

  const messages = useMemo(() => {
    if (!input) return []
    const { models, brands } = catalogStats(BIKES, input.category)
    return [
      'Analizando proporciones…',
      `Comparando geometrías de ${models} bicicletas…`,
      `Revisando las guías de tallas de ${brands} marcas…`,
      'Preparando tu recomendación…',
    ]
  }, [input])

  const result = useMemo(() => {
    if (!input) return null
    return { sizes: recommendSize(SIZE_TABLE, input), bikes: rankBikes(BIKES, input) }
  }, [input])

  const showResult = useCallback(() => setScreen('result'), [])

  function handleSubmit(next: UserInput) {
    setInput(next)
    setScreen('calculating')
  }

  return (
    <div className="min-h-dvh bg-white text-slate-900">
      <main className="mx-auto max-w-md px-4 pt-8 pb-12">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight">¿Qué talla de bici necesito?</h1>
          {screen === 'form' && (
            <p className="mt-2 text-slate-600">Dinos tus medidas y te decimos tu talla en segundos.</p>
          )}
        </header>

        {screen === 'form' && <SizeForm initial={input} onSubmit={handleSubmit} />}

        {screen === 'calculating' && <Calculating messages={messages} onDone={showResult} />}

        {screen === 'result' && input && result && (
          <div className="space-y-6">
            <SizeResult sizes={result.sizes} category={input.category} height={input.height} />
            <PremiumBlock unlocked={PREMIUM_UNLOCKED} bikes={result.bikes} />
            <button
              type="button"
              onClick={() => setScreen('form')}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 font-medium text-slate-700 hover:border-slate-500"
            >
              Cambiar medidas
            </button>
          </div>
        )}
      </main>
    </div>
  )
}
