import { useState, useRef, useEffect, Suspense, lazy  } from 'react';
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Proyects from "./components/Proyects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from './components/Footer';
import useIntersection from './components/useIntersection';
import Scene from './components/Scene';
import "./styles.css";
import "./styles/CardProyect.css";
import { moverEje } from './utils/MoverEjes';


export default function App() {

    const camera = useRef();
    const [active, setActive] = useState([true, false, false, false, false]);
    const [isNavigating, setIsNavigating] = useState(false);

    const [homeRef, isHome] = useIntersection({ threshold: 0.6 }, false, isNavigating);
    const [homeRefSmall, isHomeSmall] = useIntersection({ threshold: 0.6 }, false, isNavigating);
    const refHome = [homeRef, homeRefSmall];

    const [aboutRef, isAbout] = useIntersection({ threshold: 0.6 }, false, isNavigating);
    const [aboutRefSmall, isAboutSmall] = useIntersection({ threshold: 0.6 }, false, isNavigating);
    const [aboutRefSmall2, isAboutSmall2] = useIntersection({ threshold: 0.6 }, false, isNavigating);
    const refAbout = [aboutRef, aboutRefSmall, aboutRefSmall2];

    const [proyectsRef, isProyects] = useIntersection({ threshold: 0.6 }, false, isNavigating);
    const [proyectsRefSmall, isProyectsSmall] = useIntersection({ threshold: 0.6 }, false, isNavigating);
    const refProyects = [proyectsRef, proyectsRefSmall];

    const [skillsRef, isSkills] = useIntersection({ threshold: 0.6 }, false, isNavigating);
    const [skillsRefSmall, isSkillsSmall] = useIntersection({ threshold: 0.6 }, false, isNavigating);
    const refSkills = [skillsRef, skillsRefSmall];

    const [contactRef, isContact] = useIntersection({ threshold: 0.6 }, false, isNavigating);
    const [contactRefSmall, isContactSmall] = useIntersection({ threshold: 0.6 }, false, isNavigating);
    const refContact = [contactRef, contactRefSmall];


    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1100);

    useEffect(() => {
      const handleResize = () => {
        setIsWideScreen(window.innerWidth >= 1100);
      };
      window.addEventListener('resize', handleResize);
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const home = () => {
        moveAndRotate(-150, 0, 350)
        setActive([true,false,false,false,false])
    }

    const aboutMe = () => {
        moveAndRotate(-450, 0, -30)
        setActive([false,true,false,false,false])
    }

      const proyects = () => {
          moveAndRotate(-200, 0, -200)
          setActive([false,false,true,false,false])
      }

      const skills = () => {
          moveAndRotate(75, 50, 280)
          setActive([false,false,false,true,false])
      }

      const contact = () => {
          moveAndRotate(165, 200, -122)
          setActive([false,false,false,false,true])
      }

    useEffect(() => {
        home();
    },[])

    useEffect(() => {
        if (!isNavigating){
            if (window.innerWidth >= 1100){
                if (!isContact && !isSkills && !isProyects && !isAbout && isHome) {
                    home();
                } else if (!isContact && !isSkills && !isProyects && isAbout && !isHome) {
                    aboutMe();
                } else if (!isContact && !isSkills && isProyects && !isAbout && !isHome) {
                    proyects();
                } else if (!isContact && isSkills && !isProyects && !isAbout && !isHome) {
                    skills();
                } else if (isContact && !isSkills && !isProyects && !isAbout && !isHome) {
                    contact();
                }
            } else {
                if (!isContactSmall && !isSkillsSmall && !isProyectsSmall && !isAboutSmall && isHomeSmall) {
                    home();
                } else if (!isContactSmall && !isSkillsSmall && !isProyectsSmall && (isAboutSmall || isAboutSmall2) && !isHomeSmall) {
                    aboutMe();
                } else if (!isContactSmall && !isSkillsSmall && isProyectsSmall && !isAboutSmall && !isHomeSmall) {
                    proyects();
                } else if (!isContactSmall && isSkillsSmall && !isProyectsSmall && !isAboutSmall && !isHomeSmall) {
                    skills();
                } else if (isContactSmall && !isSkillsSmall && !isProyectsSmall && !isAboutSmall && !isHomeSmall) {
                    contact();
                }
            }
        }
    }, [isHome, isHomeSmall, isAbout, isAboutSmall, isAboutSmall2, isProyects, isProyectsSmall, isSkills, isSkillsSmall, isContact, isContactSmall]);


    function moveAndRotate(posX, posY, posZ) {
        if (camera.current && window.innerWidth >= 1100) {
            let { x, y, z } = camera.current.position;
            moverEje(camera,'x',x,posX);
            moverEje(camera,'y',y,posY);
            moverEje(camera,'z',z,posZ);
        }
    }

    const onLoad = (spline) => {
        const obj = spline.findObjectByName('Camera');
        camera.current = obj;
      };
    
    return (

        <div className='portfolio'>
                <Scene isWideScreen={isWideScreen} onLoad={onLoad} />
                <div className='container'>
                    <Header
                        active={active}
                        setActive={setActive}
                        setIsNavigating={setIsNavigating}
                        camera={camera}
                        homeRef={refHome}
                        aboutRef={refAbout}
                        proyectsRef={refProyects}
                        skillsRef={refSkills}
                        contactRef={refContact}>
                    </Header>
                    <main className="body">
                            <Home ref={refHome} active={active}></Home>
                            <About ref={refAbout} active={active}></About>
                            <Proyects ref={refProyects} active={active}></Proyects>
                            <Skills ref={refSkills} active={active}></Skills>
                            <Contact ref={refContact} active={active}></Contact>
                    </main>
                    <Footer active={active}></Footer>
                </div>
        </div>
    );
}
