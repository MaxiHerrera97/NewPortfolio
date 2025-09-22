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
    { position: 'top-40 left-1/4', size: 'w-36 h-36', color: 'bg-blue-500', animationDelay: 'animation-delay-4000' },
    { position: 'top-60 right-1/3', size: 'w-42 h-42', color: 'bg-green-500', animationDelay: 'animation-delay-1000' },
    { position: 'bottom-20 left-1/2', size: 'w-38 h-38', color: 'bg-pink-500', animationDelay: 'animation-delay-6000' },
    { position: 'bottom-40 right-1/4', size: 'w-44 h-44', color: 'bg-yellow-500', animationDelay: 'animation-delay-3000' },
    { position: 'top-10 left-1/5', size: 'w-32 h-32', color: 'bg-red-500', animationDelay: 'animation-delay-8000' },
    { position: 'bottom-10 left-1/3', size: 'w-40 h-40', color: 'bg-orange-500', animationDelay: 'animation-delay-5000' },
    { position: 'top-80 right-1/5', size: 'w-34 h-34', color: 'bg-teal-500', animationDelay: 'animation-delay-2000' },
  ];

  return (
    <section id="certifications" className="relative py-12 px-4 md:px-8 overflow-hidden">
      <Bubbles bubbles={bubbles} />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 title-black">
          Certificaciones
        </h2>
        <p className="text-center text-dark-gray mb-8 text-sm md:text-base">
          Credenciales profesionales que respaldan mi experiencia y conocimiento técnico
        </p>
        
        {/* Grid de certificaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full"
            >
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
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-500 italic">
            💡 Estas certificaciones reflejan mi compromiso con el aprendizaje continuo y la excelencia profesional
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
