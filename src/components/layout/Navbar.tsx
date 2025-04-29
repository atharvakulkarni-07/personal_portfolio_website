import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-white/90 dark:bg-[#0a192f]/90 backdrop-blur-md shadow-md'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-[#0a192f] dark:text-[#64ffda]">
          AK
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a 
            href="https://drive.google.com/drive/folders/1PA-qyYNm6McZPTnOPg1n2rjjyCcwXCmv?usp=sharing" // to be updated with the actual resume link
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#0a192f] dark:text-[#ccd6f6]"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed top-0 right-0 h-screen w-full md:w-80 bg-white dark:bg-[#112240] z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
          <a href="#about" className="nav-link text-xl" onClick={toggleMenu}>About</a>
          <a href="#experience" className="nav-link text-xl" onClick={toggleMenu}>Experience</a>
          <a href="#skills" className="nav-link text-xl" onClick={toggleMenu}>Skills</a>
          <a href="#projects" className="nav-link text-xl" onClick={toggleMenu}>Projects</a>
          <a href="#education" className="nav-link text-xl" onClick={toggleMenu}>Education</a>
          <a href="#contact" className="nav-link text-xl" onClick={toggleMenu}>Contact</a>
          <a 
            href="https://drive.google.com/drive/folders/1PA-qyYNm6McZPTnOPg1n2rjjyCcwXCmv?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline text-xl"
            onClick={toggleMenu}
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;