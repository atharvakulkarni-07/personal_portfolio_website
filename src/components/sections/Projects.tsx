import React, { useState, useEffect, useRef } from 'react';
import { Github as GitHub, ExternalLink } from 'lucide-react';
import { projectsData } from '../../data/projectsData';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="projects" className="py-20">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 md:px-8 transition-all duration-1000 transform opacity-0 translate-y-10"
      >
        <h2 className="section-heading">Featured Projects</h2>
        
        <div className="flex justify-center mb-8 mt-8">
          <div className="flex space-x-2 bg-gray-100 dark:bg-[#112240] p-1 rounded-lg">
            <button
              className={`px-4 py-2 rounded-md transition-all ${
                filter === 'all'
                  ? 'bg-white dark:bg-[#0a192f] shadow-md'
                  : 'text-[#8892b0] hover:text-[#64ffda]'
              }`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-all ${
                filter === 'web'
                  ? 'bg-white dark:bg-[#0a192f] shadow-md'
                  : 'text-[#8892b0] hover:text-[#64ffda]'
              }`}
              onClick={() => setFilter('web')}
            >
              Web Dev
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-all ${
                filter === 'ml'
                  ? 'bg-white dark:bg-[#0a192f] shadow-md'
                  : 'text-[#8892b0] hover:text-[#64ffda]'
              }`}
              onClick={() => setFilter('ml')}
            >
              ML/AI
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-all ${
                filter === 'ml'
                  ? 'bg-white dark:bg-[#0a192f] shadow-md'
                  : 'text-[#8892b0] hover:text-[#64ffda]'
              }`}
              onClick={() => setFilter('Data Structures')}
            >
              Data Structures
            </button>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="project-card overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#0a192f] dark:text-[#ccd6f6]">{project.title}</h3>
                <p className="text-[#8892b0] mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-[#0a192f] rounded-md font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0a192f] dark:text-[#ccd6f6] hover:text-[#64ffda] dark:hover:text-[#64ffda] transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <GitHub size={20} />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0a192f] dark:text-[#ccd6f6] hover:text-[#64ffda] dark:hover:text-[#64ffda] transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;