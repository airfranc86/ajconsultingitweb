import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { faqs } from '@/data/content';
import { trackFAQOpen } from '@/lib/gtag';

/**
 * JSON-LD `FAQPage` schema para habilitar rich results en Google.
 * Generado en build time desde el mismo array `faqs` (fuente única de verdad).
 *
 * Validación: https://search.google.com/test/rich-results
 */
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.pregunta,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.respuesta,
    },
  })),
};

export function FAQ() {
  return (
    <section id="faq" className="border-t border-border/40 py-24">
      {/* SEO: FAQPage schema (rich results en SERPs de Google) */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="muted" className="mb-4">Preguntas frecuentes</Badge>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Lo que más nos preguntan
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            onValueChange={(value) => {
              if (value) trackFAQOpen(value);
            }}
          >
            {faqs.map((f) => (
              <AccordionItem key={f.pregunta} value={f.pregunta}>
                <AccordionTrigger>{f.pregunta}</AccordionTrigger>
                <AccordionContent>{f.respuesta}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
