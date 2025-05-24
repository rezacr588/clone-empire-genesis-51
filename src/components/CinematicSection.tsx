import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles, Bot, BrainCircuit, Terminal, Activity, Workflow } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { GoHighLevelCalendar } from './calendar';
import { SectionLayout } from "@/components/ui/section-layout";

const CinematicSection = () => {
  return (
    <SectionLayout 
      className="bg-empire-darkest" 
      hasTopBorder={true}
      hasGridOverlay={true}
      gridOverlayColor="rgba(68, 249, 255, 0.1)"
      gridOverlayOpacity={0.05}
    >
      {/* Artistic Background remains direct child of SectionLayout */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute left-0 top-1/4 w-1/3 h-1/3 bg-empire-canyon/5 rounded-full blur-[100px]"></div>
          <div className="absolute right-1/4 bottom-0 w-1/4 h-1/2 bg-empire-cyan/10 rounded-full blur-[120px] animate-pulse-subtle"></div>
        </div>
      </div>
      
      {/* Content is now implicitly inside SectionLayout's container */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        {/* Interactive Agent Visualization */}
        <div className="w-full lg:w-1/2 relative">
              {/* Agent visualization area */}
              <img 
                  src="/lovable-uploads/32bb6cb2-48a2-4d51-815d-191bda0a2b5b.png" 
                    alt="Sci-fi AI agent interface visualization" 
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
        </div>
        
        {/* Text content */}
        <div className="w-full lg:w-1/2 text-left">
          <Badge variant="primary" className="mb-4">
            <Sparkles className="mr-2 h-3 w-3" />
            Agentive Technology
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight text-white">
            <span className="block">AI Agents That</span>
            <span className="text-gradient bg-gradient-to-r from-empire-cyan to-empire-purple"> Work For You</span><span className="text-empire-cyan">.</span>
          </h2>
          
          <p className="text-lg text-empire-light max-w-2xl mb-6">
            Our agents actively work on your behalf, learning your preferences and anticipating your needs. They're not just assistants - they're proactive partners that take initiative to help you achieve your goals.
          </p>

          <div className="space-y-4 mb-8">
            {/* Agent capabilities checklist */}
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-empire-cyan/20 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="w-4 h-4 text-empire-cyan" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Sense-Think-Do Autonomy</h3>
                <p className="text-sm text-empire-light/80">Agents observe your work patterns, make decisions based on your preferences, and take appropriate actions.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-empire-cyan/20 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="w-4 h-4 text-empire-cyan" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Always-On Automation</h3>
                <p className="text-sm text-empire-light/80">Your agents work continuously in the background, handling tasks and monitoring systems even while you're offline.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-empire-purple/20 flex items-center justify-center mr-3 mt-0.5">
                <ChevronRight className="w-4 h-4 text-empire-purple" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Human-Agent Collaboration</h3>
                <p className="text-sm text-empire-light/80">Maintain full control with transparent actions and the ability to override or adjust agent behavior at any time.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <GoHighLevelCalendar 
              calendarId="demo-calendar"
              className="bg-empire-cyan hover:bg-empire-cyan/80 text-empire-darkest py-3 px-6 rounded-lg flex items-center gap-2 text-base hover-lift shadow-lg shadow-empire-cyan/20"
              text="Try Agent Demo"
              size="lg"
            />

          <Button 
              variant="outline"
              className="border-empire-cyan text-empire-cyan hover:bg-empire-cyan/10"
          >
              Agent Documentation
              <ChevronRight size={16} className="ml-2" />
          </Button>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default CinematicSection;
