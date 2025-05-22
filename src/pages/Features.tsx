import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Bot, MessageCircle, Mic, Smartphone, Wand2 } from 'lucide-react';

const Features = () => {
  useEffect(() => {
    document.title = "Features | The Clone Empire";
  }, []);

  const featureCards = [
    {
      icon: <Bot className="w-10 h-10 text-empire-cyan" />,
      title: "Personal AI Clones",
      description: "Voice-powered agents that represent your business with your personality and expertise.",
      badge: "Popular"
    },
    {
      icon: <Mic className="w-10 h-10 text-empire-red" />,
      title: "Voice Replication",
      description: "Indistinguishable from human speech using our advanced neural voice technology.",
      badge: "New"
    },
    {
      icon: <Smartphone className="w-10 h-10 text-white" />,
      title: "Multi-Channel Deployment",
      description: "Deploy your clones across web, mobile, voice assistants, and telephony systems."
    },
    {
      icon: <MessageCircle className="w-10 h-10 text-empire-cyan" />,
      title: "Real-time Conversations",
      description: "Natural, flowing conversations with contextual understanding and memory."
    },
    {
      icon: <Wand2 className="w-10 h-10 text-empire-red" />,
      title: "Custom Knowledge Base",
      description: "Train your clone with your expertise, products, and service information."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[10%] right-[5%] w-[40%] h-[40%] bg-empire-cyan/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] left-[5%] w-[30%] h-[30%] bg-empire-red/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 bg-empire-darker/50 border-empire-cyan text-empire-cyan">
              Features
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
              <span className="text-gradient bg-gradient-to-r from-white via-empire-cyan to-white">
                The Future of Business
              </span>
            </h1>
            <p className="text-lg md:text-xl text-empire-light mb-8">
              Our AI clones represent the next evolution in business automation, providing 24/7 service while maintaining the human touch.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 opacity-5">
          <div 
            className="h-full w-full"
            style={{
              backgroundImage: "linear-gradient(rgba(30, 174, 219, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 174, 219, 0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px"
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureCards.map((feature, index) => (
              <Card key={index} className="bg-empire-darker/50 border border-empire-charcoal/50 overflow-hidden backdrop-blur-lg hover:border-empire-cyan/30 transition-all duration-500 group">
                <CardContent className="p-8">
                  <div className="mb-5 flex justify-between items-start">
                    <div className="w-14 h-14 rounded-xl bg-empire-darkest flex items-center justify-center">
                      {feature.icon}
                    </div>
                    {feature.badge && (
                      <Badge variant="outline" className={`${feature.badge === 'New' ? 'bg-empire-red/10 border-empire-red text-empire-red' : 'bg-empire-cyan/10 border-empire-cyan text-empire-cyan'}`}>
                        {feature.badge}
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-white group-hover:text-empire-cyan transition-colors">{feature.title}</h3>
                  <p className="text-empire-light mb-5">{feature.description}</p>
                  <Button variant="ghost" className="p-0 text-empire-cyan hover:text-white hover:bg-transparent group">
                    <span>Learn more</span>
                    <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="py-24 bg-empire-darker relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-empire-medium/20 to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">Technical Specifications</h2>
            
            <div className="space-y-8">
              <div className="p-6 bg-empire-darkest rounded-xl border border-empire-charcoal/50">
                <h3 className="text-xl font-medium mb-4 text-empire-cyan">Voice Processing</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-empire-medium mb-1">Latency</p>
                    <p className="text-white">100-250ms response time</p>
                  </div>
                  <div>
                    <p className="text-sm text-empire-medium mb-1">Sample Rate</p>
                    <p className="text-white">48kHz / 24-bit audio</p>
                  </div>
                  <div>
                    <p className="text-sm text-empire-medium mb-1">Voice Models</p>
                    <p className="text-white">Custom neural networks</p>
                  </div>
                  <div>
                    <p className="text-sm text-empire-medium mb-1">Languages</p>
                    <p className="text-white">20+ global languages</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-empire-darkest rounded-xl border border-empire-charcoal/50">
                <h3 className="text-xl font-medium mb-4 text-empire-cyan">AI Framework</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-empire-medium mb-1">Model Size</p>
                    <p className="text-white">175B parameter foundation</p>
                  </div>
                  <div>
                    <p className="text-sm text-empire-medium mb-1">Memory Retention</p>
                    <p className="text-white">Contextual long-term memory</p>
                  </div>
                  <div>
                    <p className="text-sm text-empire-medium mb-1">Training</p>
                    <p className="text-white">Reinforcement learning + human feedback</p>
                  </div>
                  <div>
                    <p className="text-sm text-empire-medium mb-1">Deployment</p>
                    <p className="text-white">Edge + cloud hybrid architecture</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
