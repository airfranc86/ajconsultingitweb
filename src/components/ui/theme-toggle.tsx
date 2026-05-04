'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
}

/**
 * Toggle dark/light. Usa `next-themes` para persistencia y respeto del
 * `prefers-color-scheme` del sistema.
 *
 * Renderiza un placeholder durante SSR para evitar hydration mismatch
 * (el theme real solo se conoce client-side).
 */
export function ThemeToggle({ className }: ThemeToggleProps): JSX.Element {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === 'dark';
  const next = isDark ? 'light' : 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={mounted ? `Cambiar a tema ${next === 'dark' ? 'oscuro' : 'claro'}` : 'Cambiar tema'}
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-card/50 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground',
        className,
      )}
    >
      {mounted ? (
        isDark ? (
          <Sun className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Moon className="h-4 w-4" aria-hidden="true" />
        )
      ) : (
        <span className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}
