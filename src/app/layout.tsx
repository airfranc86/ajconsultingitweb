import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const SITE_URL = 'https://ajconsultingitwebv2.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'A&J Consulting IT — BI e IA para PyMEs y profesionales',
    template: '%s · A&J Consulting IT',
  },
  description:
    'Consultora IT especializada en Business Intelligence, IA y automatización para clínicas, bares, obras y servicios profesionales. Soluciones reales en producción.',
  keywords: [
    'consultora IT',
    'business intelligence',
    'inteligencia artificial',
    'dashboards KPI',
    'automatización pymes',
    'desarrollo de software',
    'Argentina',
    'Córdoba',
  ],
  authors: [{ name: 'A&J Consulting IT' }],
  creator: 'A&J Consulting IT',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: SITE_URL,
    siteName: 'A&J Consulting IT',
    title: 'A&J Consulting IT — BI e IA para PyMEs y profesionales',
    description:
      'BI, IA y automatización para PyMEs. Casos reales en producción, no portfolio estético.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A&J Consulting IT',
    description: 'BI e IA para PyMEs y profesionales',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0a0d14',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`dark ${GeistSans.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
