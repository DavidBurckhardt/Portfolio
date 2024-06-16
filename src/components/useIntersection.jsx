import { useState, useEffect, useRef } from 'react';

const useIntersection = (options, disabled, active) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const elementoRef = useRef(null);

    useEffect(() => {
        const elemento = elementoRef.current;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!disabled && active) {
                    setIsIntersecting(entry.isIntersecting);
                }
            });
        }, options);

        if (elemento && !disabled) {
            observer.observe(elemento);
        }

        return () => {
            if (elemento) {
                observer.unobserve(elemento);
            }
        };
    }, [options, disabled]); // Dependencia de disabled para reiniciar el observer

    return [elementoRef, isIntersecting];
};

export default useIntersection;
