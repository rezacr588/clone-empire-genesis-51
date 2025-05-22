import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Bot, Code, Network, Brain } from 'lucide-react';
import CalendlyWidget from './CalendlyWidget';

const CTA = () => {
  return (
    <section className="py-32 dark:bg-empire-darkest bg-white relative overflow-hidden font-exo">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-empire-cyan/20 to-transparent"></div>
      
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-empire-cyan/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-empire-charcoal/20 blur-[100px] rounded-full"></div>
        
        {/* Floating agent visualizations */}
        <div className="absolute top-[15%] left-[10%] opacity-50">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="40" stroke="#1EAEDB" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="60" cy="60" r="60" stroke="#1EAEDB" strokeWidth="0.5" strokeDasharray="2 2" />
          </svg>
        </div>
        
        <div className="absolute bottom-[20%] right-[15%] opacity-30">
          <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="40" width="80" height="80" stroke="#E10600" strokeWidth="1" strokeDasharray="4 4" />
            <rect x="20" y="20" width="120" height="120" stroke="#E10600" strokeWidth="0.5" strokeDasharray="2 2" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-empire-cyan/10 border border-empire-cyan/30 mb-8">
                <Bot className="h-8 w-8 text-empire-cyan" />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight dark:text-white text-empire-dark">
                Deploy Your <span className="text-empire-cyan">Autonomous</span> <span className="text-empire-red">AI Agents</span>
              </h2>
              
              <p className="text-lg md:text-xl dark:text-empire-medium text-empire-dark max-w-2xl mb-10">
                Join the businesses leveraging AI voice agents to automate sales, support, and operations 24/7/365 without human limitations.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <CalendlyWidget 
                  url="https://calendly.com/clone-empire/demo"
                  className="bg-gradient-to-r from-empire-red to-empire-darkCyan hover:from-empire-darkCyan hover:to-empire-red text-white py-6 px-8 rounded-xl text-lg flex items-center gap-2 shadow-lg shadow-empire-cyan/20 transition-all duration-500"
                  text="Schedule a Strategy Call"
                  size="lg"
                />
              </div>
              
              {/* Features list */}
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 rounded-md bg-empire-cyan/10 dark:text-empire-cyan text-empire-darkCyan">
                    <Brain size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium dark:text-white text-empire-dark">Autonomous Decision Making</h4>
                    <p className="text-sm dark:text-empire-medium text-empire-dark">Agents that understand context and take action</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 rounded-md bg-empire-cyan/10 dark:text-empire-cyan text-empire-darkCyan">
                    <Network size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium dark:text-white text-empire-dark">Multi-System Integration</h4>
                    <p className="text-sm dark:text-empire-medium text-empire-dark">Works with your existing tools and platforms</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 rounded-md bg-empire-cyan/10 dark:text-empire-cyan text-empire-darkCyan">
                    <Code size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium dark:text-white text-empire-dark">No-Code Configuration</h4>
                    <p className="text-sm dark:text-empire-medium text-empire-dark">Easy setup without technical expertise</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Agent visual representation */}
            <div className="relative">
              <div className="glass-card rounded-2xl p-8 border border-empire-cyan/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-empire-cyan/5 to-empire-red/5 z-0"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-empire-cyan to-empire-red flex items-center justify-center">
                      <Bot className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {/* Agent conversation simulation */}
                    <div className="bg-empire-darker/20 p-4 rounded-lg dark:text-white text-empire-dark max-w-[80%]">
                      <p className="text-xs text-empire-medium mb-1">Customer</p>
                      <p>I need help setting up your software.</p>
                    </div>
                    
                    <div className="bg-empire-cyan/10 p-4 rounded-lg dark:text-white text-empire-dark max-w-[80%] ml-auto">
                      <p className="text-xs text-empire-medium mb-1">AI Agent</p>
                      <p>I'd be happy to help you with that! Let's start by checking if you've completed the initial setup steps...</p>
                    </div>
                    
                    <div className="bg-empire-darker/20 p-4 rounded-lg dark:text-white text-empire-dark max-w-[80%]">
                      <p className="text-xs text-empire-medium mb-1">Customer</p>
                      <p>I'm stuck at the configuration screen.</p>
                    </div>
                    
                    <div className="bg-empire-cyan/10 p-4 rounded-lg dark:text-white text-empire-dark max-w-[80%] ml-auto">
                      <p className="text-xs text-empire-medium mb-1">AI Agent</p>
                      <p>I understand. On the configuration screen, click the "Advanced Settings" button in the top right, then enable API access. Would you like me to walk you through each step?</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-empire-darker/10 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium dark:text-white text-empire-dark">Agent Status</p>
                        <p className="text-xs dark:text-empire-medium text-empire-dark">Processing customer request</p>
                      </div>
                      <div className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-empire-cyan animate-pulse-subtle mr-2"></span>
                        <span className="text-xs dark:text-empire-medium text-empire-dark">Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
