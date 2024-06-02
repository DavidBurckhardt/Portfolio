import React, {useState,useEffect} from "react";
import "../styles/Header.css";
import "../styles/Button.css";
import "../styles/GetCv.css";
import download from "../assets/icons/download.svg"

export default function Header(props){

    const {active, setActive, scrollCount, setScrollCount, camera, moveAndRotate} = props;

    const [scrollEnabled, setScrollEnabled] = useState(true); // Variable de estado para habilitar/deshabilitar el desplazamiento
  
      function getPosition() {
          console.log(camera.current)
        console.log(camera.current.position); // Verificar la cámara
        console.log(camera.current.rotation); // Verificar la cámara
    }
  
      useEffect(() => {
        const handleScroll = (event) => {
          // Si el desplazamiento está deshabilitado, sal del manejador de eventos
          if (!scrollEnabled) return;
  
          // Verifica la dirección del scroll (hacia arriba o hacia abajo)
          const deltaY = event.deltaY;
          if (deltaY > 0 && scrollCount == 4){
              home();
              setScrollCount(0);
              disableScrollTemporarily();
          } else if (deltaY > 0 && scrollCount == 3){
              contact();
              setScrollCount(scrollCount + 1);
              disableScrollTemporarily();
          } else if (deltaY > 0 && scrollCount == 2){
              skills();
              setScrollCount(scrollCount + 1);
              disableScrollTemporarily();
          } else if (deltaY > 0 && scrollCount == 1){
              proyects();
              setScrollCount(scrollCount + 1);
              disableScrollTemporarily();
          }else if (deltaY > 0 && scrollCount == 0) {
            aboutMe();
            setScrollCount(scrollCount + 1);
            disableScrollTemporarily();
          } else if (deltaY < 0 && scrollCount == 1) {
            home();
            setScrollCount(scrollCount - 1);
            disableScrollTemporarily();
          }else if (deltaY < 0 && scrollCount == 2) {
              aboutMe();
              setScrollCount(scrollCount - 1);
              disableScrollTemporarily();
          }else if (deltaY < 0 && scrollCount == 3) {
              proyects();
              setScrollCount(scrollCount - 1);
              disableScrollTemporarily();
          }else if (deltaY < 0 && scrollCount == 4) {
              skills();
              setScrollCount(scrollCount - 1);
              disableScrollTemporarily();
          }else if (deltaY < 0 && scrollCount == 0) {
              contact();
              setScrollCount(4);
              disableScrollTemporarily();
          }
          
        };
  
        // Agrega el evento de desplazamiento del mouse
        window.addEventListener('wheel', handleScroll);
  
        // Limpia el evento cuando el componente se desmonta
        return () => {
          window.removeEventListener('wheel', handleScroll);
        };
      }, [scrollCount, scrollEnabled]); // Escucha cambios en scrollCount y scrollEnabled
  
      const disableScrollTemporarily = () => {
          // Deshabilita temporalmente el desplazamiento durante 500 milisegundos
          setScrollEnabled(false);
          setTimeout(() => {
            setScrollEnabled(true);
          }, 1000);
        };
  
      const home = () => {
          moveAndRotate(-164, 83, 342, 0.01)
          setActive([true,false,false,false,false])
          setScrollCount(0)
      }
  
      const aboutMe = () => {
          moveAndRotate(250, 22, -266, 9)
          setActive([false,true,false,false,false])
          setScrollCount(1)
      }
  
      const proyects = () => {
          moveAndRotate(-208, -33, -85)
          setActive([false,false,true,false,false])
          setScrollCount(2)
      }
  
      const skills = () => {
          moveAndRotate(33, -1, 238, 0.01)
          setActive([false,false,false,true,false])
          setScrollCount(3)
      }
  
      const contact = () => {
          moveAndRotate(-315, -10, -30, 0.01)
          setActive([false,false,false,false,true])
          setScrollCount(4)
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