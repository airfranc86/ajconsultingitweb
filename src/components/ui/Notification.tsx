import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Notification.module.css';

interface NotificationProps {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
  duration?: number;
}

export const Notification: React.FC<NotificationProps> = ({
  type,
  message,
  onClose,
  duration = 5000,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return createPortal(
    <div className={`${styles.notification} ${styles[type]}`} role="alert">
      <span className={styles.message}>{message}</span>
      <button
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Cerrar notificación"
        type="button"
      >
        ×
      </button>
    </div>,
    document.body
  );
};

