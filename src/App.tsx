import React, { useEffect } from 'react';
import { DemoModal } from './components/forms/DemoModal';
import { useDemoModal } from './hooks/useDemoModal';

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
      {/* Modal de Demo - Migrado a React */}
      <DemoModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

export default App;

