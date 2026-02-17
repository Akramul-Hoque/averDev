import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container footer-grid">
                <div className="footer-col brand-col">
                    <h3>Averdev</h3>
                    <p>Empowering businesses with scalable, secure, and modern software solutions. Your vision, our code.</p>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                        <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#">Web Development</a></li>
                        <li><a href="#">Mobile Apps</a></li>
                        <li><a href="#">Cloud Solutions</a></li>
                        <li><a href="#">UI/UX Design</a></li>
                    </ul>
                </div>

                <div className="footer-col contact-col">
                    <h4>Contact Us</h4>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Jomoj road, kuril , dhaka, bangladesh</span>
                        </li>
                        <li>
                            <i className="fas fa-envelope"></i>
                            <span>mail@everdev.com</span>
                        </li>
                        <li>
                            <i className="fas fa-phone"></i>
                            <span>01967749626</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container footer-bottom">
                <p>&copy; {new Date().getFullYear()} Averdev. All rights reserved.</p>
                <div className="footer-bottom-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
