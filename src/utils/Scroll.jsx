export function scrollTo(ref,setIsNavigating){
    if (ref && ref.current) {
        setIsNavigating(true)
        ref.current.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            // Tu código aquí
            setIsNavigating(false);
          }, 4000);
    }
};



