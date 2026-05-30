'use client';

import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import { BrandMark } from '@/components/ui/brand-mark';
import { contact } from '@/data/contact';
import { trackCTA } from '@/lib/gtag';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <BrandMark hideTextOnMobile={false} />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              BI, IA y automatización para PyMEs y profesionales. Soluciones reales en
              producción.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium">Navegación</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#rubros" className="hover:text-foreground" onClick={() => trackCTA('Rubros')}>
                  Rubros
                </Link>
              </li>
              <li>
                <Link
                  href="#metodologia"
                  className="hover:text-foreground"
                  onClick={() => trackCTA('Metodología')}
                >
                  Metodología
                </Link>
              </li>
              <li>
                <Link
                  href="#proyectos"
                  className="hover:text-foreground"
                  onClick={() => trackCTA('Proyectos')}
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-foreground" onClick={() => trackCTA('FAQ')}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="hover:text-foreground"
                  onClick={() => trackCTA('Contacto')}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium">Contacto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-foreground"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-6 text-center text-xs text-muted-foreground">
          <p>© {year} A&amp;J Consulting IT · Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}
