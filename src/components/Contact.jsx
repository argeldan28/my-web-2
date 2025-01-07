import { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

function Contact(){

    const [status, setStatus] = useState('');

    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm('service_yw81jxh','template_7o5280d',e.target,'4Lzdp7FDh5aEgtIKK')
            .then(
                (res) => {
                    console.log(res.text);
                    setStatus('Success! Your message has been sent.' )
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                    setStatus('Error! Something went wrong. Please try again.')
                }
            );
            
    }

    return(
        <section className='contact' id='contact'>
            <h1>Contact Me!</h1>
            <div>
                <form className='contact-form' onSubmit={sendEmail}>
                    <div className="input-box">
                        <div className="input-field">
                            <input type="text" placeholder='Full Name' name='fullname' required />
                            <span className='focus'></span>
                        </div>

                        <div className="input-field">
                            <input type="text" placeholder='Email Address' name='email-from' required />
                            <span className='focus'></span>
                        </div>
                    </div>

                    <div className="input-box">
                        <div className="input-field">
                            <input type="number" className='input-number' name='phone-number' placeholder='Mobile Number' required />
                            <span className='focus'></span>
                        </div>

                        <div className="input-field">
                            <input type="text" placeholder='Email Subject' name='email-subject' required />
                            <span className='focus'></span>
                        </div>
                    </div>

                    <div className="textarea-field">
                        <textarea id="message" placeholder='Your Message...' name='message' required></textarea>
                        <span className='focus'></span>
                    </div>

                    <div className="btn-box">
                        <button type='submit' className='btn'>Submit</button>
                    </div>

                    {status && <p className={`status-message ${status.includes('Success') ? 'success' : 'error'}`}>{status}</p>}
                </form>
            </div>

            <div className='home-icon'>
            <div className='home-icon'>
                        <a href="https://github.com/argeldan28"><i className="bi bi-github"></i></a>
                        <a href="https://www.linkedin.com/in/argel-dan-alcantara-23570917b/"><i className="bi bi-linkedin"></i></a>
                    </div>
            </div>
        </section>
    )
};

export default Contact;