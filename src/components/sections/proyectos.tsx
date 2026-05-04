import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { proyectos } from '@/data/content';
import { ArrowUpRight } from 'lucide-react';

export function Proyectos() {
  return (
    <section id="proyectos" className="border-t border-border/40 py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="muted" className="mb-4">Proyectos reales</Badge>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Casos en producción, no portfolio estético
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cada proyecto resuelve una necesidad de negocio concreta.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {proyectos.map((p) => {
            const cardInner = (
              <Card className="group relative h-full overflow-hidden transition-all hover:border-primary/40">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex items-start justify-between">
                    <div className="grid h-14 w-14 place-items-center overflow-hidden rounded-md bg-white/95 p-1.5">
                      <Image
                        src={p.logo}
                        alt={`Logo ${p.nombre}`}
                        width={48}
                        height={48}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">{p.numero}</span>
                  </div>

                  <div className="mt-6">
                    <Badge variant="outline" className="mb-3 text-[10px]">
                      {p.categoria}
                    </Badge>
                    <h3 className="text-lg font-semibold tracking-tight">{p.nombre}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {p.descripcion}
                    </p>
                  </div>

                  <ul className="mt-4 space-y-1.5">
                    {p.features.map((f) => (
                      <li key={f} className="text-xs text-muted-foreground">
                        · {f}
                      </li>
                    ))}
                  </ul>

                  {p.url && (
                    <div className="mt-auto flex items-center gap-1 pt-6 text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Ver proyecto
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  )}
                </CardContent>
              </Card>
            );

            return p.url ? (
              <Link
                key={p.slug}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver proyecto ${p.nombre} en nueva ventana`}
                className="group block"
              >
                {cardInner}
              </Link>
            ) : (
              <div key={p.slug}>{cardInner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
