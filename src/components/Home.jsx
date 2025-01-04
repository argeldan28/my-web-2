import './Home.css'
import './Navbar.jsx'

import 'bootstrap-icons/font/bootstrap-icons.css';

function Home(){
    return(
        <section className='home'>
            
        

            <div className='info-and-img'>
                <div className='my-info'>
                    <p className='my-name'>Argel Dan Alcantara</p>
                    <p className='my-role'>Junior Web Developer</p>
                    <p className='my-description'>Aspiring web developer who wants to learn and to improve skills in programming languages</p>

                    <div>
                        <button>Hire me</button>
                        <button>Contact me</button>
                    </div>

                    <div className='home-icon'>
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-github"></i>
                        <i className="bi bi-linkedin"></i>
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