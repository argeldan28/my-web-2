import './Contact.css';

function Contact(){
    return(
        <section className='contact' id='contact'>
            <h1>Contact Me!</h1>
            <div>
                <form action="">
                    <div className="input-box">
                        <div className="input-field">
                            <input type="text" placeholder='Full Name' required />
                            <span className='focus'></span>
                        </div>

                        <div className="input-field">
                            <input type="text" placeholder='Email Address' required />
                            <span className='focus'></span>
                        </div>
                    </div>

                    <div className="input-box">
                        <div className="input-field">
                            <input type="number" className='input-number' placeholder='Mobile Number' required />
                            <span className='focus'></span>
                        </div>

                        <div className="input-field">
                            <input type="text" placeholder='Email Subject' required />
                            <span className='focus'></span>
                        </div>
                    </div>

                    <div className="textarea-field">
                        <textarea name="" id="" placeholder='Your Message...' required></textarea>
                        <span className='focus'></span>
                    </div>

                    <div className="btn-box">
                        <button type='submit' className='btn'>Submit</button>
                    </div>
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