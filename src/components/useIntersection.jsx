import React from "react";
import { useState, useEffect, useRef } from "react";

function useIntersection( opciones = {}){

    const [isIntersecting, setIsIntersecting] = useState(false);
    const elementoRef = useRef();

    useEffect(() => {
        const elemento = elementoRef.current;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                 console.log(entry.isIntersecting)
                setIsIntersecting(entry.isIntersecting)
            });
            
        },opciones);

        if (elemento){
            observer.observe(elemento)
        }

        return () => {
            if (elemento){
                observer.unobserve(elemento)
            }
        };

    },[])

    return [elementoRef,isIntersecting];
}

export default useIntersection