import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  ArrowUpRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-empire-dark border-t border-empire-medium/10 dark:border-empire-charcoal pt-16 font-exo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="mb-6">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-empire-dark dark:text-white">
                  <span className="text-empire-red">Clone</span>Empire
                </span>
              </Link>
            </div>
            <p className="text-empire-dark/70 dark:text-empire-light/70 mb-6 text-sm">
              Deploy autonomous AI agents that handle sales, support, and operations with your voice, personality, and expertise — scaling your business 24/7/365.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://twitter.com/cloneempire" 
                target="_blank" 
                rel="noreferrer" 
                className="text-empire-dark/70 dark:text-empire-light/70 hover:text-empire-cyan dark:hover:text-empire-cyan transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://linkedin.com/company/cloneempire" 
                target="_blank" 
                rel="noreferrer" 
                className="text-empire-dark/70 dark:text-empire-light/70 hover:text-empire-cyan dark:hover:text-empire-cyan transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://github.com/cloneempire" 
                target="_blank" 
                rel="noreferrer" 
                className="text-empire-dark/70 dark:text-empire-light/70 hover:text-empire-cyan dark:hover:text-empire-cyan transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://instagram.com/cloneempire" 
                target="_blank" 
                rel="noreferrer" 
                className="text-empire-dark/70 dark:text-empire-light/70 hover:text-empire-cyan dark:hover:text-empire-cyan transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-empire-dark dark:text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/clone-types" className="text-empire-dark/70 dark:text-empire-light/70 hover:text-empire-red dark:hover:text-empire-red transition-colors text-sm flex items-center">
                  AI Clones <ArrowUpRight size={14} className="ml-1 opacity-70" />
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-empire-dark/70 dark:text-empire-light/70 hover:text-empire-red dark:hover:text-empire-red transition-colors text-sm flex items-center">
                  Pricing <ArrowUpRight size={14} className="ml-1 opacity-70" />
                </Link>
              </li>
              <li>
                <Link to="/integrations" className="text-empire-dark/70 dark:text-empire-light/70 hover:text-empire-red dark:hover:text-empire-red transition-colors text-sm flex items-center">
                  Integrations <ArrowUpRight size={14} className="ml-1 opacity-70" />
                </Link>
              </li>
              <li>
                <Link to="/enterprise" className="text-empire-dark/70 dark:text-empire-light/70 hover:text-empire-red dark:hover:text-empire-red transition-colors text-sm flex items-center">
                  Enterprise <ArrowUpRight size={14} className="ml-1 opacity-70" />
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-empire-dark dark:text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-empire-dark/70 dark:text-empire-light/70 hover:text-empire-red dark:hover:text-empire-red transition-colors text-sm flex items-center">
                  About Us <ArrowUpRight size={14} className="ml-1 opacity-70" />
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-empire-dark/70 dark:text-empire-light/70 hover:text-empire-red dark:hover:text-empire-red transition-colors text-sm flex items-center">
                  Careers <ArrowUpRight size={14} className="ml-1 opacity-70" />
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-empire-dark/70 dark:text-empire-light/70 hover:text-empire-red dark:hover:text-empire-red transition-colors text-sm flex items-center">
                  Blog <ArrowUpRight size={14} className="ml-1 opacity-70" />
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-empire-dark/70 dark:text-empire-light/70 hover:text-empire-red dark:hover:text-empire-red transition-colors text-sm flex items-center">
                  Press <ArrowUpRight size={14} className="ml-1 opacity-70" />
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-empire-dark dark:text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-empire-dark/70 dark:text-empire-light/70 hover:text-empire-red dark:hover:text-empire-red transition-colors text-sm flex items-center">
                  Privacy Policy <ArrowUpRight size={14} className="ml-1 opacity-70" />
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-empire-dark/70 dark:text-empire-light/70 hover:text-empire-red dark:hover:text-empire-red transition-colors text-sm flex items-center">
                  Terms of Service <ArrowUpRight size={14} className="ml-1 opacity-70" />
                </Link>
              </li>
              <li>
                <Link to="/data-policy" className="text-empire-dark/70 dark:text-empire-light/70 hover:text-empire-red dark:hover:text-empire-red transition-colors text-sm flex items-center">
                  Data Policy <ArrowUpRight size={14} className="ml-1 opacity-70" />
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-empire-dark/70 dark:text-empire-light/70 hover:text-empire-red dark:hover:text-empire-red transition-colors text-sm flex items-center">
                  Cookie Policy <ArrowUpRight size={14} className="ml-1 opacity-70" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 border-t border-empire-medium/10 dark:border-empire-charcoal flex flex-col md:flex-row justify-between items-center">
          <p className="text-empire-dark/60 dark:text-empire-light/60 text-sm">
            &copy; {currentYear} Clone Empire. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a 
              href="mailto:contact@cloneempire.com" 
              className="text-empire-dark/60 dark:text-empire-light/60 hover:text-empire-red dark:hover:text-empire-red transition-colors text-sm"
            >
              contact@cloneempire.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
