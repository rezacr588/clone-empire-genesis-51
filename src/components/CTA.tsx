import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Bot, Code, Network, Brain } from 'lucide-react';
import { GoHighLevelCalendar } from './calendar';
import { SectionLayout } from "@/components/ui/section-layout";

const CTA = () => {
  return (
    <SectionLayout 
      className="bg-empire-darkest" 
      hasTopBorder={true}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-empire-silver/5 blur-[150px] rounded-full opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-empire-canyon/5 blur-[100px] rounded-full opacity-20"></div>
        
        <div className="absolute top-[15%] left-[10%] opacity-20">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="40" stroke="#D9D9D9" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="60" cy="60" r="60" stroke="#D9D9D9" strokeWidth="0.5" strokeDasharray="2 2" />
          </svg>
        </div>
        
        <div className="absolute bottom-[20%] right-[15%] opacity-15">
          <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="40" width="80" height="80" stroke="#3e4756" strokeWidth="1" strokeDasharray="4 4" />
            <rect x="20" y="20" width="120" height="120" stroke="#3e4756" strokeWidth="0.5" strokeDasharray="2 2" />
          </svg>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-empire-silver/5 border border-empire-silver/10 mb-8">
              <Bot className="h-7 w-7 text-empire-silver" />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight text-empire-light">
              Deploy Your <span className="text-gradient bg-gradient-to-r from-empire-silver to-empire-canyon">Autonomous AI Agents</span>
            </h2>
            
            <p className="text-base md:text-lg text-empire-light max-w-2xl mb-8">
              Join the businesses leveraging AI voice agents to automate sales, support, and operations 24/7/365 without human limitations.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <GoHighLevelCalendar 
                calendarId="strategy-call"
                className="bg-empire-canyon-deep hover:bg-empire-canyon-deep/90 text-empire-light py-3 px-8 rounded-lg text-base flex items-center gap-2 shadow-lg shadow-empire-canyon-deep/20 transition-all duration-300"
                text="Schedule a Strategy Call"
                size="lg"
              />
            </div>
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 rounded-md bg-empire-silver/5 text-empire-silver">
                  <Brain size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-empire-silver">Autonomous Decision Making</h4>
                  <p className="text-sm text-empire-light/90">Agents that understand context and take action</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 rounded-md bg-empire-silver/5 text-empire-silver">
                  <Network size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-empire-silver">Multi-System Integration</h4>
                  <p className="text-sm text-empire-light/90">Works with your existing tools and platforms</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 rounded-md bg-empire-silver/5 text-empire-silver">
                  <Code size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-empire-silver">No-Code Configuration</h4>
                  <p className="text-sm text-empire-light/90">Easy setup without technical expertise</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="glass-card rounded-xl p-6 border border-empire-medium/10 relative overflow-hidden backdrop-blur-md">
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-empire-silver/20 to-empire-canyon/20 flex items-center justify-center border border-empire-medium/10">
                    <Bot className="h-8 w-8 text-empire-silver" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-empire-darkest/60 p-4 rounded-lg text-empire-light max-w-[80%]">
                    <p className="text-xs text-empire-medium mb-1">Customer</p>
                    <p>I need help setting up your software.</p>
                  </div>
                  
                  <div className="bg-empire-canyon/5 p-4 rounded-lg text-empire-light max-w-[80%] ml-auto">
                    <p className="text-xs text-empire-medium mb-1">AI Agent</p>
                    <p>I'd be happy to help you with that! Let's start by checking if you've completed the initial setup steps...</p>
                  </div>
                  
                  <div className="bg-empire-darkest/60 p-4 rounded-lg text-empire-light max-w-[80%]">
                    <p className="text-xs text-empire-medium mb-1">Customer</p>
                    <p>I'm stuck at the configuration screen.</p>
                  </div>
                  
                  <div className="bg-empire-canyon/5 p-4 rounded-lg text-empire-light max-w-[80%] ml-auto">
                    <p className="text-xs text-empire-medium mb-1">AI Agent</p>
                    <p>I understand. On the configuration screen, click the "Advanced Settings" button in the top right, then enable API access. Would you like me to walk you through each step?</p>
                  </div>
                </div>
                
                <div className="mt-6 bg-empire-darkest/40 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-empire-silver">Agent Status</p>
                      <p className="text-xs text-empire-medium/90">Processing customer request</p>
                    </div>
                    <div className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-empire-canyon animate-pulse-subtle mr-2"></span>
                      <span className="text-xs text-empire-medium">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default CTA;
