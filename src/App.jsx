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
    
    const [homeRef,isHome] = useIntersection({threshold: 0.6,});
    const [aboutRef,isAbout] = useIntersection({threshold: 0.6,});
    const [proyectsRef,isProyects] = useIntersection({ threshold: 0.6,});
    const [skillsRef,isSkills] = useIntersection({threshold: 0.6,});
    const [contactRef,isContact] = useIntersection({threshold: 0.6,});

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
            <Spline className='scene' scene="https://prod.spline.design/Zky3yicYLH7wXaXk/scene.splinecode" onLoad={onLoad} />
            <div className='container'>
                <Header active={active} setActive={setActive}  setIsNavigating={setIsNavigating} camera={camera} homeRef={homeRef} aboutRef={aboutRef} proyectsRef={proyectsRef} skillsRef={skillsRef} contactRef={contactRef}></Header>
                <main className="body">
                        <Home ref={homeRef} active={active}></Home>
                        <About ref={aboutRef} active={active}></About>
                        <Proyects ref={proyectsRef} active={active}></Proyects>
                        <Skills ref={skillsRef} active={active}></Skills>
                        <Contact ref={contactRef} active={active}></Contact>
                </main>
                <Footer active={active}></Footer>
            </div>
        </div>
    );
}
