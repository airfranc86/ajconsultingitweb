'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BrandMark } from '@/components/ui/brand-mark';
import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { cn } from '@/lib/utils';

const links = [
  { href: '#rubros', label: 'Rubros' },
  { href: '#metodologia', label: 'Metodología' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#faq', label: 'FAQ' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/40 bg-background/80 backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <BrandMark priority hideTextOnMobile />

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Button asChild size="sm" className="glow-primary">
          <WhatsAppLink ariaLabel="Pedí tu diagnóstico gratuito por WhatsApp">
            <WhatsAppIcon className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Diagnóstico gratuito</span>
            <span className="sm:hidden">WhatsApp</span>
          </WhatsAppLink>
        </Button>
      </div>
    </header>
  );
}
