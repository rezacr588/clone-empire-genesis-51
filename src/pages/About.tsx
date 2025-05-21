
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const About = () => {
  useEffect(() => {
    document.title = "About | The Clone Empire";
  }, []);

  const teamMembers = [
    {
      name: "Alexandra Chen",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200",
      bio: "Former AI Research Lead at OpenAI with a vision to create digital humans indistinguishable from the real thing."
    },
    {
      name: "Marcus Reinhardt",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
      bio: "PhD in Speech Synthesis from MIT, pioneering the neural voice technology that powers our AI clones."
    },
    {
      name: "Sophia Walker",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
      bio: "Former Product Lead at Google Assistant, focusing on natural language understanding and contextual AI responses."
    },
    {
      name: "James Wilson",
      role: "Chief AI Architect",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
      bio: "Published researcher in the field of conversational AI with over 20 patents in machine learning."
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Founded as a research project at the MIT Media Lab focused on voice synthesis."
    },
    {
      year: "2019",
      title: "First Prototype",
      description: "Developed the first AI clone capable of carrying contextual conversations with neural voice."
    },
    {
      year: "2021",
      title: "Seed Funding",
      description: "Secured $8.5M in seed funding to expand the team and refine the technology."
    },
    {
      year: "2022",
      title: "Commercial Launch",
      description: "Released the first commercial version of Clone Empire platform for enterprise clients."
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Opened offices in San Francisco, London, and Singapore with clients in 12 countries."
    }
  ];

  return (
    <div className="bg-empire-darkest text-white min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                We are building the <span className="text-empire-cyan">future</span> of human-AI collaboration
              </h1>
              <div className="w-24 h-1 bg-empire-cyan mb-8"></div>
              <p className="text-lg md:text-xl text-empire-light max-w-2xl">
                The Clone Empire is pioneering the development of AI voice agents that can represent individuals and businesses with unprecedented realism and intelligence.
              </p>
            </div>
          </div>
          
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden opacity-20">
            <div className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?auto=format&fit=crop&q=80&w=1000')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-empire-darkest"></div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-20 bg-empire-darker relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-empire-medium/20 to-transparent"></div>
          
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Story</h2>
                <p className="text-empire-light mb-6">
                  Founded in 2018, The Clone Empire began as a research initiative focused on advancing neural voice synthesis to create more natural human-computer interactions.
                </p>
                <p className="text-empire-light mb-8">
                  What started as a small team of researchers has evolved into a global leader in AI voice agent technology, serving businesses across multiple industries seeking to automate and scale their operations without sacrificing the human touch.
                </p>
                <Button className="bg-empire-darkCyan hover:bg-empire-cyan text-white">
                  Our Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div>
                <div className="relative rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80&w=1200" 
                    alt="Abstract wavy structure representing AI" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-empire-darkest to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">Meet Our Team</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-empire-cyan to-empire-red rounded-xl opacity-20 group-hover:opacity-40 blur-lg transition-all duration-500"></div>
                  <div className="relative bg-empire-darker border border-empire-charcoal/50 rounded-xl overflow-hidden p-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-medium mb-1 text-center">{member.name}</h3>
                    <p className="text-empire-cyan text-sm mb-4 text-center">{member.role}</p>
                    <p className="text-empire-light text-sm text-center">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Timeline */}
        <section className="py-20 bg-empire-darker relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-empire-medium/20 to-transparent"></div>
          
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">Our Journey</h2>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline connector */}
              <div className="absolute top-0 bottom-0 left-16 md:left-1/2 w-px bg-empire-charcoal transform -translate-x-1/2"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0">
                  {/* Timeline dot */}
                  <div className="absolute left-16 md:left-1/2 w-6 h-6 rounded-full bg-empire-darker border-2 border-empire-cyan transform -translate-x-1/2"></div>
                  
                  {/* Content side */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 text-right' : 'md:pl-16 md:order-1'}`}>
                    <div className="bg-empire-darkest p-6 rounded-xl border border-empire-charcoal/50">
                      <span className="inline-block px-4 py-1 rounded-full text-xs bg-empire-darkCyan text-white mb-2">{milestone.year}</span>
                      <h3 className="text-xl font-medium mb-2">{milestone.title}</h3>
                      <p className="text-empire-light">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Empty side for layout */}
                  <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'order-1' : ''}`}></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
