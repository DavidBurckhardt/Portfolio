import "../styles/About.css";
import CardAbout from "./CardAbout"
import imgPersonal from "../assets/images/yo.png"

export default function About(props){

    const {active} = props;

    return(
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
    )

}