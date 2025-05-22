import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Video } from 'lucide-react';

const Experience = () => {
  const experienceItems = [
    {
      icon: CheckCircle2,
      title: "Seamless onboarding",
      description: "Access all materials via Drive/Slack/Mail immediately after signing up."
    },
    {
      icon: Video,
      title: "Welcome video from your Clone",
      description: "Meet your AI-generated agent named after you."
    },
    {
      icon: Clock,
      title: "Kick-off call scheduling",
      description: "Your Clone manages your calendar for the training process."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-empire-darker relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-empire-medium/20 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-empire-red font-medium mb-3">Experience</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Post-Sale Experience</h2>
            <p className="text-empire-light text-lg mb-8">
              After you join The Clone Empire, we ensure a seamless transition into working with your new AI agents.
            </p>
            
            <div className="space-y-6 mb-8">
              {experienceItems.map((item, index) => (
                <div key={index} className="flex">
                  <div className="w-12 h-12 rounded-full bg-empire-darkest flex items-center justify-center mr-4">
                    <item.icon className="h-5 w-5 text-empire-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-white">{item.title}</h3>
                    <p className="text-empire-light">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="bg-empire-red hover:bg-empire-red/90 text-white">
              See Onboarding Process
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden border border-empire-charcoal/50">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ 
                  backgroundImage: `url('https://source.unsplash.com/1485827404703-89b55fcc595e')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-empire-darkest/90 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-empire-red/90 flex items-center justify-center cursor-pointer hover:bg-empire-red transition-colors">
                    <Video className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating element */}
            <div className="absolute -bottom-8 -right-8 bg-empire-darkest border border-empire-charcoal/50 rounded-lg p-4 max-w-xs shadow-xl">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-empire-red/10 flex items-center justify-center mr-4">
                  <span className="text-empire-red font-bold">AI</span>
                </div>
                <div>
                  <p className="text-white font-medium">AI Demo Call Funnel</p>
                  <p className="text-empire-light text-sm">Speak to a Clone before the human. Experience the future of sales.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
