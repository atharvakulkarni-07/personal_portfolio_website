import React, { useEffect, useRef } from 'react';
import { achievementsData } from '../../data/achievementsData';
import { Award, Code, Trophy } from 'lucide-react';

const Achievements: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      cardsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case 'award':
        return <Trophy className="text-[#64ffda]" size={24} />;
      case 'code':
        return <Code className="text-[#64ffda]" size={24} />;
      default:
        return <Award className="text-[#64ffda]" size={24} />;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-[#0a192f]">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="section-heading">Achievements</h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((achievement, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="flex p-6 bg-white dark:bg-[#112240] rounded-lg shadow-md hover:shadow-lg transform opacity-0 translate-y-10 transition-all duration-700 ease-in-out"

            >
              <div className="mr-4 mt-1">
                {getIcon(achievement.type)}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0a192f] dark:text-[#ccd6f6] mb-2">
                  {achievement.title}
                </h3>
                <p className="text-[#8892b0]">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
