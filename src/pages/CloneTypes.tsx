import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import { Brain, Briefcase, MessageSquare, BarChart2, Terminal, Sparkles, ArrowRight, Check } from "lucide-react";
import { AgentCard } from "@/components/ui/agent-card";
import { FeatureHighlight } from "@/components/ui/feature-highlight";
import { GoHighLevelCalendar } from "@/components/calendar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const cloneTypesData = [
  {
    icon: Brain,
    name: "Cognitive Agent Clones",
    description: "Advanced AI agents designed for complex problem-solving, data analysis, and strategic decision-making. They learn and adapt to new information, providing deep insights for your business.",
    features: ["Natural Language Processing", "Predictive Analytics", "Automated Reporting", "Knowledge Base Integration"],
    color: "canyon",
    badge: "Most Popular",
    image: "/images/ai/cognitive-agent.jpg"
  },
  {
    icon: Briefcase,
    name: "Executive Assistant Clones",
    description: "Your 24/7 AI personal assistant, managing schedules, organizing tasks, handling correspondence, and streamlining your daily workflow to maximize productivity.",
    features: ["Intelligent Scheduling", "Email & Comms Management", "Task Prioritization", "Travel & Meeting Coordination"],
    color: "canyon",
    image: "/images/ai/executive-assistant.jpg"
  },
  {
    icon: MessageSquare,
    name: "Omnichannel Support Clones",
    description: "Provide seamless and intelligent customer support across all channels. These AI agents resolve queries, offer assistance, and ensure customer satisfaction around the clock.",
    features: ["24/7 Availability", "Multi-channel Support (Chat, Email, Voice)", "Sentiment Analysis", "Automated Ticket Escalation"],
    color: "canyon",
    image: "/images/ai/support-agent.jpg"
  },
  {
    icon: BarChart2,
    name: "Sales & Growth Hacker Clones",
    description: "Automate and optimize your sales pipeline. These AI agents identify leads, personalize outreach, conduct follow-ups, and help close deals faster.",
    features: ["Lead Generation & Qualification", "Personalized Email Campaigns", "CRM Integration", "Sales Performance Analytics"],
    color: "canyon",
    image: "/images/ai/sales-agent.jpg"
  }
];

const platformFeatures = [
  {
    title: "Autonomous Decision Making",
    description: "Our agents can make intelligent decisions independently based on your predefined criteria and business rules, freeing you from repetitive decision-making tasks.",
    icon: Brain,
    color: "canyon",
    image: "/images/ai/autonomous-decision.jpg"
  },
  {
    title: "Agentic Workflows",
    description: "Link multiple AI clones together to create sophisticated workflows that handle complex business processes from start to finish with minimal human intervention.",
    icon: Terminal,
    color: "canyon",
    image: "/images/ai/agentic-workflow.jpg"
  },
  {
    title: "Real-time Learning",
    description: "Every interaction helps your AI agents learn and improve their performance, adapting to your specific business needs and customer preferences.",
    icon: Sparkles,
    color: "canyon",
    image: "/images/ai/realtime-learning.jpg"
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption, role-based access control, and comprehensive audit logs to protect your sensitive business data.",
    icon: Terminal,
    color: "canyon",
    image: "/images/ai/enterprise-security.jpg"
  }
];

// Usage cases with industries
const usageCases = [
  {
    industry: "Healthcare",
    description: "Patient scheduling, medical transcription, and initial symptom assessment",
    icon: "/images/ai/healthcare-agent.jpg"
  },
  {
    industry: "Real Estate",
    description: "Property inquiries, virtual tours, and lead qualification",
    icon: "/images/ai/realestate-agent.jpg"
  },
  {
    industry: "E-commerce",
    description: "Product recommendations, order tracking, and inventory management",
    icon: "/images/ai/ecommerce-agent.jpg"
  },
  {
    industry: "Financial Services",
    description: "Account inquiries, fraud detection, and financial advising",
    icon: "/images/ai/finance-agent.jpg"
  }
];

