import React, {useState,useEffect} from "react";
import "../styles/Header.css";
import "../styles/Button.css";
import "../styles/GetCv.css";
import download from "../assets/icons/download.svg"
import { home, about, proyects, skills, contact } from '../utils/MoverEjes';
import { scrollTo } from '../utils/Scroll';
import BurgerMenu from "./BurgerMenu";
import { saveAs } from 'file-saver';
import CV from '../assets/CV/CV.pdf'; // Ruta al archivo PDF


export default function Header(props){

    const {
        active, 
        setActive, 
        setIsNavigating, 
        camera, 
        homeRef, 
        aboutRef, 
        proyectsRef, 
        skillsRef, 
        contactRef,
    } = props;

    const homeHeader = () => {
        home(camera,setActive)
        scrollTo(homeRef[0],setIsNavigating)
    }

    const aboutHeader = () => {
        about(camera,setActive)
        scrollTo(aboutRef[0],setIsNavigating)
    }
  
      const proyectsHeader = () => {
          proyects(camera,setActive)
          scrollTo(proyectsRef[0],setIsNavigating)
      }
  
      const skillsHeader = () => {
          skills(camera,setActive)
          scrollTo(skillsRef[0],setIsNavigating)
      }
  
      const contactHeader = () => {
          contact(camera,setActive)
          scrollTo(contactRef[0],setIsNavigating)
      }

    //   function getPosition() {
    //     console.log(camera.current)
    //     console.log(camera.current.position); // Verificar la cámara
    //     console.log(camera.current.rotation); // Verificar la cámara
    // }

    const handleDownload = () => {
        saveAs(CV, 'CV.pdf');
      };

    const navigationItems = [
        { label: 'HOME', onClick: homeHeader },
        { label: 'ABOUT', onClick: aboutHeader },
        { label: 'PROYECTS', onClick: proyectsHeader },
        { label: 'SKILLS', onClick: skillsHeader },
        { label: 'CONTACT', onClick: contactHeader }
    ];

    return (
        <header className='header'>
            <section className='title'>
                <span className='title-name'>DAVID BURCKHARDT</span>
            </section>
            <section className='seccions'>
                {navigationItems.map((item, index) => (
                    <button
                        key={index}
                        className={`bt-header ${active[index] ? 'bt-activo' : 'bt-inactivo'}`}
                        type="button"
                        onClick={item.onClick}
                    >
                        <span className='bt-header-text'>{item.label}</span>
                    </button>
                ))}
            </section>
            <section className='getCv'>
                <button className='btn-getcv button-CV' onClick={handleDownload}>
                    GET CV
                    <img className='cv-img' src={download} alt="Download CV" />
                </button>
            </section>
            <section className="burger-menu">
                <BurgerMenu
                    active={active}
                    setActive={setActive}
                    navigationRefs={{
                        homeRef: homeRef[1],
                        aboutRef: aboutRef[1],
                        proyectsRef: proyectsRef[1],
                        skillsRef: skillsRef[1],
                        contactRef: contactRef[1]
                    }}
                    setIsNavigating={setIsNavigating}
                />
            </section>
        </header>
    );
};