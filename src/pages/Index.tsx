import React, { useEffect, lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import CinematicSection from "@/components/CinematicSection";
import AIClonesShowcase from "@/components/AIClonesShowcase";
import HowItWorks from "@/components/HowItWorks";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { ImportErrorHandler } from "@/components/ImportErrorHandler";
import ErrorBoundary from "@/lib/ErrorBoundary";

// Lazy load components that might have import issues
const Hero = lazy(() => import("@/components/Hero"));
const CTA = lazy(() => import("@/components/CTA"));

const ComponentLoader = () => (
  <div className="flex justify-center items-center p-12">
    <div className="w-12 h-12 rounded-full border-t-2 border-r-2 border-empire-cyan animate-spin"></div>
  </div>
);

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "The Clone Empire | Automation. Intelligence. Empire.";
  }, []);

  return (
    <div className="bg-empire-light dark:bg-empire-darkest text-empire-dark dark:text-white min-h-screen font-exo">
      <ErrorBoundary>
        <Navbar />
      </ErrorBoundary>
      <main>
        <ImportErrorHandler 
          importFn={() => import("@/components/Hero")} 
          componentName="Hero"
        >
          <Suspense fallback={<ComponentLoader />}>
            <Hero />
          </Suspense>
        </ImportErrorHandler>

        <ErrorBoundary>
          <Features />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <CinematicSection />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <AIClonesShowcase />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <HowItWorks />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Experience />
        </ErrorBoundary>
        
        <ImportErrorHandler 
          importFn={() => import("@/components/CTA")} 
          componentName="CTA"
        >
          <Suspense fallback={<ComponentLoader />}>
            <CTA />
          </Suspense>
        </ImportErrorHandler>
      </main>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default Index;
