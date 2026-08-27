import { propuestaValor } from '@/data/content';

export function PropuestaValor() {
  return (
    <section id="por-que" className="border-t border-border/40 py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            No es lo mismo que un freelancer o una consultora cara
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {propuestaValor.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.numero}
                className="flex flex-col rounded-xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>

                <p className="text-sm text-muted-foreground line-through decoration-muted-foreground/40">
                  {p.problema}
                </p>
                <p className="mt-3 font-medium leading-relaxed">{p.solucion}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
