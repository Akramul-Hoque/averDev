import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Sticky Header Logic
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Active Section Logic
    useEffect(() => {
        const handleScrollSpy = () => {
            const sections = document.querySelectorAll('section');
            const scrollPos = window.scrollY + 100; // Offset

            sections.forEach(section => {
                const id = section.getAttribute('id');
                const top = section.offsetTop;
                const height = section.offsetHeight;

                if (scrollPos >= top && scrollPos < top + height) {
                    setActiveSection(id);
                }
            });
        };

        window.addEventListener('scroll', handleScrollSpy);
        return () => window.removeEventListener('scroll', handleScrollSpy);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={isScrolled ? 'scrolled' : ''}>
            <div className="container">
                <a href="#home" className="logo" onClick={closeMenu}>Aver<span>dev</span>.</a>

                <nav>
                    <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        <li className="nav-item">
                            <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={closeMenu}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={closeMenu}>About Us</a>
                        </li>
                        <li className="nav-item">
                            <a href="#services" className={`nav-link ${activeSection === 'services' ? 'active' : ''}`} onClick={closeMenu}>Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="#technologies" className={`nav-link ${activeSection === 'technologies' ? 'active' : ''}`} onClick={closeMenu}>Technologies</a>
                        </li>
                        <li className="nav-item">
                            <a href="#why-averdev" className={`nav-link ${activeSection === 'why-averdev' ? 'active' : ''}`} onClick={closeMenu}>Why Averdev</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={closeMenu}>Contact</a>
                        </li>
                    </ul>
                    <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
