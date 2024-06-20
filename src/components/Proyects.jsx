import "../styles/Proyects.css";
import { forwardRef } from "react";
import Carrusel from "./Carrusel";

import github from "../assets/icons/github.svg";
import recipe from "../assets/icons/recipe.svg";
import compiler from "../assets/icons/compiler.svg";
import truck from "../assets/icons/truck.svg";
import brain from "../assets/icons/brain.svg";
import chatbot from "../assets/icons/chatbot.svg";
import lemon from "../assets/icons/lemon.svg";

const projectsData = [
    {
        title: "RECIPE BOOK",
        description: "A global culinary recipe book building with the MEAN stack, strengthening my skills in interface design, non-relational data manipulation, and RESTful API construction.",
        githubLink: "https://github.com/DavidBurckhardt/World_Recipebook",
        icon: recipe,
    },
    {
        title: "COMPILER",
        description: "A complete compiler building in C++, implementing lexical, syntactic, and semantic analysis, intermediate code generation, error handling, and optimizations.",
        githubLink: "https://github.com/DavidBurckhardt/Compiler_Project",
        icon: compiler,
    },
    {
        title: "FLEET-FLOW 1.0",
        description: "This project optimizes truck trip management, handles repairs, and manages vehicle and driver documentation, improving operational efficiency.",
        githubLink: "https://github.com/DavidBurckhardt/World_Recipebook",
        icon: truck,
    },
    {
        title: "IA MODEL",
        description: "Deep learning model for aneurysm treatment, utilizing nnUNet for efficient and automated device segmentation, speeding up the workflow for medical professionals.",
        githubLink: "https://github.com/DavidBurckhardt/World_Recipebook",
        icon: brain,
    },
    {
        title: "MY CHATBOT",
        description: "Advanced chatbot built with RASA and Python, seamlessly integrated with Telegram, trained with my frequent phrases for a personalized experience.",
        githubLink: "https://github.com/DavidBurckhardt/Chatbot-My",
        icon: chatbot,
    },
    {
        title: "HEALTH ANALYZER",
        description: "This project utilizes OpenCV to process lemon images and detect both healthy and rotten parts of the fruit, designed to operate at an industrial scale.",
        githubLink: "https://github.com/DavidBurckhardt/Image-processing",
        icon: lemon,
    },
];

const Proyects = forwardRef((props, ref) => {
    const { active } = props;

    return (
        <>
            <section ref={ref[0]} className={`proyects`} >
                <header className={`proyects-title ${active[2] ? 'proyects-animation-right-title' : 'proyects-animation-left-title'}`}>
                    <span className='proyects-title-text'>PROYECTS</span>
                </header>
                <div className={`proyects-card ${active[2] ? 'proyects-animation-right' : 'proyects-animation-left'}`} >
                    {projectsData.map((project, index) => (
                        <div className="parent" key={index}>
                            <div className="card-proyect">
                                <div className="content-box">
                                    <span className="card-proyect-title">{project.title}</span>
                                    <p className="card-proyect-content">
                                        {project.description}
                                    </p>
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="see-more">
                                        <img className='github-size' src={github} alt="GitHub Link" />
                                    </a>
                                </div>
                                <div className="icon-box">
                                    <img className='icon-size-proyect' src={project.icon} alt={`${project.title} Icon`} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section ref={ref[1]} className="proyects-small" >
                <header className={`proyects-small-title proyects-title-text ${active[2] ? 'proyects-animation-right-title' : 'proyects-animation-left-title'}`}>
                    <span className="title-proyects">PROYECTS</span>
                </header>
                <article className={`proyects-small-body ${active[2] ? 'proyects-animation-right' : 'proyects-animation-left'}`}>
                    <Carrusel>
                        {projectsData.map((project, index) => (
                            <div className="parent" key={index}>
                                <div className="card-proyect">
                                    <div className="content-box">
                                        <span className="card-proyect-title">{project.title}</span>
                                        <p className="card-proyect-content">
                                            {project.description}
                                        </p>
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="see-more">
                                            <img className='github-size' src={github} alt="GitHub Link" />
                                        </a>
                                    </div>
                                    <div className="icon-box">
                                        <img style={{ height: "75%", width: "75%" }} className='icon-size-proyect' src={project.icon} alt={`${project.title} Icon`} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carrusel>
                </article>
            </section>
        </>
    )
});

export default Proyects;
