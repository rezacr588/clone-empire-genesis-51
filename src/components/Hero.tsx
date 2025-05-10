
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-empire-darkest overflow-hidden pb-20"
      style={{
        backgroundImage: "radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(40, 40, 40, 0.15), transparent 30%)",
      }}
    >
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] w-[80%] h-[70%] bg-empire-red/5 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute top-[30%] -right-[10%] w-[70%] h-[50%] bg-empire-charcoal/20 rounded-full blur-[100px] opacity-60"></div>
      </div>
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "linear-gradient(rgba(100, 100, 100, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 100, 100, 0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      ></div>
      
      <div className="container mx-auto px-4 pt-24 z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-6 inline-block">
            <span className="inline-flex items-center rounded-full border border-empire-red/30 bg-empire-red/10 px-3 py-1 text-xs text-empire-red">
              <span className="animate-pulse-subtle mr-1.5 h-1.5 w-1.5 rounded-full bg-empire-red"></span>
              Automation. Intelligence. Empire.
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight mb-6 animate-fade-in">
            Meet your AI Clone. <br />
            <span className="text-gradient bg-gradient-to-r from-white via-empire-silver to-white">
              Sell. Support. Scale.
            </span> <br />
            <span className="text-empire-red">Without Limits.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-empire-light max-w-3xl mx-auto mb-10 animate-slide-up opacity-90">
            Your custom voice-powered agent, booking appointments, qualifying leads, closing deals, handling support — even while you sleep.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <Button 
              className="bg-empire-red hover:bg-empire-red/90 text-white py-6 px-8 rounded-lg text-lg flex items-center gap-2 hover-lift"
            >
              Book a Demo
              <ChevronRight size={18} />
            </Button>
            
            <Button 
              variant="outline"
              className="border-empire-medium bg-empire-charcoal/50 hover:bg-empire-charcoal/70 text-white py-6 px-8 rounded-lg text-lg flex items-center gap-2 hover-lift"
            >
              <Play size={18} />
              See it in Action
            </Button>
          </div>
        </div>
        
        {/* Abstract orb design element */}
        <div className="relative w-full h-12 mt-24">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1px] h-12 bg-gradient-to-b from-empire-red/0 via-empire-red/50 to-empire-red/5"></div>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-3 h-3 rounded-full border border-empire-red/20 bg-empire-red/10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
