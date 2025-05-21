
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

const CinematicSection = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-empire-darkest">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-empire-medium/20 to-transparent"></div>
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(rgba(30, 174, 219, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 174, 219, 0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Image section with AI face */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-empire-cyan via-purple-500 to-empire-red rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative rounded-2xl overflow-hidden glass-effect">
                <img 
                  src="/lovable-uploads/32bb6cb2-48a2-4d51-815d-191bda0a2b5b.png" 
                  alt="AI clone face with neon cyan glow" 
                  className="w-full h-auto rounded-2xl object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-empire-darkest/80 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
          
          {/* Text content */}
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-3xl md:text-5xl font-semibold mb-8 leading-tight text-white">
              <span className="block">Your voice doesn't need a</span>
              <span className="text-gradient bg-gradient-to-r from-white via-empire-red to-white"> body</span>.
              <span className="block">It needs an <span className="text-empire-cyan">Empire</span>.</span>
            </h2>
            
            <div className="w-16 h-px bg-empire-cyan/50 mb-8"></div>
            
            <p className="text-lg md:text-xl text-empire-light max-w-2xl mx-auto mb-10">
              Voice-powered AI agents that represent your business 24/7, never sleep, never take vacations, and operate at scale.
            </p>

            <Button 
              className="bg-empire-darkCyan hover:bg-empire-cyan text-white py-6 px-8 rounded-lg text-lg flex items-center gap-2 hover-lift"
              size="lg"
            >
              Discover AI Evolution
              <ChevronRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CinematicSection;
