import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import Bubbles from './Bubbles';

const Navbar = () => {
  const [theme, setTheme] = useState('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [theme]);

  // Scroll suave compensando la altura del navbar
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const yOffset = -80;
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMenuOpen(false); // Cerrar menú al hacer click
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-lg rounded-b-2xl transition-colors duration-300">
        <section className="max-w-5xl px-4 md:px-6 mx-auto flex items-center h-16 md:h-20">
          <h1 className="text-xl md:text-2xl font-extrabold text-blue-600 tracking-tight drop-shadow-sm select-none">HMG</h1>
          <div className="flex-1"></div>
          {/* Botón hamburguesa solo en móvil */}
          {!isMenuOpen && (
            <button
              className="md:hidden p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Menú"
            >
              <FaBars size={24} />
            </button>
          )}
          {/* Menú normal en escritorio */}
          <nav className="hidden md:flex md:flex-row md:items-center md:justify-end md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none">
            <ul className="flex flex-row items-center gap-4 p-0 w-auto">
              <li><a href="#works" onClick={e => handleNavClick(e, 'works')} className="block px-3 py-2 md:py-1 rounded-lg font-medium transition-colors hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-700 dark:hover:text-blue-300">Works</a></li>
              <li><a href="#skills" onClick={e => handleNavClick(e, 'skills')} className="block px-3 py-2 md:py-1 rounded-lg font-medium transition-colors hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-700 dark:hover:text-blue-300">Skills</a></li>
              <li><a href="#contact" onClick={e => handleNavClick(e, 'contact')} className="block px-3 py-2 md:py-1 rounded-lg font-medium transition-colors hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-700 dark:hover:text-blue-300">Contact</a></li>
            </ul>
          </nav>
          {/* Botón de tema (oculto en móvil cuando el menú está abierto) */}
          <button
            className={`ml-4 md:ml-6 p-2 rounded-full bg-blue-100 dark:bg-gray-800 hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors text-blue-700 dark:text-yellow-300 shadow ${isMenuOpen ? 'hidden' : ''}`}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Cambiar tema"
          >
            {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </section>
      </header>
      {/* Overlay de menú hamburguesa */}
      {isMenuOpen && (
        <nav className="fixed inset-0 z-[99999] bg-white dark:bg-gray-900 flex flex-col">
          <button
            className="absolute top-6 right-6 p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Cerrar menú"
          >
            <FaTimes size={32} />
          </button>
          <ul className="flex flex-1 flex-col justify-center items-center gap-8 text-2xl font-semibold">
            <li><a href="#works" onClick={e => {handleNavClick(e, 'works'); setIsMenuOpen(false);}} className="px-6 py-3 rounded-lg transition-colors hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-700 dark:hover:text-blue-300">Works</a></li>
            <li><a href="#skills" onClick={e => {handleNavClick(e, 'skills'); setIsMenuOpen(false);}} className="px-6 py-3 rounded-lg transition-colors hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-700 dark:hover:text-blue-300">Skills</a></li>
            <li><a href="#contact" onClick={e => {handleNavClick(e, 'contact'); setIsMenuOpen(false);}} className="px-6 py-3 rounded-lg transition-colors hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-700 dark:hover:text-blue-300">Contact</a></li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;