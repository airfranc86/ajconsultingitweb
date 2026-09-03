'use client';

import { useMemo, useState } from 'react';
import { TrendingUp } from 'lucide-react';

/**
 * Dashboard financiero demo del Pipeline ETL Contable, con datos 100% de
 * ejemplo (no corresponden a ningún cliente real). Paleta categórica y specs
 * de marca (bar height, line width, gridlines) según la skill dataviz;
 * chrome (superficie/texto/borde) toma los tokens de tema del sitio.
 */

const MESES = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'];
const VENTAS = [4200, 4500, 4100, 4800, 5100, 5400];
const CMV = [2500, 2700, 2400, 2800, 2900, 3000];
const EBIT = [600, 700, 500, 900, 1000, 1200];

const KPIS = [
  { label: 'Ventas netas', value: '$5.4M', delta: '+5.9%' },
  { label: 'Utilidad bruta', value: '$2.4M', delta: '+9.1%' },
  { label: 'Margen bruto', value: '44.4%', delta: '+1.2pp' },
  { label: 'EBIT', value: '$1.2M', delta: '+20%' },
] as const;

const GASTOS = [
  { rubro: 'Sueldos', monto: 850 },
  { rubro: 'Materiales', monto: 620 },
  { rubro: 'Servicios', monto: 310 },
  { rubro: 'Impuestos', monto: 280 },
  { rubro: 'Marketing', monto: 140 },
  { rubro: 'Otros', monto: 90 },
].sort((a, b) => b.monto - a.monto);

const CHART_W = 600;
const CHART_H = 200;
const MARGIN = { top: 10, right: 56, bottom: 24, left: 12 };
const PLOT_W = CHART_W - MARGIN.left - MARGIN.right;
const PLOT_H = CHART_H - MARGIN.top - MARGIN.bottom;
const Y_MAX = 6000;

function x(i: number) {
  return MARGIN.left + (i / (MESES.length - 1)) * PLOT_W;
}
function y(v: number) {
  return MARGIN.top + PLOT_H - (v / Y_MAX) * PLOT_H;
}
function path(values: number[]) {
  return values.map((v, i) => `${i === 0 ? 'M' : 'L'} ${x(i)} ${y(v)}`).join(' ');
}

const SERIES_CLASS = '[--s1:#2a78d6] [--s2:#eb6834] [--s3:#1baf7a] dark:[--s1:#3987e5] dark:[--s2:#d95926] dark:[--s3:#199e70]';

