import React, { useState, useEffect } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show/hide scroll-to-top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Scroll to Top Button - Fixed position */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl border border-gray-700 cursor-pointer"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={24} />
        </button>
      )}

     
      <div
        id="Contact"
        className="relative bg-gradient-to-r from-[#000000] to-[#1a1a1a] text-white py-5 px-6 md:px-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
            
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Let's Connect
              </h1>
              <h3 className="text-lg md:text-2xl font-normal mt-4 text-gray-300">
                Feel free to reach out!
              </h3>
              <p className="text-gray-400 mt-6 max-w-md">
                I'm currently open to new opportunities and collaborations.
                Whether you have a question or just want to say hi, I'll get
                back to you as soon as possible.
              </p>
            </div>

           

            
            <ul>
              <h2 className="text-2xl font-bold text-center">
              Get in Touch
            </h2>
              <li className="flex gap-4 items-center px-4 py-2 rounded-xl hover:bg-[#252525] transition-all duration-300">
                <div className="p-3 bg-[#D04B3E20] rounded-full">
                  <MdOutlineEmail color="#D04B3E" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a
                    href="mailto:iamdevsingh123@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-blue-400 transition-colors"
                  >
                    iamdevsingh123@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex gap-4 items-center px-4 py-2 rounded-xl hover:bg-[#252525] transition-all duration-300">
                <div className="p-3 bg-[#0270AD20] rounded-full">
                  <FaLinkedin color="#0270AD" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/dev-singh123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-blue-400 transition-colors"
                  >
                    linkedin.com/in/dev-singh123
                  </a>
                </div>
              </li>

              <li className="flex gap-4 items-center px-4 py-2 rounded-xl hover:bg-[#252525] transition-all duration-300">
                <div className="p-3 bg-[#16141430] rounded-full">
                  <FaGithub color="#FFFFFF" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <a
                    href="https://github.com/Devsingh0123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-blue-400 transition-colors"
                  >
                    github.com/Devsingh0123
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
