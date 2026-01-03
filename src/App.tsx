import React, { useEffect, Suspense, lazy } from 'react';
import { createPortal } from 'react-dom';
import { DemoModal } from './components/forms/DemoModal';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { useDemoModal } from './hooks/useDemoModal';

// Code splitting: Lazy load de secciones no críticas
const HeroSection = lazy(() => import('./components/sections/HeroSection').then((m) => ({ default: m.HeroSection })));
const MethodologySection = lazy(() =>
  import('./components/sections/MethodologySection').then((m) => ({ default: m.MethodologySection }))
);
const ContactSection = lazy(() =>
  import('./components/sections/ContactSection').then((m) => ({ default: m.ContactSection }))
);

const App: React.FC = () => {
  const { isOpen, openModal, closeModal } = useDemoModal();

  // Exponer funciones globalmente para compatibilidad con código vanilla
  useEffect(() => {
    // Reemplazar la función showDemoModal global con la versión React
    (window as any).showDemoModal = openModal;
    (window as any).closeDemoModal = closeModal;

    return () => {
      // Restaurar funciones originales si es necesario
      delete (window as any).showDemoModal;
      delete (window as any).closeDemoModal;
    };
  }, [openModal, closeModal]);

  // Portals para renderizar secciones en el orden correcto
  // Usar useEffect para asegurar que los portals existen antes de renderizar
  const [sectionsPortal, setSectionsPortal] = React.useState<HTMLElement | null>(null);
  const [footerPortal, setFooterPortal] = React.useState<HTMLElement | null>(null);

  useEffect(() => {
    // Buscar portals después de que React haya montado
    const sections = document.getElementById('react-sections-portal');
    const footer = document.getElementById('react-footer-portal');
    
    if (sections) setSectionsPortal(sections);
    if (footer) setFooterPortal(footer);
    
    // Si no se encuentran, intentar de nuevo después de un breve delay
    if (!sections || !footer) {
      const timeout = setTimeout(() => {
        const sectionsRetry = document.getElementById('react-sections-portal');
        const footerRetry = document.getElementById('react-footer-portal');
        if (sectionsRetry) setSectionsPortal(sectionsRetry);
        if (footerRetry) setFooterPortal(footerRetry);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <>
      {/* Header - Migrado a React */}
      <Header />

      {/* Hero Section - Renderizado en root */}
      <Suspense fallback={<div style={{ minHeight: '100vh', paddingTop: '80px' }}>Cargando...</div>}>
        <HeroSection />
      </Suspense>

      {/* Methodology y Contact - Renderizados con Portal después de secciones HTML (rubros, proyectos, equipo) */}
      {sectionsPortal && (
        <Suspense fallback={null}>
          {createPortal(
            <>
              <MethodologySection />
              <ContactSection />
            </>,
            sectionsPortal
          )}
        </Suspense>
      )}

      {/* Modal de Demo - Migrado a React */}
      <DemoModal isOpen={isOpen} onClose={closeModal} />

      {/* Footer - Renderizado con Portal al final */}
      {footerPortal && createPortal(<Footer />, footerPortal)}
    </>
  );
};

export default App;

