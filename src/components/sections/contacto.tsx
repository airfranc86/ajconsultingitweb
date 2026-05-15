import Link from 'next/link';
import { Linkedin, ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { contact } from '@/data/contact';

export function Contacto() {
  return (
    <section id="contacto" className="border-t border-border/40 py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <Badge variant="muted" className="mb-4">
              Diagnóstico gratuito
            </Badge>
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Hablemos sin compromiso
            </h2>
            <p className="mt-4 text-muted-foreground">
              Conectá por LinkedIn o usá el botón de WhatsApp en la esquina inferior
              derecha. Te respondemos en el día, sin formularios.
            </p>
          </div>

          {/* CTA principal: LinkedIn */}
          <Card className="mt-12 overflow-hidden border-primary/30 bg-gradient-to-br from-card to-primary/5">
            <CardContent className="p-8 md:p-10">
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Linkedin className="h-6 w-6" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                    Conectemos en LinkedIn
                  </h3>
                  <p className="text-sm text-muted-foreground md:text-base">
                    Contanos brevemente tu rubro y qué procesos querés mejorar. Volvemos
                    con una propuesta concreta — sin compromiso.
                  </p>
                </div>

                <Button asChild size="lg" className="glow-primary">
                  <Link
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Conectar en LinkedIn con A&J Consulting IT"
                  >
                    <Linkedin className="h-4 w-4" />
                    Conectar en LinkedIn
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
