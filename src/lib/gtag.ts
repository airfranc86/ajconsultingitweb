/**
 * Utilidad para el rastreo de eventos de Google Analytics 4 (GA4).
 * Utiliza el comando 'gtag' global inyectado por @next/third-parties/google.
 */

type GtagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: any;
};

export const trackEvent = (action: string, params: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, params);
  } else {
    // Silently fail or log in development if needed
    if (process.env.NODE_ENV === 'development') {
      console.log(`[GA4 Event] ${action}:`, params);
    }
  }
};

/**
 * Dispara el evento 'click_cta' para botones y enlaces de navegación.
 */
export const trackCTA = (ctaName: string) => {
  trackEvent('click_cta', { cta_name: ctaName });
};

/**
 * Dispara el evento 'faq_open' cuando se despliega una pregunta frecuente.
 */
export const trackFAQOpen = (faqTitle: string) => {
  trackEvent('faq_open', { faq_title: faqTitle });
};
