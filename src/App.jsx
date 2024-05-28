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
import "./styles/Skills.css";
import "./styles/CardProyect.css";

import { moverEje, rotarEje } from './utils/MoverEjes';
import { SocialMedia } from './components/SocialMedia';
import logo from "./assets/images/logo2.png"
import imgPersonal from "./assets/images/yo2.png"
import github from "./assets/icons/github.svg"
import recipe from "./assets/icons/recipe.svg"
import compiler from "./assets/icons/compiler.svg"
import truck from "./assets/icons/truck.svg"
import brain from "./assets/icons/brain.svg"
import chatbot from "./assets/icons/chatbot.svg"
import lemon from "./assets/icons/lemon.svg"

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
        moveAndRotate(-78, 75, -71)
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
                    {/* <img className='logo' src={logo}/> */}
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
                                <span className='data-text'>MDQ, BSAS, ARGENTINA</span>
                                <span className='data-text'>+54 9 2236920132</span>
                                <span className='data-text'>BURCK432@GMAIL.COM</span>
                            </div>
                        </aside>
                        <aside className={`rightSide ${active[1]? '' : 'about-animation-down animation-delay-right'}`}>
                            <header className='title-right'><span className='title-right-text'>ABOUT ME</span></header>
                            <article className='education'>
                                <div className='card-title'><CardAbout><span className='article-title'>EDUCATION</span></CardAbout></div>
                                <div className='info-about'>
                                    <span className='info-about-title'>SYSTEMS ENGINEER | 2020 - PRESENTE</span>
                                    <p className='info-about-subtitle'>
                                        Universidad Nacional del Centro de la Provincia de Buenos Aires Promedio 9.15
                                    </p>
                                </div>
                            </article>
                            <article className='experience'>
                                <div className='card-title'><CardAbout><span className='article-title'>EXPERIENCE</span></CardAbout></div>
                                <div className='info-about '>
                                    <span className='info-about-title'>WEB DEVELOPER | 2022 | LSA + IA </span>
                                    <p className='info-about-subtitle'>
                                     Member of the web development team of a social project about communication and sign language.
                                    </p>
                                </div>
                                <div className='info-about'>
                                    <span className='info-about-title'>WEB DEVELOPER | 2022 | ONG REINVENTAR</span>
                                    <p className='info-about-subtitle'>
                                        Front-end development team member for a website aimed at a NGO in the city of Tandil.
                                    </p>
                                </div>
                                <div className='info-about'>
                                    <span className='info-about-title'>STUDENT ASSISTANT | 2023 - 2024 | UNICEN </span>
                                    <p className='info-about-subtitle'>
                                        I acquired communication skills while being a teaching assistant for 'Bases de Datos 1' and 'TeorIa de la Informacion' during the academic term.
                                    </p>
                                </div>
                            </article>
                            <article className='language'>
                                <div className='card-title'><CardAbout><span className='article-title'>LANGUAGES</span></CardAbout></div>
                                <div className='info-language'>
                                    <div className='language1'>
                                        <span className='info-about-title'>INGLES</span>
                                        <p className='info-about-subtitle'>
                                            Nivel B1
                                        </p>
                                    </div>
                                    <div className='language2'>
                                        <span className='info-about-title'>ESPAÑOL</span>
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
                        <div className="proyects-card">
                            <div className="parent">
                                <div className="card-proyect">
                                    <div className="content-box">
                                        <span className="card-proyect-title">RECIPE BOOK</span>
                                        <p className="card-proyect-content">
                                            A global culinary recipe book building with the MEAN stack, strengthening my skills in interface design, non-relational data manipulation, and RESTful API construction.
                                        </p>
                                        <span className="see-more"><img className='github-size' src={github}/></span>
                                    </div>
                                    <div className="icon-box">
                                        <img className='icon-size-proyect' src={recipe}/>
                                    </div>
                                </div>
                            </div>
                            <div className="parent">
                                <div className="card-proyect">
                                    <div className="content-box">
                                        <span className="card-proyect-title">COMPILER</span>
                                        <p className="card-proyect-content">
                                            A complete compiler building in C++, implementing lexical, syntactic, and semantic analysis, intermediate code generation, error handling, and optimizations
                                        </p>
                                        <span className="see-more"><img className='github-size' src={github}/></span>                                    </div>
                                    <div className="icon-box">
                                        <img className='icon-size-proyect' src={compiler}/>
                                    </div>
                                </div>
                            </div>
                            <div className="parent">
                                <div className="card-proyect">
                                    <div className="content-box">
                                        <span className="card-proyect-title">FLEET-FLOW 1.0</span>
                                        <p className="card-proyect-content">
                                        This project optimizes truck trip management, handles repairs, and manages vehicle and driver documentation, improving operational efficiency.
                                        </p>
                                        <span className="see-more"><img className='github-size' src={github}/></span>                                    </div>
                                    <div className="icon-box">
                                        <img className='icon-size-proyect' src={truck}/>
                                    </div>
                                </div>
                            </div>
                            <div className="parent">
                                <div className="card-proyect">
                                    <div className="content-box">
                                        <span className="card-proyect-title">IA MODEL</span>
                                        <p className="card-proyect-content">
                                            This device segmentation model for aneurysm treatment, trained with deep learning and the nnUNet framework, automates the process and accelerates professionals' work.
                                        </p>
                                        <span className="see-more"><img className='github-size' src={github}/></span>                                    </div>
                                    <div className="icon-box">
                                        <img className='icon-size-proyect' src={brain}/>
                                    </div>
                                </div>
                            </div>
                            <div className="parent">
                                <div className="card-proyect">
                                    <div className="content-box">
                                        <span className="card-proyect-title">MY CHATBOT</span>
                                        <p className="card-proyect-content">
                                        This project was developed using RASA and Python. The chatbot has been seamlessly integrated with Telegram and trained with my most common phrases and responses. It's like you're talking to me!
                                        </p>
                                        <span className="see-more"><img className='github-size' src={github}/></span>                                    </div>
                                    <div className="icon-box">
                                        <img className='icon-size-proyect' src={chatbot}/>
                                    </div>
                                </div>
                            </div>
                            <div className="parent">
                                <div className="card-proyect">
                                    <div className="content-box">
                                        <span className="card-proyect-title">HEALTH ANALYZER</span>
                                        <p className="card-proyect-content">
                                        This project utilizes OpenCV to process lemon images and detect both healthy and rotten parts of the fruit, designed to operate at an industrial scale. 
                                        </p>
                                        <span className="see-more"><img className='github-size' src={github}/></span>           
                                    </div>
                                    <div className="icon-box">
                                        <img className='icon-size-proyect' src={lemon}/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section className="skills">
                        <header className={`skills-title ${active[3]? 'skills-animation-up-title' : 'skills-animation-down-title'}`}><span className='skills-title-text'>SKILLS</span></header>
                        <article className={`hard-skills ${active[3]? 'skills-animation-up-hard' : 'skills-animation-down-hard'}`}>

                        </article>
                        <article className={`soft-skills ${active[3]? 'skills-animation-up-soft' : 'skills-animation-down-soft'}`}>

                        </article>
                    </section>
            </main>
            <footer className="footer">
                <div className='socialmedia'><SocialMedia/></div>
            </footer>
        </div>
    );
}
