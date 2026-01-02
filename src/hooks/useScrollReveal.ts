import { useEffect, useRef, RefObject } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export const useScrollReveal = <T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {}
): RefObject<T> => {
  const { threshold = 0.25, rootMargin = '0px 0px -50px 0px', once = true } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !window.IntersectionObserver) return;

    // Respetar prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      element.style.opacity = '1';
      element.style.transform = 'none';
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            if (once) observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    // Estado inicial
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  return ref as RefObject<T>;
};

