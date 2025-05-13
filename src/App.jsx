import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Works from './components/Works';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FaWhatsapp } from 'react-icons/fa';

function App() {
  return (
    <div className='font-["Inter"] h-full bg-background text-foreground relative overflow-hidden'>
      <div className='relative z-10'>
        <Navbar />
        <Header />
        <Works />
        <Skills />
        <Contact />
        <Footer />
      </div>
      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/5493813686226"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-colors"
        style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.15)' }}
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
}

export default App;