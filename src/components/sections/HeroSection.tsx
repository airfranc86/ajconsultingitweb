import React, { useEffect, useRef } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useTypingAnimation } from '../../hooks/useTypingAnimation';
import { Button } from '../ui/Button';
import { TYPING_TEXTS } from '../../utils/constants';
import styles from './HeroSection.module.css';

export const HeroSection: React.FC = () => {
    const heroRef = useScrollReveal<HTMLElement>();
    const taglineRef = useRef<HTMLHeadingElement>(null);

    // Animación typing simplificada (sin rotación de fuentes según auditoría)
    const displayedText = useTypingAnimation({
        texts: TYPING_TEXTS,
        enabled: true,
        pauseAfterComplete: 2000, // Reducido de 3000
    });

    // Actualizar el texto del tagline
    useEffect(() => {
        if (taglineRef.current) {
            taglineRef.current.textContent = displayedText || TYPING_TEXTS[0];
        }
    }, [displayedText]);

    const handleDemoClick = () => {
        if ((window as any).showDemoModal) {
            (window as any).showDemoModal();
        }
    };

    return (
        <section
            id="home"
            className={styles.heroSection}
            role="banner"
            aria-label="Sección principal de bienvenida"
            ref={heroRef}
        >
            <div className={styles.heroContent}>
                {/* Logo */}
                <div className={styles.heroLogo}>
                    <img
                        src="/assets/logo-200x200.png"
                        srcSet="/assets/logo-200x200.png 1x, /assets/logo-500x500.png 2x"
                        alt="A&J Consulting IT Logo"
                        className={styles.floatingLogo}
                        width="200"
                        height="200"
                        fetchPriority="high"
                    />
                </div>

                {/* Título principal */}
                <h1 className={styles.logoText}>A&J CONSULTING IT</h1>

                {/* Subtítulo */}
                <p className={styles.logoSubtitle}>Business Intelligence Solutions</p>

                {/* Eslogan con animación typing */}
                <h2 className={styles.heroTagline} ref={taglineRef}>
                    {TYPING_TEXTS[0]}
                </h2>

                {/* Descripción */}
                <p className={styles.heroDescription}>
                    Consultora especializada en <strong>KPIs e Inteligencia Artificial</strong>.<br />
                    Soluciones adaptadas a cada rubro para mejorar tu procesamiento de datos y análisis predictivo.
                </p>

                {/* Botones de acción */}
                <div className={styles.heroButtons}>
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
            </div>
        </section>
    );
};

