import { useState, useEffect, useRef } from 'react';

interface UseTypingAnimationOptions {
    texts: string[];
    typeSpeed?: number;
    deleteSpeed?: number;
    pauseAfterComplete?: number;
    pauseAfterDelete?: number;
    enabled?: boolean;
}

export const useTypingAnimation = ({
    texts,
    typeSpeed = 70,
    deleteSpeed = 40,
    pauseAfterComplete = 2000, // Reducido de 3000 a 2000
    pauseAfterDelete = 500,
    enabled = true,
}: UseTypingAnimationOptions) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const isTypingRef = useRef(true);
    const currentCharIndexRef = useRef(0);

    useEffect(() => {
        if (!enabled || texts.length === 0) {
            setDisplayedText(texts[0] || '');
            return;
        }

        const currentText = texts[currentTextIndex];

        const typeText = () => {
            if (currentCharIndexRef.current < currentText.length) {
                setDisplayedText(currentText.substring(0, currentCharIndexRef.current + 1));
                currentCharIndexRef.current++;
                timeoutRef.current = setTimeout(typeText, typeSpeed);
            } else {
                // Texto completo, pausar antes de borrar
                timeoutRef.current = setTimeout(() => {
                    isTypingRef.current = false;
                    deleteText();
                }, pauseAfterComplete);
            }
        };

        const deleteText = () => {
            if (currentCharIndexRef.current > 0) {
                setDisplayedText(currentText.substring(0, currentCharIndexRef.current - 1));
                currentCharIndexRef.current--;
                timeoutRef.current = setTimeout(deleteText, deleteSpeed);
            } else {
                // Texto borrado, cambiar al siguiente
                const nextIndex = (currentTextIndex + 1) % texts.length;
                setCurrentTextIndex(nextIndex);
                currentCharIndexRef.current = 0;
                timeoutRef.current = setTimeout(() => {
                    isTypingRef.current = true;
                    typeText();
                }, pauseAfterDelete);
            }
        };

        // Iniciar animación
        if (isTypingRef.current) {
            typeText();
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [texts, currentTextIndex, typeSpeed, deleteSpeed, pauseAfterComplete, pauseAfterDelete, enabled]);

    return displayedText;
};

