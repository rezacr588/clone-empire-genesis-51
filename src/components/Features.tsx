
import React from 'react';
import { Bot, Calendar, HeadphonesIcon, Phone, User } from 'lucide-react';

const Features = () => {
  const cloneTypes = [
    {
      title: "Appointment Setter",
      description: "Book meetings around the clock without human involvement. Prospect, qualify, and schedule – all through AI.",
      icon: Calendar,
      color: "bg-gradient-to-br from-empire-darker to-empire-dark",
      iconClass: "text-empire-cyan"
    },
    {
      title: "AI Sales Closer",
      description: "Handle objections, present solutions, and close deals using voice that sounds just like you or your best salesperson.",
      icon: User,
      color: "bg-gradient-to-br from-empire-darker to-empire-dark",
      iconClass: "text-empire-cyan"
    },
    {
      title: "Customer Success Agent",
      description: "Support tickets, product onboarding, and account management handled by AI clones that know your business inside out.",
      icon: HeadphonesIcon,
      color: "bg-gradient-to-br from-empire-darker to-empire-dark",
      iconClass: "text-empire-cyan"
    },
    {
      title: "Cold Calling Agent",
      description: "Scale outreach with voice AI that can have natural conversations, qualify leads, and book meetings.",
      icon: Phone,
      color: "bg-gradient-to-br from-empire-darker to-empire-dark",
      iconClass: "text-empire-cyan"
    },
    {
      title: "Personalized AI Voice Assistant",
      description: "Custom agent built for your unique needs - from handling specialized workflows to executing complex business processes.",
      icon: Bot,
      color: "bg-gradient-to-br from-empire-darker to-empire-dark",
      iconClass: "text-empire-cyan"
    }
  ];

  return (
    <section id="features" className="py-32 bg-empire-darkest relative overflow-hidden">
      {/* Glowing orb effect */}
      <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-cyan-glow opacity-50 blur-3xl"></div>
      <div className="absolute right-1/4 bottom-1/4 w-64 h-64 bg-cyan-glow opacity-30 blur-2xl"></div>
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(rgba(30, 174, 219, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 174, 219, 0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      ></div>
      
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-empire-cyan/20 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <p className="text-empire-cyan font-medium mb-4 tracking-wider uppercase text-sm">Clone Agent Types</p>
          <h2 className="text-4xl md:text-5xl font-medium mb-6 text-white tracking-tight">
            <span className="text-gradient bg-gradient-to-r from-white via-empire-silver to-empire-light">What We </span>
            <span className="text-empire-cyan">Do</span>
          </h2>
          <p className="text-empire-light text-lg leading-relaxed">
            Deploy AI clones built for specific roles within your business, from lead generation to customer support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cloneTypes.map((clone, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 ${clone.color} backdrop-blur-md border border-empire-cyan/10 transition-all hover:-translate-y-2 duration-300 h-full flex flex-col relative overflow-hidden group`}
            >
              {/* Glass effect background */}
              <div className="absolute inset-0 bg-glass-gradient opacity-70"></div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-empire-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className={`rounded-full w-14 h-14 flex items-center justify-center mb-6 ${clone.iconClass} bg-empire-darker/70 border border-empire-cyan/20 group-hover:border-empire-cyan/40 transition-colors duration-300`}>
                  <clone.icon size={28} />
                </div>
                <h3 className="text-xl font-medium mb-3 text-white">{clone.title}</h3>
                <p className="text-empire-light flex-grow leading-relaxed">{clone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
