import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { servicios } from '@/data/content';

export function Servicios() {
  return (
    <section id="servicios" className="border-t border-border/40 py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Servicios clave
          </h2>
          <p className="mt-4 text-muted-foreground">
            No vendemos paquetes genéricos: armamos lo que tu negocio necesita.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {servicios.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.categoria}
                className="flex flex-col rounded-xl border border-border/60 bg-card p-7 transition-colors hover:border-primary/40"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold tracking-tight">{s.categoria}</h3>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">{s.parrafo}</p>

                <ul className="mt-4 space-y-1.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                  <span className="text-xs font-medium text-primary">{s.metrica}</span>
                  <Link
                    href={s.proyectoUrl}
                    target={s.proyectoUrl.startsWith('#') ? undefined : '_blank'}
                    rel={s.proyectoUrl.startsWith('#') ? undefined : 'noopener noreferrer'}
                    className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-primary hover:underline"
                  >
                    Ver {s.proyectoNombre}
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
