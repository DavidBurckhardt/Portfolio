import { useState, useRef, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import CardAbout from "./components/CardAbout"
import emailjs from '@emailjs/browser';
import "./styles.css";
import "./styles/Button.css";
import "./styles/GetCv.css";
import "./styles/Home.css";
import "./styles/About.css";
import "./styles/Footer.css";
import "./styles/Proyects.css";
import "./styles/Skills.css";
import "./styles/CardProyect.css";
import "./styles/Contact.css";

import { moverEje, rotarEje } from './utils/MoverEjes';
import { SocialMedia } from './components/SocialMedia';
import imgPersonal from "./assets/images/yo.png"
import github from "./assets/icons/github.svg"
import recipe from "./assets/icons/recipe.svg"
import compiler from "./assets/icons/compiler.svg"
import truck from "./assets/icons/truck.svg"
import brain from "./assets/icons/brain.svg"
import chatbot from "./assets/icons/chatbot.svg"
import lemon from "./assets/icons/lemon.svg"
import reactLogo from "./assets/icons/skills/reactLogo.svg"
import javaLogo from "./assets/icons/skills/javaLogo.svg"
import htmlLogo from "./assets/icons/skills/htmlLogo.svg"
import cssLogo from "./assets/icons/skills/cssLogo.svg"
import pythonLogo from "./assets/icons/skills/pythonLogo.svg"
import postgreLogo from "./assets/icons/skills/postgreLogo.svg"
import mongoLogo from "./assets/icons/skills/mongoLogo.svg"
import jiraLogo from "./assets/icons/skills/jiraLogo.svg"
import trelloLogo from "./assets/icons/skills/trelloLogo.svg"
import cplusplusLogo from "./assets/icons/skills/cplusplusLogo.svg"

import responsability from "./assets/icons/responsability.svg"
import adaptability from "./assets/icons/adaptability.svg"
import communication from "./assets/icons/communication.svg"
import problemSolution from "./assets/icons/problemSolution.svg"
import timemanagment from "./assets/icons/timemanagment.svg"
import teamwork from "./assets/icons/teamwork.svg"
import download from "./assets/icons/download.svg"

import phone from "./assets/icons/contact/phone.svg"
import email from "./assets/icons/contact/email.svg"
import location from "./assets/icons/contact/location.svg"

export default function App() {
  const camera = useRef();
  const [active, setActive] = useState([false, false, false, false, false]);

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

    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.init('0i87j6d-OF8YH5gUg');

        emailjs.send("service_p7vp8bl","template_gpyck2a",formData)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email enviado correctamente');
        })
        .catch((error) => {
            console.error('FAILED...', error);
            alert('Error enviando el email');
        });
    };
    

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
                    <button className={`bt-header ${active[4]? 'bt-activo' : 'bt-inactivo'}`} type="button" onClick={contact}>
                        <span className='bt-header-text'>CONTACT</span>
                    </button>
                    {/* <button className='bt-header' type="button" onClick={getPosition}>
                        GET POSITION
                    </button> */}
                </section>
                <section className='getCv'>
                    <button className='btn-getcv button-CV'>
                        <a className="cv-text" href="./assets/CV/CV.pdf" download="CV.pdf">GET CV</a>
                        <img className='cv-img' src={download}/>
                    </button>
                </section>
            </header>
            <main className="body">
                    <section className={`home ${active[0]? 'home-animation-right' : ''}`}>
                        <h1 className={`phrase ${active[0]? '' : 'home-animation-left animation-delay-phrase'}`}><span className='phrase-text'>IT'S JUST A LINE OF CODE</span></h1>
                        <article className={`presentation ${active[0]? '' : 'home-animation-left animation-delay-presentation'}`}><span className='presentation-text'>Hi, I'm David Burckhardt, a passionate web developer and designer thrilled to welcome you to my portfolio! With a deep-rooted love for technology and design, I've embarked on an exciting journey filled with creativity and innovation. Here, you'll discover a showcase of my projects spanning my career, each reflecting my dedication to skillfulness and problem-solving. I'm eager to share my experiences and collaborate on upcoming projects, so let's connect and bring ideas to life together!</span></article>
                        <h2 className={`rol ${active[0]? '' : 'home-animation-left animation-delay-rol'}`}><span className='rol-text'>BY A SOFTWARE DEVELOPER</span></h2>
                    </section>
                    <section className="about">
                        <aside className={`leftSide ${active[1]? 'about-animation-up' : 'about-animation-down animation-delay-left'}`}>
                            <div className='img-left'><img className="size-img" src={imgPersonal}/></div>
                            <div className='data-about'>
                                <span className='data-text'>DAVID BURCKHARDT</span>
                                <span className='data-text'>23 YEARS OLD</span>
                                <span className='data-text'>MDQ, BSAS, ARGENTINA</span>
                                <span className='data-text'>+54 9 2236920132</span>
                                <span className='data-text'>SOFTWARE DEVELOPER</span>
                            </div>
                        </aside>
                        <aside className={`rightSide ${active[1]? 'about-animation-up-right' : 'about-animation-down-right animation-delay-right'}`}>
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
                    <section className="skills">
                        <header className={`skills-title ${active[3]? 'skills-animation-up-title' : 'skills-animation-down-title'}`}><span className='skills-title-text'>SKILLS</span></header>
                        <article className={`hard-skills ${active[3]? 'skills-animation-up-hard' : 'skills-animation-down-hard'}`}>
                            <div className='hard-skills-title card-title'><CardAbout><span className='article-title'>HARD SKILLS</span></CardAbout></div>
                            <div className='hard-skills-body'>
                                <div className='parent-skill'>
                                    <div className="card-skill"><img style={{ height: "70%", width: "70%"}} src={reactLogo}/></div>
                                    <span className='skill-name'>REACT</span>
                                </div>
                                <div className='parent-skill'>
                                    <div className="card-skill"><img style={{ height: "65%", width: "55%"}} src={htmlLogo}/></div>
                                    <span className='skill-name'>HTML</span>
                                </div>
                                <div className='parent-skill'>
                                    <div className="card-skill"><img style={{ height: "60%", width: "60%"}}  src={pythonLogo}/></div>
                                    <span className='skill-name'>PYTHON</span>
                                </div>
                                <div className='parent-skill'>
                                    <div className="card-skill"><img style={{ height: "55%", width: "55%"}}  src={postgreLogo}/></div>
                                    <span className='skill-name'>POSTGRESQL</span>
                                </div>
                                <div className='parent-skill'>
                                    <div className="card-skill"><img style={{ height: "65%", width: "65%"}} src={jiraLogo}/></div>
                                    <span className='skill-name'>JIRA</span>
                                </div>
                                <div className='parent-skill'>
                                    <div className="card-skill"><img style={{ height: "64%", width: "80%"}} src={javaLogo}/></div>
                                    <span className='skill-name'>JAVA</span>
                                </div>
                                <div className='parent-skill'>
                                    <div className="card-skill"><img style={{ height: "65%", width: "55%"}} src={cssLogo}/></div>
                                    <span className='skill-name'>CSS</span>
                                </div>
                                <div className='parent-skill'>
                                    <div className="card-skill"><img style={{ height: "70%", width: "70%"}} src={cplusplusLogo}/></div>
                                    <span className='skill-name'>C++</span>
                                </div>
                                <div className='parent-skill'>
                                    <div className="card-skill"><img style={{ height: "73%", width: "73%"}} src={mongoLogo}/></div>
                                    <span className='skill-name'>MONGODB</span>
                                </div>
                                <div className='parent-skill'>
                                    <div className="card-skill"><img style={{ height: "50%", width: "50%"}} src={trelloLogo}/></div>
                                    <span className='skill-name'>TRELLO</span>
                                </div>
                            </div>
                        </article>
                        <article className={`soft-skills ${active[3]? 'skills-animation-up-soft' : 'skills-animation-down-soft'}`}>
                        <div className='soft-skills-title card-title'><CardAbout><span className='article-title'>SOFT SKILLS</span></CardAbout></div>
                            <div className='soft-skills-body'>
                                <div className='parent-skill'>
                                    <div className="card-skill"><img style={{ height: "60%", width: "60%"}} src={responsability}/></div>
                                    <span className='skill-name'>RESPONSABILITY</span>
                                </div>
                                <div className='parent-skill'>
                                    <div className="card-skill"><img style={{ height: "65%", width: "55%"}} src={teamwork}/></div>
                                    <span className='skill-name'>TEAMWORK</span>
                                </div>
                                <div className='parent-skill'>
                                    <div className="card-skill"><img style={{ height: "55%", width: "55%"}}  src={adaptability}/></div>
                                    <span className='skill-name'>ADAPTABILITY</span>
                                </div>
                                <div className='parent-skill'>
                                    <div className="card-skill"><img style={{ height: "50%", width: "50%"}}  src={communication}/></div>
                                    <span className='skill-name'>COMMUNICATION</span>
                                </div>
                                <div className='parent-skill'>
                                    <div className="card-skill"><img style={{ height: "55%", width: "55%"}} src={problemSolution}/></div>
                                    <span className='skill-name'>PROBLEM RESOLUTION</span>
                                </div>
                                <div className='parent-skill'>
                                    <div className="card-skill"><img style={{ height: "60%", width: "60%"}} src={timemanagment}/></div>
                                    <span className='skill-name'>TIME MANAGEMENT</span>
                                </div>
                            </div>
                        </article>
                    </section>
                    <section className={`proyects`} >
                        <header className={`proyects-title ${active[2]? 'proyects-animation-right-title' : 'proyects-animation-left-title'}`}><span className='proyects-title-text'>PROYECTS</span></header>
                        <div className={`proyects-card ${active[2]? 'proyects-animation-right' : 'proyects-animation-left'}`} >
                            <div className="parent">
                                <div className="card-proyect">
                                    <div className="content-box">
                                        <span className="card-proyect-title">RECIPE BOOK</span>
                                        <p className="card-proyect-content">
                                            A global culinary recipe book building with the MEAN stack, strengthening my skills in interface design, non-relational data manipulation, and RESTful API construction.
                                        </p>
                                        <a href="https://github.com/DavidBurckhardt/World_Recipebook" target="_blank" rel="noopener noreferrer" className="see-more"><img className='github-size' src={github}/></a>
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
                                        <a href="https://github.com/DavidBurckhardt/Compiler_Project" target="_blank" rel="noopener noreferrer" className="see-more"><img className='github-size' src={github}/></a>                                   </div>
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
                                        <a href="https://github.com/DavidBurckhardt/World_Recipebook" target="_blank" rel="noopener noreferrer" className="see-more"><img className='github-size' src={github}/></a>                                    </div>
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
                                        <a href="https://github.com/DavidBurckhardt/World_Recipebook" target="_blank" rel="noopener noreferrer" className="see-more"><img className='github-size' src={github}/></a>                                    </div>
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
                                        <a href="https://github.com/DavidBurckhardt/Chatbot-My" target="_blank" rel="noopener noreferrer" className="see-more"><img className='github-size' src={github}/></a>                                  </div>
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
                                        <a href="https://github.com/DavidBurckhardt/Image-processing" target="_blank" rel="noopener noreferrer" className="see-more"><img className='github-size' src={github}/></a>          
                                    </div>
                                    <div className="icon-box">
                                        <img className='icon-size-proyect' src={lemon}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='contact'>
                        <header className={`contact-title ${active[4] ? 'contact-animation-up-title' : 'contact-animation-down-title'}`}>
                            <span className='contact-title-text'>CONTACT ME</span>
                        </header>
                            <div className={`contact-body ${active[4] ? 'contact-animation-up-body' : 'contact-animation-down-body'}`}>
                                <div className="container-form">
                                    <div className="info-form">
                                        <h2>SEND ME A MESSAGE</h2>
                                        <p>Hi! If you're interested in collaborating or have any questions, feel free to contact me. I'm available for new opportunities and freelance projects. I look forward to hearing from you soon!</p>
                                        <div className='contact-data' >
                                            <div className='contact-icon-data'><img className='contact-data-img' style={{ height: "90%", width: "90%"}} src={phone}></img></div>
                                            <span href="#">+54 9 2236920132</span>
                                        </div>
                                        <div className='contact-data' >
                                            <div className='contact-icon-data'><img className='contact-data-img' style={{ height: "70%", width: "60%"}} src={email}></img></div>
                                            <span href="#">burck432@gmail.com</span>
                                        </div>
                                        <div className='contact-data' >
                                            <div className='contact-icon-data'><img className='contact-data-img' style={{ height: "80%", width: "80%"}} src={location}></img></div>
                                            <span href="#">Mar del Plata, Buenos Aires, Argentina</span>
                                        </div>
                                    </div>
                                    <form className='info-form' action="#" autoComplete="off">
                                        <input type="text" name="from_name" placeholder="Name" className="campo" onChange={handleChange}/>
                                        <input type="email" name="from_email" placeholder="Email" className="campo" onChange={handleChange}/>
                                        <input type="subject" name="subject" placeholder="Subject" className="campo" onChange={handleChange}/>
                                        <textarea name="message" placeholder="Message..." className="campo" onChange={handleChange}></textarea>
                                        <input type="submit" name="enviar" value="Enviar email" className="btn-getcv" onClick={handleSubmit} />
                                    </form>
                                </div>
                            </div>
                        </section>
            </main>
            <footer className="footer">
                <div className='socialmedia'><SocialMedia/></div>
            </footer>
        </div>
    );
}
