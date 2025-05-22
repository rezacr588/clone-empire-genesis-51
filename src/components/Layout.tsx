import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ErrorBoundary from '@/lib/ErrorBoundary';

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Layout component wraps pages with Navbar, Footer, and consistent styling
 */
const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="bg-empire-light dark:bg-empire-darkest text-empire-dark dark:text-white min-h-screen font-exo flex flex-col">
    <ErrorBoundary>
      <Navbar />
    </ErrorBoundary>
    <main className="flex-grow pt-16">
      {children}
    </main>
    <ErrorBoundary>
      <Footer />
    </ErrorBoundary>
  </div>
);

export default Layout; 