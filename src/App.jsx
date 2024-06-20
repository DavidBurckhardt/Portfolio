import { useState, useRef, useEffect} from 'react';
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
import { home, about, proyects, skills, contact } from './utils/MoverEjes';


export default function App() {

    const camera = useRef();
    const [active, setActive] = useState([true, false, false, false, false]);
    const [isNavigating, setIsNavigating] = useState(false);

    const [homeRef, isHome] = useIntersection({ threshold: 0.5 }, false, isNavigating);
    const [homeRefSmall, isHomeSmall] = useIntersection({ threshold: 0.5 }, false, isNavigating);
    const refHome = [homeRef, homeRefSmall];

    const [aboutRef, isAbout] = useIntersection({ threshold: 0.5 }, false, isNavigating);
    const [aboutRefSmall, isAboutSmall] = useIntersection({ threshold: 0.5 }, false, isNavigating);
    const [aboutRefSmall2, isAboutSmall2] = useIntersection({ threshold: 0.5 }, false, isNavigating);
    const refAbout = [aboutRef, aboutRefSmall, aboutRefSmall2];

    const [proyectsRef, isProyects] = useIntersection({ threshold: 0.5 }, false, isNavigating);
    const [proyectsRefSmall, isProyectsSmall] = useIntersection({ threshold: 0.5 }, false, isNavigating);
    const refProyects = [proyectsRef, proyectsRefSmall];

    const [skillsRef, isSkills] = useIntersection({ threshold: 0.5 }, false, isNavigating);
    const [skillsRefSmall, isSkillsSmall] = useIntersection({ threshold: 0.5 }, false, isNavigating);
    const refSkills = [skillsRef, skillsRefSmall];

    const [contactRef, isContact] = useIntersection({ threshold: 0.5 }, false, isNavigating);
    const [contactRefSmall, isContactSmall] = useIntersection({ threshold: 0.5 }, false, isNavigating);
    const refContact = [contactRef, contactRefSmall];


    useEffect(() => {
        home(camera,setActive);
    },[])

    useEffect(() => {
        if (!isNavigating){
            if (window.innerWidth >= 1100){
                if (!isContact && !isSkills && !isProyects && !isAbout && isHome) {
                    home(camera,setActive);
                } else if (!isContact && !isSkills && !isProyects && isAbout && !isHome) {
                    about(camera,setActive);
                } else if (!isContact && !isSkills && isProyects && !isAbout && !isHome) {
                    proyects(camera,setActive);
                } else if (!isContact && isSkills && !isProyects && !isAbout && !isHome) {
                    skills(camera,setActive);
                } else if (isContact && !isSkills && !isProyects && !isAbout && !isHome) {
                    contact(camera,setActive);
                }
            } else {
                if (!isContactSmall && !isSkillsSmall && !isProyectsSmall && !isAboutSmall && isHomeSmall) {
                    home(camera,setActive);
                } else if (!isContactSmall && !isSkillsSmall && !isProyectsSmall && (isAboutSmall || isAboutSmall2) && !isHomeSmall) {
                    about(camera,setActive);
                } else if (!isContactSmall && !isSkillsSmall && isProyectsSmall && !isAboutSmall && !isHomeSmall) {
                    proyects(camera,setActive);
                } else if (!isContactSmall && isSkillsSmall && !isProyectsSmall && !isAboutSmall && !isHomeSmall) {
                    skills(camera,setActive);
                } else if (isContactSmall && !isSkillsSmall && !isProyectsSmall && !isAboutSmall && !isHomeSmall) {
                    contact(camera,setActive);
                }
            }
        }
    }, [isHome, isHomeSmall, isAbout, isAboutSmall, isAboutSmall2, isProyects, isProyectsSmall, isSkills, isSkillsSmall, isContact, isContactSmall]);

    const onLoad = (spline) => {
        const obj = spline.findObjectByName('Camera');
        camera.current = obj;
      };
    
    return (

        <div className='portfolio'>
                <Scene onLoad={onLoad} />
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
