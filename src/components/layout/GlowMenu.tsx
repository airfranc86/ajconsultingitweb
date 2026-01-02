import React from 'react';
import { createPortal } from 'react-dom';
import styles from './GlowMenu.module.css';

interface GlowMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

const MENU_ITEMS = [
  { id: 'home', label: 'Inicio', icon: 'mdi:home-variant' },
  { id: 'rubros', label: 'Rubros', icon: 'mdi:briefcase-outline' },
  { id: 'proyectos-venta', label: 'Proyectos', icon: 'mdi:folder-multiple-image' },
  { id: 'equipo', label: 'Equipo', icon: 'mdi:account-group' },
  { id: 'contacto', label: 'Contacto', icon: 'mdi:email-outline' },
] as const;

export const GlowMenu: React.FC<GlowMenuProps> = ({ isOpen, onClose, onNavClick }) => {
  if (!isOpen) return null;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    onNavClick(e, sectionId);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleDemoClick = () => {
    onClose();
    setTimeout(() => {
      if ((window as any).showDemoModal) {
        (window as any).showDemoModal();
      }
    }, 300);
  };

  return createPortal(
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.menu}>
        <div className={styles.menuHeader}>
          <h3 className={styles.menuTitle}>A&J Consulting IT</h3>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Cerrar menú"
            type="button"
          >
            ×
          </button>
        </div>

        <div className={styles.menuContent}>
          {MENU_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={styles.menuLink}
              onClick={(e) => handleLinkClick(e, item.id)}
              aria-label={`Ir a sección ${item.label}`}
            >
              {React.createElement('iconify-icon', {
                icon: item.icon,
                width: '24',
                height: '24',
                style: { color: 'var(--secondary-color)' },
                'aria-hidden': 'true',
              })}
              <span>{item.label}</span>
            </a>
          ))}

          <button
            className={styles.demoButton}
            onClick={handleDemoClick}
            aria-label="Solicitar demostración de servicios"
            type="button"
          >
            <i className="fas fa-calendar-check" aria-hidden="true"></i>
            <span>Solicitar Demo</span>
          </button>
        </div>
      </div>
    </>,
    document.body
  );
};

