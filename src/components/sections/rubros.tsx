import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { rubros } from '@/data/content';
import { Check } from 'lucide-react';

export function Rubros() {
  return (
    <section id="rubros" className="border-t border-border/40 py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="muted" className="mb-4">Rubros</Badge>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Soluciones que generan valor real
          </h2>
          <p className="mt-4 text-muted-foreground">
            Adaptadas a cada rubro. No vendemos paquetes genéricos: armamos lo que tu
            negocio necesita.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rubros.map((r) => {
            const Icon = r.icon;
            return (
              <Card
                key={r.slug}
                className="group relative overflow-hidden transition-all hover:border-primary/40 hover:shadow-[0_0_40px_-12px_hsl(var(--primary)/0.4)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <CardHeader>
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{r.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{r.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {r.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="rounded-md border border-primary/20 bg-primary/5 p-3 text-sm font-medium text-primary">
                    {r.metric}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
