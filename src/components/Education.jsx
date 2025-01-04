import './Education.css'

function Education() {
    return(
        <section className='education'>
            <h1>My <span>Journey</span></h1>

            <div className="education-row">
                <div className="education-col">
                    <h3 className="title">Education</h3>

                    <div className="education-box">

                        <div className="education-content">
                            <div className="content">
                                <div className="year">
                                    <i className="bi bi-calendar3"></i>
                                    November 2024 - December 2024
                                </div>

                                <h3>Web Programming</h3>
                                <h4>forma.temp</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, sint!</p>
                            </div>
                        </div>

                        <div className="education-content">
                            <div className="content">
                                <div className="year">
                                    <i className="bi bi-calendar3"></i>
                                    April 2024 - August 2024
                                </div>
                                <h3>Junior Java Developer</h3>
                                <h4>Generation Italy</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, sint!</p>
                            </div>
                        </div>

                        <div className="education-content">
                            <div className="content">
                                <div className="year">
                                    <i className="bi bi-calendar3"></i>
                                    2017 - 2020
                                </div>
                                <h3>Diploma in Electrical Technology</h3>
                                <h4>Istituto di Istruzione Superiore G. Giorgi, Milan</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, sint!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="education-col">
                    <h3 className="title">Projects</h3>

                    <div className="education-box">

                        <div className="education-content">
                            <div className="content">
                                <div className="year">
                                    <i className="bi bi-calendar3"></i>
                                    August 2024
                                </div>
                                <h3>Cinema Website</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, sint!</p>
                            </div>
                        </div>

                        <div className="education-content">
                            <div className="content">
                                <div className="year">
                                    <i className="bi bi-calendar3"></i>
                                    August 2024
                                </div>
                                <h3>Cinema Website</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, sint!</p>
                            </div>
                        </div>

                        
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Education