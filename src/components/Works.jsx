import React, { useState, useEffect } from 'react';
import Bubbles from './Bubbles';
import planificador from '../../public/PlanificadorFull.mp4';
import servicio from '../../public/ServicioApp.mp4';
import login  from '../../public/LoginBasico.mp4';
import sidebar from '../../public/Sidebar.mp4';
import login2 from '../../public/Login.mp4';
import ZafraUsados from '../../public/ZafraUsados.mp4'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaWordpress } from 'react-icons/fa';
import { SiMysql, SiExpress, SiJavascript, SiTailwindcss, SiVuedotjs, SiVite } from 'react-icons/si';
import { BsThreeDots } from 'react-icons/bs';
import { DiMsqlServer } from 'react-icons/di';

const Works = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  // Proyectos de Zafra S.A.
  const zafraProjects = [
    {
      name: 'Planificador Semanal',
      description: 'Aplicación para la gestión y planificación de servicios externos semanales .',
      longDescription: `Sistema integral desarrollado para Zafra S.A. que permite la gestión eficiente de servicios semanales.
      
      Características principales:
      • Gestión de servicios y recursos
      • Planificación semanal automatizada
      • Interfaz intuitiva para usuarios
      • Reportes y estadísticas en tiempo real
      • Integración con sistemas existentes
      • Repositorio`,
      technologies: ['React', 'Node.js', 'MySQL', 'Vite', 'JavaScript', 'CSS'],
      videoUrl: planificador,
      thumbnailUrl: planificador,
      githubUrl: 'https://github.com/MaxiHerrera97/PlanificadorSemanal',
      
    },
    {
      name: 'Gestor de Servicios',
      description: 'Aplicación para la gestión y planificación de servicios internos.',
      longDescription: `Plataforma completa para la gestión de servicios internos desarrollada para Zafra S.A.
      
      Funcionalidades destacadas:
      • Dashboard interactivo
      • Gestión de usuarios y permisos
      • Seguimiento de servicios en tiempo real
      • Sistema de notificaciones
      • Exportación de datos`,
      technologies: ['React', 'Node.js', 'MySQL', 'SQLServer', 'Vite', 'JavaScript', 'TailwindCSS'],
      videoUrl: servicio,
      thumbnailUrl: servicio,
      githubUrl: 'https://github.com/MaxiHerrera97/ServicioApp',
      
    },
    {
      name: 'Pagina Web - Usados Zafra',
      description: 'Pagina Web desarrollada con WordPress para la venta de maquinaria usada',
      longDescription: `Pagina desarrollada para impulsar las ventas de maquinaria usada de la empresa
      
      Funcionalidades destacadas:
      • Filtro para maquinarias
      • Gestión de usuarios
      • Dashboard Interactivo
      • https://zafrausados.com.ar/`,
      technologies: ['WordPress'],
      videoUrl: ZafraUsados,
      thumbnailUrl: ZafraUsados,
      URL: 'https://zafrausados.com.ar/',
      
    }
  ];

  // Proyectos personales
  const personalProjects = [
    {
      name: 'Login Basico',
      description: 'Descripción breve del primer proyecto personal frontend.',
      longDescription: `Proyecto de autenticación básica desarrollado para practicar conceptos fundamentales de frontend.
      
      Características:
      • Diseño responsive
      • Validación de formularios
      • Animaciones suaves
      • Persistencia de sesión`,
      technologies: ['HTML', 'CSS'],
      videoUrl: login,
      thumbnailUrl: '/images/thumbnails/personal-project1.jpg',
      githubUrl: 'https://github.com/MaxiHerrera97/LoginBasico',
      
    },
    {
      name: 'Login + Register',
      description: 'Descripción breve del segundo proyecto personal frontend.',
      longDescription: `Segunda iteración del proyecto de login con mejoras significativas.
      
      Mejoras implementadas:
      • Interfaz más moderna
      • Mejor experiencia de usuario
      • Validaciones mejoradas
      • Integración con TailwindCSS`,
      technologies: ['HTML', 'TailwindCSS', 'JavaScript'],
      videoUrl: login2,
      thumbnailUrl: '/images/thumbnails/personal-project2.jpg',
      githubUrl: 'https://github.com/MaxiHerrera97/Login-Register',
      
    },
    {
      name: 'Sidebar',
      description: 'Descripción breve del tercer proyecto personal frontend.',
      longDescription: `Componente de navegación lateral desarrollado con React.
      
      Características:
      • Animaciones fluidas
      • Personalización completa
      • Compatibilidad con temas
      • Integración con React Router`,
      technologies: ['React', 'CSS', 'JavaScript'],
      videoUrl: sidebar,
      thumbnailUrl: '/images/thumbnails/personal-project3.jpg',
      githubUrl: 'https://github.com/MaxiHerrera97/Sidebar-ReactVite',
      
    },
    {
      name: 'Proximamente...',
      description: '...',
      longDescription: 'Proyecto en desarrollo...',
      technologies: ['...', '...'],
      videoUrl: '/videos/personal-project4.mp4',
      thumbnailUrl: '/images/thumbnails/personal-project4.jpg',
      githubUrl: '#',
      
    },
  ];

  // Experiencias laborales (para agregar después)
  const workExperiences = [
    
    // Espacio para futuras experiencias
    // {
    //   company: 'BRACONGO SA',
    //   year: '2023',
    //   role: 'Software Engineer Mission',
    //   description: 'Descripción del trabajo...',
    // },
  ];

  const bubbles = [
    { position: 'top-25 left-10', size: 'w-32 h-32', color: 'bg-red-300', animationDelay: 'animation-delay-2000' },
    { position: 'top-40 right-10', size: 'w-40 h-40', color: 'bg-blue-200', animationDelay: 'animation-delay-4000' },
    { position: 'bottom-20 left-20', size: 'w-52 h-52', color: 'bg-yellow-200', animationDelay: 'animation-delay-6000' },
    { position: 'bottom-20 right-32', size: 'w-36 h-36', color: 'bg-pink-200', animationDelay: 'animation-delay-3000' },
    { position: 'top-1/2 left-1/3', size: 'w-28 h-28', color: 'bg-green-200', animationDelay: 'animation-delay-5000' },
    { position: 'top-1/4 right-1/4', size: 'w-24 h-24', color: 'bg-purple-200', animationDelay: 'animation-delay-7000' },
  ];

  // Mapeo de tecnología a ícono
  const techIcons = {
    'React': <FaReact className="text-blue-400" size={20} title="React" />,
    'Node.js': <FaNodeJs className="text-green-600" size={20} title="Node.js" />,
    'MySQL': <SiMysql className="text-blue-700" size={20} title="MySQL" />,
    'SQLServer': <DiMsqlServer className='text-blue-700' size={20} title='SQLServer'/>,
    'Vue.js': <SiVuedotjs className="text-green-500" size={20} title="Vue.js" />,
    'Express': <SiExpress className="text-gray-700" size={20} title="Express" />,
    'HTML': <FaHtml5 className="text-orange-500" size={20} title="HTML" />,
    'CSS': <FaCss3Alt className="text-blue-500" size={20} title="CSS" />,
    'JavaScript': <SiJavascript className="text-yellow-400" size={20} title="JavaScript" />,
    'TailwindCSS': <SiTailwindcss className="text-cyan-400" size={20} title="TailwindCSS" />,
    'Vite': <SiVite className="text-purple-400" size={20} title="Vite" />,
    'WordPress':<FaWordpress className="text-black-400" size={20} title="WordPress"/>,
    '...': <BsThreeDots className="text-gray-400" size={20} title="Otra tecnología" />,
  };

  // Función para manejar errores de carga de imagen
  const handleImageError = (projectId) => {
    console.log(`Error al cargar la imagen para el proyecto ${projectId}`);
    setImageErrors(prev => ({...prev, [projectId]: true}));
  };

  // Función para abrir el modal con el video
  const openVideoModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  // Función para cerrar el modal
  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  // Función para abrir el modal de detalles
  const openDetailsModal = (project) => {
    setSelectedProject(project);
  };

  // Función para cerrar el modal de detalles
  const closeDetailsModal = () => {
    setSelectedProject(null);
  };

  // Componente de tarjeta reutilizable con múltiples estrategias de fallback
  const ProjectCard = ({ project, index }) => {
    const uniqueId = `project-${index}`;
    const shouldUseVideoThumbnail = imageErrors[uniqueId];

    return (
      <div className="relative flex flex-col bg-white/80 dark:bg-gray-900/80 border border-blue-100 rounded-xl shadow-lg min-h-[320px] transition-transform hover:scale-[1.025]">
        {/* Preview ancho completo */}
        <div className="w-full aspect-video rounded-t-xl overflow-hidden cursor-pointer" onClick={() => openVideoModal(project.videoUrl)}>
          {!shouldUseVideoThumbnail ? (
            <img 
              src={project.thumbnailUrl} 
              alt={`${project.name} preview`}
              className="object-cover w-full h-full"
              loading="lazy"
              onError={() => handleImageError(uniqueId)}
            />
          ) : (
            <video 
              className="object-cover w-full h-full"
              src={project.videoUrl}
              muted
              playsInline
              preload="metadata"
            >
              Tu navegador no soporta videos HTML5.
            </video>
          )}
        </div>
        {/* Nombre y descripción */}
        <div className="flex flex-col items-center p-4 pb-2">
          <h4 className="text-base font-semibold text-blue-900 dark:text-blue-300 text-center mb-1">{project.name}</h4>
          <p className="text-xs text-gray-600 dark:text-gray-300 text-center mb-2 line-clamp-2">{project.description}</p>
          {/* Etiquetas de tecnologías */}
          <div className="flex flex-wrap gap-2 mb-3 justify-center">
            {project.technologies.map((tech, i) => (
              <span key={i} className="bg-blue-100 dark:bg-blue-900/60 px-2 py-1 rounded flex items-center justify-center shadow-sm">
                {techIcons[tech] || <BsThreeDots className="text-gray-400" size={20} title={tech} />}
              </span>
            ))}
          </div>
          {/* Barra con acciones */}
          <div className="flex gap-2 mt-auto">
            <button 
              className="bg-blue-200 hover:bg-blue-300 text-blue-900 text-xs font-medium py-1 px-3 rounded-md transition-colors"
              onClick={() => openDetailsModal(project)}
            >
              Ver detalles
            </button>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-200 hover:bg-gray-300 text-gray-900 text-xs font-medium py-1 px-3 rounded-md transition-colors flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              GitHub/URL
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="works" className="relative py-12 px-4 md:px-8 overflow-hidden">
      <Bubbles bubbles={bubbles} />
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Trabajos y Proyectos</h2>
      <div className="max-w-6xl mx-auto">
        {/* 1. Proyectos de Zafra S.A. */}
        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-blue-800 dark:text-blue-300">Proyectos Zafra S.A.</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {zafraProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* 2. Proyectos personales */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-blue-800 dark:text-blue-300">Proyectos Personales</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index + zafraProjects.length} />
            ))}
          </div>
        </div>
      </div>

      {/* Modal de video */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-full"
            >
              Tu navegador no soporta videos HTML5.
            </video>
          </div>
        </div>
      )}

      {/* Modal de detalles */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30 p-4" onClick={closeDetailsModal}>
          <div className="relative w-full max-w-4xl bg-gray-900/95 backdrop-blur-md rounded-lg overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              onClick={closeDetailsModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6">
              {/* Columna izquierda: Video */}
              <div className="relative aspect-video">
                <video
                  className="w-full h-full object-cover rounded-lg"
                  src={selectedProject.videoUrl}
                  controls
                  autoPlay
                >
                  Tu navegador no soporta videos HTML5.
                </video>
              </div>
              
              {/* Columna derecha: Información */}
              <div className="text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{selectedProject.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.technologies.map((tech, i) => (
                    <span key={i} className="bg-blue-600/80 backdrop-blur-sm text-white px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="prose prose-invert max-w-none">
                  <p className="whitespace-pre-line text-sm md:text-base">{selectedProject.longDescription}</p>
                </div>
                <div className="mt-6 flex gap-4">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Ver código
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;