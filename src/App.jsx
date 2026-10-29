import { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Process from './components/Process';
import Skills from './components/Skills';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/ui/FloatingWhatsAppButton';

export default function App() {
  const { theme, toggle } = useTheme();
  // State so Services can pre-fill the Contact form's project type
  const [contactProjectType, setContactProjectType] = useState('');

  return (
    <>
      <a
        href="#main-content"
        style={{
          position: 'fixed', top: -9999, left: -9999,
          padding: '12px 20px',
          background: 'var(--accent)',
          color: '#fff',
          fontWeight: 600,
          borderRadius: 8,
          zIndex: 999,
          transition: 'top .15s, left .15s',
        }}
        onFocus={e => { e.currentTarget.style.top = '16px'; e.currentTarget.style.left = '16px'; }}
        onBlur={e => { e.currentTarget.style.top = '-9999px'; e.currentTarget.style.left = '-9999px'; }}
      >
        Skip to main content
      </a>

      <Navbar theme={theme} onToggleTheme={toggle} />

      <main id="main-content">
        <Hero />
        <Projects />
        <Services onServiceRequest={setContactProjectType} />
        <Process />
        <Skills />
        <About />
        <Testimonials />
        <Contact initialProjectType={contactProjectType} />
      </main>

      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
