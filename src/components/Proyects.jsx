import "../styles/Proyects.css";

import github from "../assets/icons/github.svg"
import recipe from "../assets/icons/recipe.svg"
import compiler from "../assets/icons/compiler.svg"
import truck from "../assets/icons/truck.svg"
import brain from "../assets/icons/brain.svg"
import chatbot from "../assets/icons/chatbot.svg"
import lemon from "../assets/icons/lemon.svg"

export default function Proyects(props){

    const {active} = props;

    return(
        <section className={`proyects`} >
        <header className={`proyects-title ${active[2]? 'proyects-animation-right-title' : 'proyects-animation-left-title'}`}><span className='proyects-title-text'>PROYECTS</span></header>
        <div className={`proyects-card ${active[2]? 'proyects-animation-right' : 'proyects-animation-left'}`} >
            <div className="parent">
                <div className="card-proyect">
                    <div className="content-box">
                        <span className="card-proyect-title">RECIPE BOOK</span>
                        <p className="card-proyect-content">
                            A global culinary recipe book building with the MEAN stack, strengthening my skills in interface design, non-relational data manipulation, and RESTful API construction.
                        </p>
                        <a href="https://github.com/DavidBurckhardt/World_Recipebook" target="_blank" rel="noopener noreferrer" className="see-more"><img className='github-size' src={github}/></a>
                    </div>
                    <div className="icon-box">
                        <img className='icon-size-proyect' src={recipe}/>
                    </div>
                </div>
            </div>
            <div className="parent">
                <div className="card-proyect">
                    <div className="content-box">
                        <span className="card-proyect-title">COMPILER</span>
                        <p className="card-proyect-content">
                            A complete compiler building in C++, implementing lexical, syntactic, and semantic analysis, intermediate code generation, error handling, and optimizations
                        </p>
                        <a href="https://github.com/DavidBurckhardt/Compiler_Project" target="_blank" rel="noopener noreferrer" className="see-more"><img className='github-size' src={github}/></a>                                   </div>
                    <div className="icon-box">
                        <img className='icon-size-proyect' src={compiler}/>
                    </div>
                </div>
            </div>
            <div className="parent">
                <div className="card-proyect">
                    <div className="content-box">
                        <span className="card-proyect-title">FLEET-FLOW 1.0</span>
                        <p className="card-proyect-content">
                        This project optimizes truck trip management, handles repairs, and manages vehicle and driver documentation, improving operational efficiency.
                        </p>
                        <a href="https://github.com/DavidBurckhardt/World_Recipebook" target="_blank" rel="noopener noreferrer" className="see-more"><img className='github-size' src={github}/></a>                                    </div>
                    <div className="icon-box">
                        <img className='icon-size-proyect' src={truck}/>
                    </div>
                </div>
            </div>
            <div className="parent">
                <div className="card-proyect">
                    <div className="content-box">
                        <span className="card-proyect-title">IA MODEL</span>
                        <p className="card-proyect-content">
                            This device segmentation model for aneurysm treatment, trained with deep learning and the nnUNet framework, automates the process and accelerates professionals' work.
                        </p>
                        <a href="https://github.com/DavidBurckhardt/World_Recipebook" target="_blank" rel="noopener noreferrer" className="see-more"><img className='github-size' src={github}/></a>                                    </div>
                    <div className="icon-box">
                        <img className='icon-size-proyect' src={brain}/>
                    </div>
                </div>
            </div>
            <div className="parent">
                <div className="card-proyect">
                    <div className="content-box">
                        <span className="card-proyect-title">MY CHATBOT</span>
                        <p className="card-proyect-content">
                        This project was developed using RASA and Python. The chatbot has been seamlessly integrated with Telegram and trained with my most common phrases and responses. It's like you're talking to me!
                        </p>
                        <a href="https://github.com/DavidBurckhardt/Chatbot-My" target="_blank" rel="noopener noreferrer" className="see-more"><img className='github-size' src={github}/></a>                                  </div>
                    <div className="icon-box">
                        <img className='icon-size-proyect' src={chatbot}/>
                    </div>
                </div>
            </div>
            <div className="parent">
                <div className="card-proyect">
                    <div className="content-box">
                        <span className="card-proyect-title">HEALTH ANALYZER</span>
                        <p className="card-proyect-content">
                        This project utilizes OpenCV to process lemon images and detect both healthy and rotten parts of the fruit, designed to operate at an industrial scale. 
                        </p>
                        <a href="https://github.com/DavidBurckhardt/Image-processing" target="_blank" rel="noopener noreferrer" className="see-more"><img className='github-size' src={github}/></a>          
                    </div>
                    <div className="icon-box">
                        <img className='icon-size-proyect' src={lemon}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}