/** Medidas del formulario, con la letra con que aparecen en la ilustración. */
export type Measure = 'A' | 'B' | 'C' | 'E' | 'F'

interface Props {
  /** Medida que se está rellenando: se resalta. */
  active: Measure | null
  /** Bike fit premium: ilustración con el brazo estirado y las cotas B, E y F. */
  premium: boolean
}

const BASE = import.meta.env.BASE_URL
/** Color de fondo de las ilustraciones, para que el recuadro no tenga borde. */
export const DIAGRAM_BG = '#f1f4f9'

// Puntos medidos sobre las ilustraciones (píxeles de la imagen original 1792 × 2400; las dos comparten encuadre).
const P = {
  head: 138,
  floor: 2273,
  axis: 896,
  crotch: 1255,
  sternum: 505,
  shoulderL: 642,
  shoulderR: 1150,
  shoulderY: 575,
  fistX: 1718,
  fistY: 590,
}

const COLOR = { idle: '#64748b', active: '#f59e0b' }

/** Ilustración de las medidas con las cotas superpuestas (la activa en ámbar). */
export function BodyDiagram({ active, premium }: Props) {
  const stroke = (m: Measure) => (active === m ? COLOR.active : COLOR.idle)
  const sw = (m: Measure) => (active === m ? 12 : 6)

  const Tag = ({ m, x, y }: { m: Measure; x: number; y: number }) => (
    <g>
      <rect x={x - 40} y={y - 40} width={80} height={80} rx={18} fill={active === m ? COLOR.active : '#0f172a'} />
      <text x={x} y={y + 17} textAnchor="middle" fontSize={50} fontWeight={800} fill="#fff" fontFamily="system-ui, sans-serif">
        {m}
      </text>
    </g>
  )
  const dash = { strokeDasharray: '18 14' }

  return (
    <div className="relative mx-auto aspect-[1792/2400] w-full max-w-[17rem]">
      <img
        src={`${BASE}img/${premium ? 'medidas-premium' : 'medidas-basico'}.webp`}
        alt=""
        width={896}
        height={1200}
        className="absolute inset-0 h-full w-full select-none"
        draggable={false}
      />
      <svg viewBox="0 0 1792 2400" role="img" aria-label="Cómo tomar las medidas" className="absolute inset-0 h-full w-full">
        {/* A: altura */}
        <g stroke={stroke('A')} strokeWidth={sw('A')} fill="none">
          <line x1={250} y1={P.head} x2={250} y2={P.floor} />
          <line x1={210} y1={P.head} x2={P.axis} y2={P.head} {...dash} />
        </g>
        <Tag m="A" x={250} y={1200} />

        {/* C: entrepierna, entre las piernas */}
        <g stroke={stroke('C')} strokeWidth={sw('C')} fill="none">
          <line x1={P.axis} y1={P.crotch} x2={P.axis} y2={P.floor} />
          <line x1={P.axis - 70} y1={P.crotch} x2={P.axis + 70} y2={P.crotch} />
        </g>
        <Tag m="C" x={P.axis} y={1900} />

        {premium && (
          <>
            {/* B: altura del esternón */}
            <g stroke={stroke('B')} strokeWidth={sw('B')} fill="none">
              <line x1={420} y1={P.sternum} x2={420} y2={P.floor} />
              <line x1={380} y1={P.sternum} x2={P.axis} y2={P.sternum} {...dash} />
            </g>
            <Tag m="B" x={420} y={1500} />

            {/* E: brazo, del hombro al centro del puño */}
            <g stroke={stroke('E')} strokeWidth={sw('E')} fill="none">
              <line x1={P.shoulderR} y1={720} x2={P.fistX} y2={720} />
              <line x1={P.shoulderR} y1={P.shoulderY - 40} x2={P.shoulderR} y2={760} {...dash} />
              <line x1={P.fistX} y1={P.fistY + 30} x2={P.fistX} y2={760} {...dash} />
            </g>
            <Tag m="E" x={(P.shoulderR + P.fistX) / 2} y={720} />

            {/* F: ancho de hombros, de acromion a acromion */}
            <g stroke={stroke('F')} strokeWidth={sw('F')} fill="none">
              <line x1={P.shoulderL} y1={430} x2={P.shoulderR} y2={430} />
              <line x1={P.shoulderL} y1={390} x2={P.shoulderL} y2={P.shoulderY} {...dash} />
              <line x1={P.shoulderR} y1={390} x2={P.shoulderR} y2={P.shoulderY} {...dash} />
            </g>
            <Tag m="F" x={P.shoulderL - 90} y={430} />
          </>
        )}
      </svg>
    </div>
  )
}
