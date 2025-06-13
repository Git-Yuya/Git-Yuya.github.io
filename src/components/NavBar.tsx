import { useEffect, useState } from 'react';
import { navLinks } from '../constants/index';
import { FiGithub, FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setScrolled(true);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle the Menu open/close
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className="inner">
        <div className="flex items-center space-x-5">
          <a className="logo" href="#home">
            Yuya Suda
          </a>
          <a href="https://github.com/Git-Yuya" target="_blank" rel="noopener noreferrer">
            <FiGithub className="h-6 w-6 text-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop">
          <ul>
            {navLinks.map(({ name, link }) => (
              <li key={name} className="group">
                <a href={`#${link}`}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact Me</span>
          </div>
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.7 }}
            onClick={toggleMenu}
            className="text-gray-300"
          >
            {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 spacy-y-5"
      >
        <nav className="flex flex-col space-y-3">
          {navLinks.map(({ name, link }) => (
            <a
              key={name}
              href={`#${link}`}
              className="text-gray-300 font-medium py-2 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              onClick={toggleMenu}
            >
              {name}
            </a>
          ))}
        </nav>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <a 
            href="#contact"
            onClick={() => {toggleMenu();}}
            className="group"
          >
            <div className="px-5 py-2 rounded-lg bg-white text-black group-hover:bg-gray-800 transition-colors duration-300">
              <span className="group-hover:text-white transition-colors duration-300">
                Contact Me
              </span>
            </div>
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default NavBar;
