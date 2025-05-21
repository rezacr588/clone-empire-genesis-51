
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path ? "text-empire-cyan" : "text-empire-silver";
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-empire-darker/80 glass-effect backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-semibold tracking-tight text-white flex items-center">
            <span className="text-empire-cyan">The</span>
            <span className="ml-2">Clone Empire</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/features" className={`text-sm hover:text-white transition-colors ${isActive('/features')}`}>
            Clone Types
          </Link>
          <a href="#how-it-works" className="text-sm text-empire-silver hover:text-white transition-colors">
            How It Works
          </a>
          <a href="#pricing" className="text-sm text-empire-silver hover:text-white transition-colors">
            Packages
          </a>
          <a href="#experience" className="text-sm text-empire-silver hover:text-white transition-colors">
            Experience
          </a>
          <Link to="/about" className={`text-sm hover:text-white transition-colors ${isActive('/about')}`}>
            About
          </Link>
          <Link to="/contact" className={`text-sm hover:text-white transition-colors ${isActive('/contact')}`}>
            Contact
          </Link>
          <Button 
            variant="ghost" 
            size="sm" 
            className="ml-2 bg-empire-charcoal text-white hover:bg-empire-charcoal/80"
          >
            Sign In
          </Button>
          <Button 
            size="sm" 
            className="ml-2 bg-empire-red text-white hover:bg-empire-red/90"
          >
            Book a Demo
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="text-white"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-empire-darker/95 glass-effect backdrop-blur-md absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/features" 
              className="text-empire-silver hover:text-white transition-colors py-2"
            >
              Clone Types
            </Link>
            <a 
              href="#how-it-works" 
              className="text-empire-silver hover:text-white transition-colors py-2"
            >
              How It Works
            </a>
            <a 
              href="#pricing" 
              className="text-empire-silver hover:text-white transition-colors py-2"
            >
              Packages
            </a>
            <a 
              href="#experience" 
              className="text-empire-silver hover:text-white transition-colors py-2"
            >
              Experience
            </a>
            <Link 
              to="/about" 
              className="text-empire-silver hover:text-white transition-colors py-2"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-empire-silver hover:text-white transition-colors py-2"
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-center bg-empire-charcoal text-white hover:bg-empire-charcoal/80"
              >
                Sign In
              </Button>
              <Button 
                size="sm" 
                className="w-full justify-center bg-empire-red text-white hover:bg-empire-red/90"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
