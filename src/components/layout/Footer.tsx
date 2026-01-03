import React from 'react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer} role="contentinfo" aria-label="Pie de página">
      <div className={styles.footerContent}>
        <div className={styles.footerContentCenter}>
          <img
            src="/assets/logo-22x22.png"
            alt="A&J Consulting IT Logo"
            className={styles.footerLogo}
            loading="lazy"
            width="22"
            height="22"
            aria-hidden="true"
          />
          <span className={styles.footerText}>
            © 2025 A&J Consulting IT | Transformando datos en decisiones inteligentes
          </span>
        </div>
      </div>
    </footer>
  );
};

