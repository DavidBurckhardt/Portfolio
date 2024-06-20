import "../styles/Skills.css";
import { forwardRef } from "react";
import CardAbout from "../components/CardAbout";

// Logotipos de habilidades "hard skills"
import reactLogo from "../assets/icons/skills/reactLogo.svg";
import javaLogo from "../assets/icons/skills/javaLogo.svg";
import htmlLogo from "../assets/icons/skills/htmlLogo.svg";
import cssLogo from "../assets/icons/skills/cssLogo.svg";
import pythonLogo from "../assets/icons/skills/pythonLogo.svg";
import postgreLogo from "../assets/icons/skills/postgreLogo.svg";
import jiraLogo from "../assets/icons/skills/jiraLogo.svg";
import cplusplusLogo from "../assets/icons/skills/cplusplusLogo.svg";
import mongoLogo from "../assets/icons/skills/mongoLogo.svg";
import trelloLogo from "../assets/icons/skills/trelloLogo.svg";

// Logotipos de habilidades blandas
import responsability from "../assets/icons/responsability.svg";
import teamwork from "../assets/icons/teamwork.svg";
import adaptability from "../assets/icons/adaptability.svg";
import communication from "../assets/icons/communication.svg";
import problemSolution from "../assets/icons/problemSolution.svg";
import timemanagment from "../assets/icons/timemanagment.svg";

const hardSkillsData = [
    { name: "REACT", icon: reactLogo },
    { name: "HTML", icon: htmlLogo },
    { name: "PYTHON", icon: pythonLogo },
    { name: "POSTGRESQL", icon: postgreLogo },
    { name: "JIRA", icon: jiraLogo },
    { name: "JAVA", icon: javaLogo },
    { name: "CSS", icon: cssLogo },
    { name: "C++", icon: cplusplusLogo },
    { name: "MONGODB", icon: mongoLogo },
    { name: "TRELLO", icon: trelloLogo },
];

const softSkillsData = [
    { name: "RESPONSABILITY", icon: responsability },
    { name: "TEAMWORK", icon: teamwork },
    { name: "ADAPTABILITY", icon: adaptability },
    { name: "COMMUNICATION", icon: communication },
    { name: "PROBLEM RESOLUTION", icon: problemSolution },
    { name: "TIME MANAGEMENT", icon: timemanagment },
];

const hardSkillsDataSmall = [
    { name: "REACT", icon: reactLogo },
    { name: "PYTHON", icon: pythonLogo },
    { name: "JAVA", icon: javaLogo },
    { name: "POSTGRESQL", icon: postgreLogo },
];

const softSkillsDataSmall = [
    { name: "RESPONSABILITY", icon: responsability },
    { name: "TEAMWORK", icon: teamwork },
    { name: "ADAPTABILITY", icon: adaptability },
    { name: "COMMUNICATION", icon: communication },
];

const Skills = forwardRef((props, ref) => {
    const { active } = props;

    return (
        <>
            <section ref={ref[0]} className="skills">
                <header className={`skills-title ${active[3] ? 'skills-animation-up-title' : 'skills-animation-down-title'}`}>
                    <span className='skills-title-text'>SKILLS</span>
                </header>
                <article className={`hard-skills ${active[3] ? 'skills-animation-up-hard' : 'skills-animation-down-hard'}`}>
                    <div className='hard-skills-title card-title'>
                        <CardAbout>
                            <span className='article-title'>HARD SKILLS</span>
                        </CardAbout>
                    </div>
                    <div className='hard-skills-body'>
                        {hardSkillsData.map((skill, index) => (
                            <div className='parent-skill' key={index}>
                                <div className="card-skill">
                                    <img style={{ height: "60%", width: "60%" }} src={skill.icon} alt={skill.name} />
                                </div>
                                <span className='skill-name'>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </article>
                <article className={`soft-skills ${active[3] ? 'skills-animation-up-soft' : 'skills-animation-down-soft'}`}>
                    <div className='soft-skills-title card-title'>
                        <CardAbout>
                            <span className='article-title'>SOFT SKILLS</span>
                        </CardAbout>
                    </div>
                    <div className='soft-skills-body'>
                        {softSkillsData.map((skill, index) => (
                            <div className='parent-skill' key={index}>
                                <div className="card-skill">
                                    <img style={{ height: "55%", width: "55%" }} src={skill.icon} alt={skill.name} />
                                </div>
                                <span className='skill-name'>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </article>
            </section>
            <section ref={ref[1]} className="skills-small">
                <header className={`skills-small-title skills-title-text ${active[3] ? 'skills-animation-up-title' : 'skills-animation-down-title'}`}>
                    <span className="title-skills">SKILLS</span>
                </header>
                <article className="skills-small-body">
                    <section className={`skills-small-body-left ${active[3] ? 'skills-animation-up-hard' : 'skills-animation-down-hard'}`}>
                        <div className="skills-small-body-left-title">
                            <div className='hard-skills-title'>
                                <CardAbout>
                                    <span className='article-title'>HARD SKILLS</span>
                                </CardAbout>
                            </div>
                        </div>
                        <div className={`skills-small-body-left-body`}>
                            {hardSkillsDataSmall.map((skill, index) => (
                                <div className='parent-skill' key={index}>
                                    <div className="card-skill">
                                        <img style={{ height: "60%", width: "60%" }} src={skill.icon} alt={skill.name} />
                                    </div>
                                    <span className='skill-name'>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className={`skills-small-body-right ${active[3] ? 'skills-animation-up-soft' : 'skills-animation-down-soft'}`}>
                        <div className="skills-small-body-left-title">
                            <div className='hard-skills-title'>
                                <CardAbout>
                                    <span className='article-title'>SOFT SKILLS</span>
                                </CardAbout>
                            </div>
                        </div>
                        <div className="skills-small-body-left-body">
                            {softSkillsDataSmall.map((skill, index) => (
                                <div className='parent-skill' key={index}>
                                    <div className="card-skill">
                                        <img style={{ height: "55%", width: "55%" }} src={skill.icon} alt={skill.name} />
                                    </div>
                                    <span className='skill-name'>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </article>
            </section>
        </>
    )
});

export default Skills;
