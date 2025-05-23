import React, { useRef, useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { GoHighLevelCalendar } from './calendar';
import { useTypewriter } from '@/hooks';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, ArrowRight, CheckCircle, Moon, Star, Shield, Wand2, Zap } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<string>('automate');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorHovering, setCursorHovering] = useState(false);
  
  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  
  // Mouse move effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const { animatedText } = useTypewriter([
    "Your AI agents work for you 24/7/365",
    "Personal AI workforce at your command",
    "Delegate tasks to your autonomous agents",
    "Build your intelligent agent ecosystem"
  ], 80, 40, 1800, 600);
  
  const agentUseCase = {
    automate: {
      title: "Automate Routine Tasks",
      description: "Your AI agents handle repetitive tasks independently, learning your preferences over time to deliver better results.",
      checks: ["Email classification & response", "Calendar management", "Data processing", "Customer support"],
      icon: <Zap className="h-6 w-6 text-empire-cyan" />
    },
    discover: {
      title: "Discover & Research",
      description: "Your agents search for information, monitor trends, analyze data, and present you with insights that matter to you.",
      checks: ["Web research & summarization", "Content curation", "Competitive monitoring", "Market analysis"],
      icon: <Moon className="h-6 w-6 text-empire-cyan" />
    },
    assist: {
      title: "Personalized Assistance",
      description: "Intelligent agents that adapt to your work style, anticipate your needs, and proactively help you accomplish your goals.",
      checks: ["Meeting preparation", "Decision support", "Project management", "Learning assistance"],
      icon: <Star className="h-6 w-6 text-empire-cyan" />
    }
  };

  return (
    <motion.div 
      ref={containerRef}
      className="relative w-full min-h-screen bg-empire-darkest overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Dynamic gradient background */}
        <div 
          className="absolute inset-0 bg-gradient-radial opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(68, 249, 255, 0.15) 0%, rgba(29, 58, 70, 0.1) 40%, transparent 70%)`
          }}
        />
        
        {/* Animated circles */}
        <motion.div 
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-empire-cyan/5 rounded-full blur-[120px] opacity-30"
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-[50%] -right-[15%] w-[60%] h-[50%] bg-empire-canyon-deep/10 rounded-full blur-[100px] opacity-40"
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Grid overlay */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(188, 198, 204, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(188, 198, 204, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            mask: 'radial-gradient(circle at center, black 40%, transparent 80%)'
          }}
        />
      </div>
      
      {/* Main content */}
      <div className="container mx-auto relative z-10 px-4" ref={heroRef}>
        {/* Hero section */}
        <motion.div 
          className="pt-32 pb-20 flex flex-col items-center"
          style={{ opacity: headerOpacity, y: headerY }}
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge variant="primary" className="mb-6 py-1.5 px-4 text-sm bg-empire-cyan/10 border-empire-cyan/20 text-empire-cyan">
              <span className="animate-pulse mr-1.5 h-1.5 w-1.5 rounded-full bg-empire-cyan/80"></span>
              Next-Generation Agentive AI Platform
            </Badge>
          </motion.div>
          
          {/* Main heading */}
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-center mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span className="text-empire-light">Build Your </span>
            <span className="text-gradient bg-gradient-to-br from-empire-cyan via-empire-cyan to-empire-canyon-deep font-bold">
              AI Workforce
            </span>
          </motion.h1>
          
          {/* Typewriter effect */}
          <motion.div 
            className="h-12 mb-6 flex items-center justify-center"
            aria-live="polite" 
            aria-atomic="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-lg sm:text-xl text-empire-silver font-mono relative overflow-visible">
              <span>{animatedText}</span>
              <span className="absolute right-[-0.8rem] bottom-0 text-2xl animate-pulse text-empire-silver">_</span>
            </p>
          </motion.div>
          
          {/* Subheading */}
          <motion.p 
            className="text-lg text-empire-silver/80 text-center max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Deploy intelligent AI agents that work autonomously around the clock, 
            adapting to your preferences and handling complex tasks while you focus on what matters most.
          </motion.p>
          
          {/* CTA buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <GoHighLevelCalendar 
              calendarId="demo-calendar"
              className="bg-gradient-to-br from-empire-canyon-deep to-empire-canyon hover:opacity-90 text-empire-light py-3 px-8 rounded-lg text-base flex items-center justify-center gap-2 shadow-lg shadow-empire-canyon-deep/20 group transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              text={
                <span className="flex items-center gap-2">
                  <span>Schedule Live Demo</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              }
              size="lg"
            />
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="outline"
                className="border-empire-cyan/30 bg-empire-cyan/5 hover:bg-empire-cyan/10 text-empire-cyan py-3 px-8 rounded-lg text-base group shadow-md"
              >
                <span className="flex items-center gap-2">
                  <span>Watch Demo Video</span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Features showcase */}
        <motion.div 
          className="flex flex-col items-center mb-20 pb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Feature tabs */}
          <div className="max-w-4xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {Object.keys(agentUseCase).map((tab) => {
                const isActive = activeTab === tab;
                
                return (
                  <motion.div
                    key={tab}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button
                      onClick={() => setActiveTab(tab)}
                      className={`w-full p-5 rounded-xl border ${
                        isActive
                          ? 'bg-empire-dark/80 backdrop-blur-md border-empire-cyan/20 shadow-lg shadow-empire-cyan/5'
                          : 'bg-empire-darker/40 backdrop-blur-sm border-empire-silver/10 hover:border-empire-silver/20'
                      } transition-all duration-300`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg ${isActive ? 'bg-empire-cyan/10' : 'bg-empire-silver/5'}`}>
                          {agentUseCase[tab as keyof typeof agentUseCase].icon}
                        </div>
                        <h3 className={`text-lg font-semibold ${isActive ? 'text-empire-cyan' : 'text-empire-silver'}`}>
                          {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </h3>
                      </div>
                      <p className={`text-sm ${isActive ? 'text-empire-silver/90' : 'text-empire-silver/60'} text-left`}>
                        {agentUseCase[tab as keyof typeof agentUseCase].title}
                      </p>
                    </button>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Feature content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-8 p-6 rounded-xl bg-empire-dark/30 backdrop-blur-md border border-empire-silver/10"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Icon column */}
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-xl bg-empire-cyan/10 border border-empire-cyan/20">
                      <div className="w-16 h-16 flex items-center justify-center">
                        {agentUseCase[activeTab as keyof typeof agentUseCase].icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content column */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-empire-light mb-3">
                      {agentUseCase[activeTab as keyof typeof agentUseCase].title}
                    </h3>
                    <p className="text-empire-silver/80 mb-5">
                      {agentUseCase[activeTab as keyof typeof agentUseCase].description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {agentUseCase[activeTab as keyof typeof agentUseCase].checks.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-empire-cyan flex-shrink-0" />
                          <span className="text-empire-silver text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
        
        {/* Stats section */}
        <motion.div 
          className="max-w-5xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="h-6 w-6 text-empire-cyan" />,
                title: "24/7 Operation",
                desc: "Your agents work around the clock without breaks"
              },
              {
                icon: <Shield className="h-6 w-6 text-empire-cyan" />,
                title: "95% Accuracy",
                desc: "High-precision task execution and learning"
              },
              {
                icon: <Wand2 className="h-6 w-6 text-empire-cyan" />,
                title: "10x Productivity",
                desc: "Multiply your team's output and effectiveness"
              }
            ].map((stat, i) => (
              <motion.div
                key={stat.title}
                className="p-6 rounded-xl border border-empire-silver/10 bg-gradient-to-b from-empire-dark/40 to-empire-darker/60 backdrop-blur-md hover:border-empire-cyan/20 transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 1 + (i * 0.2) }
                }}
              >
                <div className="p-2 bg-empire-cyan/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-xl font-bold text-empire-light mb-2">{stat.title}</h3>
                <p className="text-empire-silver/70 text-sm">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Floating action button */}
      <motion.div 
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring" }}
      >
        <Button
          className="rounded-full w-14 h-14 bg-gradient-to-br from-empire-canyon-deep to-empire-canyon hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-0 shadow-lg shadow-empire-canyon-deep/30"
          onMouseEnter={() => setCursorHovering(true)}
          onMouseLeave={() => setCursorHovering(false)}
        >
          <AnimatePresence mode="wait">
            {cursorHovering ? (
              <motion.div
                key="hovered"
                initial={{ scale: 0, rotate: -30 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 30 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="h-6 w-6 text-empire-light" />
              </motion.div>
            ) : (
              <motion.div
                key="default"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Zap className="h-6 w-6 text-empire-light" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
