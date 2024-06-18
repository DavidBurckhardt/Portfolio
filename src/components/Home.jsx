import "../styles/Home.css";
import { forwardRef } from "react";

const Home = forwardRef((props,ref) => {

    const {active} = props;

    return(
        <>
        <section ref={ref[0]} className={`home ${active[0]? 'home-animation-right' : ''}`}>
            <div className="home-left-section">
                <h1 className={`phrase ${active[0]? '' : 'home-animation-left animation-delay-phrase'}`}><span className='phrase-text'>IT'S JUST A LINE OF CODE</span></h1>
                <article className={`presentation ${active[0]? '' : 'home-animation-left animation-delay-presentation'}`}><span className='presentation-text'>Hi, I'm David Burckhardt, a passionate web developer and designer thrilled to welcome you to my portfolio! With a deep-rooted love for technology and design, I've embarked on an exciting journey filled with creativity and innovation. Here, you'll discover a showcase of my projects spanning my career, each reflecting my dedication to skillfulness and problem-solving. I'm eager to share my experiences and collaborate on upcoming projects, so let's connect and bring ideas to life together!</span></article>
                <h2 className={`rol ${active[0]? '' : 'home-animation-left animation-delay-rol'}`}><span className='rol-text'>BY A SOFTWARE DEVELOPER</span></h2>
            </div>
        </section>
        <section ref={ref[1]} className={`home-small ${active[0]? 'home-animation-right' : ''}`}>
            <div className="home-left-section">
                <h1 className={`phrase ${active[0]? '' : 'home-animation-left animation-delay-phrase'}`} ><span className='phrase-text'>IT'S JUST A LINE OF CODE</span></h1>
                <article className={`presentation ${active[0]? '' : 'home-animation-left animation-delay-presentation'}`} ><span className='presentation-text'>
                    Hi, I'm David Burckhardt, a passionate web developer and designer. Welcome to my portfolio, where you can explore my projects that highlight my dedication to creativity and problem-solving. I'm excited to share my experiences and collaborate on new projects. Let's connect and bring ideas to life together!</span></article>
                <h2 className={`rol ${active[0]? '' : 'home-animation-left animation-delay-rol'}`} ><span className='rol-text'>BY A SOFTWARE DEVELOPER</span></h2>
            </div>
        </section>
        </>

    )
})

export default Home;