import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import download from "../assets/icons/download.svg";
import "../styles/BurgerMenu.css";
import { scrollTo } from '../utils/Scroll';

const BurgerMenu = ({
    active,
    setActive,
    navigationRefs,
    setIsNavigating
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavigation = (index, ref) => {
        toggleMenu();
        setActive(active.map((_, i) => i === index));
        scrollTo(ref, setIsNavigating);
    };

    const handleDownload = () => {
        saveAs(download, 'CV.pdf');
    };

    const items = [
        { label: 'HOME', onClick: () => handleNavigation(0, navigationRefs.homeRef) },
        { label: 'ABOUT', onClick: () => handleNavigation(1, navigationRefs.aboutRef) },
        { label: 'PROJECTS', onClick: () => handleNavigation(2, navigationRefs.proyectsRef) },
        { label: 'SKILLS', onClick: () => handleNavigation(3, navigationRefs.skillsRef) },
        { label: 'CONTACT', onClick: () => handleNavigation(4, navigationRefs.contactRef) }
    ];

    return (
        <div className="burger-menu">
            <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar bar1"></div>
                <div className="bar bar2"></div>
                <div className="bar bar3"></div>
            </div>
            <div className={`menu-content ${isOpen ? 'show' : ''}`} onClick={toggleMenu}>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            <button
                                className={`bt-header ${active[index] ? 'bt-activo' : 'bt-inactivo'}`}
                                type="button"
                                onClick={item.onClick}
                            >
                                <span className='bt-header-text'>{item.label}</span>
                            </button>
                        </li>
                    ))}
                    <li className='li-cv'>
                        <button className='btn-getcv button-CV-small' onClick={handleDownload}>
                            GET CV
                            <img className='cv-img-small' src={download} alt="Download CV"/>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BurgerMenu;
