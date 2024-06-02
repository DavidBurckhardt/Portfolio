import "../styles/Skills.css";
import CardAbout from "../components/CardAbout"
import reactLogo from "../assets/icons/skills/reactLogo.svg"
import javaLogo from "../assets/icons/skills/javaLogo.svg"
import htmlLogo from "../assets/icons/skills/htmlLogo.svg"
import cssLogo from "../assets/icons/skills/cssLogo.svg"
import pythonLogo from "../assets/icons/skills/pythonLogo.svg"
import postgreLogo from "../assets/icons/skills/postgreLogo.svg"
import mongoLogo from "../assets/icons/skills/mongoLogo.svg"
import jiraLogo from "../assets/icons/skills/jiraLogo.svg"
import trelloLogo from "../assets/icons/skills/trelloLogo.svg"
import cplusplusLogo from "../assets/icons/skills/cplusplusLogo.svg"

import responsability from "../assets/icons/responsability.svg"
import adaptability from "../assets/icons/adaptability.svg"
import communication from "../assets/icons/communication.svg"
import problemSolution from "../assets/icons/problemSolution.svg"
import timemanagment from "../assets/icons/timemanagment.svg"
import teamwork from "../assets/icons/teamwork.svg"

export default function Skills(props){

    const {active} = props;

    return(
        <section className="skills">
        <header className={`skills-title ${active[3]? 'skills-animation-up-title' : 'skills-animation-down-title'}`}><span className='skills-title-text'>SKILLS</span></header>
        <article className={`hard-skills ${active[3]? 'skills-animation-up-hard' : 'skills-animation-down-hard'}`}>
            <div className='hard-skills-title card-title'><CardAbout><span className='article-title'>HARD SKILLS</span></CardAbout></div>
            <div className='hard-skills-body'>
                <div className='parent-skill'>
                    <div className="card-skill"><img style={{ height: "70%", width: "70%"}} src={reactLogo}/></div>
                    <span className='skill-name'>REACT</span>
                </div>
                <div className='parent-skill'>
                    <div className="card-skill"><img style={{ height: "65%", width: "55%"}} src={htmlLogo}/></div>
                    <span className='skill-name'>HTML</span>
                </div>
                <div className='parent-skill'>
                    <div className="card-skill"><img style={{ height: "60%", width: "60%"}}  src={pythonLogo}/></div>
                    <span className='skill-name'>PYTHON</span>
                </div>
                <div className='parent-skill'>
                    <div className="card-skill"><img style={{ height: "55%", width: "55%"}}  src={postgreLogo}/></div>
                    <span className='skill-name'>POSTGRESQL</span>
                </div>
                <div className='parent-skill'>
                    <div className="card-skill"><img style={{ height: "65%", width: "65%"}} src={jiraLogo}/></div>
                    <span className='skill-name'>JIRA</span>
                </div>
                <div className='parent-skill'>
                    <div className="card-skill"><img style={{ height: "64%", width: "80%"}} src={javaLogo}/></div>
                    <span className='skill-name'>JAVA</span>
                </div>
                <div className='parent-skill'>
                    <div className="card-skill"><img style={{ height: "65%", width: "55%"}} src={cssLogo}/></div>
                    <span className='skill-name'>CSS</span>
                </div>
                <div className='parent-skill'>
                    <div className="card-skill"><img style={{ height: "70%", width: "70%"}} src={cplusplusLogo}/></div>
                    <span className='skill-name'>C++</span>
                </div>
                <div className='parent-skill'>
                    <div className="card-skill"><img style={{ height: "73%", width: "73%"}} src={mongoLogo}/></div>
                    <span className='skill-name'>MONGODB</span>
                </div>
                <div className='parent-skill'>
                    <div className="card-skill"><img style={{ height: "50%", width: "50%"}} src={trelloLogo}/></div>
                    <span className='skill-name'>TRELLO</span>
                </div>
            </div>
        </article>
        <article className={`soft-skills ${active[3]? 'skills-animation-up-soft' : 'skills-animation-down-soft'}`}>
        <div className='soft-skills-title card-title'><CardAbout><span className='article-title'>SOFT SKILLS</span></CardAbout></div>
            <div className='soft-skills-body'>
                <div className='parent-skill'>
                    <div className="card-skill"><img style={{ height: "60%", width: "60%"}} src={responsability}/></div>
                    <span className='skill-name'>RESPONSABILITY</span>
                </div>
                <div className='parent-skill'>
                    <div className="card-skill"><img style={{ height: "65%", width: "55%"}} src={teamwork}/></div>
                    <span className='skill-name'>TEAMWORK</span>
                </div>
                <div className='parent-skill'>
                    <div className="card-skill"><img style={{ height: "55%", width: "55%"}}  src={adaptability}/></div>
                    <span className='skill-name'>ADAPTABILITY</span>
                </div>
                <div className='parent-skill'>
                    <div className="card-skill"><img style={{ height: "50%", width: "50%"}}  src={communication}/></div>
                    <span className='skill-name'>COMMUNICATION</span>
                </div>
                <div className='parent-skill'>
                    <div className="card-skill"><img style={{ height: "55%", width: "55%"}} src={problemSolution}/></div>
                    <span className='skill-name'>PROBLEM RESOLUTION</span>
                </div>
                <div className='parent-skill'>
                    <div className="card-skill"><img style={{ height: "60%", width: "60%"}} src={timemanagment}/></div>
                    <span className='skill-name'>TIME MANAGEMENT</span>
                </div>
            </div>
        </article>
    </section>
    )
}