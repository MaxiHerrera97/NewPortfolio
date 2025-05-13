import React from 'react';
import Bubbles from './Bubbles';
import { FaHtml5, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiVite, SiMysql, SiExpress, SiSequelize, SiAxios } from 'react-icons/si';

const skills = [
  {
    category: 'FrontEnd',
    items: [
      { name: 'HTML', icon: <FaHtml5 className="text-orange-500" size={40} /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss className="text-cyan-400" size={40} /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" size={40} /> },
      { name: 'React', icon: <FaReact className="text-blue-400" size={40} /> },
      { name: 'Vite', icon: <SiVite className="text-purple-400" size={40} /> },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'NodeJS', icon: <FaNodeJs className="text-green-600" size={40} /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-700" size={40} /> },
      { name: 'Express', icon: <SiExpress className="text-gray-700" size={40} /> },
      { name: 'Sequelize', icon: <SiSequelize className="text-blue-500" size={40} /> },
      { name: 'Axios', icon: <SiAxios className="text-blue-400" size={40} /> },
    ],
  },
  {
    category: 'Otros',
    items: [
      { name: 'Git', icon: <FaGitAlt className="text-orange-600" size={40} /> },
    ],
  },
];

const Skills = () => {
  const bubbles = [
    { position: 'top-30 left-5', size: 'w-60 h-60', color: 'bg-red-300', animationDelay: 'animation-delay-3000' },
    { position: 'top-30 right-10', size: 'w-80 h-80', color: 'bg-yellow-300', animationDelay: 'animation-delay-6000' },
  ];

  return (
    <section id="skills" className="relative py-12 px-4 md:px-8 dark:bg-gray-800 overflow-hidden">
      <Bubbles bubbles={bubbles} />
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Habilidades</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {skills.map((group, idx) => (
          <div key={group.category} className="bg-white/70 dark:bg-gray-900/70 rounded-xl shadow-lg p-4 md:p-6 flex flex-col items-center border border-blue-100">
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-800 dark:text-blue-300">{group.category}</h3>
            <div className="flex flex-col gap-3 md:gap-4 w-full items-center">
              {group.items.map((item, i) => (
                <div key={item.name} className="flex items-center gap-3 md:gap-4 bg-blue-50 dark:bg-gray-800 rounded-lg px-3 md:px-4 py-2 md:py-3 shadow-sm w-full">
                  {item.icon}
                  <span className="font-medium text-gray-800 dark:text-gray-200 text-base md:text-lg">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;