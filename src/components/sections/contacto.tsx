import Link from 'next/link';
import { MessageCircle, Mail, Linkedin, ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { contact } from '@/data/contact';

export function Contacto() {
  const waLink = contact.whatsapp.link();

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
              Escribinos por WhatsApp y te respondemos en el día. Sin formularios, sin
              vueltas.
            </p>
          </div>

          {/* CTA principal: WhatsApp */}
          <Card className="mt-12 overflow-hidden border-primary/30 bg-gradient-to-br from-card to-primary/5">
            <CardContent className="p-8 md:p-10">
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-primary/15 text-primary">
                  <MessageCircle className="h-6 w-6" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                    Contanos qué necesitás
                  </h3>
                  <p className="text-sm text-muted-foreground md:text-base">
                    Un mensaje breve sobre tu rubro y qué procesos querés mejorar. Te
                    respondemos con una propuesta concreta.
                  </p>
                </div>

                <Button asChild size="lg" className="glow-primary">
                  <Link href={waLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    Escribir por WhatsApp
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>

                <p className="font-mono text-xs text-muted-foreground">
                  {contact.whatsapp.display}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Canales alternativos */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <ContactLink
              href={`mailto:${contact.emails.francisco}`}
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              value={contact.emails.francisco}
            />
            <ContactLink
              href={contact.linkedin}
              external
              icon={<Linkedin className="h-4 w-4" />}
              label="LinkedIn"
              value="A&J Consulting IT"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  icon,
  label,
  value,
  external = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  external?: boolean;
}) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <Link
      href={href}
      {...externalProps}
      className="group flex items-center justify-between rounded-lg border border-border/60 bg-card p-4 transition-all hover:border-primary/40"
    >
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-md bg-secondary text-muted-foreground transition-colors group-hover:bg-primary/15 group-hover:text-primary">
          {icon}
        </span>
        <div className="min-w-0">
          <p className="text-xs text-muted-foreground">{label}</p>
          <p className="truncate text-sm font-medium">{value}</p>
        </div>
      </div>
      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
    </Link>
  );
}
