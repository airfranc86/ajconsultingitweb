'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes';

/**
 * Wrapper de next-themes para uso en `app/layout.tsx`.
 *
 * Maneja la persistencia del tema (localStorage), el SSR sin flash
 * (FOUC) y la sincronización con `prefers-color-scheme`.
 */
export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps): React.ReactElement {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
