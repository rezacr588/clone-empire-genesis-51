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
          <div className="relative group">
            {/* Artistic frame with animated glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-empire-cyan via-purple-500 to-empire-canyon rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            
            {/* Main interaction container */}
            <div className="relative rounded-2xl overflow-hidden neo-glass bg-empire-dark/70 border border-empire-darker p-1">
              {/* Terminal-like header */}
              <div className="bg-empire-darker rounded-t-xl p-3 flex items-center justify-between">
                <div className="flex items-center">
                  <Terminal className="w-5 h-5 text-empire-cyan mr-2" />
                  <span className="text-sm text-empire-light/90">Agent Interface</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-empire-canyon"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-empire-yellow"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-empire-cyan"></div>
                </div>
              </div>
              
              {/* Agent visualization area */}
              <div className="relative">
              <img 
                src="/images/scifi/agent_interface_bg.png" 
                  alt="Sci-fi AI agent interface visualization" 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              
                {/* Overlay with UI elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-empire-darkest/80 via-empire-darkest/30 to-transparent p-4 flex flex-col justify-end">
                  {/* Agent status indicators */}
                  <div className="absolute top-4 right-4 flex items-center bg-empire-darker/70 backdrop-blur-sm rounded-full px-3 py-1.5">
                    <span className="w-2 h-2 rounded-full bg-empire-cyan animate-pulse mr-2"></span>
                    <span className="text-xs text-empire-cyan">Agent Active</span>
                  </div>
                  
                  {/* Agent capabilities */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <div className="flex items-center bg-empire-darker/70 backdrop-blur-sm rounded-full px-3 py-1.5">
                      <BrainCircuit className="w-3.5 h-3.5 text-empire-purple mr-1.5" />
                      <span className="text-xs text-empire-light">Learning from user</span>
                    </div>
                    <div className="flex items-center bg-empire-darker/70 backdrop-blur-sm rounded-full px-3 py-1.5">
                      <Workflow className="w-3.5 h-3.5 text-empire-cyan mr-1.5" />
                      <span className="text-xs text-empire-light">Process automation</span>
                    </div>
                  </div>
                  
                  {/* Agent conversation */}
                  <div className="bg-empire-darker/70 backdrop-blur-sm rounded-xl p-3 space-y-3">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-empire-darker flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-empire-cyan" />
                      </div>
                      <div className="flex-grow">
                        <div className="text-xs text-empire-light/70 mb-1">Agent</div>
                        <p className="text-sm text-empire-light">I've reviewed your calendar and identified three meetings that could be optimized. Would you like me to reschedule them to create focused work blocks?</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-empire-darker flex items-center justify-center flex-shrink-0">
                        <Activity className="w-4 h-4 text-empire-cyan" />
                      </div>
                      <div className="flex-grow">
                        <div className="text-xs text-empire-light/70 mb-1">User</div>
                        <p className="text-sm text-empire-light">Yes, please optimize my schedule. Also prepare briefing notes for tomorrow's client meeting.</p>
                      </div>
                    </div>
                    
                    {/* Agent typing indicator */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-empire-darker flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-empire-cyan" />
                      </div>
                      <div className="flex-grow">
                        <div className="text-xs text-empire-light/70 mb-1">Agent</div>
                        <div className="flex gap-1.5">
                          <span className="w-2 h-2 bg-empire-cyan rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                          <span className="w-2 h-2 bg-empire-cyan rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></span>
                          <span className="w-2 h-2 bg-empire-cyan rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
              {/* Animated scan line effect */}
              <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-empire-cyan animate-scan"></div>
                </div>
              </div>
            </div>
          </div>
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
