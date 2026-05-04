import { Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  CardFlip,
  CardFlipBack,
  CardFlipContent,
  CardFlipDescription,
  CardFlipFront,
  CardFlipHeader,
  CardFlipTitle,
} from '@/components/ui/card-flip';
import { rubros } from '@/data/content';

export function Rubros() {
  return (
    <section id="rubros" className="border-t border-border/40 py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="muted" className="mb-4">
            Rubros
          </Badge>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Soluciones que generan valor real
          </h2>
          <p className="mt-4 text-muted-foreground">
            Adaptadas a cada rubro. No vendemos paquetes genéricos: armamos lo que tu
            negocio necesita. Tocá la <span className="font-medium text-primary">ⓘ</span>{' '}
            de cada rubro para ver evidencia concreta.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rubros.map((r) => {
            const Icon = r.icon;
            return (
              <CardFlip key={r.slug} className="min-h-[380px]">
                <CardFlipFront className="min-h-[380px] transition-colors hover:border-primary/40">
                  <CardFlipHeader>
                    <div className="mb-2 grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardFlipTitle className="text-lg">{r.title}</CardFlipTitle>
                    <CardFlipDescription className="leading-relaxed">
                      {r.description}
                    </CardFlipDescription>
                  </CardFlipHeader>
                  <CardFlipContent className="mt-auto pt-4">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      Tocá ⓘ para ver métricas
                    </span>
                  </CardFlipContent>
                </CardFlipFront>

                <CardFlipBack className="min-h-[380px]">
                  <CardFlipHeader>
                    <CardFlipTitle className="text-lg">Lo que entregamos</CardFlipTitle>
                  </CardFlipHeader>
                  <CardFlipContent>
                    <ul className="space-y-2">
                      {r.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 rounded-md border border-primary/20 bg-primary/5 p-3 text-sm font-medium text-primary">
                      {r.metric}
                    </div>
                  </CardFlipContent>
                </CardFlipBack>
              </CardFlip>
            );
          })}
        </div>
      </div>
    </section>
  );
}
