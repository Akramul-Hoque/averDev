import React from 'react';

const About = () => {
    return (
        <section id="about" className="section-padding">
            <div className="container">
                <h2>About Us</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p className="lead">Averdev is a technology-driven software company focused on building high-quality, scalable, and maintainable applications for businesses worldwide.</p>
                        <ul className="about-list">
                            <li><i className="fas fa-check-circle"></i> Client-focused development</li>
                            <li><i className="fas fa-check-circle"></i> Clean architecture & best practices</li>
                            <li><i className="fas fa-check-circle"></i> Long-term support and growth</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
