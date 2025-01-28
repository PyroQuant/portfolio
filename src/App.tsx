import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { Skills } from './components/Skills';
import { AboutSection } from './components/about/AboutSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/footer/Footer';
import './i18n/config';

function App() {
  return (
    <div className="bg-dark text-white">
      <Navigation />
      <Hero />
      <ProjectsSection />
      <Skills />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;