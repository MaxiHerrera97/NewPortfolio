import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Bubbles from './Bubbles';
import profileImage from '../../public/PerfilOscuro.png';

const Header = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    setIsDark(document.documentElement.classList.contains('dark'));
    // Precargar la imagen de perfil
    const img = new window.Image();
    img.src = profileImage;
    return () => observer.disconnect();
  }, []);

  const bubbles = [
    { position: 'top-20 left-10', size: 'w-40 h-40', color: 'bg-green-500', animationDelay: 'animation-delay-5000' },
    { position: 'top-20 right-20', size: 'w-72 h-72', color: 'bg-blue-500', animationDelay: 'animation-delay-10000' },
    { position: 'top-40 left-1/4', size: 'w-32 h-32', color: 'bg-purple-500', animationDelay: 'animation-delay-3000' },
    { position: 'top-60 right-1/3', size: 'w-48 h-48', color: 'bg-pink-500', animationDelay: 'animation-delay-7000' },
    { position: 'bottom-20 left-1/2', size: 'w-56 h-56', color: 'bg-yellow-500', animationDelay: 'animation-delay-2000' },
    { position: 'bottom-40 right-10', size: 'w-36 h-36', color: 'bg-red-500', animationDelay: 'animation-delay-8000' },
  ];

  return (
    <div className="relative w-full min-h-screen grid grid-cols-1 md:grid-cols-2 items-start md:items-center justify-between overflow-hidden px-4 md:px-10 pt-20 md:pt-0 gap-4 md:gap-8">
      <Bubbles bubbles={bubbles} />
      <div className="relative z-10 text-center md:text-left flex flex-col gap-1 md:ml-16">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">Anthony Maximiliano</h1>
        <div className="w-full md:w-auto inline-block">
          <motion.h2 
            className="text-xl md:text-2xl mb-0 font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.6 }}
            >
              F
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.7 }}
            >
              u
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.8 }}
            >
              l
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.9 }}
            >
              l
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 1.0 }}
            >
              S
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 1.1 }}
            >
              t
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 1.2 }}
            >
              a
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 1.3 }}
            >
              c
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 1.4 }}
            >
              k
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 1.5 }}
            >
              {" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 1.6 }}
            >
              D
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 1.7 }}
            >
              e
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 1.8 }}
            >
              v
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 1.9 }}
            >
              e
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 2.0 }}
            >
              l
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 2.1 }}
            >
              o
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 2.2 }}
            >
              p
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 2.3 }}
            >
              e
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 2.4 }}
            >
              r
            </motion.span>
          </motion.h2>
        </div>
        <style jsx>{`
          @media (max-width: 768px) {
            .dark-text-mobile {
              color: inherit;
            }
            .dark .dark-text-mobile {
              color: white !important;
            }
          }
          @media (min-width: 768px) {
            .dark .dark-text-desktop {
              color: white !important;
            }
          }
        `}</style>
        <p className="mb-2 text-black dark:text-gray-500 dark-text-mobile dark-text-desktop text-justify text-sm md:text-base">
         🎯Full Stack Developer con enfoque en soluciones modernas, rápidas y escalables.
          Especializado en <span className='font-semibold'>React.js + Vite </span> para interfaces ultra veloces y experiencia de usuario fluida, y en <span className='font-semibold'>Node.js + Express</span> para construir APIs robustas y eficientes.
        </p>
        <p className="text-black dark:text-gray-500 dark-text-mobile dark-text-desktop text-justify text-sm md:text-base">
         🧠 Apasionado por el código limpio, buenas prácticas, patrones de diseño y el rendimiento en cada capa del desarrollo. Experiencia en metodologías ágiles como <span className='font-semibold'>Scrum</span> para trabajo colaborativo y entrega continua, además de conocimientos en <span className='font-semibold'>soporte IT</span> (hardware, software y redes).
        </p>
      </div>
      <div className="relative z-10 flex justify-center md:justify-end -mt-4 md:mt-0">
        <div className="w-96 h-96 md:w-120 md:h-120 flex items-center justify-center">
          <img
            src={profileImage}
            alt="Profile"
            className={`w-full h-full object-contain transition-all duration-300 ${
              isDark 
                ? 'brightness-110 contrast-110' 
                : 'brightness-95 contrast-105'
            }`}
            style={{
              maskImage: 'radial-gradient(ellipse 80% 90% at center, black 0%, black 70%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 90% at center, black 0%, black 70%, transparent 100%)'
            }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;