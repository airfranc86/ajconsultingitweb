import { Badge } from '@/components/ui/badge';
import { pillars } from '@/data/content';

export function Pillars() {
  return (
    <section id="por-que" className="border-t border-border/40 py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="muted" className="mb-4">Por qué nos eligen</Badge>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Tres razones, no eslóganes
          </h2>
          <p className="mt-4 text-muted-foreground">
            Lo que nos diferencia de un freelancer de dashboards y de una consultora
            corporativa cara.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.numero}
                className="relative flex flex-col rounded-xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="mb-4 flex items-baseline gap-3">
                  <span className="font-mono text-xs text-primary">{p.numero}</span>
                  <span className="h-px flex-1 bg-border" />
                </div>

                <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="font-semibold tracking-tight">{p.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.descripcion}
                </p>

                <div className="mt-auto pt-4">
                  <div className="rounded-md border border-primary/20 bg-primary/5 p-3 text-sm font-medium text-primary">
                    {p.prueba}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
