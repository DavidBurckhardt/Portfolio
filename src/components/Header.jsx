import React, {useState,useEffect} from "react";
import "../styles/Header.css";
import "../styles/Button.css";
import "../styles/GetCv.css";
import download from "../assets/icons/download.svg"

export default function Header(props){

    const {active, setActive, camera, moveAndRotate, homeRef, aboutRef, proyectsRef, skillsRef, contactRef} = props;

    const scrollToAbout = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const home = () => {
        moveAndRotate(-164, 83, 342, 0.01)
        setActive([true,false,false,false,false])
        scrollToAbout(homeRef)
    }

    const aboutMe = () => {
        moveAndRotate(416, 96, -42, 0.01)
        setActive([false,true,false,false,false])
        scrollToAbout(aboutRef)
    }
  
      const proyects = () => {
          moveAndRotate(-208, -33, -85,0.01)
          setActive([false,false,true,false,false])
          scrollToAbout(proyectsRef)
      }
  
      const skills = () => {
          moveAndRotate(74, 41, 278, 0.01)
          setActive([false,false,false,true,false])
          scrollToAbout(skillsRef)
      }
  
      const contact = () => {
          moveAndRotate(165, 204, -122, 0.01)
          setActive([false,false,false,false,true])
          scrollToAbout(contactRef)
      }

      
    
    return(
        <header className='header'>
        <section className='title'>
            <span className='title-name'>DAVID BURCKHARDT</span>
        </section>
        <section className='seccions'>
            <button className={`bt-header ${active[0]? 'bt-activo' : 'bt-inactivo'}`} type="button" onClick={home}>
                <span className='bt-header-text'>HOME</span>
            </button>
            <button className={`bt-header ${active[1]? 'bt-activo' : 'bt-inactivo'}`} type="button" onClick={aboutMe}>
                <span className='bt-header-text'>ABOUT</span>
            </button>
            <button className={`bt-header ${active[2]? 'bt-activo' : 'bt-inactivo'}`} type="button" onClick={proyects}>
                <span className='bt-header-text'>PROYECTS</span>
            </button>
            <button className={`bt-header ${active[3]? 'bt-activo' : 'bt-inactivo'}`} type="button" onClick={skills}>
                <span className='bt-header-text'>SKILLS</span>
            </button>
            <button className={`bt-header ${active[4]? 'bt-activo' : 'bt-inactivo'}`} type="button" onClick={contact}>
                <span className='bt-header-text'>CONTACT</span>
            </button>
        </section>
        <section className='getCv'>
            <button className='btn-getcv button-CV'>
                <a className="cv-text" href="../assets/CV/CV.pdf" download="CV.pdf">GET CV</a>
                <img className='cv-img' src={download}/>
            </button>
        </section>
        <section className="burguer-menu">
        </section>
        </header>
    )
}