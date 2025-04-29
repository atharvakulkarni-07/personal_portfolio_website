import React from 'react';
import { Github, Linkedin, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-[#112240] py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-[#0a192f] dark:text-[#ccd6f6]">
              © {new Date().getFullYear()} Atharva Vijay Kulkarni. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/atharvakulkarni-07" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#0a192f] dark:text-[#ccd6f6] hover:text-[#64ffda] dark:hover:text-[#64ffda]"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/atharva-kulkarni-3b13a3255/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#0a192f] dark:text-[#ccd6f6] hover:text-[#64ffda] dark:hover:text-[#64ffda]"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://leetcode.com/u/user3482Vs/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#0a192f] dark:text-[#ccd6f6] hover:text-[#64ffda] dark:hover:text-[#64ffda]"
              aria-label="LeetCode"
            >
              <Code size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-[#8892b0] dark:text-[#8892b0]">
          <p>Designed & Built with React.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;