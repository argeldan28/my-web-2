import './Home.css'
import './Navbar.jsx'

import 'bootstrap-icons/font/bootstrap-icons.css';

function Home(){
    return(
        <section className='home' id='home'>
            
        

            <div className='info-and-img'>
                <div className='my-info'>
                    <p className='my-name'>Argel Dan Alcantara</p>
                    <p className='my-role'>Junior Web Developer</p>
                    <p className='my-description'>Aspiring web developer with a passion for creating user-friendly websites and applications. 
                        I am eager to improve my skills in programming languages and web development tools. 
                        I enjoy learning new technologies, solving problems, and working on creative ideas 
                        to build useful and functional projects.
                    </p>

                    <div className='home-btn'>
                        <div>
                            <span>Download my CV:</span>
                            <a href="/public/AlcantaraArgelDan_CVe.pdf" download>
                                <button className="cv-button">Download CV</button>
                            </a>
                        </div>

                        <div>
                            <span>Or contact me via gmail:</span>
                            <button onClick={() => window.location.href = 'mailto:argeldan28@gmail.com'}>Contact me</button> 
                        </div>

                    </div>
                </div>

                <div className='code-img'>
                    <img src="/public/code.png" alt="" />
                </div>
            </div>
            
        </section>
    
    )
}

export default Home;