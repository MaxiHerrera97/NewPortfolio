import React, { useState } from 'react';
import Bubbles from './Bubbles';
import login  from '../../public/LoginBasico.mp4';
import sidebar from '../../public/Sidebar.mp4';
import login2 from '../../public/Login.mp4';
import Barberia from '../../public/TuEstiloBarberia.mp4';
import emtel from '../../public/EmtelProyect.mp4'
import NegocioPro from '../../public/NegocioPro.mp4';
import BarberiaThumb from '../../public/thumbnails/TuEstiloBarberia.jpg';
import NegocioProThumb from '../../public/thumbnails/NegocioPro.jpg';
import emtelThumb from '../../public/thumbnails/EmtelProyect.jpg';
import loginThumb from '../../public/thumbnails/LoginBasico.jpg';
import login2Thumb from '../../public/thumbnails/Login.jpg';
import sidebarThumb from '../../public/thumbnails/Sidebar.jpg';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaVial } from 'react-icons/fa';
import { SiMysql, SiExpress, SiJavascript, SiTailwindcss, SiVite, SiJest, SiTestinglibrary } from 'react-icons/si';
import { BsThreeDots } from 'react-icons/bs';

const Works = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  // Proyectos personales
  const personalProjects = [
    {
      name: 'Aplicacion SaaS para Barberias - BarberFlow',
      description: 'Suite de tests con Jest + React Testing Library en el frontend y Jest + Supertest en el backend.',
      longDescription: `Sistema web integral para gestión de turnos en barberías.
      Características principales:
      • Reserva de turnos online con selección de barbero.
      • Configuracion completa de la landing page desde el panel de administración (servicios, precios, horarios, etc)
      • Gestion y seguimiento de finanzas (ingresos por turno, comisiones, etc)
      • Autenticación segura mediante JWT
      • Comunicación cliente–servidor mediante API REST
      • Pantalla de visualización de turnos en tiempo real (modo display)
      • Ranking mensual de barberos según turnos realizados
      • Testing: componentes React cubiertos con Jest + React Testing Library, endpoints de la API cubiertos con Jest + Supertest`,
      technologies: ['React', 'Node.js', 'Express', 'MySQL', 'Vite', 'JavaScript', 'TailwindCSS', 'Jest', 'React Testing Library', 'Supertest'],
      videoUrl: Barberia,
      thumbnailUrl: BarberiaThumb,
      githubUrl: 'https://tuestilobarberia.go.hmgdev.com.ar',

    },
    {
    name: 'Aplicación SaaS para Negocios - Negocio Pro',
    description: 'Sistema web SaaS para gestionar ventas, stock, caja y clientes en comercios minoristas, con tests en frontend y backend.',
    longDescription: `Plataforma web integral para kioscos, despensas, almacenes y minimercados.
    Características principales:
    • Punto de venta (POS) rápido con lector de código de barras.
    • Gestión de inventario con alertas de stock bajo y movimientos de stock.
    • Control de caja diaria (apertura, cierre, ingresos y egresos).
    • Administración de fiados y cuentas corrientes por cliente.
    • Arquitectura multi-tenant con acceso seguro por negocio/sucursal.
    • Testing: componentes React cubiertos con Jest + React Testing Library, endpoints de la API cubiertos con Jest + Supertest`,
    technologies: ['React', 'Node.js', 'Express', 'MySQL', 'Vite', 'JavaScript', 'TailwindCSS', 'Jest', 'React Testing Library', 'Supertest'],
    videoUrl: NegocioPro,
    thumbnailUrl: NegocioProThumb,
    githubUrl: 'https://github.com/MaxiHerrera97/NegocioPro',
    },
    {
    name: 'Programa municipal Emtel',
    description: 'API de backend con tests de endpoints mediante Jest + Supertest.',
    longDescription: `APP desarrollada para el municipio de Tafi Viejo

      Características principales:
      • Autenticación segura mediante JWT con middleware de protección de rutas.
      • Sistema de roles con acceso restringido para administradores.
      • Gestión completa de usuarios.
      • Integración con almacenamiento (Cloudflare R2).
      • Manejo de archivos y documentos con rutas dedicadas.
      • Estructura modular basada en rutas (auth, user, admin, upload, files).
      • Conexión a base de datos MySQL mediante mysql2.
      • Manejo de datos geoespaciales (GeoJSON) para cobertura o zonas.
      • Testing: endpoints de la API cubiertos con Jest + Supertest`,
    technologies: [
      'Node.js',
      'Express',
      'JWT',
      'Cloudflare R2',
      'JavaScript',
      'Jest',
      'Supertest'
    ],
    videoUrl: emtel,
    thumbnailUrl: emtelThumb,
    githubUrl: 'https://conectatafi.com.ar',
  },
    {
      name: 'Login Basico',
      description: '',
      longDescription: `Proyecto de autenticación básica desarrollado para practicar conceptos fundamentales de frontend.

      Características:
      • Diseño responsive
      • Validación de formularios
      • Animaciones suaves
      • Persistencia de sesión`,
      technologies: ['HTML', 'CSS'],
      videoUrl: login,
      thumbnailUrl: loginThumb,
      githubUrl: 'https://github.com/MaxiHerrera97/LoginBasico',

    },
    {
      name: 'Login + Register',
      description: '',
      longDescription: `Segunda iteración del proyecto de login con mejoras significativas.

      Mejoras implementadas:
      • Interfaz más moderna
      • Mejor experiencia de usuario
      • Validaciones mejoradas
      • Integración con TailwindCSS`,
      technologies: ['HTML', 'TailwindCSS', 'JavaScript'],
      videoUrl: login2,
      thumbnailUrl: login2Thumb,
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
      thumbnailUrl: sidebarThumb,
      githubUrl: 'https://github.com/MaxiHerrera97/Sidebar-ReactVite',

    },
  ];

  const bubbles = [
    { position: 'top-25 left-10', size: 'w-32 h-32', color: 'bg-red-500', animationDelay: 'animation-delay-2000' },
    { position: 'top-40 right-10', size: 'w-40 h-40', color: 'bg-blue-400', animationDelay: 'animation-delay-4000' },
    { position: 'bottom-20 left-20', size: 'w-52 h-52', color: 'bg-yellow-500', animationDelay: 'animation-delay-6000' },
    { position: 'bottom-20 right-32', size: 'w-36 h-36', color: 'bg-pink-500', animationDelay: 'animation-delay-3000' },
    { position: 'top-1/2 left-1/3', size: 'w-28 h-28', color: 'bg-green-500', animationDelay: 'animation-delay-5000' },
    { position: 'top-1/4 right-1/4', size: 'w-24 h-24', color: 'bg-purple-500', animationDelay: 'animation-delay-7000' },
    
    { position: 'bottom-10 right-1/2', size: 'w-38 h-38', color: 'bg-orange-500', animationDelay: 'animation-delay-9000' },
    { position: 'top-20 left-1/5', size: 'w-30 h-30', color: 'bg-teal-500', animationDelay: 'animation-delay-4000' },
    { position: 'bottom-40 left-1/4', size: 'w-42 h-42', color: 'bg-rose-500', animationDelay: 'animation-delay-6000' },
  ];

  // Mapeo de tecnología a ícono
  const techIcons = {
    'React': <FaReact className="text-blue-400" size={20} title="React" />,
    'Node.js': <FaNodeJs className="text-green-600" size={20} title="Node.js" />,
    'MySQL': <SiMysql className="text-blue-700" size={20} title="MySQL" />,
    'mysql2': <SiMysql className="text-blue-600" size={20} title="mysql2" />,
    'Express': <SiExpress className="text-gray-700" size={20} title="Express" />,
    'HTML': <FaHtml5 className="text-orange-500" size={20} title="HTML" />,
    'CSS': <FaCss3Alt className="text-blue-500" size={20} title="CSS" />,
    'JavaScript': <SiJavascript className="text-yellow-400" size={20} title="JavaScript" />,
    'TailwindCSS': <SiTailwindcss className="text-cyan-400" size={20} title="TailwindCSS" />,
    'Vite': <SiVite className="text-purple-400" size={20} title="Vite" />,
    'Jest': <SiJest className="text-red-600" size={20} title="Jest" />,
    'React Testing Library': <SiTestinglibrary className="text-red-500" size={20} title="React Testing Library" />,
    'Supertest': <FaVial className="text-purple-500" size={20} title="Supertest" />,
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
              href={project.githubUrl || project.URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-200 hover:bg-gray-300 text-gray-900 text-xs font-medium py-1 px-3 rounded-md transition-colors flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              {project.githubUrl?.includes('github.com') ? 'GitHub' : 'URL'}
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="works" className="relative py-12 px-4 md:px-8 overflow-hidden">
      <Bubbles bubbles={bubbles} />
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 title-black">Proyectos</h2>
      <p className="text-center text-dark-gray mb-8 text-sm md:text-base">
        Proyectos personales full stack, varios con su propia suite de tests
      </p>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
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