import React from 'react';

const Services = () => {
    const services = [
        { icon: 'fas fa-code', title: 'Custom Software Development', desc: 'Tailor-made software solutions designed to meet your specific business needs and workflow requirements.' },
        { icon: 'fas fa-laptop-code', title: 'Web Application Development', desc: 'Responsive, high-performance web applications built with modern frameworks and technologies.' },
        { icon: 'fas fa-server', title: 'Backend & API Development', desc: 'Robust and scalable backend systems with secure RESTful APIs to power your digital ecosystem.' },
        { icon: 'fas fa-cloud', title: 'Cloud & Microservices', desc: 'Scalable cloud-native architectures and microservices for flexibility and high availability.' },
        { icon: 'fas fa-plug', title: 'System Integration', desc: 'Seamlessly connecting your disparate software systems to improve data flow and operational efficiency.' },
        { icon: 'fas fa-tools', title: 'Maintenance & Support', desc: 'Ongoing technical support and maintenance ensuring your software remains secure and up-to-date.' }
    ];

    return (
        <section id="services" className="section-padding bg-gray">
            <div className="container">
                <h2>Our Services</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <i className={`${service.icon} icon`}></i>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
