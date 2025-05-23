import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/hooks';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme, isDark } = useTheme();
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    // Add scroll event listener
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'AI Clones', path: '/clone-types' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' }
  ];
  
  // Check if a link is active (exact match for home, starts with for other routes)
  const isActive = (path: string) => {
    if (path === '/') {
      return currentPath === path;
    }
    return currentPath.startsWith(path);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-2 bg-empire-darkest/90 backdrop-blur-lg border-b border-empire-silver/5' 
        : 'py-4 bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-medium text-empire-light dark:text-empire-light">
              <span className="text-empire-canyon-deep">Clone</span>Empire
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 text-empire-light dark:text-empire-light hover:text-empire-cyan transition-colors duration-200 relative group ${
                    active ? 'text-empire-cyan font-medium' : ''
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-empire-canyon-deep transition-all duration-300 ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="ml-4 px-5 py-2 bg-empire-canyon-deep hover:bg-empire-canyon-deep/90 text-empire-light rounded-lg transition-colors duration-200"
            >
              Get Started
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4 md:space-x-2">
            {/* Dark Mode Toggle - Enhanced Design */}
            <motion.button 
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-2 rounded-full transition-all duration-300 overflow-hidden ${
                isDark 
                  ? 'bg-gradient-to-br from-empire-canyon-deep/50 to-empire-dark border border-empire-cyan/30 shadow-inner shadow-empire-cyan/10'
                  : 'bg-gradient-to-br from-empire-cyan/20 to-empire-canyon/20 border border-empire-cyan/20'
              }`}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <div className="relative z-10">
                <AnimatePresence mode="wait" initial={false}>
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ opacity: 0, rotate: -30 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 30 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun size={18} className="text-empire-cyan" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ opacity: 0, rotate: 30 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -30 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon size={18} className="text-empire-canyon-deep" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Subtle glow effect */}
              <span className={`absolute inset-0 rounded-full ${
                isDark ? 'bg-empire-cyan/5' : 'bg-empire-canyon-deep/5'
              }`}></span>
            </motion.button>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-empire-light" />
              ) : (
                <Menu className="w-6 h-6 text-empire-light" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-empire-darkest/95 backdrop-blur-lg border-t border-empire-silver/5"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`px-4 py-2 text-empire-light hover:text-empire-cyan transition-colors duration-200 ${
                        active ? 'text-empire-cyan font-medium bg-empire-canyon-deep/10 rounded-md' : ''
                      }`}
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <Link
                  to="/contact"
                  className="px-4 py-2 text-center bg-empire-canyon-deep hover:bg-empire-canyon-deep/90 text-empire-light rounded-lg transition-colors duration-200 mt-4"
                  onClick={closeMenu}
                >
                  Get Started
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
