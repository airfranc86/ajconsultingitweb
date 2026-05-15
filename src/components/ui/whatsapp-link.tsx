'use client';

import Link from 'next/link';
import { useEffect, useState, type MouseEvent, type ReactNode } from 'react';
import { contact } from '@/data/contact';

interface WhatsAppLinkProps {
  /** Mensaje pre-cargado opcional (override del default). */
  message?: string;
  /** Clase CSS aplicada al `<Link>`. */
  className?: string;
  /** Atributo aria-label. Default: "Contactar por WhatsApp". */
  ariaLabel?: string;
  /** Callback opcional al click (después del guard de hydration). Útil para tracking. */
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  /** Contenido del link. */
  children: ReactNode;
}

/**
 * Link a WhatsApp que evita exponer el número en el HTML SSR.
 *
 * En el render inicial el `href` apunta a `#` y `rel` desactiva navegación;
 * después del mount, un `useEffect` lo reemplaza con `https://wa.me/...`.
 * Esto reduce drásticamente la cosecha del número por bots de scraping
 * que solo miran el HTML estático (curl/wget/crawlers básicos).
 *
 * Trade-off: Googlebot con render JS sí ve el href real.
 */
export function WhatsAppLink({
  message,
  className,
  ariaLabel = 'Contactar por WhatsApp',
  onClick,
  children,
}: WhatsAppLinkProps): JSX.Element {
  const [href, setHref] = useState<string>('#');
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    setHref(contact.whatsapp.link(message));
    setReady(true);
  }, [message]);

  return (
    <Link
      href={href}
      target={ready ? '_blank' : undefined}
      rel={ready ? 'noopener noreferrer' : 'nofollow'}
      aria-label={ariaLabel}
      onClick={(e) => {
        if (!ready) {
          e.preventDefault();
          return;
        }
        onClick?.(e);
      }}
      className={className}
    >
      {children}
    </Link>
  );
}
