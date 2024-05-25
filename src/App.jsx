import { useState, useRef, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import CardAbout from "./components/CardAbout"
import "./styles.css";
import "./styles/Button.css";
import "./styles/ContactMe.css";
import "./styles/Home.css";
import "./styles/About.css";
import "./styles/Footer.css";
import "./styles/Proyects.css";
import { moverEje, rotarEje } from './utils/MoverEjes';
import { SocialMedia } from './components/SocialMedia';
import logo from "../public/images/logo2.png"
import imgPersonal from "../public/images/yo2.png"

export default function App() {
  const camera = useRef();
  const [active, setActive] = useState([false, false, false, false]);

  const onLoad = (spline) => {

    const obj = spline.findObjectByName('Camera');
    camera.current = obj;
  };

    function getPosition() {
        console.log(camera.current)
      console.log(camera.current.position); // Verificar la cámara
      console.log(camera.current.rotation); // Verificar la cámara
  }

    function moveAndRotate(posX, posY, posZ, rotX, rotY, rotZ) {

        if (camera.current) {

            let { x, y, z } = camera.current.position;
            moverEje(camera,'x',x,posX);
            moverEje(camera,'y',y,posY);
            moverEje(camera,'z',z,posZ);

            // let { x: _x, y: _y, z: _z } = camera.current.rotation;
            // rotarEje(camera, 'x', _x, rotX);
            // rotarEje(camera, 'y', _y, rotY);
            // rotarEje(camera, 'z', _z, rotZ);
        }
    }

    const [scrollCount, setScrollCount] = useState(0); // Variable de estado para llevar un registro del número de scrolls
    const [scrollEnabled, setScrollEnabled] = useState(true); // Variable de estado para habilitar/deshabilitar el desplazamiento

    useEffect(() => {
        home()
    },[])

    useEffect(() => {
      const handleScroll = (event) => {
        // Si el desplazamiento está deshabilitado, sal del manejador de eventos
        if (!scrollEnabled) return;

        // Verifica la dirección del scroll (hacia arriba o hacia abajo)
        const deltaY = event.deltaY;
        if (deltaY > 0 && scrollCount == 3){
            home();
            setScrollCount(0);
            disableScrollTemporarily();
        } else if (deltaY > 0 && scrollCount == 2){
            skills();
            setScrollCount(scrollCount + 1);
            disableScrollTemporarily();
        } else if (deltaY > 0 && scrollCount == 1){
            proyects();
            setScrollCount(scrollCount + 1);
            disableScrollTemporarily();
        }else if (deltaY > 0 && scrollCount < 1) {
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
        }else if (deltaY < 0 && scrollCount == 0) {
            skills();
            setScrollCount(3);
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
        setActive([true,false,false,false])
        setScrollCount(0)
    }

    const aboutMe = () => {
        moveAndRotate(250, 22, -266, 9)
        setActive([false,true,false,false])
        setScrollCount(1)
    }

    const proyects = () => {
        moveAndRotate(-464, -29, -482,15)
        setActive([false,false,true,false])
        setScrollCount(2)
    }

    
    const skills = () => {
        moveAndRotate(-239, 123, 324, 0.01)
        setActive([false,false,false,true])
        setScrollCount(3)
    }
    

    return (
        <div className='container'>
            <Spline scene="https://prod.spline.design/RwlJrSCvQ9Olqjib/scene.splinecode" onLoad={onLoad} />
            <header className='header'>
                <section className='title'>
                    <img className='logo' src={logo}/>
                </section>
                <section className='seccions'>
                    <button className={`bt-header ${active[0]? 'bt-activo' : 'bt-inactivo'}`} type="button" onClick={home}>
                        <span className='bt-header-text'>HOME</span>
                    </button>
                    <button className={`bt-header ${active[1]? 'bt-activo' : 'bt-inactivo'}`} type="button" onClick={aboutMe}>
                        <span className='bt-header-text'>ABOUT  ME</span>
                    </button>
                    <button className={`bt-header ${active[2]? 'bt-activo' : 'bt-inactivo'}`} type="button" onClick={proyects}>
                        <span className='bt-header-text'>PROYECTS</span>
                    </button>
                    <button className={`bt-header ${active[3]? 'bt-activo' : 'bt-inactivo'}`} type="button" onClick={skills}>
                        <span className='bt-header-text'>SKILLS</span>
                    </button>
                    <button className='bt-header' type="button" onClick={getPosition}>
                        GET POSITION
                    </button>
                </section>
                <section className='contact'>
                    <button className='btn-donate button4' type="button" onClick={getPosition}>
                        CONTACT ME
                    </button>
                </section>
            </header>
            <main className="body">
                    <section className={`home ${active[0]? 'home-animation-right' : ''}`}>
                        <h1 className={`phrase animation-delay-phrase ${active[0]? '' : 'home-animation-left animation-delay-phrase'}`}><span className='phrase-text'>IT'S JUST A LINE OF CODE</span></h1>
                        <article className={`presentation ${active[0]? '' : 'home-animation-left animation-delay-presentation'}`}><span className='presentation-text'>Hi, I'm David Burckhardt, a passionate web developer and designer thrilled to welcome you to my portfolio! With a deep-rooted love for technology and design, I've embarked on an exciting journey filled with creativity and innovation. Here, you'll discover a showcase of my projects spanning my career, each reflecting my dedication to skillfulness and problem-solving. I'm eager to share my experiences and collaborate on upcoming projects, so let's connect and bring ideas to life together!</span></article>
                        <h2 className={`rol ${active[0]? '' : 'home-animation-left animation-delay-rol'}`}><span className='rol-text'>BY A SOFTWARE DEVELOPER</span></h2>
                    </section>
                    <section className={`about ${active[1]? 'about-animation-up' : ''}`}>
                        <aside className={`leftSide ${active[1]? '' : 'about-animation-down animation-delay-left'}`}>
                            <div className='img-left'><img className="size-img" src={imgPersonal}/></div>
                            <div className='data-about'>
                                <span className='data-text'>DAVID BURCKHARDT</span>
                                <span className='data-text'>23 YEARS OLD</span>
                                <span className='data-text'>MAR DEL PLATA, BSAS, ARGENTINA</span>
                                <span className='data-text'>+54 9 2236920132</span>
                                <span className='data-text'>BURCK432@GMAIL.COM</span>
                            </div>
                        </aside>
                        <aside className={`rightSide ${active[1]? '' : 'about-animation-down animation-delay-right'}`}>
                            <header className='title-right'><span className='title-right-text'>ABOUT ME</span></header>
                            <article className='education'>
                                <CardAbout><h1 className='article-title'>EDUCATION</h1></CardAbout>
                                <div className='info-about'>
                                    <h2 className='info-about-title'>SYSTEMS ENGINEER | 2020 - PRESENTE</h2>
                                    <p className='info-about-subtitle'>
                                        Universidad Nacional del Centro de la Provincia de Buenos Aires - UNICEN
                                    </p>
                                    <p className='info-about-text'>Promedio: 9.15</p>
                                </div>
                            </article>
                            <article className='experience'>
                                <CardAbout><h1 className='article-title'>EXPERIENCE</h1></CardAbout>
                                <div className='info-about '>
                                    <h2 className='info-about-title'>WEB DEVELOPER | 2022 | LSA + IA </h2>
                                    <p className='info-about-subtitle'>
                                     Member of the web development team of a social project about communication and sign language.
                                    </p>
                                </div>
                                <div className='info-about'>
                                    <h2 className='info-about-title'>WEB DEVELOPER | 2022 | ONG REINVENTAR</h2>
                                    <p className='info-about-subtitle'>
                                        Front-end development team member for a website aimed at a NGO in the city of Tandil.
                                    </p>
                                </div>
                                <div className='info-about'>
                                    <h2 className='info-about-title'>STUDENT ASSISTANT | 2023 - 2024 | UNICEN </h2>
                                    <p className='info-about-subtitle'>
                                        I acquired communication skills while being a teaching assistant for 'Bases de Datos 1' and 'TeorIa de la Informacion' during the academic term.
                                    </p>
                                </div>
                            </article>
                            <article className='language'>
                                <CardAbout><h1 className='article-title'>LANGUAGES</h1></CardAbout>
                                <div className='info-language'>
                                    <div className='language1'>
                                        <h2 className='info-about-title'>INGLES</h2>
                                        <p className='info-about-subtitle'>
                                            Nivel B1
                                        </p>
                                    </div>
                                    <div className='language2'>
                                        <h2 className='info-about-title'>ESPAÑOL</h2>
                                        <p className='info-about-subtitle'>
                                            NATIVO
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </aside>
                    </section>
                    <section className={`proyects ${active[2]? 'proyects-animation-right' : 'proyects-animation-left'}`}>
                        <header className='proyects-title'><span className='proyects-title-text'>PROYECTS</span></header>
                        <article className='proyects-carrousel'>

                        </article>
                        <article className='proyects-info'></article>
                    </section>
            </main>
            <footer className="footer">
                <div className='socialmedia'><SocialMedia/></div>
            </footer>
        </div>
    );
}
