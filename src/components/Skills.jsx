import './Skills.css';

function Skills(){

    const skillsData = [
        {   name: "HTML", percentage: 80, imgUrl: "https://img.icons8.com/color/48/html-5--v1.png" },
        {   name: "CSS", percentage: 65, imgUrl:"https://img.icons8.com/color/48/css3.png" },
        {   name: "Javascript", percentage: 60, imgUrl: "https://img.icons8.com/fluency/48/javascript.png" },
        {   name: "Java", percentage: 60, imgUrl: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" },
        {   name: "Spring", percentage: 60, imgUrl: "https://img.icons8.com/color/48/spring-logo.png" },
        {   name: "Angular", percentage: 50, imgUrl: "https://img.icons8.com/color/48/angularjs.png"},
        {   name: "MySQL", percentage: 65, imgUrl:"https://img.icons8.com/fluency/48/mysql-logo.png" },
        {   name: "React", percentage: 50, imgUrl: "https://img.icons8.com/color/48/react-native.png" },
        {   name: "Node.Js", percentage: 50, imgUrl: "https://img.icons8.com/color/48/nodejs.png" }
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
                            
                                <div className='skill-detail'>
                                    <div className='skill-name-img'>
                                        <h3>{skill.name} </h3>
                                        <img src={skill.imgUrl}></img>
                                        
                                    </div>

                                    <h3><span>{skill.percentage}</span></h3>
                                </div>
                                

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