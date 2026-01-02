import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { DemoForm } from './DemoForm';
import { Notification } from '../ui/Notification';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSuccess = () => {
    setNotification({
      type: 'success',
      message: 'Solicitud enviada exitosamente. Nos pondremos en contacto contigo pronto.',
    });
    setTimeout(() => {
      onClose();
      setNotification(null);
    }, 2000);
  };

  const handleError = (message: string) => {
    setNotification({
      type: 'error',
      message,
    });
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} title="Solicitar Demo">
        <p style={{ color: '#666', marginBottom: '2rem', textAlign: 'center' }}>
          Completa el formulario y nos pondremos en contacto contigo para agendar una demostración personalizada.
        </p>
        <DemoForm onSuccess={handleSuccess} onError={handleError} />
      </Modal>
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}
    </>
  );
};

