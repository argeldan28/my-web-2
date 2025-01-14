import './Education.css';
import { useState } from 'react';
import Modal from './Modal';

function Education() {


    const [isModalOpen, setIsModalOpen] = useState(false);

    const projectImages = {
        cinema: [
            { src: 'cinema1.png', alt: 'Cinema Image 1' },
            { src: 'cinema2.png', alt: 'Cinema Image 2' },
            { src: 'cinema3.png', alt: 'Cinema Image 3' },
            { src: 'cinema4.png', alt: 'Cinema Image 4' },
        ],
        pokedex: [
            { src: 'pokedex1.png', alt: 'Pokedex Image 1' },
            { src: 'pokedex2.png', alt: 'Pokedex Image 2' },
            { src: 'pokedex3.png', alt: 'Pokedex Image 3' },
        ],
        marvel: [{ src: 'marvel1.png', alt: 'Marvel Image 1'}]
    };

    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (projectKey) => {
        setSelectedProject(projectKey);
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

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
                                <p> 
                                    Developed and managed dynamic, interactive web pages. Gained 
                                    skills in HTML, CSS, andJavaScript for frontenddevelopment, 
                                    with server-side programming using Node.js and Prisma.js ORM 
                                    for efficient databasemanagement.
                                </p>
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
                                <p>
                                    500-hour course for Junior Java Developer. Provideda solid 
                                    foundation in object-oriented programming and Javalanguage, as 
                                    well as core frontend programming languages (HTML, CSS, 
                                    JavaScript).
                                </p>
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
                                <p>
                                    Acquired foundational knowledge in electrical systems, circuits, and technology. 
                                    Developed practical skills in troubleshooting, maintenance, and installation of electrical equipment.
                                    Learned to work with various electrical components and systems, ensuring safety and compliance with industry standards.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="education-col">
                    <h3 className="title">Projects</h3>

                    <div className="education-box">

                    <div className="education-content">
                        <button onClick={() => openModal('cinema')}>
                            <div className="content">
                                <div className="year">
                                    <i className="bi bi-calendar3"></i>
                                    August 2024
                                </div>
                                <h3>Cinema Website</h3>
                                <p>
                                    Created a cinema website where users can browse movies, view showtimes, and book tickets. 
                                    Used Angular for the front-end to build a responsive and user-friendly interface, and Java Spring for the back-end to handle the server-side logic. 
                                    Integrated an API to show real-time movie data and ensure a smooth user experience.
                                </p>
                            </div>
                        </button>
                    </div>

                    <div className="education-content">
                        <button onClick={() => openModal('pokedex')}>
                            <div className="content">
                                <div className="year">
                                    <i className="bi bi-calendar3"></i>
                                    September 2024
                                </div>
                                <h3>Pokedex</h3>
                                <p>
                                    Created a fully interactive Pokedex application that allows users to search and filter Pokémon by various attributes. 
                                    Implemented using HTML, CSS, JavaScript, and integrated data from the official Pokémon API. The project helped enhance skills in working with APIs and dynamic content rendering.
                                </p>
                            </div>
                        </button>
                    </div>

                    <div className="education-content">
                        <button onClick={() => openModal('marvel')}>
                            <div className="content">
                                <div className="year">
                                    <i className="bi bi-calendar3"></i>
                                    January 2025
                                </div>
                                <h3>Marvel Heroes</h3>
                                <p>
                                    I developed a simple website using the Marvel API that allows users to search for their favorite heroes. 
                                    The app provides details about the heroes and image, ensuring an interactive and engaging experience for Marvel fans.
                                </p>
                            </div>
                        </button>
                    </div>

                    <Modal 
                        images={selectedProject ? projectImages[selectedProject] : []} 
                        isOpen={isModalOpen} 
                        closeModal={closeModal} 
                    />

                        
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Education