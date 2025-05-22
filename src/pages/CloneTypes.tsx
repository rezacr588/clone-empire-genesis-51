import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import { Brain, Briefcase, MessageSquare, BarChart2, Terminal, Sparkles, Zap, Database, Lock, Workflow } from "lucide-react";
import { AgentCard } from "@/components/ui/agent-card";
import { FeatureHighlight } from "@/components/ui/feature-highlight";

const cloneTypesData = [
  {
    icon: Brain,
    name: "Cognitive Agent Clones",
    description: "Advanced AI agents designed for complex problem-solving, data analysis, and strategic decision-making. They learn and adapt to new information, providing deep insights for your business.",
    features: ["Natural Language Processing", "Predictive Analytics", "Automated Reporting", "Knowledge Base Integration"],
    color: "cyan",
    badge: "Most Popular"
  },
  {
    icon: Briefcase,
    name: "Executive Assistant Clones",
    description: "Your 24/7 AI personal assistant, managing schedules, organizing tasks, handling correspondence, and streamlining your daily workflow to maximize productivity.",
    features: ["Intelligent Scheduling", "Email & Comms Management", "Task Prioritization", "Travel & Meeting Coordination"],
    color: "purple"
  },
  {
    icon: MessageSquare,
    name: "Omnichannel Support Clones",
    description: "Provide seamless and intelligent customer support across all channels. These AI agents resolve queries, offer assistance, and ensure customer satisfaction around the clock.",
    features: ["24/7 Availability", "Multi-channel Support (Chat, Email, Voice)", "Sentiment Analysis", "Automated Ticket Escalation"],
    color: "lime"
  },
  {
    icon: BarChart2,
    name: "Sales & Growth Hacker Clones",
    description: "Automate and optimize your sales pipeline. These AI agents identify leads, personalize outreach, conduct follow-ups, and help close deals faster.",
    features: ["Lead Generation & Qualification", "Personalized Email Campaigns", "CRM Integration", "Sales Performance Analytics"],
    color: "red"
  }
];

const platformFeatures = [
  {
    title: "Autonomous Decision Making",
    description: "Our agents can make intelligent decisions independently based on your predefined criteria and business rules, freeing you from repetitive decision-making tasks.",
    icon: Brain,
    color: "cyan"
  },
  {
    title: "Agentic Workflows",
    description: "Link multiple AI clones together to create sophisticated workflows that handle complex business processes from start to finish with minimal human intervention.",
    icon: Workflow,
    color: "purple"
  },
  {
    title: "Real-time Learning",
    description: "Every interaction helps your AI agents learn and improve their performance, adapting to your specific business needs and customer preferences.",
    icon: Zap,
    color: "lime"
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption, role-based access control, and comprehensive audit logs to protect your sensitive business data.",
    icon: Lock,
    color: "red"
  }
];

