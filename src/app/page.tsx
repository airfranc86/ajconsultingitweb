import { Navbar } from '@/components/sections/navbar';
import { Hero } from '@/components/sections/hero';
import { Rubros } from '@/components/sections/rubros';
import { Metodologia } from '@/components/sections/metodologia';
import { Proyectos } from '@/components/sections/proyectos';
import { FAQ } from '@/components/sections/faq';
import { Contacto } from '@/components/sections/contacto';
import { Footer } from '@/components/sections/footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Rubros />
        <Metodologia />
        <Proyectos />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
