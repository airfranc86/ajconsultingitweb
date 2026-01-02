import { useState, useEffect } from 'react';

export const useActiveSection = (sections: string[]) => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 150; // Offset para activación temprana
      let currentSection = 'home';

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = sectionId;
          }
        }
      });

      // Si estamos en la parte superior, marcar home como activo
      if (window.scrollY < 100) {
        currentSection = 'home';
      }

      setActiveSection(currentSection);
    };

    // Actualizar al cargar
    updateActiveSection();

    // Throttle para performance
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(updateActiveSection, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [sections]);

  return activeSection;
};

