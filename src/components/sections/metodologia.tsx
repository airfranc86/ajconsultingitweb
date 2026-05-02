import { Badge } from '@/components/ui/badge';
import { metodologia } from '@/data/content';

export function Metodologia() {
  return (
    <section id="metodologia" className="border-t border-border/40 py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="muted" className="mb-4">Cómo trabajamos</Badge>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Proceso claro y transparente
          </h2>
          <p className="mt-4 text-muted-foreground">
            En 4 pasos. Sin sorpresas. Sin scope creep silencioso.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Línea conectora */}
          <div
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent lg:block"
            aria-hidden="true"
          />

          <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {metodologia.map((paso, i) => (
              <li
                key={paso.numero}
                className="relative rounded-lg border border-border/60 bg-card p-6"
              >
                <div className="mb-4 flex items-baseline gap-3">
                  <span className="font-mono text-xs text-primary">{paso.numero}</span>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <h3 className="font-semibold tracking-tight">{paso.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {paso.descripcion}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
