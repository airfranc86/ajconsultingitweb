'use client';

import { useEffect, useRef, useState } from 'react';
import { sendGAEvent } from '@next/third-parties/google';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { WhatsAppLink } from '@/components/ui/whatsapp-link';
import { cn } from '@/lib/utils';

/**
 * Threshold de scroll (px) tras el cual el FAB aparece.
 * Se elige ~240px para que solo se muestre cuando el usuario salió del hero.
 */
const SCROLL_THRESHOLD = 240;

/**
 * ID del footer del sitio (definido en `footer.tsx` vía `<footer>` semántico).
 * Usamos IntersectionObserver para auto-hide cuando el footer entra al viewport.
 */
const FOOTER_SELECTOR = 'footer';

/**
 * Único punto de contacto WhatsApp del sitio.
 *
 * - Persistente bottom-right en toda la página.
 * - Aparece tras `SCROLL_THRESHOLD` px de scroll (fade + slide-up).
 * - Auto-hide cuando el footer entra al viewport (para no tapar info de contacto).
 * - Respeta `prefers-reduced-motion`.
 * - Track GA4 event `whatsapp_click` con `location: 'fab'`.
 * - Reusa `<WhatsAppLink>` (anti-scraping) y `<WhatsAppIcon>` (SVG oficial).
 */
export function WhatsAppFab(): JSX.Element | null {
  const [visible, setVisible] = useState<boolean>(false);
  const [nearFooter, setNearFooter] = useState<boolean>(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const onScroll = (): void => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const footer = document.querySelector(FOOTER_SELECTOR);
    if (!footer) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) setNearFooter(entry.isIntersecting);
      },
      { rootMargin: '0px 0px -20% 0px', threshold: 0 }
    );
    observerRef.current.observe(footer);

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const shown = visible && !nearFooter;

  const handleClick = (): void => {
    sendGAEvent('event', 'whatsapp_click', { location: 'fab' });
  };

  return (
    <div
      className={cn(
        'fixed bottom-4 right-4 z-50 transition-all duration-300 ease-out sm:bottom-6 sm:right-6',
        'motion-safe:will-change-transform',
        shown
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0'
      )}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      aria-hidden={!shown}
    >
      <WhatsAppLink
        ariaLabel="Contactar por WhatsApp"
        onClick={handleClick}
        className={cn(
          // Layout
          'group inline-flex items-center gap-2 rounded-full',
          'h-12 px-4 sm:h-14 sm:pl-4 sm:pr-5',
          // Colors
          'bg-primary text-primary-foreground',
          'border border-primary-foreground/10',
          // Shadow / glow
          'shadow-[0_8px_24px_hsl(var(--primary)/0.35)]',
          'hover:shadow-[0_10px_28px_hsl(var(--primary)/0.45)]',
          // Typography
          'text-sm font-medium tracking-tight',
          // Focus
          'outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          // Transition
          'transition-all duration-200 ease-out',
          'hover:scale-[1.03] active:scale-[0.98]'
        )}
      >
        <WhatsAppIcon className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
        <span>Hablemos</span>
      </WhatsAppLink>
    </div>
  );
}
