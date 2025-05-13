import React, { useEffect, useState } from 'react';
import Bubbles from './Bubbles';
import profileBlack from '../assets/ProfileBlack.png';
import profileWhite from '../assets/ProfileWhite.png';

const Header = () => {
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
    { position: 'top-20 left-10', size: 'w-40 h-40', color: 'bg-green-300', animationDelay: 'animation-delay-5000' },
    { position: 'top-20 right-20', size: 'w-72 h-72', color: 'bg-blue-300', animationDelay: 'animation-delay-10000' },
  ];

  return (
    <div className="relative w-full min-h-screen grid grid-cols-1 md:grid-cols-2 items-center justify-between overflow-hidden px-4 md:px-10 py-8 md:py-0">
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
        <p className=" mb-2 text-black dark:text-gray-500 dark-text-mobile dark-text-desktop text-justify text-sm md:text-base">
          FullStack Developer especializado en JavaScript moderno, con expertise en <span className='font-semibold'>React.js + Vite</span> para interfaces ultra-rápidas y <span className='font-semibold'>Node.js</span> para APIs escalables. Arquitecto de soluciones full-stack con:
        </p>
        <ul className="list-disc list-inside text-black dark:text-gray-500 dark-text-mobile dark-text-desktop mb-2 pl-5 text-left md:text-justify text-sm md:text-base">
          <li className="text-left"><span className="font-medium">Frontend:</span>HTML,JavaScript, React, Vite, TailwindCSS <span className="italic">(diseños responsive y UI/UX optimizadas)</span></li>
          <li className="text-left"><span className="font-medium">Backend:</span> Node.js, Express, Axios, RESTful APIs</li>
          <li className="text-left"><span className="font-medium">Bases de datos:</span> MySQL</li>
        </ul>
        <p className="italic text-black dark:text-gray-500 dark-text-mobile dark-text-desktop text-justify text-sm md:text-base">
          Comprometido con código limpio, patrones de diseño y alto rendimiento.
        </p>
      </div>
      <div className="relative z-10 flex justify-center md:justify-end mt-8 md:mt-0">
        <div className="w-80 h-80 md:w-100 md:h-100 flex items-center justify-center">
          <img
            src={isDark ? profileBlack : profileWhite}
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;