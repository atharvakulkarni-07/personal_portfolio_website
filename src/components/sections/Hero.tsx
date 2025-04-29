import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const rotatingTexts = [
  "I build Amazing Experiences",
  "I build Websites",
  "I love solving complex problems",
  "Exploring the world through Computer Vision",
];

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const currentText = rotatingTexts[index];
    let typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1200); // Pause before deleting
        }
      } else {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % rotatingTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <section className="h-screen flex items-center" id="hero">
      <div className="container mx-auto px-4 md:px-8">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-[#64ffda] font-mono mb-4">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-[#0a192f] dark:text-[#ccd6f6] mb-4">
            Atharva Vijay Kulkarni.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-[#8892b0] dark:text-[#8892b0] mb-6">
            <span>{displayText}</span>
            <span className="animate-blink">|</span>
          </h2>
          <p className="text-lg md:text-xl text-[#8892b0] dark:text-[#8892b0] max-w-xl mb-8">
            I'm an Aspiring Software Engineer experienced in MERN Stack Web Development, AI and Machine Learning. 
            Currently focused on building intelligent applications that solve real-world problems.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="btn-primary flex items-center gap-2 group"
            >
              View My Work
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="btn-outline"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
