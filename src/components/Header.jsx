import React, {useState,useEffect} from "react";
import "../styles/Header.css";
import "../styles/Button.css";
import "../styles/GetCv.css";
import download from "../assets/icons/download.svg"
import { moverEje } from '../utils/MoverEjes';

export default function Header(props){

    const {active, setActive, setIsNavigating, camera, homeRef, aboutRef, proyectsRef, skillsRef, contactRef} = props;

    const scrollTo = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    function moveAndRotate(posX, posY, posZ) {
        if (camera.current) {
            let { x, y, z } = camera.current.position;
            moverEje(camera,'x',x,posX);
            moverEje(camera,'y',y,posY);
            moverEje(camera,'z',z,posZ);
        }
    }

    const home = () => {
        setIsNavigating(true)
        moveAndRotate(-150, 0, 350)
        setActive([true,false,false,false,false])
        scrollTo(homeRef)
        setInterval(() => setIsNavigating(false),3000)
    }

    const aboutMe = () => {
        setIsNavigating(true)
        moveAndRotate(-450, 0, -30)
        setActive([false,true,false,false,false])
        scrollTo(aboutRef)
        setInterval(() => setIsNavigating(false),3000)
    }
  
      const proyects = () => {
          moveAndRotate(-200, 0, -200)
          setActive([false,false,true,false,false])
          scrollTo(proyectsRef)
          setInterval(() => setIsNavigating(false),3000)
      }
  
      const skills = () => {
          setIsNavigating(true)
          moveAndRotate(75, 50, 280)
          setActive([false,false,false,true,false])
          scrollTo(skillsRef)
          setInterval(() => setIsNavigating(false),3000)
      }
  
      const contact = () => {
          setIsNavigating(true)
          moveAndRotate(165, 200, -122)
          setActive([false,false,false,false,true])
          scrollTo(contactRef)
          setInterval(() => setIsNavigating(false),3000)
      }

      function getPosition() {
        console.log(camera.current)
        console.log(camera.current.position); // Verificar la cámara
        console.log(camera.current.rotation); // Verificar la cámara
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
            {/* <button className='bt-header' type="button" onClick={getPosition}>
                GET POSITION
            </button> */}
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