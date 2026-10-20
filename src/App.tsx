import { useCallback, useMemo, useState } from 'react'
import { Calculating } from './components/Calculating.tsx'
import { PremiumBlock } from './components/PremiumBlock.tsx'
import { SizeForm } from './components/SizeForm.tsx'
import { SizeResult } from './components/SizeResult.tsx'
import { PREMIUM_UNLOCKED } from './config.ts'
import catalogStatsJson from './data/catalog-stats.json'
import sizeTableJson from './data/size-table.json'
import { rankBikes, recommendSize, type UserInput } from './lib/sizing.ts'
import type { CatalogStats, SizeTable } from './lib/types.ts'
import { useBikes } from './lib/useBikes.ts'

const SIZE_TABLE = sizeTableJson as SizeTable
const CATALOG_STATS = catalogStatsJson as CatalogStats

type Screen = 'form' | 'calculating' | 'result'

export default function App() {
  const [screen, setScreen] = useState<Screen>('form')
  const [input, setInput] = useState<UserInput | null>(null)
  const catalog = useBikes()

  const messages = useMemo(() => {
    if (!input) return []
    const { models, brands } = CATALOG_STATS[input.category]
    return [
      'Analizando proporciones…',
      `Comparando geometrías de ${models} bicicletas…`,
      `Revisando las guías de tallas de ${brands} marcas…`,
      'Preparando tu recomendación…',
    ]
  }, [input])

  const size = useMemo(() => (input ? recommendSize(SIZE_TABLE, input) : null), [input])
  const ranked = useMemo(
    () => (input && catalog.status === 'ready' ? rankBikes(catalog.bikes, input) : null),
    [input, catalog],
  )

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

        {screen === 'result' && input && (
          <div className="space-y-6">
            <SizeResult size={size} category={input.category} height={input.height} />
            <PremiumBlock unlocked={PREMIUM_UNLOCKED} bikes={ranked} failed={catalog.status === 'error'} height={input.height} />
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
