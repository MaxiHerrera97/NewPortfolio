import React from 'react';
import Bubbles from './Bubbles';
import { FaHtml5, FaReact, FaNodeJs, FaGitAlt, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiVite, SiMysql, SiExpress, SiSequelize, SiAxios, SiTypescript, SiRedux, SiNextdotjs, SiNestjs, SiDotnet } from 'react-icons/si';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" size={28} /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" size={28} /> },
      { name: 'React', icon: <FaReact className="text-blue-400" size={28} /> },
      { name: 'Vite', icon: <SiVite className="text-purple-400" size={28} /> },
      { name: 'Redux', icon: <SiRedux className="text-purple-600" size={28} /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-gray-800 dark:text-gray-200" size={28} /> },
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" size={28} /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" size={28} /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss className="text-cyan-400" size={28} /> },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600" size={28} /> },
      { name: 'Express', icon: <SiExpress className="text-gray-700" size={28} /> },
      { name: 'Nest.js', icon: <SiNestjs className="text-red-500" size={28} /> },
      { name: 'APIs REST', icon: <SiAxios className="text-blue-400" size={28} /> },
      { name: 'C#', icon: <SiDotnet className="text-purple-600" size={28} /> },
      { name: '.NET Core', icon: <SiDotnet className="text-purple-600" size={28} /> },
      { name: 'ASP.NET', icon: <SiDotnet className="text-blue-600" size={28} /> },
    ],
  },
  {
    category: 'Bases de Datos',
    items: [
      { name: 'MySQL', icon: <SiMysql className="text-blue-700" size={28} /> },
      { name: 'Sequelize', icon: <SiSequelize className="text-blue-500" size={28} /> },
      { name: 'SQL Server', icon: <FaDatabase className="text-blue-600" size={28} /> },
    ],
  },
  {
    category: 'Otros',
    items: [
      { name: 'Git', icon: <FaGitAlt className="text-orange-600" size={28} /> },
    ],
  },
];

const Skills = () => {
  const bubbles = [
    { position: 'top-20 left-8', size: 'w-32 h-32', color: 'bg-red-500', animationDelay: 'animation-delay-3000' },
    { position: 'top-20 right-12', size: 'w-40 h-40', color: 'bg-yellow-500', animationDelay: 'animation-delay-6000' },
    { position: 'top-10 left-1/3', size: 'w-24 h-24', color: 'bg-blue-500', animationDelay: 'animation-delay-2000' },
    { position: 'top-40 right-1/4', size: 'w-28 h-28', color: 'bg-green-500', animationDelay: 'animation-delay-8000' },
    { position: 'bottom-20 left-1/2', size: 'w-20 h-20', color: 'bg-purple-500', animationDelay: 'animation-delay-4000' },
    { position: 'bottom-30 right-1/3', size: 'w-26 h-26', color: 'bg-pink-500', animationDelay: 'animation-delay-7000' },
    { position: 'top-60 left-1/5', size: 'w-18 h-18', color: 'bg-indigo-500', animationDelay: 'animation-delay-1000' },
    { position: 'bottom-10 left-1/4', size: 'w-22 h-22', color: 'bg-orange-500', animationDelay: 'animation-delay-5000' },
    { position: 'top-50 left-1/6', size: 'w-16 h-16', color: 'bg-teal-500', animationDelay: 'animation-delay-9000' },
    { position: 'bottom-40 left-1/8', size: 'w-14 h-14', color: 'bg-cyan-500', animationDelay: 'animation-delay-10000' },
  ];

  // Crear array plano de todas las tecnologías
  const allTechnologies = skills.flatMap(group => group.items);
  
  // Crear 3 copias para efecto infinito sin cortes visibles
  const infiniteTechnologies = [...allTechnologies, ...allTechnologies, ...allTechnologies];

  return (
    <section id="skills" className="relative py-12 px-4 md:px-8 overflow-hidden">
      <Bubbles bubbles={bubbles} />
      <div className="max-w-full mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 title-black">Habilidades</h2>
        <p className="text-center text-dark-gray mb-8 text-sm md:text-base">
          Tecnologías y herramientas que domino para crear soluciones modernas
        </p>
        
        {/* Contenedor del slider */}
        <div className="relative overflow-hidden">
          <div className="flex" style={{
            animation: 'slideTech 50s linear infinite',
            width: 'calc(300% + 60rem)',
            flexWrap: 'nowrap'
          }}>
            {infiniteTechnologies.map((tech, index) => (
              <div 
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 w-24 md:w-28 mx-1"
              >
                <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg p-2 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full flex flex-col items-center justify-center">
                  <div className="text-center">
                    <div className="mb-2 flex justify-center">
                      {tech.icon}
                    </div>
                    <h3 className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                      {tech.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-500 italic">
            💡 Tecnologías que uso para crear experiencias digitales excepcionales
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;