const CloneTypes = () => {
  useEffect(() => {
    document.title = "AI Clone Types | The Clone Empire";
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-empire-light to-white dark:from-empire-darkest dark:to-empire-dark py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[30%] -left-[10%] w-[80%] h-[70%] bg-empire-red/5 rounded-full blur-[120px] opacity-40"></div>
          <div className="absolute top-[30%] -right-[10%] w-[70%] h-[50%] bg-empire-cyan/10 rounded-full blur-[100px] opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="mb-6 inline-block">
              <span className="inline-flex items-center rounded-full border border-empire-cyan/30 bg-empire-cyan/10 backdrop-blur-sm px-4 py-2 text-sm dark:text-empire-cyan text-empire-darkCyan font-medium">
                <Sparkles className="mr-2 h-3.5 w-3.5" />
                <span className="animate-pulse-subtle mr-1.5 h-1.5 w-1.5 rounded-full bg-empire-cyan"></span>
                Intelligent Agent Ecosystem
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-empire-red mb-4">
              Discover Your <span className="inline-block text-gradient bg-gradient-to-r from-empire-cyan via-empire-red to-empire-cyan">AI Workforce</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-empire-dark dark:text-empire-light max-w-3xl mx-auto">
              Explore our diverse range of AI Agent Clones, meticulously engineered to automate tasks, enhance productivity, and drive growth for your empire.
            </p>
          </div>
        </div>
      </section>

      {/* Clone Types Grid */}
      <section className="py-16 md:py-24 bg-white dark:bg-empire-dark relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-empire-dark dark:text-white mb-4">
                Specialized AI Agents
              </h2>
              <p className="text-empire-dark/70 dark:text-empire-light/70">
                Each AI clone is designed for specific business operations. Mix and match to build your perfect digital workforce.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <a
                href="/pricing"
                className="inline-block bg-empire-cyan hover:bg-empire-darkCyan text-white font-bold py-2 px-6 rounded-lg text-sm transition-colors duration-300"
              >
                View Pricing Plans
              </a>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 xl:gap-12">
            {cloneTypesData.map((clone, index) => (
              <AgentCard 
                key={index}
                title={clone.name}
                description={clone.description}
                icon={clone.icon}
                capabilities={clone.features}
                color={clone.color as 'cyan' | 'red' | 'lime' | 'purple'}
                badge={clone.badge}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Platform Features */}
      <section className="py-16 md:py-24 bg-empire-light dark:bg-empire-darkest relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-empire-dark dark:text-white mb-4">
              Agentic Platform Features
            </h2>
            <p className="text-empire-dark/70 dark:text-empire-light/70 max-w-2xl mx-auto">
              Beyond individual agents, our platform provides the infrastructure to build and manage your entire AI workforce.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
              {platformFeatures.map((feature, index) => (
                <FeatureHighlight
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  color={feature.color as 'cyan' | 'red' | 'lime' | 'purple'}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Custom Solutions */}
      <section className="py-16 md:py-24 bg-white dark:bg-empire-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-empire-cyan to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-empire-cyan to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Terminal className="w-12 h-12 text-empire-cyan mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-empire-dark dark:text-white mb-4">
              Need a Custom AI Agent?
            </h2>
            <p className="text-empire-dark/70 dark:text-empire-light/70 mb-8 text-lg">
              Our AI architects can build bespoke agent systems tailored to your specific business processes, integrations, and requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="inline-block bg-empire-red hover:bg-empire-red-dark text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
              >
                Consult Our Strategists
              </a>
              <a
                href="/case-studies"
                className="inline-block bg-transparent border border-empire-red text-empire-red dark:text-empire-red font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24 bg-empire-light dark:bg-empire-darkest relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass-card p-10 rounded-2xl backdrop-blur-md border border-empire-cyan/20 dark:border-empire-cyan/10 relative">
            <div className="absolute -top-5 -left-5 text-empire-cyan text-7xl opacity-30">"</div>
            <div className="relative z-10">
              <p className="text-xl italic text-empire-dark dark:text-empire-light/90 mb-6">
                The Clone Empire's AI agents have revolutionized how we handle customer support. Our response times dropped by 78%, while satisfaction scores increased by 23%. The ability to scale our support team instantly during peak periods without additional hiring has been a game-changer for our business.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-empire-cyan/20 flex items-center justify-center text-empire-cyan font-bold text-lg mr-4">
                  JS
                </div>
                <div>
                  <h4 className="font-semibold text-empire-dark dark:text-white">Jordan Smith</h4>
                  <p className="text-sm text-empire-dark/70 dark:text-empire-light/70">CTO, TechNova Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-empire-darkest via-empire-dark to-empire-darkest relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[30%] -right-[10%] w-[70%] h-[50%] bg-empire-cyan/5 rounded-full blur-[100px] opacity-30"></div>
          <div className="absolute -bottom-[30%] -left-[10%] w-[80%] h-[70%] bg-empire-red/5 rounded-full blur-[120px] opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to build your AI Clone Empire?
            </h2>
            <p className="text-empire-light/80 max-w-2xl mx-auto mb-8 text-lg">
              Join forward-thinking companies already deploying AI agents to automate tasks, enhance customer experiences, and drive sustainable growth.
            </p>
            <a
              href="/contact"
              className="inline-block bg-empire-lime hover:bg-opacity-80 text-empire-darkest font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
            >
              Start Your AI Journey
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CloneTypes; 