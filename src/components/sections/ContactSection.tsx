import React from 'react';
import { Button } from '../ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { CONTACT_EMAIL, LINKEDIN_URL } from '../../utils/constants';
import styles from './ContactSection.module.css';

export const ContactSection: React.FC = () => {
    const sectionRef = useScrollReveal<HTMLElement>();

    const handleDemoClick = () => {
        if ((window as any).showDemoModal) {
            (window as any).showDemoModal();
        }
    };

    const handleEmailClick = () => {
        // Tracking para analytics
        if (typeof (window as any).va === 'function') {
            (window as any).va('track', 'Email Link Clicked', {
                email: CONTACT_EMAIL,
                location: 'contacto',
            });
        }
    };

    return (
        <section
            id="contacto"
            className={styles.contactSection}
            aria-label="Sección de contacto"
            ref={sectionRef}
        >
            <div className={styles.sectionCard}>
                {/* Botón para solicitar demo */}
                <div className={styles.demoButtonContainer}>
                    <Button
                        variant="primary"
                        onClick={handleDemoClick}
                        aria-label="Solicitar demostración de servicios de A&J Consulting IT"
                    >
                        {React.createElement('iconify-icon', {
                            icon: 'mdi:monitor-dashboard',
                            width: '20',
                            height: '20',
                            style: { verticalAlign: 'middle' },
                            'aria-hidden': 'true',
                        })}
                        Solicitar Demo
                    </Button>
                </div>

                {/* Grid de contactos */}
                <div className={styles.contactInfo}>
                    {/* Email */}
                    <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className={styles.contactCard}
                        onClick={handleEmailClick}
                        aria-label="Enviar correo electrónico a A&J Consulting IT"
                    >
                        <div className={styles.contactIcon} aria-hidden="true">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className={styles.contactText}>Email Corporativo</div>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href={LINKEDIN_URL}
                        className={styles.contactCard}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visitar perfil de LinkedIn de A&J Consulting IT"
                    >
                        <div className={styles.contactIcon} aria-hidden="true">
                            <i className="fab fa-linkedin"></i>
                        </div>
                        <div className={styles.contactText}>LinkedIn</div>
                    </a>
                </div>
            </div>
        </section>
    );
};

