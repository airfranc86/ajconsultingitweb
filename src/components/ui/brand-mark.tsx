import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface BrandMarkProps {
  /** Si true, oculta el texto en mobile (`< sm`). Default true (uso navbar). */
  hideTextOnMobile?: boolean;
  /** Marca el logo como `priority` para LCP (usar solo en navbar/hero). */
  priority?: boolean;
  className?: string;
}

/**
 * Marca visual del sitio: logo AJ + texto "A&J Consulting IT" linkeando al home.
 * Reutilizado por Navbar y Footer.
 */
export function BrandMark({
  hideTextOnMobile = true,
  priority = false,
  className,
}: BrandMarkProps): JSX.Element {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center gap-2 font-semibold tracking-tight',
        className,
      )}
    >
      <Image
        src="/aj-logo.png"
        alt="A&J Consulting IT"
        width={32}
        height={32}
        priority={priority}
        className="h-8 w-8 object-contain"
      />
      <span className={cn(hideTextOnMobile && 'hidden sm:inline')}>
        A&amp;J Consulting IT
      </span>
    </Link>
  );
}
