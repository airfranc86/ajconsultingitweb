import React, { useEffect } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { useGlowMenu } from '../../hooks/useGlowMenu';
import { GlowMenu } from './GlowMenu';
import { NAV_SECTIONS } from '../../utils/constants';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const activeSection = useActiveSection(NAV_SECTIONS);
  const { scrollToSection, scrollToTop } = useSmoothScroll();
  const { isOpen, openMenu, closeMenu } = useGlowMenu();

  // Efecto del header al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(`.${styles.header}`) as HTMLElement;
      if (!header) return;

      if (window.scrollY > 50) {
        header.style.background =
          'linear-gradient(to bottom, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.30) 25%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.20) 75%, rgba(255, 255, 255, 0.15) 100%)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        header.classList.add(styles.scrolled);
      } else {
        header.style.background =
          'linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.20) 25%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.10) 75%, rgba(255, 255, 255, 0.05) 100%)';
        header.style.boxShadow = 'none';
        header.classList.remove(styles.scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar una vez al montar

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
    closeMenu();
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    scrollToTop();
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navContainer}>
          {/* Logo */}
          <div className={styles.logoWrapper} onClick={handleLogoClick}>
            <a href="#home" className={styles.logoNav} onClick={handleLogoClick}>
              {React.createElement('iconify-icon', {
                icon: 'mdi:package-variant',
                width: '32',
                height: '32',
                style: { color: 'var(--secondary-color)' },
                'aria-hidden': 'true',
              })}
            </a>
            <span className={styles.logoText}>A&J CONSULTING IT</span>
          </div>

          {/* Menú de navegación */}
          <ul className={styles.navMenu}>
            <li>
              <a
                href="#home"
                className={activeSection === 'home' ? styles.active : ''}
                onClick={(e) => handleNavClick(e, 'home')}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#rubros"
                className={activeSection === 'rubros' ? styles.active : ''}
                onClick={(e) => handleNavClick(e, 'rubros')}
              >
                Rubros
              </a>
            </li>
            <li>
              <a
                href="#proyectos-venta"
                className={activeSection === 'proyectos-venta' ? styles.active : ''}
                onClick={(e) => handleNavClick(e, 'proyectos-venta')}
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#equipo"
                className={activeSection === 'equipo' ? styles.active : ''}
                onClick={(e) => handleNavClick(e, 'equipo')}
              >
                Equipo
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className={activeSection === 'contacto' ? styles.active : ''}
                onClick={(e) => handleNavClick(e, 'contacto')}
              >
                Contacto
              </a>
            </li>
          </ul>

          {/* Botón menú móvil */}
          <button
            id="glow-menu-trigger"
            className={styles.glowMenuTrigger}
            onClick={openMenu}
            title="Menú Avanzado"
            aria-label="Abrir menú de navegación avanzado"
            aria-expanded={isOpen}
            aria-controls="glow-menu"
            type="button"
          >
            <i className="fas fa-bars" aria-hidden="true"></i>
          </button>
        </nav>
      </header>

      {/* Menú móvil (Glow Menu) */}
      <GlowMenu isOpen={isOpen} onClose={closeMenu} onNavClick={handleNavClick} />
    </>
  );
};

