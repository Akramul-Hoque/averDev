import React from 'react';

const WhyAverdev = () => {
    const features = [
        { icon: 'fas fa-users-cog', title: 'Experienced Engineering Team', desc: 'Our team consists of seasoned developers with a passion for excellence.' },
        { icon: 'fas fa-layer-group', title: 'Clean & Scalable Architecture', desc: 'We build systems that can grow with your business without technical debt.' },
        { icon: 'fas fa-shield-alt', title: 'Security-First Approach', desc: 'Security is integrated into every step of our development lifecycle.' },
        { icon: 'fas fa-comments', title: 'Transparent Communication', desc: 'We keep you informed at every stage of the project with clear updates.' },
        { icon: 'fas fa-clock', title: 'On-Time Delivery', desc: 'We respect deadlines and work efficiently to deliver quality on time.' }
    ];

    return (
        <section id="why-averdev" className="section-padding bg-dark text-light">
            <div className="container">
                <h2 style={{ color: 'white' }}>Why Averdev?</h2>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div className="feature-item" key={index}>
                            <i className={feature.icon}></i>
                            <h4>{feature.title}</h4>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyAverdev;
