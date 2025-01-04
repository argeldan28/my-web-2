import './Skills.css';

function Skills(){

    const skillsData = [
        {   name: "HTML", percentage: 80 },
        {   name: "CSS", percentage: 65 },
        {   name: "Javascript", percentage: 60 },
        {   name: "Java", percentage: 60 },
        {   name: "Spring", percentage: 60 },
        {   name: "Angular", percentage: 50 },
        {   name: "MySQL", percentage: 65 },
        {   name: "React", percentage: 50 },
        {   name: "Node.Js", percentage: 50 }
    ];

    return(
        <section className='skills'>
            <h1>My <span>Skills</span></h1>
            <div className="skills-row">
                <div className="skills-col">
                    <h3 className="title">Coding Skills</h3>

                    <div className="skills-box">
                        <div className="skills-content">

                        {skillsData.map((skill, index) => (

                            <div className="skill-progress" key={index}>
                            <h3>{skill.name} <span>{skill.percentage}</span></h3>
                            <div className="bar">
                                <span style={{ width: `${skill.percentage}%` }}></span></div>
                            </div>

                        ))}
                            

                            {/* <div className="skill-progress">
                                <h3>CSS <span>80%</span></h3>
                                <div className="bar"><span></span></div>
                            </div>

                            <div className="skill-progress">
                                <h3>Javascript <span>65%</span></h3>
                                <div className="bar"><span></span></div>
                            </div>

                            <div className="skill-progress">
                                <h3>Java <span>70%</span></h3>
                                <div className="bar"><span></span></div>
                            </div>

                            <div className="skill-progress">
                                <h3>Spring Boot <span>70%</span></h3>
                                <div className="bar"><span></span></div>
                            </div> */}

                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
};

export default Skills;