export function EtlDashboardDemo(): JSX.Element {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [showTable, setShowTable] = useState(false);
  const maxGasto = GASTOS[0].monto;

  const tooltip = useMemo(() => {
    if (hoverIdx === null) return null;
    return {
      mes: MESES[hoverIdx],
      ventas: VENTAS[hoverIdx],
      cmv: CMV[hoverIdx],
      ebit: EBIT[hoverIdx],
      cx: x(hoverIdx),
    };
  }, [hoverIdx]);

  return (
    <div className={`space-y-6 p-6 ${SERIES_CLASS}`}>
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          Dashboard demostrativo — datos de ejemplo, no corresponden a un cliente real.
        </p>
        <button
          type="button"
          onClick={() => setShowTable((s) => !s)}
          className="shrink-0 rounded-md border border-border/60 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
        >
          {showTable ? 'Ver gráficos' : 'Ver como tabla'}
        </button>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {KPIS.map((k) => (
          <div key={k.label} className="rounded-lg border border-border/60 bg-card p-3">
            <p className="text-xs text-muted-foreground">{k.label}</p>
            <p className="mt-1 text-xl font-semibold tracking-tight text-foreground">{k.value}</p>
            <p className="mt-1 flex items-center gap-1 text-xs text-[#0ca30c]">
              <TrendingUp className="h-3 w-3" aria-hidden />
              {k.delta} vs. mes anterior
            </p>
          </div>
        ))}
      </div>

      {showTable ? (
        <div className="space-y-4">
          <div className="overflow-x-auto rounded-lg border border-border/60">
            <table className="w-full text-left text-xs">
              <caption className="sr-only">Evolución mensual de ventas, CMV y EBIT</caption>
              <thead className="bg-muted/60 text-muted-foreground">
                <tr>
                  <th className="px-3 py-2 font-medium">Mes</th>
                  <th className="px-3 py-2 font-medium">Ventas</th>
                  <th className="px-3 py-2 font-medium">CMV</th>
                  <th className="px-3 py-2 font-medium">EBIT</th>
                </tr>
              </thead>
              <tbody>
                {MESES.map((m, i) => (
                  <tr key={m} className="border-t border-border/40">
                    <td className="px-3 py-1.5 text-foreground">{m}</td>
                    <td className="px-3 py-1.5 tabular-nums text-foreground">${VENTAS[i].toLocaleString('es-AR')}K</td>
                    <td className="px-3 py-1.5 tabular-nums text-foreground">${CMV[i].toLocaleString('es-AR')}K</td>
                    <td className="px-3 py-1.5 tabular-nums text-foreground">${EBIT[i].toLocaleString('es-AR')}K</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="overflow-x-auto rounded-lg border border-border/60">
            <table className="w-full text-left text-xs">
              <caption className="sr-only">Distribución de gastos por rubro</caption>
              <thead className="bg-muted/60 text-muted-foreground">
                <tr>
                  <th className="px-3 py-2 font-medium">Rubro</th>
                  <th className="px-3 py-2 font-medium">Monto</th>
                </tr>
              </thead>
              <tbody>
                {GASTOS.map((g) => (
                  <tr key={g.rubro} className="border-t border-border/40">
                    <td className="px-3 py-1.5 text-foreground">{g.rubro}</td>
                    <td className="px-3 py-1.5 tabular-nums text-foreground">${g.monto}K</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <>
          {/* Line chart: evolución mensual */}
          <div>
            <div className="mb-2 flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="h-0.5 w-3 rounded-full bg-[var(--s1)]" /> Ventas
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-0.5 w-3 rounded-full bg-[var(--s2)]" /> CMV
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-0.5 w-3 rounded-full bg-[var(--s3)]" /> EBIT
              </span>
            </div>
            <div className="relative">
              <svg
                viewBox={`0 0 ${CHART_W} ${CHART_H}`}
                className="w-full"
                role="img"
                aria-label="Evolución mensual de ventas, CMV y EBIT, de enero a junio"
                onMouseLeave={() => setHoverIdx(null)}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const px = ((e.clientX - rect.left) / rect.width) * CHART_W;
                  const ratio = (px - MARGIN.left) / PLOT_W;
                  const idx = Math.round(ratio * (MESES.length - 1));
                  setHoverIdx(Math.min(Math.max(idx, 0), MESES.length - 1));
                }}
              >
                {[0, 2000, 4000, 6000].map((v) => (
                  <line
                    key={v}
                    x1={MARGIN.left}
                    x2={CHART_W - MARGIN.right}
                    y1={y(v)}
                    y2={y(v)}
                    stroke="hsl(var(--border))"
                    strokeWidth={1}
                  />
                ))}

                {[VENTAS, CMV, EBIT].map((serie, si) => (
                  <path
                    key={si}
                    d={path(serie)}
                    fill="none"
                    stroke={`var(--s${si + 1})`}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ))}

                {[VENTAS, CMV, EBIT].map((serie, si) => (
                  <g key={si}>
                    <circle
                      cx={x(serie.length - 1)}
                      cy={y(serie[serie.length - 1])}
                      r={4}
                      fill={`var(--s${si + 1})`}
                      stroke="hsl(var(--card))"
                      strokeWidth={2}
                    />
                    <text
                      x={x(serie.length - 1) + 8}
                      y={y(serie[serie.length - 1]) + 3}
                      fontSize={10}
                      fill="hsl(var(--muted-foreground))"
                    >
                      {(serie[serie.length - 1] / 1000).toFixed(1)}K
                    </text>
                  </g>
                ))}

                {MESES.map((m, i) => (
                  <text
                    key={m}
                    x={x(i)}
                    y={CHART_H - 6}
                    fontSize={10}
                    textAnchor="middle"
                    fill="hsl(var(--muted-foreground))"
                  >
                    {m}
                  </text>
                ))}

                {tooltip ? (
                  <line
                    x1={tooltip.cx}
                    x2={tooltip.cx}
                    y1={MARGIN.top}
                    y2={CHART_H - MARGIN.bottom}
                    stroke="hsl(var(--muted-foreground))"
                    strokeWidth={1}
                    strokeDasharray="2 2"
                  />
                ) : null}
              </svg>

              {tooltip ? (
                <div
                  className="pointer-events-none absolute top-0 z-10 -translate-x-1/2 rounded-md border border-border/60 bg-popover px-2.5 py-1.5 text-xs shadow-md"
                  style={{ left: `${(tooltip.cx / CHART_W) * 100}%` }}
                >
                  <p className="mb-1 font-medium text-foreground">{tooltip.mes}</p>
                  <p className="text-[var(--s1)]">
                    <span className="text-foreground">${tooltip.ventas.toLocaleString('es-AR')}K</span> Ventas
                  </p>
                  <p className="text-[var(--s2)]">
                    <span className="text-foreground">${tooltip.cmv.toLocaleString('es-AR')}K</span> CMV
                  </p>
                  <p className="text-[var(--s3)]">
                    <span className="text-foreground">${tooltip.ebit.toLocaleString('es-AR')}K</span> EBIT
                  </p>
                </div>
              ) : null}
            </div>
          </div>

          {/* Bar chart: distribución de gastos */}
          <div>
            <p className="mb-2 text-xs text-muted-foreground">Distribución de gastos por rubro (mes actual)</p>
            <div className="space-y-2">
              {GASTOS.map((g) => (
                <div key={g.rubro} className="flex items-center gap-3">
                  <span className="w-20 shrink-0 text-xs text-muted-foreground">{g.rubro}</span>
                  <div className="h-[22px] flex-1">
                    <div
                      title={`${g.rubro}: $${g.monto}K`}
                      className="h-[22px] rounded-r-[4px] bg-[var(--s1)] transition-[width]"
                      style={{ width: `${(g.monto / maxGasto) * 100}%` }}
                    />
                  </div>
                  <span className="w-12 shrink-0 text-right text-xs tabular-nums text-foreground">
                    ${g.monto}K
                  </span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
