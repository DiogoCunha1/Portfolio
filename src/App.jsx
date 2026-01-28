import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CTFPlatforms from './components/CTFPlatforms';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import SectionIndicators from './components/SectionIndicators';
import BackToTop from './components/BackToTop';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <ScrollProgress />
      <SectionIndicators />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <CTFPlatforms />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
