import React from 'react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        alert('Message sent! (Demo)');
    };

    return (
        <section id="contact" className="section-padding">
            <div className="container">
                <h2>Get In Touch</h2>
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
        </section>
    );
};

export default Contact;
