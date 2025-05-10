
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      name: "Momentum",
      description: "Perfect for startups with focused needs.",
      price: "From $1,500",
      frequency: "/month",
      features: [
        "1 Custom AI Clone",
        "Voice-matched to you or your rep",
        "Standard 2-week training",
        "Email support",
        "Basic CRM integrations",
        "Up to 200 conversations/month",
      ],
      highlight: false
    },
    {
      name: "Velocity",
      description: "Scale your sales operations with multiple clones.",
      price: "From $4,000",
      frequency: "/month",
      features: [
        "3 Custom AI Clones",
        "Voice-matched to multiple team members",
        "Advanced 1-week training",
        "24/7 email & chat support",
        "Advanced integrations (CRM, Calendar, etc.)",
        "Unlimited conversations",
        "Custom scripts & objection handling",
        "Weekly optimization"
      ],
      highlight: true
    },
    {
      name: "Infinity",
      description: "Enterprise-grade AI workforce.",
      price: "Custom",
      frequency: "",
      features: [
        "Unlimited Custom AI Clones",
        "Full sales team voice matching",
        "VIP 72-hour training",
        "Dedicated account executive",
        "Enterprise API access",
        "Unlimited conversations",
        "Custom dashboards & analytics",
        "Weekly strategy sessions",
        "White-label solutions"
      ],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-empire-darkest relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-empire-medium/20 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-empire-red font-medium mb-3">Packages</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Choose Your Plan</h2>
          <p className="text-empire-light text-lg max-w-3xl mx-auto">
            Select the right package for your business needs with our flexible pricing options.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden transition-all duration-300 group ${
                pkg.highlight 
                ? 'border-empire-red bg-gradient-to-b from-empire-darker to-empire-darkest border-2 shadow-lg shadow-empire-red/5' 
                : 'border-empire-charcoal/50 bg-empire-darker/50 border'
              }`}
            >
              {pkg.highlight && (
                <div className="bg-empire-red text-white py-1.5 px-4 text-center text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className={`text-2xl font-semibold mb-2 ${pkg.highlight ? 'text-empire-red' : 'text-white'}`}>
                  {pkg.name}
                </h3>
                <p className="text-empire-light mb-6 h-12">{pkg.description}</p>
                
                <div className="mb-8">
                  <div className="text-3xl font-bold text-white">{pkg.price}</div>
                  <div className="text-empire-light">{pkg.frequency}</div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle2 className={`h-5 w-5 mr-3 flex-shrink-0 ${pkg.highlight ? 'text-empire-red' : 'text-empire-medium'}`} />
                      <span className="text-empire-light">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full py-6 group-hover:-translate-y-1 transition-transform ${
                    pkg.highlight 
                    ? 'bg-empire-red hover:bg-empire-red/90 text-white' 
                    : 'border border-empire-medium/50 bg-empire-charcoal/50 hover:bg-empire-charcoal/70 text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
