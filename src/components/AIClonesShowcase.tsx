
import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const AIClonesShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollPosition = window.scrollY;
      const elementPosition = containerRef.current.offsetTop;
      const viewportHeight = window.innerHeight;
      
      // Calculate how far the element is from the viewport
      const distance = elementPosition - scrollPosition - viewportHeight * 0.5;
      
      // Calculate a parallax effect value that increases as the element gets closer to the viewport
      const parallaxValue = Math.max(0, Math.min(1, 1 - distance / (viewportHeight * 0.8)));
      
      // Apply subtle transformations to the images based on scroll position
      const images = containerRef.current.querySelectorAll('.clone-image');
      images.forEach((image, index) => {
        const translateY = -20 * parallaxValue * (index % 2 === 0 ? 1 : 1.2);
        const scale = 1 + 0.05 * parallaxValue;
        const opacity = 0.4 + 0.6 * parallaxValue;
        (image as HTMLElement).style.transform = `translateY(${translateY}px) scale(${scale})`;
        (image as HTMLElement).style.opacity = `${opacity}`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to set positions
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="py-24 bg-empire-darkest relative overflow-hidden" id="clones">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-empire-medium/20 to-transparent"></div>
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(rgba(100, 100, 100, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 100, 100, 0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      ></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-empire-red font-medium mb-3">The Clones</p>
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Meet Your AI Representatives</h2>
          <p className="text-empire-light text-lg max-w-3xl mx-auto">
            Your custom voice-powered agents, representing your business at scale with precision and consistency.
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto" ref={containerRef}>
          <div className="grid md:grid-cols-2 gap-6 md:gap-16">
            {/* Left column */}
            <div className="space-y-12">
              <div className="clone-image rounded-2xl overflow-hidden shadow-2xl shadow-empire-red/5 transition-all duration-700 bg-gradient-to-b from-empire-darker to-empire-darkest h-[480px] relative">
                <img 
                  src="/lovable-uploads/b5dce6dd-a363-4e33-9e0d-5384db46d5e3.png" 
                  alt="AI Clone in red suit" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-empire-darkest via-empire-darkest/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                  <h3 className="text-xl font-medium mb-2 text-white">Sales Clone</h3>
                  <p className="text-empire-light text-sm">Custom voice-powered agent that handles objections like your best closer</p>
                </div>
              </div>
              
              <div className="clone-image rounded-2xl overflow-hidden shadow-2xl shadow-empire-red/5 transition-all duration-700 bg-gradient-to-b from-empire-darker to-empire-darkest h-[400px] relative">
                <img 
                  src="/lovable-uploads/8b3b3851-e9c8-4324-a8ab-3da306e1706a.png" 
                  alt="AI Clone with red helmet" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-empire-darkest via-empire-darkest/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                  <h3 className="text-xl font-medium mb-2 text-white">Customer Success Clone</h3>
                  <p className="text-empire-light text-sm">Support tickets and onboarding handled with precision</p>
                </div>
              </div>
            </div>
            
            {/* Right column */}
            <div className="space-y-12 mt-16 md:mt-24">
              <div className="clone-image rounded-2xl overflow-hidden shadow-2xl shadow-empire-red/5 transition-all duration-700 bg-gradient-to-b from-empire-darker to-empire-darkest h-[400px] relative">
                <img 
                  src="/lovable-uploads/bba21060-ce98-4f54-b67e-fa4520e89939.png" 
                  alt="AI Clone in white suit" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-empire-darkest via-empire-darkest/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                  <h3 className="text-xl font-medium mb-2 text-white">Appointment Setter Clone</h3>
                  <p className="text-empire-light text-sm">Books meetings and qualifies prospects 24/7</p>
                </div>
              </div>
              
              <div className="clone-image rounded-2xl overflow-hidden shadow-2xl shadow-empire-red/5 transition-all duration-700 bg-gradient-to-b from-empire-darker to-empire-darkest h-[480px] relative">
                <img 
                  src="/lovable-uploads/3a9931c2-76d5-41b7-be63-94d88b1f1d26.png" 
                  alt="AI Clone with futuristic helmet" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-empire-darkest via-empire-darkest/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                  <h3 className="text-xl font-medium mb-2 text-white">Cold Calling Clone</h3>
                  <p className="text-empire-light text-sm">Scales outreach with natural conversations and lead qualification</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating call-to-action */}
          <div className="mt-16 md:absolute md:-bottom-12 md:left-1/2 md:transform md:-translate-x-1/2 z-10">
            <div className="bg-empire-darker/80 backdrop-blur-md border border-empire-charcoal/50 rounded-xl p-6 md:p-8 shadow-xl max-w-xl mx-auto">
              <p className="text-empire-silver text-lg mb-4">Deploy custom voice-matched AI clones that represent your business exactly how you would.</p>
              <Button 
                className="bg-empire-red hover:bg-empire-red/90 text-white flex items-center gap-2 w-full justify-center"
                size="lg"
              >
                Start Building Your Clone
                <ChevronRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIClonesShowcase;
