import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Technologies from './components/Technologies';
import WhyAverdev from './components/WhyAverdev';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Technologies />
      <WhyAverdev />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
