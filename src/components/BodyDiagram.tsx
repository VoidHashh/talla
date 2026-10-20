/** Medidas del formulario, con la letra con que aparecen en la silueta. */
export type Measure = 'A' | 'B' | 'C' | 'E' | 'F'

interface Props {
  /** Medida que se está rellenando: se resalta. */
  active: Measure | null
  /** Medidas que se dibujan (el bike fit añade B, E y F). */
  shown: Measure[]
}

const LINE = { idle: '#94a3b8', active: '#f59e0b' }

/** Silueta de pie con el brazo derecho en horizontal y las cotas que se piden en el formulario. */
export function BodyDiagram({ active, shown }: Props) {
  const color = (m: Measure) => (active === m ? LINE.active : LINE.idle)
  const width = (m: Measure) => (active === m ? 3 : 1.5)
  const has = (m: Measure) => shown.includes(m)

  const Tag = ({ m, x, y }: { m: Measure; x: number; y: number }) => (
    <g>
      <rect x={x - 9} y={y - 9} width={18} height={18} rx={4} fill={active === m ? LINE.active : '#0f172a'} />
      <text x={x} y={y + 4.5} textAnchor="middle" fontSize={12} fontWeight={700} fill="#fff">
        {m}
      </text>
    </g>
  )

  return (
    <svg viewBox="0 0 260 300" role="img" aria-label="Cómo tomar las medidas" className="mx-auto h-64 w-auto">
      {/* Silueta */}
      <g fill="#cbd5e1">
        <circle cx={110} cy={36} r={17} />
        <rect x={103} y={51} width={14} height={12} rx={4} />
        <path d="M80 62 Q110 56 140 62 L138 150 Q110 158 82 150 Z" />
        <path d="M80 64 L68 68 L60 150 L71 151 L80 92 Z" />
        <path d="M138 62 L222 66 Q230 71 222 78 L138 82 Z" />
        <circle cx={226} cy={72} r={7} />
        <path d="M84 148 L108 152 L106 284 L90 284 Z" />
        <path d="M112 152 L136 148 L130 284 L114 284 Z" />
      </g>
      <line x1={20} y1={286} x2={250} y2={286} stroke="#cbd5e1" strokeWidth={2} />

      {/* A: altura */}
      {has('A') && (
        <g stroke={color('A')} strokeWidth={width('A')}>
          <line x1={22} y1={19} x2={22} y2={286} />
          <line x1={16} y1={19} x2={110} y2={19} strokeDasharray="3 3" />
          <Tag m="A" x={22} y={150} />
        </g>
      )}
      {/* B: esternón */}
      {has('B') && (
        <g stroke={color('B')} strokeWidth={width('B')}>
          <line x1={46} y1={64} x2={46} y2={286} />
          <line x1={40} y1={64} x2={110} y2={64} strokeDasharray="3 3" />
          <Tag m="B" x={46} y={190} />
        </g>
      )}
      {/* C: entrepierna */}
      {has('C') && (
        <g stroke={color('C')} strokeWidth={width('C')}>
          <line x1={156} y1={152} x2={156} y2={286} />
          <line x1={110} y1={152} x2={162} y2={152} strokeDasharray="3 3" />
          <Tag m="C" x={156} y={220} />
        </g>
      )}
      {/* E: brazo */}
      {has('E') && (
        <g stroke={color('E')} strokeWidth={width('E')}>
          <line x1={140} y1={98} x2={226} y2={98} />
          <line x1={140} y1={60} x2={140} y2={104} strokeDasharray="3 3" />
          <line x1={226} y1={78} x2={226} y2={104} strokeDasharray="3 3" />
          <Tag m="E" x={183} y={98} />
        </g>
      )}
      {/* F: hombros */}
      {has('F') && (
        <g stroke={color('F')} strokeWidth={width('F')}>
          <line x1={80} y1={50} x2={140} y2={50} />
          <line x1={80} y1={44} x2={80} y2={62} strokeDasharray="3 3" />
          <line x1={140} y1={44} x2={140} y2={62} strokeDasharray="3 3" />
          <Tag m="F" x={154} y={44} />
        </g>
      )}
    </svg>
  )
}
