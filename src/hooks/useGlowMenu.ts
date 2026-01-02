import { useState, useEffect, useCallback } from 'react';

export const useGlowMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, []);

  // Cerrar con ESC
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, closeMenu]);

  return {
    isOpen,
    openMenu,
    closeMenu,
  };
};

