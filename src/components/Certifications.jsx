import React from 'react';
import Bubbles from './Bubbles';
import { FaCertificate, FaShieldAlt, FaCode } from 'react-icons/fa';

const certifications = [
  {
    id: 1,
    title: 'Full Stack Developer',
    year: '2023',
    image: '/FullStackDeveloper.png',
    icon: <FaCode className="text-blue-500" size={24} />,
    description: 'Certificación completa en desarrollo Full Stack con tecnologías modernas'
  },
  {
    id: 2,
    title: 'Responsive Web Design',
    year: '2024',
    image: '/ResponsiveWebDesign.png',
    icon: <FaCertificate className="text-green-500" size={24} />,
    description: 'Especialización en diseño web responsivo y experiencia de usuario'
  },
  {
    id: 3,
    title: 'Ciberseguridad',
    year: '2025',
    image: '/CiberSeguridad.png',
    icon: <FaShieldAlt className="text-red-500" size={24} />,
    description: 'Certificación en seguridad informática y protección de datos',
    badge: '/Insignia.png'
  }
];

const Certifications = () => {
  const bubbles = [
    { position: 'top-20 left-8', size: 'w-48 h-48', color: 'bg-purple-500', animationDelay: 'animation-delay-2000' },
    { position: 'top-20 right-12', size: 'w-64 h-64', color: 'bg-indigo-500', animationDelay: 'animation-delay-7000' },
  ];

  // Crear múltiples copias para efecto infinito perfecto
  const infiniteCertifications = [...certifications, ...certifications, ...certifications];

  return (
    <section id="certifications" className="relative py-12 px-4 md:px-8 overflow-hidden">
      <Bubbles bubbles={bubbles} />
      <div className="max-w-full mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-primary">
          Certificaciones
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8 text-sm md:text-base">
          Credenciales profesionales que respaldan mi experiencia y conocimiento técnico
        </p>
        
        {/* Contenedor del slider */}
        <div className="relative overflow-hidden">
          <div className="flex animate-slide-infinite">
            {infiniteCertifications.map((cert, index) => (
              <div 
                key={`${cert.id}-${index}`}
                className="flex-shrink-0 w-80 md:w-96 mx-4"
              >
                <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    {cert.icon}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        {cert.title}
                      </h3>
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                  
                  <div className="relative mb-4">
                    <img
                      src={cert.image}
                      alt={`Certificación ${cert.title}`}
                      className="w-full h-48 object-cover rounded-lg shadow-md"
                      loading="lazy"
                    />
                    {cert.badge && (
                      <img
                        src={cert.badge}
                        alt="Insignia"
                        className="absolute -top-2 -right-2 w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 shadow-lg"
                        loading="lazy"
                      />
                    )}
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-500 italic">
            💡 Estas certificaciones reflejan mi compromiso con el aprendizaje continuo y la excelencia profesional
          </p>
        </div>
      </div>

      {/* Estilos CSS para la animación */}
      <style jsx>{`
        @keyframes slide-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-slide-infinite {
          animation: slide-infinite 30s linear infinite;
          width: calc(300% + 4rem);
        }
        
        .animate-slide-infinite:hover {
          animation-play-state: paused;
        }
        
        @media (max-width: 768px) {
          .animate-slide-infinite {
            animation-duration: 25s;
          }
        }
      `}</style>
    </section>
  );
};

export default Certifications;
