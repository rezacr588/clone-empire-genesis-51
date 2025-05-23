import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/hooks';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.scrollY > 10;
    }
    return false;
  });
  
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
    
    // Initialize scrolled state correctly on mount
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

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
  
  // Memoized active path check to prevent unnecessary re-renders
  const isActive = useMemo(() => {
    return (path: string) => {
      if (path === '/') {
        return currentPath === path;
      }
      return currentPath.startsWith(path);
    };
  }, [currentPath]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-2 bg-white dark:bg-gray-900 shadow-md dark:border-b dark:border-gray-800' 
        : 'py-4 bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-medium text-empire-dark dark:text-white">
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
                  className={`px-4 py-2 text-empire-dark dark:text-white hover:text-empire-cyan transition-colors duration-200 relative group ${
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
              className="ml-4 px-5 py-2 bg-empire-canyon-deep hover:bg-empire-canyon-deep/90 text-white rounded-lg transition-colors duration-200"
            >
              Get Started
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4 md:space-x-2">
            {/* Dark Mode Toggle - Simplified Design */}
            <button 
              onClick={toggleTheme}
              className={`relative p-2 rounded-full transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-gray-100 border border-gray-200'
              }`}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-gray-600" />
              )}
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-empire-dark dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-empire-dark dark:text-white" />
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
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`px-4 py-2 text-empire-dark dark:text-white hover:text-empire-cyan transition-colors duration-200 ${
                        active ? 'text-empire-cyan font-medium bg-gray-100 dark:bg-gray-800 rounded-md' : ''
                      }`}
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <Link
                  to="/contact"
                  className="px-4 py-2 text-center bg-empire-canyon-deep hover:bg-empire-canyon-deep/90 text-white rounded-lg transition-colors duration-200 mt-4"
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
