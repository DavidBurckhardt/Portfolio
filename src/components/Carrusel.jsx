import React, { useState } from 'react';
import '../styles/Carrusel.css';

const Carrusel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = React.Children.count(children);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const getSlideClass = (index) => {
    if (index === currentIndex) {
      return 'carrusel-slide center';
    } else if (index === (currentIndex - 1 + totalSlides) % totalSlides) {
      return 'carrusel-slide left';
    } else if (index === (currentIndex + 1) % totalSlides) {
      return 'carrusel-slide right';
    } else {
      return 'carrusel-slide hidden';
    }
  };

  return (
    <div className="carrusel">
      <button onClick={prevSlide} className="left-arrow">
        &#10094;
      </button>
      <div className="carrusel-inner">
        {React.Children.map(children, (child, index) => (
          <div className={getSlideClass(index)}>
            {child}
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="right-arrow">
        &#10095;
      </button>
    </div>
  );
};

export default Carrusel;