const CloneTypes = () => {
  useEffect(() => {
    document.title = "AI Clone Types | The Clone Empire";
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-empire-light dark:bg-empire-darkest py-12 md:py-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[30%] -left-[10%] w-[80%] h-[70%] bg-empire-canyon/5 rounded-full blur-[120px] opacity-30"></div>
          <div className="absolute top-[30%] -right-[10%] w-[70%] h-[50%] bg-empire-medium/10 rounded-full blur-[100px] opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <Badge variant="outline" className="mb-3 bg-empire-dark/10 dark:bg-empire-darker/50 border-empire-canyon text-empire-canyon inline-flex">
                <Sparkles className="mr-2 h-3.5 w-3.5" />
                Intelligent Agent Ecosystem
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4">
                <span className="text-empire-dark dark:text-empire-light">
                  Discover Your AI <span className="text-empire-canyon">Workforce</span>
                </span>
              </h1>
              
              <p className="text-lg text-empire-dark/80 text-secondary-foreground max-w-xl mb-6">
                Explore our diverse range of AI Agent Clones, meticulously engineered to automate tasks, enhance productivity, and drive growth for your empire.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <GoHighLevelCalendar 
                  calendarId="demo-calendar"
                  className="bg-empire-canyon hover:bg-empire-canyon/90 text-white rounded-lg flex items-center gap-2 justify-center"
                  text="Schedule an AI Agent Demo"
                  size="lg"
                />
                
                <Button variant="outline" className="border-empire-canyon/30 dark:border-empire-canyon/20 text-empire-canyon">
                  Browse Case Studies <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 relative mt-6 md:mt-0">
              <div className="relative rounded-2xl overflow-hidden bg-vision-glass backdrop-blur-sm border border-empire-silver/10 shadow-md">
                <img 
                  src="/images/ai/agent-visualization.svg" 
                  alt="AI agent visualization" 
                  className="w-full object-cover aspect-video transform transition-transform duration-700 hover:scale-110 hover:shadow-lg"
                  onError={(e) => {
                    // Fallback to jpg if svg fails to load
                    const target = e.target as HTMLImageElement;
                    if (target.src.endsWith('.svg')) {
                      target.src = target.src.replace('.svg', '.jpg');
                    } else if (target.src.endsWith('.jpg')) {
                      // If jpg also fails, use placeholder
                      target.src = "/images/placeholder.jpg";
                    }
                  }}
                />
                
                {/* Subtle indicator */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex gap-3">
                    <div className="h-2 w-2 rounded-full bg-empire-canyon animate-pulse"></div>
                    <div className="h-2 w-2 rounded-full bg-empire-medium animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="h-2 w-2 rounded-full bg-empire-silver animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clone Types Grid */}
      <section className="bg-white dark:bg-empire-darkest py-8 md:py-10 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
            <div className="max-w-xl">
              <Badge variant="outline" className="mb-3 border-empire-canyon/50 text-empire-canyon">Agent Solutions</Badge>
              <h2 className="text-3xl font-bold text-empire-dark dark:text-empire-light mb-3">
                Specialized AI Agents
              </h2>
              <p className="text-empire-dark/70 text-secondary-foreground">
                Each AI clone is designed for specific business operations. Mix and match to build your perfect digital workforce.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <a
                href="/pricing"
                className="inline-block bg-empire-canyon hover:bg-empire-canyon/90 text-white font-bold py-2 px-6 rounded-lg text-sm transition-colors duration-300"
              >
                View Pricing Plans
              </a>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 xl:gap-8">
            {cloneTypesData.map((clone, index) => (
              <div 
                key={index} 
                className="bg-empire-light dark:bg-empire-dark border border-empire-medium/10 dark:border-empire-charcoal/50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in hover:scale-[1.02]"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={clone.image} 
                    alt={clone.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      // Try alternative format or fallback to placeholder
                      const target = e.target as HTMLImageElement;
                      if (target.src.endsWith('.jpg')) {
                        // Try SVG version if JPG fails
                        target.src = target.src.replace('.jpg', '.svg');
                      } else if (target.src.endsWith('.svg')) {
                        // If SVG also fails, use placeholder
                        target.src = "/images/placeholder.jpg";
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-empire-dark/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-lg bg-empire-canyon flex items-center justify-center">
                        <clone.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white ml-3">{clone.name}</h3>
                    </div>
                    {clone.badge && (
                      <div className="absolute top-3 right-3">
                        <Badge variant="canyon" className="text-xs">
                          {clone.badge}
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-empire-dark dark:text-empire-light mb-2 group-hover:text-empire-canyon transition-colors duration-300">{clone.name}</h3>
                  <p className="text-empire-dark/80 text-empire-silver text-sm mb-4">
                    {clone.description}
                  </p>
                  <div className="mt-auto">
                    <div className="space-y-2">
                      {clone.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <Check className="w-4 h-4 text-empire-canyon mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-empire-dark/90 dark:text-empire-silver">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Usage Cases by Industry */}
      <section className="bg-empire-light dark:bg-empire-darkest py-8 md:py-10 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-3 border-empire-canyon/50 text-empire-canyon">Industry Solutions</Badge>
            <h2 className="text-3xl font-bold text-empire-dark dark:text-empire-light mb-3">
              Industry-Specific Use Cases
            </h2>
            <p className="text-empire-dark/70 text-secondary-foreground max-w-2xl mx-auto">
              See how AI Agent Clones are making an impact across various sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {usageCases.map((item, index) => (
              <div key={index} className="bg-white dark:bg-empire-dark rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group border border-empire-medium/10 dark:border-empire-charcoal/50">
                <div className="h-36 overflow-hidden">
                  <img 
                    src={item.icon} 
                    alt={item.industry} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Try alternative format or fallback to placeholder
                      const target = e.target as HTMLImageElement;
                      if (target.src.endsWith('.jpg')) {
                        // Try SVG version if JPG fails
                        target.src = target.src.replace('.jpg', '.svg');
                      } else if (target.src.endsWith('.svg')) {
                        // If SVG also fails, use placeholder
                        target.src = "/images/placeholder.jpg";
                      }
                    }}
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center mb-3">
                    <img src={item.icon} alt={item.industry} className="h-8 w-8 mr-3 rounded-md object-contain" />
                    <h3 className="text-xl font-semibold text-empire-dark dark:text-empire-light">{item.industry}</h3>
                  </div>
                  <p className="text-empire-dark/80 text-empire-silver text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Platform Features */}
      <section className="bg-white dark:bg-empire-darkest py-8 md:py-10 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-3 border-empire-canyon/50 text-empire-canyon">Platform Capabilities</Badge>
            <h2 className="text-3xl font-bold text-empire-dark dark:text-empire-light mb-3">
              Core Platform Capabilities
            </h2>
            <p className="text-empire-dark/70 text-secondary-foreground max-w-2xl mx-auto">
              The Clone Empire platform is built with cutting-edge technology to ensure your AI agents are powerful, adaptable, and secure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
            {platformFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row gap-5 items-center border border-empire-medium/10 dark:border-empire-charcoal/50 p-4 rounded-xl bg-empire-light/50 dark:bg-empire-dark hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-full md:w-1/2 aspect-video rounded-lg overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      // Try alternative format or fallback to placeholder
                      const target = e.target as HTMLImageElement;
                      if (target.src.endsWith('.jpg')) {
                        // Try SVG version if JPG fails
                        target.src = target.src.replace('.jpg', '.svg');
                      } else if (target.src.endsWith('.svg')) {
                        // If SVG also fails, use placeholder
                        target.src = "/images/placeholder.jpg";
                      }
                    }}
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="w-10 h-10 rounded-lg bg-empire-canyon/10 border border-empire-canyon/20 flex items-center justify-center mb-3">
                    <feature.icon className="w-5 h-5 text-empire-canyon" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial */}
      <section className="bg-empire-light dark:bg-empire-darkest py-8 md:py-10 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto p-6 md:p-8 rounded-xl bg-vision-glass backdrop-blur-sm border border-empire-silver/10 shadow-md relative">
            <div className="absolute -top-3 -left-3 text-empire-canyon text-5xl opacity-20">"</div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-1/4">
                  <img 
                    src="/images/team/jane-doe.jpg" 
                    alt="Jane Doe - CTO, TechNova Solutions" 
                    className="w-20 h-20 rounded-full object-cover mx-auto md:mx-0 border-2 border-empire-silver/20"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/images/placeholder.jpg";
                    }}
                  />
                </div>
                <div className="w-full md:w-3/4">
                  <p className="text-lg italic text-gray-800 dark:text-white mb-4 font-medium">
                    "The Clone Empire's AI agents have revolutionized how we handle customer support. Our response times dropped by 78%, while satisfaction scores increased by 23%."
                  </p>
                  <div className="mt-4">
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">Jane Doe</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">CTO, TechNova Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Custom Solutions */}
      <section className="bg-white dark:bg-empire-darkest py-8 md:py-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-empire-canyon to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-empire-canyon to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2">
              <div className="p-0.5 rounded-xl bg-gradient-to-br from-empire-canyon via-empire-silver to-empire-canyon">
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="/images/ai/custom-solution.jpg" 
                    alt="Custom AI solutions" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src.endsWith('.jpg')) {
                        target.src = target.src.replace('.jpg', '.svg');
                      } else if (target.src.endsWith('.svg')) {
                        target.src = "/images/placeholder.jpg";
                      }
                    }}
                  />
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <Terminal className="w-10 h-10 text-empire-canyon mb-4" />
              <h2 className="text-3xl font-bold text-empire-dark dark:text-empire-light mb-3">
                Need a Custom AI Agent?
              </h2>
              <p className="text-empire-dark/70 dark:text-empire-medium mb-5">
                Our AI architects can build bespoke agent systems tailored to your specific business processes, integrations, and requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <GoHighLevelCalendar 
                  calendarId="custom-solution"
                  className="bg-empire-canyon hover:bg-empire-canyon/90 text-white rounded-lg flex items-center gap-2 justify-center"
                  text="Consult Our Strategists"
                  size="lg"
                />
                
                <Button variant="outline" className="border-empire-canyon/30 text-empire-canyon">
                  View Case Studies <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-gradient-to-r from-empire-dark to-empire-darker py-8 md:py-10 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[30%] -right-[10%] w-[70%] h-[50%] bg-empire-silver/5 rounded-full blur-[100px] opacity-20"></div>
          <div className="absolute -bottom-[30%] -left-[10%] w-[80%] h-[70%] bg-empire-canyon/5 rounded-full blur-[120px] opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-empire-light mb-4">
              Ready to Build Your Digital Workforce?
            </h2>
            <p className="text-secondary-foreground max-w-2xl mx-auto mb-6">
              Join forward-thinking companies already deploying AI agents to automate tasks, enhance customer experiences, and drive sustainable growth.
            </p>
            <GoHighLevelCalendar 
              calendarId="demo-calendar"
              className="bg-empire-canyon hover:bg-opacity-90 text-white rounded-lg inline-flex items-center gap-2"
              text="Start Your AI Journey"
              size="lg"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CloneTypes; 