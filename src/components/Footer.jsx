import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container footer-content">
                <div className="footer-info">
                    <h3>Averdev</h3>
                    <p>Building the future of software.</p>
                </div>
                <div className="footer-contact">
                    <p><i className="fas fa-envelope"></i> contact@averdev.com</p>
                    <p><i className="fas fa-map-marker-alt"></i> Bangladesh / Global</p>
                </div>
                <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear()} Averdev. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
