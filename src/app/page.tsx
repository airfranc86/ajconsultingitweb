import { Navbar } from '@/components/sections/navbar';
import { Hero } from '@/components/sections/hero';
import { Pillars } from '@/components/sections/pillars';
import { Rubros } from '@/components/sections/rubros';
import { Metodologia } from '@/components/sections/metodologia';
import { Proyectos } from '@/components/sections/proyectos';
import { AntiFit } from '@/components/sections/anti-fit';
import { FAQ } from '@/components/sections/faq';
import { Stack } from '@/components/sections/stack';
import { Contacto } from '@/components/sections/contacto';
import { Footer } from '@/components/sections/footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <Rubros />
        <Metodologia />
        <Proyectos />
        <AntiFit />
        <FAQ />
        <Stack />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
