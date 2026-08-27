'use client';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { StrokeText } from '@/components/ui/stroke-text';
import { TextType } from '@/components/ui/text-type';
import { metricas } from '@/data/content';
import { trackCTA } from '@/lib/gtag';

const MagicRings = dynamic(
  () => import('@/components/ui/magic-rings').then((m) => m.MagicRings),
  { ssr: false }
);

const MetalFx = dynamic(() => import('metal-fx').then((m) => m.MetalFx), { ssr: false });

const HERO_HOOKS = [
  '¿Freelancer suelto?',
  '¿Consultora que tarda meses?',
  '¿Plataforma que no podés tocar?',
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />

      {/* Glow radial */}
      <div
        className="absolute left-1/2 top-0 -z-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative mx-auto mb-10 grid h-32 w-32 place-items-center md:h-40 md:w-40"
        >
          <div className="pointer-events-none absolute -inset-10 -z-10" aria-hidden="true">
            <MagicRings
              color="#1fae63"
              colorTwo="#34d399"
              ringCount={4}
              opacity={0.5}
              speed={0.6}
            />
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative h-full w-full"
          >
            <Image
              src="/aj-logo.png"
              alt="A&J Consulting IT"
              fill
              priority
              sizes="(min-width: 768px) 160px, 128px"
              className="object-contain drop-shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge variant="outline" className="mb-6 gap-1.5 px-3 py-1">
            <Sparkles className="h-3 w-3 text-primary" />
            <span className="text-muted-foreground">I+D embebido · BI · IA · Automatización</span>
          </Badge>

          <div className="mb-4 flex min-h-6 items-center justify-center">
            <TextType
              as="p"
              text={HERO_HOOKS}
              typingSpeed={45}
              pauseDuration={1400}
              deletingSpeed={25}
              className="text-sm font-medium text-muted-foreground"
              cursorClassName="text-primary"
            />
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            Conectamos los sistemas que ya tenés.
          </h1>
          <StrokeText
            text="En días, no en meses."
            trigger="mount"
            fontSize={48}
            fontWeight={600}
            letterSpacing={-1}
            strokeColor="hsl(var(--primary))"
            fillColor="hsl(var(--foreground))"
            className="mx-auto mt-1 max-w-xl"
          />

          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl">
            I+D embebido para PyMEs: investigamos antes de cotizar y el código y los datos
            siempre son tuyos.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <MetalFx variant="button" preset="silver">
              <Button
                asChild
                size="lg"
                className="glow-primary"
                onClick={() => trackCTA('Ver proyectos reales')}
              >
                <Link href="#proyectos">
                  Ver proyectos reales
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </MetalFx>
            <Button
              asChild
              size="lg"
              variant="outline"
              onClick={() => trackCTA('Diagnóstico gratuito')}
            >
              <Link href="#contacto">Diagnóstico gratuito</Link>
            </Button>
          </div>
        </motion.div>

        {/* Métricas */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60 md:grid-cols-4"
        >
          {metricas.map((m) => (
            <div key={m.label} className="bg-card p-6 text-center">
              <div className="text-2xl font-semibold tracking-tight md:text-3xl">{m.valor}</div>
              <div className="mt-1 text-xs text-muted-foreground md:text-sm">{m.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
