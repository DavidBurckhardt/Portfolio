import { useState, useRef, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Proyects from "./components/Proyects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from './components/Footer';

import "./styles.css";
import "./styles/CardProyect.css";
import { moverEje, rotarEje } from './utils/MoverEjes';

export default function App() {

    const camera = useRef();
    const [active, setActive] = useState([false, false, false, false, false]);
    const [scrollCount, setScrollCount] = useState(0); // Variable de estado para llevar un registro del número de scrolls

    useEffect(() => {
        home()
    },[])
    
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

    const home = () => {
        moveAndRotate(-164, 83, 342, 0.01)
        setActive([true,false,false,false,false])
        setScrollCount(0)
    }

    const onLoad = (spline) => {

        const obj = spline.findObjectByName('Camera');
        camera.current = obj;
      };

    return (
        <div className='portfolio'>
            <Spline className='scene' scene="https://prod.spline.design/RwlJrSCvQ9Olqjib/scene.splinecode" onLoad={onLoad} />
            {/* <Spline className='scene' scene="https://prod.spline.design/RwlJrSCvQ9Olqjib/scene.splinecode" onLoad={onLoad} /> */}
            
            <div className='container'>
                <Header active={active} setActive={setActive} scrollCount={scrollCount} setScrollCount={setScrollCount} camera={camera} moveAndRotate={moveAndRotate}></Header>
                <main className="body">
                        <Home active={active}></Home>
                        <About active={active}></About>
                        <Skills active={active}></Skills>
                        <Proyects active={active}></Proyects>
                        <Contact active={active}></Contact>
                </main>
                <Footer active={active}></Footer>
            </div>
        </div>

    );
}
