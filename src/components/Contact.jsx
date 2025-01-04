import './Contact.css';

function Contact(){
    return(
        <section className='contact'>
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
                <i className="bi bi-facebook"></i>
                <i className="bi bi-github"></i>
                <i className="bi bi-linkedin"></i>
            </div>
        </section>
    )
};

export default Contact;