import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { SectionLayout } from "@/components/ui/section-layout";

const AIClonesShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollPosition = window.scrollY;
      const elementPosition = containerRef.current.offsetTop;
      const viewportHeight = window.innerHeight;
      
      const distance = elementPosition - scrollPosition - viewportHeight * 0.5;
      const parallaxValue = Math.max(0, Math.min(1, 1 - distance / (viewportHeight * 0.8)));
      
      const images = containerRef.current.querySelectorAll('.clone-image');
      images.forEach((image, index) => {
        const translateY = -15 * parallaxValue * (index % 2 === 0 ? 1 : 1.2);
        const scale = 1 + 0.03 * parallaxValue;
        const opacity = 0.5 + 0.5 * parallaxValue;
        (image as HTMLElement).style.transform = `translateY(${translateY}px) scale(${scale})`;
        (image as HTMLElement).style.opacity = `${opacity}`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <SectionLayout 
      id="clones"
      className="bg-empire-darkest"
      hasTopBorder={true}
      hasGridOverlay={true}
    >
      <div className="text-center mb-14">
        <p className="text-empire-canyon font-medium mb-3 text-sm">The Clones</p>
        <h2 className="text-3xl md:text-4xl font-medium mb-5 text-empire-light">Meet Your AI Representatives</h2>
        <p className="text-empire-medium text-base md:text-lg max-w-3xl mx-auto">
          Your custom voice-powered agents, representing your business at scale with precision and consistency.
        </p>
      </div>
      
      <div className="relative max-w-6xl mx-auto" ref={containerRef}>
        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          {/* Left column */}
          <div className="space-y-10">
            <div className="clone-image rounded-xl overflow-hidden shadow-lg shadow-empire-darkest/80 transition-all duration-700 relative h-[480px]">
              <img 
                src="/images/scifi/clone_sales.png" 
                alt="Sci-fi AI Sales Agent" 
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  // Fallback to another format or placeholder
                  const target = e.target as HTMLImageElement;
                  target.src = "/images/ai/sales-agent.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-empire-darkest via-empire-darkest/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <h3 className="text-xl font-medium mb-2 text-white">Sales Clone</h3>
                <p className="text-gray-300 text-sm">Custom voice-powered agent that handles objections like your best closer</p>
              </div>
            </div>
            
            <div className="clone-image rounded-xl overflow-hidden shadow-lg shadow-empire-darkest/80 transition-all duration-700 relative h-[400px]">
              <img 
                src="/images/scifi/clone_support.png" 
                alt="Sci-fi AI Support Agent" 
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  // Fallback to another format or placeholder
                  const target = e.target as HTMLImageElement;
                  target.src = "/images/ai/support-agent.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-empire-darkest via-empire-darkest/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <h3 className="text-xl font-medium mb-2 text-white">Customer Success Clone</h3>
                <p className="text-gray-300 text-sm">Support tickets and onboarding handled with precision</p>
              </div>
            </div>
          </div>
          
          {/* Right column */}
          <div className="space-y-10 mt-10 md:mt-20">
            <div className="clone-image rounded-xl overflow-hidden shadow-lg shadow-empire-darkest/80 transition-all duration-700 relative h-[400px]">
              <img 
                src="/images/scifi/clone_setter.png" 
                alt="Sci-fi AI Appointment Setter" 
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  // Fallback to another format or placeholder
                  const target = e.target as HTMLImageElement;
                  target.src = "/images/ai/executive-assistant.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-empire-darkest via-empire-darkest/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <h3 className="text-xl font-medium mb-2 text-white">Appointment Setter Clone</h3>
                <p className="text-gray-300 text-sm">Books meetings and qualifies prospects 24/7</p>
              </div>
            </div>
            
            <div className="clone-image rounded-xl overflow-hidden shadow-lg shadow-empire-darkest/80 transition-all duration-700 relative h-[480px]">
              <img 
                src="/images/scifi/clone_outreach.png" 
                alt="Sci-fi AI Outreach Agent" 
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  // Fallback to another format or placeholder
                  const target = e.target as HTMLImageElement;
                  target.src = "/images/ai/cognitive-agent.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-empire-darkest via-empire-darkest/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <h3 className="text-xl font-medium mb-2 text-white">Cold Calling Clone</h3>
                <p className="text-gray-300 text-sm">Scales outreach with natural conversations and lead qualification</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating call-to-action */}
        <div className="mt-14 md:absolute md:-bottom-10 md:left-1/2 md:transform md:-translate-x-1/2 z-10">
          <div className="glass-card rounded-xl p-6 md:p-7 shadow-xl max-w-xl mx-auto border border-empire-medium/10">
            <p className="text-empire-silver text-base mb-4">Deploy custom voice-matched AI clones that represent your business exactly how you would.</p>
            <Button 
              className="bg-empire-canyon-deep hover:bg-empire-canyon-deep/90 text-empire-light flex items-center gap-2 w-full justify-center"
              size="lg"
            >
              Start Building Your Clone
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default AIClonesShowcase;
