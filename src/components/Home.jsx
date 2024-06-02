import "../styles/Home.css";

export default function Home(props){

    const {active} = props;

    return(
        <section className={`home ${active[0]? 'home-animation-right' : ''}`}>
            <h1 className={`phrase ${active[0]? '' : 'home-animation-left animation-delay-phrase'}`}><span className='phrase-text'>IT'S JUST A LINE OF CODE</span></h1>
            <article className={`presentation ${active[0]? '' : 'home-animation-left animation-delay-presentation'}`}><span className='presentation-text'>Hi, I'm David Burckhardt, a passionate web developer and designer thrilled to welcome you to my portfolio! With a deep-rooted love for technology and design, I've embarked on an exciting journey filled with creativity and innovation. Here, you'll discover a showcase of my projects spanning my career, each reflecting my dedication to skillfulness and problem-solving. I'm eager to share my experiences and collaborate on upcoming projects, so let's connect and bring ideas to life together!</span></article>
            <h2 className={`rol ${active[0]? '' : 'home-animation-left animation-delay-rol'}`}><span className='rol-text'>BY A SOFTWARE DEVELOPER</span></h2>
        </section>
    )
}