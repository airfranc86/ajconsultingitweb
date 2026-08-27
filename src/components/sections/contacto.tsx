'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { Linkedin, ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { contact } from '@/data/contact';
import { trackCTA } from '@/lib/gtag';

export function Contacto() {
  const [nombre, setNombre] = useState('');
  const [rubro, setRubro] = useState('');
  const [necesidad, setNecesidad] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    trackCTA('Contacto WhatsApp');

    const mensaje = [
      `¡Hola! Soy ${nombre || 'un visitante de la web'}`,
      rubro && `, del rubro ${rubro}`,
      '.',
      necesidad && ` Necesito ayuda con: ${necesidad}.`,
    ]
      .filter(Boolean)
      .join('');

    window.open(contact.whatsapp.link(mensaje), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contacto" className="border-t border-border/40 py-24">
      <div className="container">
        <div className="mx-auto max-w-lg">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Contanos qué querés resolver
            </h2>
            <p className="mt-4 text-muted-foreground">
              Sin formularios eternos. 3 datos y hablamos por WhatsApp.
            </p>
          </div>

          <Card className="mt-10 overflow-hidden border-primary/30 bg-gradient-to-br from-card to-primary/5">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contacto-nombre" className="sr-only">
                    Nombre
                  </label>
                  <input
                    id="contacto-nombre"
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="w-full rounded-md border border-border/60 bg-background px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contacto-rubro" className="sr-only">
                    Rubro
                  </label>
                  <input
                    id="contacto-rubro"
                    type="text"
                    placeholder="Rubro (ej: gastronomía, salud, e-commerce)"
                    value={rubro}
                    onChange={(e) => setRubro(e.target.value)}
                    className="w-full rounded-md border border-border/60 bg-background px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  />
                </div>
                <div>
                  <label htmlFor="contacto-necesidad" className="sr-only">
                    Qué necesitás resolver
                  </label>
                  <textarea
                    id="contacto-necesidad"
                    placeholder="¿Qué necesitás resolver?"
                    value={necesidad}
                    onChange={(e) => setNecesidad(e.target.value)}
                    rows={3}
                    className="w-full resize-none rounded-md border border-border/60 bg-background px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  />
                </div>

                <Button type="submit" size="lg" className="glow-primary w-full">
                  Enviar por WhatsApp
                </Button>
              </form>

              <Link
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCTA('LinkedIn')}
                aria-label="Conectar en LinkedIn con A&J Consulting IT"
                className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-3.5 w-3.5" />
                o conectá en LinkedIn
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
