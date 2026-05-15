import { Check, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { antiFitNo, antiFitSi } from '@/data/content';

export function AntiFit() {
  return (
    <section id="es-para-vos" className="border-t border-border/40 py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="muted" className="mb-4">Filtros honestos</Badge>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Esto es para vos — y esto no
          </h2>
          <p className="mt-4 text-muted-foreground">
            Preferimos decirte que no encajamos antes de empezar, no después de cobrar.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-6">
            <h3 className="mb-4 flex items-center gap-2 font-semibold tracking-tight">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-destructive/15 text-destructive">
                <X className="h-3.5 w-3.5" />
              </span>
              No es para vos si…
            </h3>
            <ul className="space-y-3">
              {antiFitNo.map((item) => (
                <li
                  key={item.texto}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive/70" />
                  <span>{item.texto}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
            <h3 className="mb-4 flex items-center gap-2 font-semibold tracking-tight">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/15 text-primary">
                <Check className="h-3.5 w-3.5" />
              </span>
              Sí es para vos si…
            </h3>
            <ul className="space-y-3">
              {antiFitSi.map((item) => (
                <li
                  key={item.texto}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item.texto}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
