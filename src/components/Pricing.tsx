
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Phone, Calendar, Headset } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      name: "Basic Setup",
      description: "Perfect for smaller businesses and initial deployments.",
      price: "$3,500",
      frequency: "one-time",
      monthlyFee: "from $349",
      features: [
        "Free CRM integration",
        "Monthly fee depends on volume",
        "Voice-matched AI agent",
        "24/7 availability",
        "Cold calling capabilities",
        "Inbound call handling",
      ],
      icon: <Phone className="h-8 w-8 text-empire-red" />,
      highlight: false
    },
    {
      name: "Advanced Setup",
      description: "Enterprise-grade voice AI with enhanced capabilities.",
      price: "$6,500",
      frequency: "one-time",
      monthlyFee: "from $497",
      features: [
        "Free CRM integration",
        "Monthly fee depends on volume",
        "Premium voice customization",
        "Multiple AI agents",
        "Advanced call routing",
        "Custom integrations",
        "Priority support",
        "Analytics dashboard"
      ],
      icon: <Headset className="h-8 w-8 text-empire-red" />,
      highlight: true
    },
    {
      name: "No Cure, No Pay",
      description: "Performance-based model for qualified sales operations.",
      price: "$1,500",
      frequency: "one-time",
      monthlyFee: "from $40 per booking",
      features: [
        "Pay only for successful appointments",
        "Selected clients & sales purposes",
        "Transparent success metrics",
        "Seamless CRM integration",
        "Performance optimization",
        "Weekly reports"
      ],
      icon: <Calendar className="h-8 w-8 text-empire-red" />,
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-empire-darkest relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-empire-medium/20 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-empire-red font-medium mb-3">Packages</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">AI Voice Agent Pricing</h2>
          <p className="text-empire-light text-lg max-w-3xl mx-auto mb-8">
            Cold caller. Receptionist. Support. One AI, a thousand applications.
          </p>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <h3 className="text-2xl font-medium mb-6">Let AI handle your calls</h3>
          <p className="text-empire-light text-lg">
            The AI Voice Agent calls your prospects, handles inbound calls, answers questions, and books appointments. 
            It sounds human, can use your voice (if desired), and is available 24/7. Ideal for agencies, sales teams, or support.
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
                <div className="flex items-center justify-center mb-6">
                  <div className={`p-3 rounded-full ${pkg.highlight ? 'bg-empire-red/10' : 'bg-empire-charcoal/30'}`}>
                    {pkg.icon}
                  </div>
                </div>
                
                <h3 className={`text-2xl font-semibold mb-2 text-center ${pkg.highlight ? 'text-empire-red' : 'text-white'}`}>
                  {pkg.name}
                </h3>
                <p className="text-empire-light mb-6 text-center h-12">{pkg.description}</p>
                
                <div className="mb-4 text-center">
                  <div className="text-3xl font-bold text-white">{pkg.price}</div>
                  <div className="text-empire-light">{pkg.frequency}</div>
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-xl font-medium text-white">{pkg.monthlyFee}</div>
                  <div className="text-empire-light text-sm">ongoing service</div>
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
        
        <div className="mt-16 max-w-3xl mx-auto bg-empire-darker/50 border border-empire-charcoal/50 rounded-xl p-6 text-center">
          <h4 className="text-xl font-semibold mb-4">Monthly fees vary based on:</h4>
          <ul className="text-empire-light space-y-2">
            <li>• Number of calls, call minutes, active agents, and lines</li>
            <li>• Always transparently communicated based on your goals and budget</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
