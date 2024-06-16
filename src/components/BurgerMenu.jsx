import React, { useState } from 'react';
import '../styles/BurgerMenu.css'; // Asegúrate de tener los estilos en un archivo separado

const BurgerMenu = (props) => {

  const {
    active, 
    setActive,
    homeRef, 
    aboutRef,
    proyectsRef,
    skillsRef,
    contactRef 
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (ref) => {
    if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }
};

const home = () => {
    toggleMenu();
    setActive([true,false,false,false,false]);
    scrollTo(homeRef);
}

const aboutMe = () => {
    toggleMenu();
    setActive([false,true,false,false,false]);
    scrollTo(aboutRef);
}

  const proyects = () => {
      toggleMenu();
      setActive([false,false,true,false,false])
      scrollTo(proyectsRef)
  }

  const skills = () => {
      toggleMenu();
      setActive([false,false,false,true,false])
      scrollTo(skillsRef)
  }

  const contact = () => {
    toggleMenu();
    setActive([false,false,false,false,true])
    scrollTo(contactRef)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
