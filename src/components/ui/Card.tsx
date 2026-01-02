import React from 'react';
import clsx from 'clsx';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'feature' | 'section';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
}) => {
  return (
    <div className={clsx(styles.card, styles[variant], className)}>
      {children}
    </div>
  );
};

