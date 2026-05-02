import Link from 'next/link';
import { Linkedin, Mail, MessageCircle } from 'lucide-react';
import { contact } from '@/data/contact';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="grid h-8 w-8 place-items-center rounded-md bg-primary/20 text-primary">
                AJ
              </span>
              A&amp;J Consulting IT
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              BI, IA y automatización para PyMEs y profesionales. Soluciones reales en
              producción.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium">Navegación</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#rubros" className="hover:text-foreground">Rubros</Link></li>
              <li><Link href="#metodologia" className="hover:text-foreground">Metodología</Link></li>
              <li><Link href="#proyectos" className="hover:text-foreground">Proyectos</Link></li>
              <li><Link href="#faq" className="hover:text-foreground">FAQ</Link></li>
              <li><Link href="#contacto" className="hover:text-foreground">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium">Contacto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={contact.whatsapp.link()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-foreground"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  WhatsApp · {contact.whatsapp.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.emails.francisco}`}
                  className="flex items-center gap-2 hover:text-foreground"
                >
                  <Mail className="h-3.5 w-3.5" />
                  {contact.emails.francisco}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.emails.andres}`}
                  className="flex items-center gap-2 hover:text-foreground"
                >
                  <Mail className="h-3.5 w-3.5" />
                  {contact.emails.andres}
                </a>
              </li>
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

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-border/40 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {year} A&amp;J Consulting IT · Todos los derechos reservados</p>
          <p className="font-mono">Built with Next.js · shadcn/ui · Vercel</p>
        </div>
      </div>
    </footer>
  );
}
