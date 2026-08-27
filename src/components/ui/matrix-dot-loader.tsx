import './matrix-dot-loader.css';

type MatrixVariant = 'scan' | 'twinkle' | 'orbit' | 'pulse';

export interface MatrixDotLoaderProps {
  variant?: MatrixVariant;
  className?: string;
  'aria-label'?: string;
}

const CYCLE_MS = 1200;
const TWINKLE_ORDER = [7, 2, 11, 5, 14, 9, 0, 12, 3, 15, 6, 10, 13, 1, 8, 4];
const ORBIT_RING = [1, 2, 7, 11, 14, 13, 8, 4];
const PULSE_INNER = [5, 6, 9, 10];

function getDelay(variant: MatrixVariant, index: number): number {
  switch (variant) {
    case 'scan':
      return (index % 4) * (CYCLE_MS / 10);
    case 'twinkle':
      return TWINKLE_ORDER.indexOf(index) * (CYCLE_MS / 16);
    case 'orbit':
      return ORBIT_RING.includes(index) ? ORBIT_RING.indexOf(index) * (CYCLE_MS / 8) : 0;
    case 'pulse':
      return PULSE_INNER.includes(index) ? 0 : CYCLE_MS * 0.16;
    default:
      return 0;
  }
}

/** Grilla de 16 puntos que pulsan en secuencia — metáfora visual de sistemas/datos conversando. */
export function MatrixDotLoader({
  variant = 'scan',
  className = '',
  'aria-label': ariaLabel = 'Procesando',
}: MatrixDotLoaderProps): JSX.Element {
  return (
    <div className={`aj-matrix ${className}`} role="img" aria-label={ariaLabel}>
      {Array.from({ length: 16 }, (_, i) => (
        <i key={i} style={{ ['--d' as string]: getDelay(variant, i) }} />
      ))}
    </div>
  );
}
