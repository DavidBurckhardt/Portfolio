import { useState, useRef, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Proyects from "./components/Proyects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from './components/Footer';
import useIntersection from './components/useIntersection';
import "./styles.css";
import "./styles/CardProyect.css";
import { moverEje } from './utils/MoverEjes';


export default function App() {

    const camera = useRef();
    const [active, setActive] = useState([true, false, false, false, false]);
    const [isNavigating, setIsNavigating] = useState(false);
    
    const [homeRef, isHome] = useIntersection({threshold: 0.6,}, active[0]);
    const homeRefSmall = useRef();
    const refHome = [homeRef, homeRefSmall]

    const [aboutRef, isAbout] = useIntersection({ threshold: 0.6 },active[1]);
    const aboutRefSmall = useRef();
    const refAbout = [aboutRef, aboutRefSmall];
    
    const [proyectsRef, isProyects] = useIntersection({ threshold: 0.6 },active[2]);
    const proyectsRefSmall = useRef();
    const refProyects = [proyectsRef, proyectsRefSmall];
    
    const [skillsRef, isSkills] = useIntersection({ threshold: 0.6 },active[3]);
    const skillsRefSmall = useRef();
    const refSkills = [skillsRef, skillsRefSmall];
    
    const [contactRef, isContact] = useIntersection({ threshold: 0.6 },active[4]);
    const contactRefSmall = useRef();
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

    
    const scrollTo = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

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

    useEffect(() => {
        home();
    },[])

    useEffect(() => {
        if (!isNavigating){
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
        }
    }, [isHome, isAbout, isProyects, isSkills, isContact]);


    function moveAndRotate(posX, posY, posZ) {
        if (camera.current) {
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
            {isWideScreen ? 
                (<Spline className='scene' scene="https://prod.spline.design/Zky3yicYLH7wXaXk/scene.splinecode" onLoad={onLoad} /> ) : 
                (<Spline scene="https://prod.spline.design/N3BgizkLX322t6wG/scene.splinecode"/>) 
            }
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
