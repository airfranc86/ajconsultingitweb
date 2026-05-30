import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { JetBrains_Mono } from 'next/font/google';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { ThemeProvider } from '@/components/theme-provider';
import { WhatsAppFab } from '@/components/ui/whatsapp-fab';
import './globals.css';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

/**
 * URL canónica del sitio para metadata y Open Graph.
 * Configurable vía `NEXT_PUBLIC_SITE_URL` en Vercel → Settings → Environment Variables.
 * Fallback: dominio corporativo. Cambiar acá si el dominio definitivo difiere.
 */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ajconsultingit.com';

/**
 * JSON-LD `ProfessionalService` schema para reforzar identidad corporativa
 * en Google (Knowledge Panel, rich results, búsquedas de marca).
 *
 * Validación: https://search.google.com/test/rich-results
 */
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'A&J Consulting IT',
  alternateName: 'AJ Consulting IT',
  description:
    'I+D embebido para PyMEs que ya tienen sistemas y necesitan que conversen. Business Intelligence, IA y automatización con investigación previa al deploy.',
  url: SITE_URL,
  areaServed: { '@type': 'Country', name: 'Argentina' },
  knowsAbout: [
    'Business Intelligence',
    'Inteligencia Artificial',
    'Automatización de procesos',
    'Dashboards de KPIs',
    'OCR y Document AI',
    'ETL y pipelines de datos',
    'Desarrollo de software a medida',
  ],
  serviceType: [
    'Consultoría IT',
    'Business Intelligence',
    'Automatización',
    'Desarrollo de software',
  ],
};

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
    <html
      lang="es"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${jetbrainsMono.variable}`}
    >
      <GoogleTagManager gtmId="GTM-KK2JW23L" />
      <body className="font-sans">
        {/* SEO: ProfessionalService schema (Knowledge Panel + brand SERPs) */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <WhatsAppFab />
        </ThemeProvider>
      </body>
      {GA_MEASUREMENT_ID ? <GoogleAnalytics gaId={GA_MEASUREMENT_ID} /> : null}
    </html>
  );
}
