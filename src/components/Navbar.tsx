import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import CalendlyWidget from './CalendlyWidget';

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

  // Handle smooth scrolling for anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Only scroll if we're on the home page
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigate to home and then scroll after page load
      window.location.href = `/#${id}`;
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path ? "text-empire-red" : "text-empire-silver";
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 font-exo ${
        isScrolled
          ? 'bg-empire-darker/90 backdrop-blur-md py-2 shadow-lg'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/d1821810-1eb1-4bcc-9999-2db5692580f3.png"
              alt="The Clone Empire"
              className={`transition-all duration-300 ${
                isScrolled ? 'h-6 md:h-8' : 'h-8 md:h-10'
              }`}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link 
            to="/clone-types" 
            className={`text-sm font-medium hover:text-empire-red transition-colors ${isActive('/features')}`}
          >
            Clone Types
          </Link>
          <a 
            href="#how-it-works" 
            className="text-sm font-medium text-empire-silver hover:text-empire-red transition-colors"
            onClick={(e) => handleAnchorClick(e, 'how-it-works')}
          >
            How It Works
          </a>
          <a 
            href="#experience" 
            className="text-sm font-medium text-empire-silver hover:text-empire-red transition-colors"
            onClick={(e) => handleAnchorClick(e, 'experience')}
          >
            Experience
          </a>
          <Link 
            to="/about" 
            className={`text-sm font-medium hover:text-empire-red transition-colors ${isActive('/about')}`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`text-sm font-medium hover:text-empire-red transition-colors ${isActive('/contact')}`}
          >
            Contact
          </Link>
          <div className="ml-2">
            <ThemeToggle />
          </div>
          <CalendlyWidget 
            url="https://calendly.com/clone-empire/demo" 
            className="ml-2 bg-empire-red text-white hover:bg-empire-red/90"
          />
        </nav>

        {/* Mobile Navigation Controls */}
        <div className="flex lg:hidden items-center gap-4">
          <div className="hidden sm:block">
            <CalendlyWidget 
              url="https://calendly.com/clone-empire/demo"
              className="bg-empire-red text-white hover:bg-empire-red/90 text-sm px-3 py-1"
              text="Book Demo"
              size="sm"
            />
          </div>
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="text-empire-silver hover:text-white hover:bg-transparent"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-empire-darker/95 backdrop-blur-md absolute w-full overflow-hidden transition-all">
          <div className="container mx-auto px-4 py-5 flex flex-col space-y-4 max-h-[80vh] overflow-y-auto">
            <Link 
              to="/clone-types" 
              className="font-medium text-empire-silver hover:text-white transition-colors py-3 border-b border-empire-charcoal/30"
            >
              Clone Types
            </Link>
            <a 
              href="#how-it-works" 
              className="font-medium text-empire-silver hover:text-white transition-colors py-3 border-b border-empire-charcoal/30"
              onClick={(e) => handleAnchorClick(e, 'how-it-works')}
            >
              How It Works
            </a>
            <a 
              href="#experience" 
              className="font-medium text-empire-silver hover:text-white transition-colors py-3 border-b border-empire-charcoal/30"
              onClick={(e) => handleAnchorClick(e, 'experience')}
            >
              Experience
            </a>
            <Link 
              to="/about" 
              className="font-medium text-empire-silver hover:text-white transition-colors py-3 border-b border-empire-charcoal/30"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="font-medium text-empire-silver hover:text-white transition-colors py-3 border-b border-empire-charcoal/30"
            >
              Contact
            </Link>
            <div className="pt-2 sm:hidden">
              <CalendlyWidget
                url="https://calendly.com/clone-empire/demo" 
                className="w-full justify-center bg-empire-red text-white hover:bg-empire-red/90"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
