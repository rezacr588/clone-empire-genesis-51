import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-empire-darkest border-t border-empire-silver/5 pt-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="mb-6">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-medium text-white">
                  <span className="text-empire-canyon-deep">Clone</span>Empire
                </span>
              </Link>
            </div>
            <p className="text-gray-300 mb-6 text-sm">
              Deploy autonomous AI agents that handle sales, support, and operations with your voice, personality, and expertise — scaling your business 24/7/365.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://twitter.com/cloneempire" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
                aria-label="Twitter"
              >
                Twitter
              </a>
              <a 
                href="https://linkedin.com/company/cloneempire" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/cloneempire" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
                aria-label="GitHub"
              >
                GitHub
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4 text-sm">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/clone-types" className="text-gray-400 hover:text-empire-canyon-deep transition-colors text-sm">
                  AI Clones
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-empire-canyon-deep transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/integrations" className="text-gray-400 hover:text-empire-canyon-deep transition-colors text-sm">
                  Integrations
                </Link>
              </li>
              <li>
                <Link to="/enterprise" className="text-gray-400 hover:text-empire-canyon-deep transition-colors text-sm">
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4 text-sm">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-empire-canyon-deep transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-empire-canyon-deep transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-empire-canyon-deep transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-gray-400 hover:text-empire-canyon-deep transition-colors text-sm">
                  Press
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4 text-sm">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-empire-canyon-deep transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-empire-canyon-deep transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/data-policy" className="text-gray-400 hover:text-empire-canyon-deep transition-colors text-sm">
                  Data Policy
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-gray-400 hover:text-empire-canyon-deep transition-colors text-sm">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 border-t border-empire-silver/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Clone Empire. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a 
              href="mailto:contact@cloneempire.com" 
              className="text-gray-400 hover:text-empire-canyon-deep transition-colors text-sm"
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
