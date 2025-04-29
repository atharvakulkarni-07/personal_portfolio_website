import React, { useEffect, useRef } from 'react';
import { educationData } from '../../data/educationData';
import { Award, Book, MapPin, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      itemsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-[#0a192f]">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="section-heading">Education</h2>

        <div className="mt-12">
          <div className="timeline-container">
            {educationData.map((edu, index) => (
              <div
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className="timeline-item mb-16 transform opacity-0 translate-y-10 transition-all duration-700 ease-in-out"
              >
                <div className="timeline-dot"></div>
                {index < educationData.length - 1 && <div className="timeline-line"></div>}

                <div className="ml-8 bg-white dark:bg-[#112240] rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-[#0a192f] dark:text-[#ccd6f6]">
                      {edu.degree}
                      {edu.grade && (
                        <span className="text-[#64ffda] ml-3 text-lg">{edu.grade}</span>
                      )}
                    </h3>
                    <div className="flex items-center text-[#8892b0]">
                      <Calendar size={16} className="mr-2" />
                      <span className="font-mono text-sm">{edu.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <MapPin size={16} className="text-[#64ffda] mr-2" />
                    <h4 className="text-lg font-medium text-[#0a192f] dark:text-[#a8b2d1]">
                      {edu.institution}, {edu.location}
                    </h4>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {edu.courses && (
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Book size={16} className="text-[#64ffda] mr-2" />
                          <h5 className="text-base font-semibold text-[#0a192f] dark:text-[#ccd6f6]">
                            Key Courses
                          </h5>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, courseIndex) => (
                            <span
                              key={courseIndex}
                              className="text-xs px-2 py-1 bg-gray-100 dark:bg-[#0a192f] rounded-md text-[#0a192f] dark:text-[#8892b0]"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {edu.achievements && (
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Award size={16} className="text-[#64ffda] mr-2" />
                          <h5 className="text-base font-semibold text-[#0a192f] dark:text-[#ccd6f6]">
                            Achievements
                          </h5>
                        </div>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="flex items-center text-sm text-[#0a192f] dark:text-[#8892b0]"
                            >
                              <span className="text-[#64ffda] mr-2">▹</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-white dark:bg-[#112240] rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-[#0a192f] dark:text-[#ccd6f6] mb-4">
            Additional Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Advanced Learning Algorithms",
                platform: "Coursera - Stanford Online",
                date: "Oct 2024",
                credential: "686d76ee0581ddaa780463764ebfd446",
              },
              {
                name: "Supervised Machine Learning",
                platform: "Coursera - Stanford Online",
                date: "May 2024",
                credential: "53X6ARMTM5A6",
              },
              {
                name: "Introduction to SQL",
                platform: "Kaggle",
                date: "Mar 2024",
                credential: "DEF456",
              },
              {
                name: "Problem Solving (Intermediate)",
                platform: "Hackerrank",
                date: "Jul 2024",
                credential: "5fa871b3bc28",
              },
              {
                name: "Matlab Onramp",
                platform: "MATLAB",
                date: "Sep 2024",
                credential: "f97d491f-1d28-4c86-b14a-55cdba7e5503&",
              },
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-[#0a192f] p-4 rounded-md border border-gray-200 dark:border-[#233554]"
              >
                <h4 className="text-lg font-medium text-[#0a192f] dark:text-[#ccd6f6] mb-2">
                  {cert.name}
                </h4>
                <div className="text-sm text-[#8892b0]">
                  <p>{cert.platform}</p>
                  <p>Completed: {cert.date}</p>
                  <p className="font-mono">ID: {cert.credential}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
