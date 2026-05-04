import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import type { Proyecto } from '@/data/content';
import { proyectos } from '@/data/content';

export function Proyectos() {
  return (
    <section id="proyectos" className="border-t border-border/40 py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="muted" className="mb-4">
            Proyectos reales
          </Badge>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Casos en producción, no portfolio estético
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cada proyecto resuelve una necesidad de negocio concreta.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {proyectos.map((p) => (
            <ProyectoCardWrapper key={p.slug} proyecto={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProyectoCardWrapperProps {
  proyecto: Proyecto;
}

function ProyectoCardWrapper({ proyecto }: ProyectoCardWrapperProps) {
  if (proyecto.url) {
    return (
      <Link
        href={proyecto.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver proyecto ${proyecto.nombre} en nueva ventana`}
        className="group block"
      >
        <ProyectoCard proyecto={proyecto} clickable />
      </Link>
    );
  }
  return (
    <div className="block">
      <ProyectoCard proyecto={proyecto} clickable={false} />
    </div>
  );
}

interface ProyectoCardProps {
  proyecto: Proyecto;
  clickable: boolean;
}

function ProyectoCard({ proyecto, clickable }: ProyectoCardProps) {
  return (
    <Card className="relative h-full overflow-hidden transition-all hover:border-primary/40">
      <CardContent className="flex h-full flex-col p-6">
        <div className="flex items-start justify-between">
          <div className="grid h-14 w-14 place-items-center overflow-hidden rounded-md bg-white/95 p-1.5">
            <Image
              src={proyecto.logo}
              alt={`Logo ${proyecto.nombre}`}
              width={56}
              height={56}
              className="h-full w-full object-contain"
            />
          </div>
          <span className="font-mono text-xs text-muted-foreground">{proyecto.numero}</span>
        </div>

        <div className="mt-6">
          <Badge variant="outline" className="mb-3 text-[10px]">
            {proyecto.categoria}
          </Badge>
          <h3 className="text-lg font-semibold tracking-tight">{proyecto.nombre}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {proyecto.descripcion}
          </p>
        </div>

        <ul className="mt-4 space-y-1.5">
          {proyecto.features.map((f) => (
            <li key={f} className="text-xs text-muted-foreground">
              · {f}
            </li>
          ))}
        </ul>

        {clickable && (
          <div className="mt-auto flex items-center gap-1 pt-6 text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100">
            Ver proyecto
            <ArrowUpRight className="h-3.5 w-3.5" />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
