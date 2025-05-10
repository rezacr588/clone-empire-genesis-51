
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, GitMerge } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-32 bg-empire-darkest relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-empire-medium/20 to-transparent"></div>
      
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-empire-red/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-empire-charcoal/20 blur-[100px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-empire-darker border border-empire-red/30 mb-8">
            <GitMerge className="h-7 w-7 text-empire-red" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to <span className="text-empire-red">Clone</span> yourself?
          </h2>
          
          <p className="text-lg md:text-xl text-empire-light max-w-2xl mx-auto mb-10">
            Deploy your voice-powered AI agents today and start scaling your business operations without human limitations.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className="bg-empire-red hover:bg-empire-red/90 text-white py-6 px-8 rounded-lg text-lg flex items-center gap-2"
              size="lg"
            >
              Book a Demo
              <ChevronRight size={18} />
            </Button>
            
            <Button 
              variant="outline"
              className="border-empire-medium bg-empire-charcoal/50 hover:bg-empire-charcoal/70 text-white py-6 px-8 rounded-lg text-lg flex items-center gap-2"
              size="lg"
            >
              Build My Clone
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
