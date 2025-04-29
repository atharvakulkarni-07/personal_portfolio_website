import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
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
    <section id="contact" className="py-20 bg-gray-50 dark:bg-[#0a192f]">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 md:px-8 transition-all duration-1000 transform opacity-0 translate-y-10"
      >
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-[#8892b0] mb-8">
              I'm currently looking for internship opportunities in software development, AI, and machine learning. 
              If you have any questions or just want to say hi, feel free to reach out!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white dark:bg-[#112240] p-3 rounded-full mr-4">
                  <Mail className="text-[#64ffda]" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-[#0a192f] dark:text-[#ccd6f6]">Email</h3>
                  <p className="text-[#8892b0]">atharvakukarni.official@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white dark:bg-[#112240] p-3 rounded-full mr-4">
                  <Phone className="text-[#64ffda]" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-[#0a192f] dark:text-[#ccd6f6]">Phone</h3>
                  <p className="text-[#8892b0]">+91-8459042099</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white dark:bg-[#112240] p-3 rounded-full mr-4">
                  <MapPin className="text-[#64ffda]" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-[#0a192f] dark:text-[#ccd6f6]">Location</h3>
                  <p className="text-[#8892b0]">Jalna, Maharashtra - 431203</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-medium text-[#0a192f] dark:text-[#ccd6f6] mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/atharvakulkarni-07" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-[#112240] p-3 rounded-full text-[#0a192f] dark:text-[#ccd6f6] hover:text-[#64ffda] dark:hover:text-[#64ffda] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/atharva-kulkarni-3b13a3255/https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-[#112240] p-3 rounded-full text-[#0a192f] dark:text-[#ccd6f6] hover:text-[#64ffda] dark:hover:text-[#64ffda] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a 
                  href="https://leetcode.com/u/user3482Vs/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-[#112240] p-3 rounded-full text-[#0a192f] dark:text-[#ccd6f6] hover:text-[#64ffda] dark:hover:text-[#64ffda] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 18l4-4-4-4"></path>
                    <path d="M8 6l-4 4 4 4"></path>
                    <path d="M16 6l-8 12"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white dark:bg-[#112240] p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6 text-[#0a192f] dark:text-[#ccd6f6]">Send Me a Message</h3>
              
              {submitSuccess ? (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md p-4 text-green-800 dark:text-green-400">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-[#8892b0] mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-[#8892b0] mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-[#8892b0] mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-[#8892b0] mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="form-input resize-none"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full flex justify-center items-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;