import React, { useEffect, useState } from 'react';
import Bubbles from './Bubbles';
import profileBlack from '../../public/ProfileBlack.webp';
import profileWhite from '../../public/ProfileWhite.webp';

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    setIsDark(document.documentElement.classList.contains('dark'));
    // Precargar ambas imágenes WebP
    const img1 = new window.Image();
    img1.src = profileBlack;
    const img2 = new window.Image();
    img2.src = profileWhite;
    return () => observer.disconnect();
  }, []);

  const bubbles = [
    { position: 'top-20 left-10', size: 'w-40 h-40', color: 'bg-green-500', animationDelay: 'animation-delay-5000' },
    { position: 'top-20 right-20', size: 'w-72 h-72', color: 'bg-blue-500', animationDelay: 'animation-delay-10000' },
  ];

  return (
    <div className="relative w-full min-h-screen grid grid-cols-1 md:grid-cols-2 items-start md:items-center justify-between overflow-hidden px-4 md:px-10 pt-20 md:pt-0 gap-0">
      <Bubbles bubbles={bubbles} />
      <div className="relative z-10 text-center md:text-left flex flex-col gap-1 md:ml-25">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">Anthony Maximiliano</h1>
        <div className="w-full md:w-auto inline-block">
          <h2 className="text-xl md:text-2xl mb-0 font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 bg-clip-text text-transparent typewriter">
            FullStack Developer
          </h2>
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
        <div className="w-80 h-80 md:w-100 md:h-100 flex items-center justify-center">
          <img
            src={isDark ? profileBlack : profileWhite}
            alt="Profile"
            className="w-full h-full rounded-full object-cover transition-opacity duration-300"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;