import React from 'react';
import { CheckCircle2, Settings2, Sparkles } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Clone Type",
      description: "Select from specialized AI clones designed for appointment setting, sales, customer success, or custom requirements.",
      icon: Sparkles,
      color: "text-sky-400"
    },
    {
      number: "02",
      title: "We Build + Train",
      description: "Our team builds your custom AI clone with your voice, scripts, and knowledge base, ready to represent your business.",
      icon: Settings2,
      color: "text-empire-red"
    },
    {
      number: "03",
      title: "You Scale on Autopilot",
      description: "Deploy your clone to handle unlimited conversations while you focus on growth and strategy.",
      icon: CheckCircle2,
      color: "text-emerald-400"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-empire-darker relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-empire-medium/20 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-empire-red font-medium mb-3">The Process</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">How It Works</h2>
          <p className="text-empire-light text-lg max-w-3xl mx-auto">
            Getting your AI clone up and running is a seamless process designed for busy professionals.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute top-0 bottom-0 left-16 md:left-1/2 w-px bg-empire-charcoal/50 transform -translate-x-1/2"></div>
            
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-16 md:left-1/2 w-8 h-8 rounded-full bg-empire-darker border-2 border-empire-red transform -translate-x-1/2"></div>
                
                {/* Content side */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:order-1'}`}>
                  <div className="bg-empire-darker/50 border border-empire-charcoal/50 rounded-xl p-6 md:p-8 hover:border-empire-red/30 transition-all duration-300 h-full">
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step.color} bg-empire-darkest mr-4`}>
                        <step.icon size={20} />
                      </div>
                      <span className="text-2xl font-medium text-empire-red">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-medium mb-4 text-white">{step.title}</h3>
                    <p className="text-empire-light">{step.description}</p>
                  </div>
                </div>
                
                {/* Empty side for layout */}
                <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'order-1' : ''}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
