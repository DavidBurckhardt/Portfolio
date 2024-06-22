import React from 'react';
import '../styles/Spinner.css'; // Asegúrate de tener un archivo CSS para los estilos del spinner
import Rocket from '../assets/icons/rocket.svg'; 

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <img src={Rocket} alt="Rocket" className="rocket" />
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
      <div className="loading-text">LOADING...</div>
    </div>
  );
};

export default Spinner;
