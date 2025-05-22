import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Play, Bot, Sparkles, Braces, Cpu } from 'lucide-react';
import CalendlyWidget from './CalendlyWidget';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [animatedText, setAnimatedText] = useState('');
  const fullText = "Your AI agent works 24/7/365";
  
  useEffect(() => {
    // Simple debounce function
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
      let timeoutId: NodeJS.Timeout;
      return function(this: ThisParameterType<T>, ...args: Parameters<T>) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
      } as T;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };

    const debouncedHandleMouseMove = debounce(handleMouseMove, 16); // Debounce by roughly one frame (16ms)
    
    document.addEventListener('mousemove', debouncedHandleMouseMove);
    
    // Text typing animation
    let i = 0;
    const typeInterval = setInterval(() => {
      setAnimatedText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(typeInterval);
      }
    }, 100);
    
    return () => {
      document.removeEventListener('mousemove', debouncedHandleMouseMove);
      clearInterval(typeInterval);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pb-20 bg-empire-light dark:bg-empire-darkest"
      style={{
        backgroundImage: "radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(30, 174, 219, 0.08), transparent 40%)",
      }}
    >
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] w-[80%] h-[70%] bg-empire-red/5 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute top-[30%] -right-[10%] w-[70%] h-[50%] bg-empire-cyan/10 rounded-full blur-[100px] opacity-60"></div>
        
        {/* Floating AI elements */}
        <div className="absolute top-[15%] left-[10%] animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="relative p-4 glass-card rounded-xl w-24 h-24 flex items-center justify-center">
            <Cpu className="w-10 h-10 text-empire-cyan" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-empire-cyan rounded-full pulse-subtle"></div>
          </div>
        </div>
        
        <div className="absolute bottom-[20%] right-[15%] animate-float" style={{ animationDelay: '1.2s' }}>
          <div className="relative p-4 glass-card rounded-xl w-20 h-20 flex items-center justify-center">
            <Bot className="w-8 h-8 text-empire-red" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-empire-red rounded-full pulse-subtle"></div>
          </div>
        </div>
        
        <div className="absolute top-[40%] right-[10%] animate-float" style={{ animationDelay: '0.8s' }}>
          <div className="relative p-4 glass-card rounded-xl w-16 h-16 flex items-center justify-center">
            <Braces className="w-6 h-6 text-empire-cyan" />
          </div>
        </div>
      </div>
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "linear-gradient(rgba(30, 174, 219, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 174, 219, 0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      ></div>
      
      <div className="container mx-auto px-4 pt-24 z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-6 inline-block">
            <span className="inline-flex items-center rounded-full border border-empire-cyan/30 bg-empire-cyan/10 px-4 py-2 text-sm dark:text-empire-cyan text-empire-darkCyan font-medium">
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              <span className="animate-pulse-subtle mr-1.5 h-1.5 w-1.5 rounded-full bg-empire-cyan"></span>
              Agentic AI Automation
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight mb-6 animate-fade-in dark:text-white text-empire-dark">
            Build Your <span className="text-gradient bg-gradient-to-r from-empire-cyan via-empire-red to-empire-cyan">AI Clone Empire</span>
          </h1>
          
          <div className="h-8 mb-4" aria-live="polite" aria-atomic="true">
            <p className="text-2xl text-empire-cyan font-mono" aria-label={fullText}>{animatedText}<span className="animate-pulse">|</span></p>
          </div>
          
          <p className="text-lg md:text-xl dark:text-empire-light text-empire-dark max-w-3xl mx-auto mb-10 animate-slide-up opacity-90">
            Deploy autonomous AI agents that handle sales, support, and operations with your voice, personality, and expertise — scaling your business 24/7/365.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <CalendlyWidget 
              url="https://calendly.com/clone-empire/demo"
              className="bg-empire-cyan hover:bg-empire-darkCyan text-white py-6 px-8 rounded-lg text-lg flex items-center gap-2 hover-lift shadow-lg shadow-empire-cyan/20"
              text="Book a Demo"
              size="lg"
            />
            
            <Button 
              variant="outline"
              className="border-empire-cyan dark:bg-empire-charcoal/50 dark:hover:bg-empire-charcoal/70 bg-white/50 hover:bg-white/70 dark:text-white text-empire-dark py-6 px-8 rounded-lg text-lg flex items-center gap-2 hover-lift"
            >
              <Play size={18} />
              See it in Action
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto">
            <div className="glass-card p-6 rounded-xl text-left">
              <h3 className="text-3xl font-bold dark:text-empire-cyan text-empire-darkCyan mb-2">24/7</h3>
              <p className="dark:text-empire-light text-empire-dark text-sm">Automated operations that never sleep</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-left">
              <h3 className="text-3xl font-bold dark:text-empire-cyan text-empire-darkCyan mb-2">95%</h3>
              <p className="dark:text-empire-light text-empire-dark text-sm">Customer satisfaction with AI agents</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-left">
              <h3 className="text-3xl font-bold dark:text-empire-cyan text-empire-darkCyan mb-2">10x</h3>
              <p className="dark:text-empire-light text-empire-dark text-sm">Return on investment with clone automation</p>
            </div>
          </div>
        </div>
        
        {/* Abstract design element */}
        <div className="relative w-full h-12 mt-24">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1px] h-12 bg-gradient-to-b from-empire-cyan/0 via-empire-cyan/50 to-empire-cyan/5"></div>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-3 h-3 rounded-full border border-empire-cyan/20 bg-empire-cyan/10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
