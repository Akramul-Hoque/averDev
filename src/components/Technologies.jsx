import React from 'react';

const Technologies = () => {
    const techs = [
        { icon: 'fab fa-java', name: 'Java / Spring Boot' },
        { icon: 'fab fa-node-js', name: 'Node.js' },
        { icon: 'fab fa-react', name: 'React' },
        { icon: 'fas fa-network-wired', name: 'REST APIs' },
        { icon: 'fas fa-database', name: 'MySQL / PostgreSQL' },
        { icon: 'fas fa-stream', name: 'Redis / Kafka' },
        { icon: 'fab fa-docker', name: 'Docker / Cloud' }
    ];

    return (
        <section id="technologies" className="section-padding">
            <div className="container">
                <h2>Technologies We Use</h2>
                <div className="tech-grid">
                    {techs.map((tech, index) => (
                        <div className="tech-item" key={index}>
                            <i className={tech.icon}></i>
                            <span>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
