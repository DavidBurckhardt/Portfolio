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
import { moverEje, rotarEje } from './utils/MoverEjes';
import { threshold } from 'three/examples/jsm/nodes/Nodes.js';

export default function App() {

    const camera = useRef();
    const [active, setActive] = useState([true, false, false, false, false]);
    const [scrollCount, setScrollCount] = useState(0); // Variable de estado para llevar un registro del número de scrolls

    useEffect(() => {
        const home = () => {
            moveAndRotate(-164, 83, 342, 0.01)
            setActive([true,false,false,false,false])
        }

        

    },[])

    const [homeRef,isHome] = useIntersection({
        threshold: 0.6,
    });

    const [aboutRef,isAbout] = useIntersection({
        threshold: 0.6,
    });

    const [proyectsRef,isProyects] = useIntersection({
        threshold: 0.6,
    });
    
    const [skillsRef,isSkills] = useIntersection({
        threshold: 0.6,
    });
    
    const [contactRef,isContact] = useIntersection({
        threshold: 0.6,
    });

    useEffect(() => {
        const home = () => {
            moveAndRotate(-164, 83, 342, 0.01)
            setActive([true,false,false,false,false])
        }

        const aboutMe = () => {
            moveAndRotate(250, 22, -266, 0.01)
            setActive([false,true,false,false,false])
        }

        if(isHome){
            home()
        }

    },[isHome])
    
    useEffect(() => {
        const home = () => {
            moveAndRotate(-164, 83, 342, 0.01)
            setActive([true,false,false,false,false])
        }

        const aboutMe = () => {
            moveAndRotate(250, 22, -266, 0.01)
            setActive([false,true,false,false,false])
        }

        if(!isAbout & isHome){
            home()
        }else {
            aboutMe()
        }

    },[isAbout])


    useEffect(() => {
  
        const proyects = () => {
            moveAndRotate(-208, -33, -85,0.01)
            setActive([false,false,true,false,false])
        }

        const aboutMe = () => {
            moveAndRotate(250, 22, -266, 0.01)
            setActive([false,true,false,false,false])
        }

        if(!isHome & !isProyects & isAbout){
            aboutMe()
        }else {
            proyects()
        }

    },[isProyects])

    useEffect(() => {
  
        const proyects = () => {
            moveAndRotate(-208, -33, -85,0.01)
            setActive([false,false,true,false,false])
        }

        const skills = () => {
            moveAndRotate(33, -1, 238, 0.01)
            setActive([false,false,false,true,false])
        }

        if(!isAbout & !isSkills & isProyects){
            proyects()
        }else {
            skills()
        }

    },[isSkills])

    useEffect(() => {
  
        const contact = () => {
            moveAndRotate(-315, -10, -30, 0.01)
            setActive([false,false,false,false,true])
        }

        const skills = () => {
            moveAndRotate(33, -1, 238, 0.01)
            setActive([false,false,false,true,false])
        }

        if(!isProyects & !isContact & isSkills){
            skills()
        }else {
            contact()
        }

    },[isContact])
    
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

    const onLoad = (spline) => {

        const obj = spline.findObjectByName('Camera');
        camera.current = obj;
        home()
      };



    return (
        <div className='portfolio'>
            <Spline className='scene' scene="https://prod.spline.design/RwlJrSCvQ9Olqjib/scene.splinecode" onLoad={onLoad} />
            {/* <Spline className='scene' scene="https://prod.spline.design/RwlJrSCvQ9Olqjib/scene.splinecode" onLoad={onLoad} /> */}
            
            <div className='container'>
                <Header active={active} setActive={setActive} scrollCount={scrollCount} setScrollCount={setScrollCount} camera={camera} moveAndRotate={moveAndRotate}></Header>
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
