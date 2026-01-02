import React, { useEffect, Suspense, lazy } from 'react';
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

  return (
    <>
      {/* Header - Migrado a React */}
      <Header />

      {/* Secciones migradas a React con lazy loading */}
      <Suspense fallback={<div style={{ minHeight: '100vh', paddingTop: '80px' }}>Cargando...</div>}>
        <HeroSection />
        <MethodologySection />
        <ContactSection />
      </Suspense>

      {/* Modal de Demo - Migrado a React */}
      <DemoModal isOpen={isOpen} onClose={closeModal} />

      {/* Footer - Migrado a React */}
      <Footer />
    </>
  );
};

export default App;

