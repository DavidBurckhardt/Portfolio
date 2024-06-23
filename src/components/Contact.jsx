import {useState} from "react";
import "../styles/Contact.css";
import { forwardRef } from "react";

import phone from "../assets/icons/contact/phone.svg"
import email from "../assets/icons/contact/email.svg"
import location from "../assets/icons/contact/location.svg"
import emailjs from '@emailjs/browser';

const Contact = forwardRef((props,ref) => {

    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.init('0i87j6d-OF8YH5gUg');

        emailjs.send("service_p7vp8bl","template_gpyck2a",formData)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email enviado correctamente');
        })
        .catch((error) => {
            console.error('FAILED...', error);
            alert('Error enviando el email');
        });

        setFormData(null);
    };
    

    const {active} = props;

    return(
        <>
            <section ref={ref[0]} className='contact'>
                <div className="contact-section">
                <header className={`contact-title ${active[4] ? 'contact-animation-up-title' : 'contact-animation-down-title'}`}>
                    <span className='contact-title-text'>CONTACT ME</span>
                </header>
                <div className={`contact-body ${active[4] ? 'contact-animation-up-body' : 'contact-animation-down-body'}`}>
                    <div className="container-form">
                        <div className="info-form">
                            <h2>SEND ME A MESSAGE</h2>
                            <p>Hi! If you're interested in collaborating or have any questions, feel free to contact me. I'm available for new opportunities and freelance projects. I look forward to hearing from you soon!</p>
                            <div className='contact-data' >
                                <div className='contact-icon-data'><img className='contact-data-img' style={{ height: "90%", width: "90%"}} src={phone}></img></div>
                                <span href="#">+54 9 2236920132</span>
                            </div>
                            <div className='contact-data' >
                                <div className='contact-icon-data'><img className='contact-data-img' style={{ height: "70%", width: "60%"}} src={email}></img></div>
                                <span href="#">burck432@gmail.com</span>
                            </div>
                            <div className='contact-data' >
                                <div className='contact-icon-data'><img className='contact-data-img' style={{ height: "80%", width: "80%"}} src={location}></img></div>
                                <span href="#">Mar del Plata, Buenos Aires, Argentina</span>
                            </div>
                        </div>
                        <form className='info-form' action="#" autoComplete="off">
                            <input type="text" name="from_name" placeholder="Name" className="campo" onChange={handleChange}/>
                            <input type="email" name="from_email" placeholder="Email" className="campo" onChange={handleChange}/>
                            <input type="subject" name="subject" placeholder="Subject" className="campo" onChange={handleChange}/>
                            <textarea name="message" placeholder="Message..." className="campo" onChange={handleChange}></textarea>
                            <input type="submit" name="enviar" value="Send email" className="btn-submit-position btn-getcv" onClick={handleSubmit} />
                        </form>
                    </div>
                </div>
                </div>
            </section>
            <section ref={ref[1]} className='contact-small'>
                <header className={`contact-small-title contact-title-text ${active[4] ? 'contact-animation-up-title' : 'contact-animation-down-title'}`}><span className="title-skills">CONTACT</span></header>
                <article className={`contact-small-body ${active[4] ? 'contact-animation-up-body' : 'contact-animation-down-body'}`}>
                    <p className="text-body-p">Hi! If you're interested in collaborating or have any questions, feel free to contact me. I'm available for new opportunities and freelance projects. I look forward to hearing from you soon!</p>
                    <div className="contact-data-list">
                        <div className='contact-data' >
                                <div className='contact-icon-data'><img className='contact-data-img' style={{ height: "90%", width: "90%"}} src={phone}></img></div>
                                <span className="text-body-data" href="#">+54 9 2236920132</span>
                            </div>
                            <div className='contact-data' >
                                <div className='contact-icon-data'><img className='contact-data-img' style={{ height: "70%", width: "60%"}} src={email}></img></div>
                                <span className="text-body-data" href="#">burck432@gmail.com</span>
                            </div>
                            <div className='contact-data' >
                                <div className='contact-icon-data'><img className='contact-data-img' style={{ height: "80%", width: "80%"}} src={location}></img></div>
                                <span className="text-body-data" href="#">Mar del Plata, Buenos Aires, Arg.</span>
                            </div>
                    </div>
                    <form className='info-form' action="#" autoComplete="off">
                            <span className="text-body-title">SEND ME A MESSAGE</span>
                            <input type="text" name="from_name" placeholder="Name" className="campo" onChange={handleChange}/>
                            <input type="email" name="from_email" placeholder="Email" className="campo" onChange={handleChange}/>
                            <input type="subject" name="subject" placeholder="Subject" className="campo" onChange={handleChange}/>
                            <textarea name="message" placeholder="Message..." className="campo" onChange={handleChange}></textarea>
                            <input type="submit" name="enviar" value="Send email" className="btn-submit-position btn-getcv btn-getcv-contact" onClick={handleSubmit} />
                        </form>
                </article>
            </section>
        </>
    )
})

export default Contact;