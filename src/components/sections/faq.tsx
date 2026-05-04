import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { faqs } from '@/data/content';

export function FAQ() {
  return (
    <section id="faq" className="border-t border-border/40 py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="muted" className="mb-4">Preguntas frecuentes</Badge>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Lo que más nos preguntan
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
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
