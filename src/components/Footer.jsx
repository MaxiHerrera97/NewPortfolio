import React, { useEffect, useState } from 'react';
import Bubbles from './Bubbles';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    setIsDark(document.documentElement.classList.contains('dark'));
    return () => observer.disconnect();
  }, []);

  const bubbles = [
    { position: 'bottom-30 left-10', size: 'w-10 h-10', color: 'bg-gray-600', animationDelay: 'animation-delay-4000' },
    { position: 'bottom-20 right-20', size: 'w-80 h-80', color: 'bg-gray-800', animationDelay: 'animation-delay-7000' },
  ];

  return (
    <footer
      className="relative bg-white text-black py-8 md:py-12 overflow-hidden transition-colors duration-300"
      style={isDark ? { backgroundColor: '#1a202c', color: '#fff' } : {}}
    >
      <Bubbles bubbles={bubbles} />
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Anthony Maximiliano</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              FullStack Developer especializado en JavaScript moderno y desarrollo web.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#works" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Proyectos</a></li>
              <li><a href="#skills" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Habilidades</a></li>
              <li><a href="#contact" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contacto</a></li>
            </ul>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="flex justify-center md:justify-end gap-4">
              <a href="https://github.com/MaxiHerrera97" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/maximiliano-gabriel-herrera-44260524b/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:maximilianogabriel0511@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">Copyright © {new Date().getFullYear()} Anthony Maximiliano. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;