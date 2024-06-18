import React, { useState } from 'react';
import '../styles/BurgerMenu.css'; // Asegúrate de tener los estilos en un archivo separado
import CV from '../assets/CV/CV.pdf'; // Ruta al archivo PDF
import download from "../assets/icons/download.svg"
import "../styles/GetCv.css";

const BurgerMenu = (props) => {

  const {
    active, 
    setActive,
    homeRef, 
    aboutRef,
    proyectsRef,
    skillsRef,
    contactRef,
    scrollTo,
    setIsNavigating
  } = props;

  const [isOpen, setIsOpen] = useState(false);

const home = () => {
    toggleMenu();
    setIsNavigating(true)
    setActive([true,false,false,false,false]);
    scrollTo(homeRef);
}

const aboutMe = () => {
    toggleMenu();
    setIsNavigating(true)
    setActive([false,true,false,false,false]);
    scrollTo(aboutRef);
}

  const proyects = () => {
      toggleMenu();
      setIsNavigating(true)
      setActive([false,false,true,false,false])
      scrollTo(proyectsRef)
  }

  const skills = () => {
      toggleMenu();
      setIsNavigating(true)
      setActive([false,false,false,true,false])
      scrollTo(skillsRef)
  }

  const contact = () => {
    toggleMenu();
    setIsNavigating(true)
    setActive([false,false,false,false,true])
    scrollTo(contactRef)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDownload = () => {
    saveAs(CV, 'CV.pdf');
  };

  return (
    <div className="burger-menu">
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
      </div>
      <div className={`menu-content ${isOpen ? 'show' : ''}`} onClick={toggleMenu}>
        <ul>
          <li>
            <button className={`bt-header ${active[0]? 'bt-activo' : 'bt-inactivo'}`} type="button" onClick={home}>
                <span className='bt-header-text'>HOME</span>
            </button>
          </li>
          <li>
            <button className={`bt-header ${active[1]? 'bt-activo' : 'bt-inactivo'}`} type="button" onClick={aboutMe}>
                <span className='bt-header-text'>ABOUT</span>
            </button>
          </li>
          <li>
            <button className={`bt-header ${active[2]? 'bt-activo' : 'bt-inactivo'}`} type="button" onClick={proyects}>
                <span className='bt-header-text'>PROYECTS</span>
            </button>
          </li>
          <li>
            <button className={`bt-header ${active[3]? 'bt-activo' : 'bt-inactivo'}`} type="button" onClick={skills}>
                <span className='bt-header-text'>SKILLS</span>
            </button>
          </li>
          <li>
            <button className={`bt-header ${active[4]? 'bt-activo' : 'bt-inactivo'}`} type="button" onClick={contact}>
                <span className='bt-header-text'>CONTACT</span>
            </button>
          </li>
          <li className='li-cv'>
              <button className='btn-getcv button-CV-small' onClick={handleDownload}>
                  GET CV
                  <img className='cv-img-small' src={download}/>
              </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
