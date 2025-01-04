import './About.css';

function About(){
    return(
        <section className="about">
            <h1>About <span>Me</span></h1>
            <div className="my-img">
                <img src="PROFILOCV.png" alt="Profile" className='profile-img'/>
                <span className="circle-spin"></span>
            </div>

            <div className='my-info'>
                <p className=''>
                    I graduated in Electrical Technology, but over time I discovered a 
                    strong passion for programming. This passion led me to attend courses 
                    where I learned various programming languages and gained valuable skills.
                    I am constantly improving myself and staying open to learning new 
                    technologies. I enjoy solving problems, building creative projects, 
                    and I am eager to grow as a developer and contribute to exciting teams 
                    and projects.
                </p>
            
            </div>
        </section>
    )
};

export default About;