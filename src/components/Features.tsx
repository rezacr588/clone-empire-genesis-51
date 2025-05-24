import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AgentCard } from '@/components/ui/agent-card';
import { SectionLayout } from "@/components/ui/section-layout";

const Features = () => {
  const agentTypes = [
    {
      title: "Inbox Manager Agent",
      description: "Triages your emails, responds to routine inquiries, and organizes your inbox based on your communication patterns and preferences.",
      features: ["Priority-based sorting", "Auto-drafting responses", "Follow-up tracking", "Meeting scheduling"],
      status: "Active",
      performance: 92
    },
    {
      title: "Research Assistant Agent",
      description: "Searches, analyzes, and summarizes information from various sources to deliver concise insights tailored to your needs.",
      features: ["Web research automation", "Content summarization", "Data analysis", "Source verification"],
      status: "Learning",
      performance: 87
    },
    {
      title: "Customer Support Agent",
      description: "Resolves customer queries promptly across multiple channels while adapting to your brand voice and escalation protocols.",
      features: ["24/7 availability", "Multi-channel support", "Sentiment analysis", "Knowledge base integration"],
      status: "Active",
      performance: 95
    },
    {
      title: "Analytics Agent",
      description: "Monitors your business metrics, identifies trends, and delivers actionable insights without you having to dig through data.",
      features: ["Automated reporting", "Anomaly detection", "Performance forecasting", "Custom alerts"],
      status: "Active",
      performance: 90
    },
    {
      title: "Project Coordinator Agent",
      description: "Keeps your projects on track by managing deadlines, coordinating team members, and identifying potential bottlenecks.",
      features: ["Task prioritization", "Resource allocation", "Progress tracking", "Deadline management"],
      status: "Learning",
      performance: 85
    },
    {
      title: "Conversation Agent",
      description: "Interacts naturally with clients and team members using your communication style and professional knowledge.",
      features: ["Natural dialog flow", "Contextual awareness", "Personality mirroring", "Multi-topic handling"],
      status: "Active",
      performance: 88
    }
  ];

  return (
    <SectionLayout
      id="features"
      className="bg-empire-darkest"
      hasTopBorder={true}
      hasGridOverlay={true}
    >
      <div className="absolute left-1/4 top-1/4 w-80 h-80 bg-empire-silver/5 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute right-1/4 bottom-1/4 w-60 h-60 bg-empire-canyon/5 opacity-20 rounded-full blur-2xl"></div>
      
      <div className="mb-14 text-center max-w-3xl mx-auto">
        <Badge variant="silver" className="mb-4 inline-flex px-3 py-1">
          Agentive Workforce
        </Badge>
        
        <h1 className="text-4xl md:text-5xl font-medium mb-6">
          <span className="text-gradient bg-gradient-to-r from-empire-silver via-empire-canyon to-empire-silver">
            Your Personal AI Agents
          </span>
        </h1>
        
        <p className="text-base md:text-lg text-empire-silver mb-8">
          Each agent specializes in specific tasks, learns from your feedback, and works autonomously while respecting your preferences and goals.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agentTypes.map((agent, index) => (
          <AgentCard
            key={index}
            title={agent.title}
            description={agent.description}
            capabilities={agent.features}
            badgeText={agent.status}
            badgeVariant={agent.status === 'Active' ? 'canyon' : 'silver'}
          />
        ))}
      </div>
      
      <div className="mt-16 max-w-4xl mx-auto glass-card rounded-xl p-7 border border-empire-medium/10 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-full md:w-2/3">
            <h3 className="text-xl md:text-2xl font-medium text-empire-silver mb-3">Agentive Ecosystem</h3>
            <p className="text-empire-light/90 text-sm mb-4">
              Our agents don't work in isolation. They communicate with each other, share context, and collaborate to achieve your goals efficiently.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-5">
              {["Agent-to-agent communication", "Continuous learning", "Human-in-the-loop controls"].map((feature, i) => (
                <div key={i} className="text-xs bg-empire-darkest rounded-full px-3 py-1.5 border border-empire-silver/10 text-empire-light">
                  {feature}
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-1/3 bg-empire-darkest/70 rounded-lg p-5 border border-empire-medium/5">
            <h4 className="text-lg font-medium text-empire-silver mb-3">System Status</h4>
            
            {[
              { label: "Agents Active", value: "10/12", percent: 83, color: "empire-silver" },
              { label: "Task Completion", value: "95%", percent: 95, color: "empire-canyon" },
              { label: "System Health", value: "98%", percent: 98, color: "empire-medium" }
            ].map((stat, i) => (
              <div key={i} className="mb-3 last:mb-0">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-empire-medium/80">{stat.label}</span>
                  <span className={`text-xs text-empire-${stat.color === 'empire-silver' ? 'silver' : stat.color === 'empire-canyon' ? 'canyon' : 'medium'}`}>{stat.value}</span>
                </div>
                <div className="h-1.5 bg-empire-darker rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-empire-${stat.color === 'empire-silver' ? 'silver' : stat.color === 'empire-canyon' ? 'canyon' : 'medium'} rounded-full`} 
                    style={{ width: `${stat.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
            
            <Button variant="outline" className="w-full text-xs mt-4 border-empire-silver/20 text-empire-silver hover:bg-empire-silver/5">
              View Dashboard
            </Button>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Features;
