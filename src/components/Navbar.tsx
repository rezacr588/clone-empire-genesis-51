
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-empire-darker/80 glass-effect backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-xl font-semibold tracking-tight text-white">
            <span className="text-empire-red">The</span> Clone Empire
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm text-empire-silver hover:text-white transition-colors">
            Clone Types
          </a>
          <a href="#how-it-works" className="text-sm text-empire-silver hover:text-white transition-colors">
            How It Works
          </a>
          <a href="#pricing" className="text-sm text-empire-silver hover:text-white transition-colors">
            Packages
          </a>
          <a href="#experience" className="text-sm text-empire-silver hover:text-white transition-colors">
            Experience
          </a>
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
            <a 
              href="#features" 
              className="text-empire-silver hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Clone Types
            </a>
            <a 
              href="#how-it-works" 
              className="text-empire-silver hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#pricing" 
              className="text-empire-silver hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Packages
            </a>
            <a 
              href="#experience" 
              className="text-empire-silver hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Experience
            </a>
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
