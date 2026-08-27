import { Navbar } from '@/components/sections/navbar';
import { Hero } from '@/components/sections/hero';
import { Proyectos } from '@/components/sections/proyectos';
import { Servicios } from '@/components/sections/servicios';
import { Sobre } from '@/components/sections/sobre';
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
        <Proyectos />
        <Servicios />
        <Sobre />
        <AntiFit />
        <FAQ />
        <Stack />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
