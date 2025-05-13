import React from 'react';
import Bubbles from './Bubbles';
import { FaLinkedin, FaEnvelope, FaDownload, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const bubbles = [
    { position: 'top-18 left-40', size: 'w-26 h-26', color: 'bg-purple-300', animationDelay: 'animation-delay-2000' },
    { position: 'bottom-13 right-50', size: 'w-25 h-25', color: 'bg-pink-300', animationDelay: 'animation-delay-5000' },
  ];

  return (
    <section id="contact" className="relative py-12 px-4 md:px-8 overflow-hidden">
      <Bubbles bubbles={bubbles} />
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Contacto</h2>
      <div className="max-w-4xl mx-auto text-center">
        <p className="mb-6 text-base md:text-lg text-gray-500 dark:text-white">Mis canales de contacto - También puedes dejarme un mensaje por WhatsApp</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <a
            href="https://www.linkedin.com/in/maximiliano-gabriel-herrera-44260524b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg shadow transition-colors text-base md:text-lg"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>
          <a
            href="mailto:maximilianogabriel0511@gmail.com"
            className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg shadow transition-colors text-base md:text-lg"
          >
            <FaEnvelope size={20} /> Email
          </a>
          <a
            href="https://wa.me/5491122334455"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg shadow transition-colors text-base md:text-lg"
          >
            <FaWhatsapp size={20} /> WhatsApp
          </a>
          <a
            href="/CV-HerreraMaximiliano.pdf"
            download
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-4 py-3 rounded-lg shadow transition-colors text-base md:text-lg"
          >
            <FaDownload size={20} /> Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;