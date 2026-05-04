'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { metricas } from '@/data/content';

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
          className="mx-auto mb-10 grid h-32 w-32 place-items-center md:h-40 md:w-40"
        >
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
            <span className="text-muted-foreground">BI · IA · Automatización</span>
          </Badge>

          <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            Consultora IT de{' '}
            <span className="gradient-text">Business Intelligence</span> para todos los
            rubros profesionales
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl">
            Desarrollamos landings, sistemas de turnos, control de stock, dashboards de
            KPIs y automatización. Soluciones concretas que reemplazan procesos manuales y
            decisiones a ojo.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="glow-primary">
              <WhatsAppLink ariaLabel="Pedí tu diagnóstico gratuito por WhatsApp">
                <WhatsAppIcon className="h-4 w-4" />
                Pedí tu diagnóstico gratuito
                <ArrowRight className="h-4 w-4" />
              </WhatsAppLink>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#proyectos">Ver proyectos reales</Link>
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
