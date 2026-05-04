/**
 * Datos de contacto centralizados.
 * Cambiar acá impacta en toda la app: Hero, CTA, Footer, Contacto.
 */

const WHATSAPP_NUMBER = '5493513764462'; // formato wa.me sin '+' ni espacios
const DEFAULT_WA_MESSAGE =
  '¡Hola! Vi su web y me interesa saber más sobre los servicios de A&J Consulting IT.';

export const contact = {
  whatsapp: {
    /**
     * Construye un link de WhatsApp con mensaje pre-cargado opcional.
     * El número crudo se mantiene local a este módulo (no se exporta como
     * `display` ni `number`) para reducir superficie de scraping anti-bot.
     * Doc: https://faq.whatsapp.com/5913398998672934
     */
    link: (message: string = DEFAULT_WA_MESSAGE): string =>
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
  },
  emails: {
    francisco: 'franciscoaucar@ajconsultingit.com',
    andres: 'andresnj11@ajconsultingit.com',
  },
  linkedin: 'https://www.linkedin.com/company/a-j-consultingit-software',
} as const;
