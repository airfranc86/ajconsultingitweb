import React from 'react';
import { FeatureCard } from '../ui/FeatureCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { METHODOLOGY_STEPS } from '../../utils/constants';
import styles from './MethodologySection.module.css';

export const MethodologySection: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="metodologia"
      className={styles.methodologySection}
      aria-labelledby="metodologia-title"
      ref={sectionRef}
    >
      <div className={styles.sectionCard}>
        <h2 className={styles.sectionTitle} id="metodologia-title">
          Cómo Trabajamos
        </h2>
        <p className={styles.sectionIntro}>
          Un proceso claro y transparente para garantizar resultados
        </p>

        <div className={styles.featuresGrid}>
          {METHODOLOGY_STEPS.map((step, index) => (
            <FeatureCard
              key={index}
              icon={React.createElement('iconify-icon', {
                icon: step.icon,
                width: '32',
                height: '32',
                style: { color: 'currentColor' },
              })}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

