import React, { useEffect, useRef } from 'react';
import { skillsData } from '../../data/skillsData';

const SkillCategory: React.FC<{ title: string; skills: { name: string; level: number }[] }> = ({ 
  title, 
  skills 
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-[#0a192f] dark:text-[#ccd6f6]">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-[#8892b0]">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ width: `${skill.level}%`, transition: `width 1.5s ease-in-out ${index * 0.1}s` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          
          // Trigger skill bar animations
          const skillBars = entry.target.querySelectorAll('.skill-progress');
          skillBars.forEach(bar => {
            bar.classList.add('animated');
          });
          
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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-[#0a192f]">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 md:px-8 transition-all duration-1000 transform opacity-0 translate-y-10"
      >
        <h2 className="section-heading">Skills & Expertise</h2>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <SkillCategory title="Programming Languages" skills={skillsData.languages} />
            <SkillCategory title="Frameworks & Libraries" skills={skillsData.frameworks} />
          </div>
          <div>
            <SkillCategory title="Tools & Technologies" skills={skillsData.tools} />
            <SkillCategory title="Data Science & ML" skills={skillsData.dataScience} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;