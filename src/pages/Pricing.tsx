import React, { useEffect } from 'react';
import Layout from "@/components/Layout";
import { CheckCircle } from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter Empire",
    price: "$99",
    frequency: "/month",
    description: "For individuals and small teams looking to deploy their first AI agents.",
    features: [
      "Up to 3 AI Agent Clones",
      "Basic Task Automation",
      "Standard Support",
      "Access to Core AI Models",
      "Monthly Performance Reports"
    ],
    cta: "Begin Your Reign"
  },
  {
    name: "Expansionist Imperium",
    price: "$299",
    frequency: "/month",
    description: "For growing businesses aiming to scale their AI workforce and operations.",
    features: [
      "Up to 10 AI Agent Clones",
      "Advanced Task Automation & Workflows",
      "Priority Support",
      "Access to Premium AI Models",
      "Customizable Dashboards & Analytics",
      "API Access"
    ],
    cta: "Expand Your Territory",
    popular: true
  },
  {
    name: "Galactic Hegemony",
    price: "Custom",
    frequency: "",
    description: "For large enterprises requiring bespoke AI solutions and dedicated infrastructure.",
    features: [
      "Unlimited AI Agent Clones",
      "Fully Customized AI Solutions",
      "Dedicated Account Management & Support",
      "Private Cloud Deployment Option",
      "Enterprise-grade Security & Compliance",
      "Tailored SLA & Onboarding"
    ],
    cta: "Contact Sales"
  }
];

const Pricing = () => {
  useEffect(() => {
    document.title = "Pricing Plans | The Clone Empire";
  }, []);

  return (
    <Layout>
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-empire-red mb-4">
          Pricing That Scales With Your Ambition
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-empire-dark dark:text-empire-light max-w-3xl mx-auto">
          Choose the perfect plan to build and expand your AI Clone Empire. Transparent pricing for unparalleled AI agent capabilities.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 xl:gap-10 items-stretch">
        {pricingPlans.map((plan, index) => (
          <div 
            key={index} 
            className={`bg-white dark:bg-empire-dark p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-empire-medium/20 dark:border-empire-light/10 flex flex-col ${plan.popular ? 'border-empire-red dark:border-empire-red ring-2 ring-empire-red' : ''}`}
          >
            {plan.popular && (
              <div className="text-center mb-4 -mt-10">
                <span className="bg-empire-red text-white text-sm font-semibold px-4 py-1 rounded-full">Most Popular</span>
              </div>
            )}
            <h2 className="text-2xl md:text-3xl font-semibold text-empire-red mb-2">{plan.name}</h2>
            <p className="text-3xl md:text-4xl font-bold text-empire-dark dark:text-white mb-1">
              {plan.price}
              {plan.frequency && <span className="text-lg font-normal text-empire-dark/70 dark:text-empire-light/70">{plan.frequency}</span>}
            </p>
            <p className="text-empire-dark/80 dark:text-empire-light/80 mb-6 min-h-[40px]">{plan.description}</p>
            
            <ul className="space-y-3 mb-8 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-empire-lime mr-2 mt-0.5 flex-shrink-0" />
                  <span className='text-empire-dark dark:text-empire-light/90'>{feature}</span>
                </li>
              ))}
            </ul>
            
            <a
              href={plan.cta === "Contact Sales" ? "/contact" : "#"}
              className={`w-full text-center mt-auto inline-block font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-300 ${plan.popular ? 'bg-empire-red hover:bg-empire-red-dark text-white' : 'bg-empire-medium/20 hover:bg-empire-medium/40 dark:bg-empire-light/10 dark:hover:bg-empire-light/20 text-empire-red dark:text-empire-red'}`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-16 md:mt-24 bg-white dark:bg-empire-dark p-8 md:p-12 rounded-xl shadow-lg border border-empire-medium/10 dark:border-empire-light/5">
          <h3 className="text-2xl md:text-3xl font-semibold text-empire-dark dark:text-white mb-4">Need a Custom Solution?</h3>
          <p className="text-lg text-empire-dark/80 dark:text-empire-light/80 max-w-2xl mx-auto mb-6">
            If your requirements go beyond our standard plans, or you need specific integrations and dedicated support, our strategists are ready to design a bespoke AI Clone deployment for your enterprise.
          </p>
          <a
            href="/contact"
            className="inline-block bg-empire-lime hover:bg-opacity-80 text-empire-darkest font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
          >
            Discuss Your Project
          </a>
        </div>
    </Layout>
  );
};

export default Pricing; 