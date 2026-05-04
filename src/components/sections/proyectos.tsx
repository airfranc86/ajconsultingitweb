import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { LayerStack, Card as StackCard } from '@/components/ui/layer-stack';
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
            Cada proyecto resuelve una necesidad de negocio concreta. Arrastrá o usá la
            rueda del mouse para recorrer.
          </p>
        </div>

        <div className="mt-16">
          <LayerStack cardWidth={360} cardGap={20} stageHeight={460}>
            {proyectos.map((p) => (
              <StackCard key={p.slug}>
                <ProyectoFeature proyecto={p} />
              </StackCard>
            ))}
          </LayerStack>
        </div>
      </div>
    </section>
  );
}

interface ProyectoFeatureProps {
  proyecto: Proyecto;
}

function ProyectoFeature({ proyecto }: ProyectoFeatureProps) {
  const Icon = proyecto.icon;
  return (
    <article className="group flex h-full flex-col gap-5 rounded-xl border border-border/60 bg-card p-7">
      <div className="flex items-start justify-between">
        {proyecto.logo ? (
          <div className="grid h-16 w-16 place-items-center overflow-hidden rounded-lg bg-white/95 p-2">
            <Image
              src={proyecto.logo}
              alt={`Logo ${proyecto.nombre}`}
              width={64}
              height={64}
              className="h-full w-full object-contain"
            />
          </div>
        ) : Icon ? (
          <div className="grid h-16 w-16 place-items-center rounded-lg bg-primary/10 text-primary">
            <Icon className="h-7 w-7" />
          </div>
        ) : null}
        <span className="font-mono text-xs text-muted-foreground">{proyecto.numero}</span>
      </div>

      <div>
        <Badge variant="outline" className="mb-3 text-[10px]">
          {proyecto.categoria}
        </Badge>
        <h3 className="text-xl font-semibold tracking-tight">{proyecto.nombre}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {proyecto.descripcion}
        </p>
      </div>

      <ul className="space-y-1.5">
        {proyecto.features.map((f) => (
          <li key={f} className="text-xs text-muted-foreground">
            · {f}
          </li>
        ))}
      </ul>

      {proyecto.url && (
        <Link
          href={proyecto.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver proyecto ${proyecto.nombre} en nueva ventana`}
          className="mt-auto inline-flex items-center gap-1.5 self-start rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-medium text-primary transition-colors hover:border-primary/60 hover:bg-primary/10"
        >
          Ver proyecto
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </article>
  );
}
