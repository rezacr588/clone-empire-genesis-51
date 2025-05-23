import React, { useEffect, useState } from 'react';
import Layout from "@/components/Layout";
import { CheckCircle, X, HelpCircle, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { GoHighLevelCalendar } from '@/components/calendar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Pricing data structure with feature comparison
const pricingData = {
  plans: [
  {
      id: "starter",
    name: "Starter Empire",
      price: { monthly: 99, annual: 79 },
    description: "For individuals and small teams looking to deploy their first AI agents.",
      cta: "Begin Your Reign",
      link: "/contact?plan=starter",
      featured: false
  },
  {
      id: "growth",
    name: "Expansionist Imperium",
      price: { monthly: 299, annual: 249 },
    description: "For growing businesses aiming to scale their AI workforce and operations.",
    cta: "Expand Your Territory",
      link: "/contact?plan=growth",
      featured: true
  },
  {
      id: "enterprise",
    name: "Galactic Hegemony",
      price: { monthly: "Custom", annual: "Custom" },
    description: "For large enterprises requiring bespoke AI solutions and dedicated infrastructure.",
      cta: "Contact Sales",
      link: "/contact?plan=enterprise",
      featured: false
    }
  ],
  featureCategories: [
    {
      name: "AI Agents",
      features: [
        { name: "AI Agent Clones", starter: "3", growth: "10", enterprise: "Unlimited" },
        { name: "Task Automation", starter: "Basic", growth: "Advanced", enterprise: "Custom" },
        { name: "Voice Customization", starter: false, growth: true, enterprise: true },
        { name: "Persona Development", starter: "Basic", growth: "Advanced", enterprise: "Custom" },
        { name: "Training Data Capacity", starter: "5 GB", growth: "25 GB", enterprise: "Unlimited" },
      ]
    },
    {
      name: "Platform",
      features: [
        { name: "API Access", starter: false, growth: true, enterprise: true },
        { name: "Data Export", starter: "CSV only", growth: "CSV, JSON, API", enterprise: "Full Access" },
        { name: "Custom Integrations", starter: "2", growth: "10", enterprise: "Unlimited" },
        { name: "Analytics Dashboard", starter: "Basic", growth: "Advanced", enterprise: "Custom" },
      ]
    },
    {
      name: "Support",
    features: [
        { name: "Support Level", starter: "Email only", growth: "Priority", enterprise: "Dedicated Rep" },
        { name: "Response Time", starter: "48 hours", growth: "24 hours", enterprise: "4 hours" },
        { name: "Onboarding", starter: false, growth: "Standard", enterprise: "White-glove" },
        { name: "Custom Training", starter: false, growth: false, enterprise: true },
      ]
    }
  ]
};

// Helper function to render feature value
const renderFeatureValue = (value) => {
  if (typeof value === 'boolean') {
    return value ? 
      <CheckCircle className="h-5 w-5 text-empire-cyan mx-auto" /> : 
      <X className="h-5 w-5 text-gray-400 dark:text-gray-600 mx-auto" />;
  }
  return <span className="text-center block text-gray-800 dark:text-gray-300">{value}</span>;
};

const Pricing = () => {
  // Get billing period from localStorage or default to monthly
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">(() => {
    if (typeof window !== 'undefined') {
      const savedPeriod = localStorage.getItem('billingPeriod');
      return savedPeriod === 'annual' ? 'annual' : 'monthly';
    }
    return 'monthly';
  });
  
  const [showFeatureTable, setShowFeatureTable] = useState(false);

  useEffect(() => {
    document.title = "Pricing Plans | The Clone Empire";
  }, []);

  // Save billing period preference to localStorage
  useEffect(() => {
    localStorage.setItem('billingPeriod', billingPeriod);
  }, [billingPeriod]);

  // Calculate % discount for annual billing
  const calculateSavings = () => {
    const monthlyPrice = pricingData.plans[1].price.monthly;
    const annualPrice = pricingData.plans[1].price.annual;
    
    if (typeof monthlyPrice === 'number' && typeof annualPrice === 'number') {
      const monthlyTotal = monthlyPrice * 12;
      const annualTotal = annualPrice * 12;
      return Math.round((monthlyTotal - annualTotal) / monthlyTotal * 100);
    }
    return 0;
  };

  return (
    <Layout>
      <section className="py-12 relative overflow-hidden bg-white dark:bg-empire-darkest">
        {/* Background elements - simplified for dark mode */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Remove the complex gradients and blurs for a cleaner look in dark mode */}
          <div className="absolute -top-[30%] -left-[10%] w-[80%] h-[70%] bg-empire-cyan/5 dark:bg-gray-800/20 rounded-full blur-[80px] opacity-30"></div>
          <div className="absolute top-[30%] -right-[10%] w-[70%] h-[50%] bg-empire-canyon/10 dark:bg-gray-700/10 rounded-full blur-[80px] opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="mb-6 inline-block">
              <Badge variant="primary" className="mb-4">
                <Sparkles className="mr-2 h-3.5 w-3.5" />
                Transparent Pricing
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
              <span className="text-empire-dark dark:text-white">
                Pricing That <span className="text-gradient bg-gradient-to-r from-empire-cyan to-empire-canyon">Scales</span> With Your Ambition
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan to build and expand your AI Clone Empire.
            </p>
          </div>

          {/* Billing toggle - simplified for dark mode */}
          <div className="flex justify-center mb-12">
            <Tabs 
              defaultValue="monthly"
              value={billingPeriod}
              onValueChange={(v) => setBillingPeriod(v as "monthly" | "annual")}
              className="bg-white dark:bg-gray-900 rounded-lg p-1 shadow-md border border-empire-medium/20 dark:border-gray-700"
            >
              <TabsList className="grid w-full grid-cols-2 h-12 bg-transparent dark:bg-transparent">
                <TabsTrigger 
                  value="monthly" 
                  className="text-base text-gray-700 dark:text-gray-300 data-[state=active]:text-empire-dark dark:data-[state=active]:text-white"
                >
                  Monthly
                </TabsTrigger>
                <TabsTrigger 
                  value="annual" 
                  className="text-base text-gray-700 dark:text-gray-300 data-[state=active]:text-empire-dark dark:data-[state=active]:text-white"
                >
                  Annual <span className="ml-2 text-xs font-normal bg-empire-cyan/10 dark:bg-empire-cyan/20 text-empire-cyan/90 dark:text-empire-cyan px-2 py-0.5 rounded-full">Save {calculateSavings()}%</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Main pricing cards */}
          <div className="grid md:grid-cols-3 gap-8 xl:gap-6 items-stretch">
            {pricingData.plans.map((plan) => (
              <div 
                key={plan.id} 
                className={`
                  bg-white dark:bg-empire-darkest p-6 md:p-8 rounded-2xl shadow-xl transition-all duration-300 
                  border border-empire-medium/20 dark:border-empire-medium/20 flex flex-col 
                  ${plan.featured ? 'border-empire-cyan dark:border-empire-cyan/50 ring-1 ring-empire-cyan/30 transform md:-translate-y-4' : ''}
                  hover:shadow-2xl hover:scale-[1.02] dark:hover:shadow-empire-cyan/5
                `}
              >
                {plan.featured && (
                  <div className="text-center mb-4 -mt-12">
                    <span className="bg-empire-canyon-deep text-empire-light text-sm font-semibold px-5 py-1.5 rounded-full inline-block shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h2 className={`text-2xl md:text-3xl font-semibold ${plan.featured ? 'text-empire-cyan' : 'text-empire-canyon-deep dark:text-empire-silver'} mb-2`}>
                  {plan.name}
                </h2>
                
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
                    {typeof plan.price[billingPeriod] === 'number' ? '$' : ''}
                    {plan.price[billingPeriod]}
                  </span>
                  {typeof plan.price[billingPeriod] === 'number' && (
                    <span className="text-lg font-normal text-gray-600 dark:text-gray-300 ml-1">
                      /{billingPeriod === 'monthly' ? 'mo' : 'mo, billed annually'}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6">{plan.description}</p>
            
                {/* Plan highlights */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {pricingData.featureCategories.map(category => 
                    category.features.slice(0, 1).map((feature, i) => (
                      <li key={`${category.name}-${i}`} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-empire-cyan mr-2 mt-0.5 flex-shrink-0" />
                        <span className='text-gray-800 dark:text-gray-200'>
                          {feature.name}: <strong>{plan[feature.name.toLowerCase()] || feature[plan.id]}</strong>
                        </span>
                      </li>
                    ))
                  )}
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-empire-cyan mr-2 mt-0.5 flex-shrink-0" />
                    <span className='text-gray-800 dark:text-gray-200'>
                      Support: <strong>{pricingData.featureCategories[2].features[0][plan.id]}</strong>
                    </span>
                  </li>
                </ul>
            
                {/* CTA Button */}
                {plan.id === 'growth' ? (
                  <GoHighLevelCalendar 
                    calendarId="strategy-call"
                    className="w-full bg-empire-canyon-deep hover:bg-empire-canyon-deep/90 text-white py-3 px-6 rounded-lg text-lg flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-empire-canyon"
                    text={plan.cta}
                    size="lg"
                  />
                ) : (
                  <Button
                    className={`w-full py-3 px-6 rounded-lg text-lg ${
                      plan.id === 'enterprise'
                        ? 'bg-empire-canyon-deep hover:bg-empire-canyon-deep/90 text-white'
                        : 'bg-empire-cyan hover:bg-empire-cyan/90 text-empire-darkest'
                    }`}
                    size="lg"
                    asChild
                  >
                    <a href={plan.link} className="flex items-center justify-center gap-2">
                      {plan.cta} <ChevronRight size={16} />
                    </a>
                  </Button>
                )}
              </div>
            ))}
          </div>

          {/* Feature comparison toggle */}
          <div className="flex justify-center mt-10">
            <Button
              variant="outline"
              onClick={() => setShowFeatureTable(!showFeatureTable)}
              className="border-empire-medium/20 dark:border-gray-600 text-gray-800 dark:text-white hover:bg-empire-cyan/10 dark:hover:bg-gray-700"
            >
              {showFeatureTable ? "Hide Feature Comparison" : "Show Full Feature Comparison"}
              <ChevronRight className={`ml-1 transform transition-transform ${showFeatureTable ? 'rotate-90' : ''}`} size={16} />
            </Button>
          </div>

          {/* Feature Comparison Table */}
          {showFeatureTable && (
            <div className="mt-16 overflow-x-auto">
              <div className="min-w-full inline-block align-middle">
                <div className="overflow-hidden border border-empire-medium/20 dark:border-gray-700 rounded-xl bg-white dark:bg-empire-darkest shadow-md">
                  <table className="min-w-full divide-y divide-empire-medium/20 dark:divide-gray-700">
                    <thead>
                      <tr>
                        <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">
                          Features
                        </th>
                        {pricingData.plans.map(plan => (
                          <th 
                            key={plan.id} 
                            scope="col" 
                            className={`px-6 py-4 text-center text-sm font-medium ${
                              plan.featured 
                                ? 'text-empire-cyan bg-empire-cyan/5 dark:bg-gray-800' 
                                : 'text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900'
                            }`}
                          >
                            {plan.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-empire-medium/20 dark:divide-gray-700">
                      {pricingData.featureCategories.map(category => (
                        <React.Fragment key={category.name}>
                          <tr>
                            <td 
                              colSpan={4} 
                              className="px-6 py-3 text-md font-semibold text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-800"
                            >
                              {category.name}
                            </td>
                          </tr>
                          {category.features.map((feature, i) => (
                            <tr 
                              key={`${category.name}-${feature.name}-${i}`} 
                              className={i % 2 === 0 ? 'bg-white dark:bg-empire-darkest' : 'bg-gray-50 dark:bg-gray-900'}
                            >
                              <td className="px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-300 flex items-center">
                                {feature.name}
                                {feature.tooltip && (
                                  <span className="ml-1.5 inline-block text-gray-400">
                                    <HelpCircle className="h-4 w-4" />
                                  </span>
                                )}
                              </td>
                              {pricingData.plans.map(plan => (
                                <td 
                                  key={`${category.name}-${feature.name}-${plan.id}`} 
                                  className={`px-6 py-4 ${
                                    plan.featured ? 'bg-empire-cyan/5 dark:bg-gray-800' : ''
                                  }`}
                                >
                                  {renderFeatureValue(feature[plan.id])}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-3">
              Ready to build your AI workforce?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Our AI clones can help you automate and scale operations faster than you thought possible. Book a demo to see how.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GoHighLevelCalendar 
                calendarId="demo-calendar"
                className="bg-empire-canyon-deep hover:bg-empire-canyon-deep/90 text-white py-3 px-6 rounded-lg text-base flex items-center hover-lift shadow-lg shadow-empire-canyon-deep/20"
                text="Schedule Demo"
                size="lg"
              />
              <Button 
                variant="outline"
                className="border-empire-medium/40 dark:border-gray-600 bg-transparent hover:bg-empire-silver/5 dark:hover:bg-gray-800 text-empire-dark dark:text-white py-3 px-6 rounded-lg text-base hover-lift"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing; 