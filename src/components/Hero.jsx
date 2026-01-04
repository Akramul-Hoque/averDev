import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-content">
                <h1>Building Reliable Software Solutions</h1>
                <p>Averdev delivers scalable, secure, and modern digital solutions for growing businesses.</p>
                <div className="hero-buttons">
                    <a href="#services" className="btn btn-primary">Our Services</a>
                    <a href="#contact" className="btn btn-outline">Contact Us</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
