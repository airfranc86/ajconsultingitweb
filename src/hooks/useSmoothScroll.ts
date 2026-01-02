import { useCallback } from 'react';

export const useSmoothScroll = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return { scrollToSection, scrollToTop };
};

