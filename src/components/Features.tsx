
import React from 'react';
import { Bot, Calendar, HeadphonesIcon, Phone, User } from 'lucide-react';

const Features = () => {
  const cloneTypes = [
    {
      title: "Appointment Setter Clone",
      description: "Book meetings around the clock without human involvement. Prospect, qualify, and schedule – all through AI.",
      icon: Calendar,
      color: "bg-empire-darker border-empire-red/20",
      iconClass: "text-empire-red"
    },
    {
      title: "AI Sales Closer",
      description: "Handle objections, present solutions, and close deals using voice that sounds just like you or your best salesperson.",
      icon: User,
      color: "bg-empire-darker border-empire-red/20",
      iconClass: "text-empire-red"
    },
    {
      title: "Customer Success Agent",
      description: "Support tickets, product onboarding, and account management handled by AI clones that know your business inside out.",
      icon: HeadphonesIcon,
      color: "bg-empire-darker border-empire-red/20",
      iconClass: "text-empire-red"
    },
    {
      title: "Cold Calling Agent",
      description: "Scale outreach with voice AI that can have natural conversations, qualify leads, and book meetings.",
      icon: Phone,
      color: "bg-empire-darker border-empire-red/20",
      iconClass: "text-empire-red"
    },
    {
      title: "Personalized AI Voice Assistant",
      description: "Custom agent built for your unique needs - from handling specialized workflows to executing complex business processes.",
      icon: Bot,
      color: "bg-empire-darker border-empire-red/20",
      iconClass: "text-empire-red"
    }
  ];

  return (
    <section id="features" className="py-24 bg-empire-darkest relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-empire-medium/20 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-empire-red font-medium mb-3">Clone Agent Types</p>
          <h2 className="text-3xl md:text-4xl font-medium mb-4">What We Do</h2>
          <p className="text-empire-light text-lg">
            Deploy AI clones built for specific roles within your business, from lead generation to customer support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cloneTypes.map((clone, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 ${clone.color} border border-empire-red/20 backdrop-blur-sm transition-all hover:-translate-y-1 duration-300 h-full flex flex-col`}
            >
              <div className={`rounded-full w-12 h-12 flex items-center justify-center mb-5 ${clone.iconClass} bg-empire-darkest/50`}>
                <clone.icon size={24} />
              </div>
              <h3 className="text-xl font-medium mb-2 text-white">{clone.title}</h3>
              <p className="text-empire-light flex-grow">{clone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
