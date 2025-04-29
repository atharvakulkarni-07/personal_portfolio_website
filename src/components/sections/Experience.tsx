import React, { useState, useEffect, useRef } from 'react';
import { experienceData } from '../../data/experienceData';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
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
    <section id="experience" className="py-20">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 md:px-8 transition-all duration-1000 transform opacity-0 translate-y-10"
      >
        <h2 className="section-heading">Where I've Worked</h2>
        
        <div className="mt-12 flex flex-col md:flex-row gap-8">
          {/* Tab buttons */}
          <div className="md:w-1/4">
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible mb-6 md:mb-0">
              {experienceData.map((job, index) => (
                <button
                  key={index}
                  className={`px-4 py-3 text-left font-mono border-b-2 md:border-b-0 md:border-l-2 transition-all ${
                    activeTab === index
                      ? 'border-[#64ffda] text-[#64ffda] bg-[#112240]/20'
                      : 'border-gray-200 dark:border-[#233554] text-[#8892b0]'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {job.company}
                </button>
              ))}
            </div>
          </div>
          
          {/* Tab content */}
          <div className="md:w-3/4 p-4">
            <div className="mb-2">
              <h3 className="text-2xl font-semibold text-[#0a192f] dark:text-[#ccd6f6]">
                {experienceData[activeTab].title}{' '}
                <span className="text-[#64ffda]">@ {experienceData[activeTab].company}</span>
              </h3>
              <p className="font-mono text-sm text-[#8892b0] mb-4">
                {experienceData[activeTab].date}
              </p>
              <p className="italic mb-4 text-[#8892b0]">
                {experienceData[activeTab].location}
              </p>
            </div>
            
            <ul className="space-y-3">
              {experienceData[activeTab].responsibilities.map((item, index) => (
                <li key={index} className="flex">
                  <span className="text-[#64ffda] mr-2 pt-1">▹</span>
                  <span className="text-[#8892b0]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;