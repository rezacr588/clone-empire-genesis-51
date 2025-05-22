import React from 'react';
import { Bot, Calendar, HeadphonesIcon, Phone, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Features = () => {
  const cloneTypes = [
    {
      title: "Inquiry Handler Clone",
      description: "Greets customers, understands their inquiries, and routes them to the right specialist clone.",
      icon: Phone,
      color: "bg-gradient-to-br from-empire-darker to-empire-dark",
      iconClass: "text-empire-red"
    },
    {
      title: "Resolution Specialist Clone",
      description: "Handles and resolves customer issues with deep product knowledge and empathy.",
      icon: User,
      color: "bg-gradient-to-br from-empire-darker to-empire-dark",
      iconClass: "text-empire-cyan"
    },
    {
      title: "Feedback Collector Clone",
      description: "Gathers customer feedback and sentiment to drive continuous improvement.",
      icon: HeadphonesIcon,
      color: "bg-gradient-to-br from-empire-darker to-empire-dark",
      iconClass: "text-empire-cyan"
    },
    {
      title: "Escalation Coordinator Clone",
      description: "Manages complex cases by escalating them to human agents or advanced AI clones.",
      icon: Bot,
      color: "bg-gradient-to-br from-empire-darker to-empire-dark",
      iconClass: "text-empire-red"
    },
    {
      title: "Follow-Up Clone",
      description: "Ensures post-resolution follow-up to maintain high customer satisfaction.",
      icon: Calendar,
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
          <Badge variant="outline" className="mb-4 bg-empire-darker/50 border-empire-cyan text-empire-cyan">
            Clone Roles
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            <span className="text-gradient bg-gradient-to-r from-white via-empire-cyan to-white">
              Customer Service Clone Team
            </span>
          </h1>
          <p className="text-lg md:text-xl text-empire-light mb-8">
            Each AI clone specializes in a customer service role, collaborating seamlessly to support your customers 24/7.
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
