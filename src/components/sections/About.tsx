import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    <section id="about" className="py-20 bg-gray-50 dark:bg-[#0a192f]">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 md:px-8 transition-all duration-1000 transform opacity-0 translate-y-10"
      >
        <h2 className="section-heading">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-12 mt-12">
          <div className="md:w-2/3">
            <p className="text-lg text-[#8892b0] dark:text-[#8892b0] mb-4">
              Hello! I'm Atharva, an Aspiring Software Engineering with a passion for MERN Stack Development, AI and Machine Learning. 
              I enjoy creating intelligent applications that solve real-world problems and enhance user experiences.
            </p>
            
            <p className="text-lg text-[#8892b0] dark:text-[#8892b0] mb-4">
              Currently pursuing my B.Tech in Aerospace Engineering at IIT Madras, 
              I've had the opportunity to work on exciting projects in AI research and machine learning.
            </p>
            
            <p className="text-lg text-[#8892b0] dark:text-[#8892b0] mb-8">
              My experience includes developing, fine-tuning and deploying object detection models for real-time applications
              and creating machine learning models for healthcare applications. I'm proficient in a variety of
              programming languages and frameworks, with a particular focus on React, NodeJS, C++ and Python.
            </p>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#0a192f] dark:text-[#ccd6f6]">
                Current Focus Areas:
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                <li className="flex items-center">
                  <span className="text-[#64ffda] mr-2">▹</span>
                  <span>MERN Stack Development</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#64ffda] mr-2">▹</span>
                  <span>Data Structures and Algorithms</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#64ffda] mr-2">▹</span>
                  <span>Machine Learning</span>
                </li>
                <li className="flex items-center">
                  <span className="text-[#64ffda] mr-2">▹</span>
                  <span>Deep Learning - Computer Vision</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="md:w-1/3 flex justify-center">
            <div className="relative group">
              <div className="w-64 h-64 rounded-md overflow-hidden border-2 border-[#64ffda] p-2 hover:p-0 transition-all duration-300">
                <img 
                  src="portfolio_image.jpeg" 
                  alt="Atharva Vijay Kulkarni"
                  className="w-full h-full object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="absolute -z-10 top-5 left-5 w-64 h-64 border-2 border-[#64ffda] rounded-md transition-all duration-300 group-hover:top-3 group-hover:left-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;