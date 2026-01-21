import React from 'react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        alert('Message sent! (Demo)');
    };

    return (
        <section id="contact" className="section-padding bg-gray">
            <div className="container">
                <h2>Get In Touch</h2>
                <div className="contact-container">
                    <div className="contact-info">
                        <h3>Let's Talk</h3>
                        <p>Have a project in mind? We'd love to hear from you.</p>
                        <ul className="info-list">
                            <li>
                                <i className="fas fa-envelope"></i>
                                <span>mail@everdev.com</span>
                            </li>
                            <li>
                                <i className="fas fa-phone"></i>
                                <span>01967749626</span>
                            </li>
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Jomoj road, kuril , dhaka, bangladesh</span>
                            </li>
                        </ul>
                    </div>
                    <div className="contact-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="5" placeholder="How can we help you?" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
