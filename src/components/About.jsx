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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur nesciunt quo odio est eos repellat cum nulla quasi vitae similique.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur nesciunt quo odio est eos repellat cum nulla quasi vitae similique.
            </div>
        </section>
    )
};

export default About;