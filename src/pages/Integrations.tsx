import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import { 
  Puzzle, 
  Share2, 
  MessageSquare, 
  Calendar, 
  Mail, 
  Database, 
  BarChart, 
  Phone, 
  ShoppingCart, 
  FileText 
} from "lucide-react";

interface IntegrationCardProps {
  name: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  status: "Available" | "Coming Soon";
}

const integrationData: IntegrationCardProps[] = [
  {
    name: "Salesforce",
    description: "Connect your AI agents with Salesforce CRM to automate lead qualification, update records, and perform sales follow-ups.",
    icon: <Database className="w-8 h-8 text-[#00A1E0]" />,
    category: "CRM",
    status: "Available"
  },
  {
    name: "HubSpot",
    description: "Integrate with HubSpot to enhance marketing automation, manage contacts, and synchronize sales data with your AI agents.",
    icon: <Database className="w-8 h-8 text-[#FF7A59]" />,
    category: "CRM",
    status: "Available"
  },
  {
    name: "Slack",
    description: "Enable your AI agents to communicate through Slack, respond to queries, and provide real-time notifications to your team.",
    icon: <MessageSquare className="w-8 h-8 text-[#4A154B]" />,
    category: "Communication",
    status: "Available"
  },
  {
    name: "Microsoft Teams",
    description: "Deploy AI agents within Microsoft Teams for seamless collaboration, meetings management, and internal support.",
    icon: <MessageSquare className="w-8 h-8 text-[#6264A7]" />,
    category: "Communication",
    status: "Available"
  },
  {
    name: "Google Calendar",
    description: "Allow AI agents to schedule meetings, manage appointments, and send calendar invites through Google Calendar.",
    icon: <Calendar className="w-8 h-8 text-[#4285F4]" />,
    category: "Productivity",
    status: "Available"
  },
  {
    name: "Outlook",
    description: "Integrate with Microsoft Outlook for email management, scheduling, and communication through your AI agents.",
    icon: <Mail className="w-8 h-8 text-[#0078D4]" />,
    category: "Productivity",
    status: "Available"
  },
  {
    name: "Zendesk",
    description: "Connect your AI support agents with Zendesk to handle tickets, resolve customer issues, and manage support workflows.",
    icon: <MessageSquare className="w-8 h-8 text-[#03363D]" />,
    category: "Customer Support",
    status: "Available"
  },
  {
    name: "Intercom",
    description: "Deploy AI agents through Intercom to provide 24/7 customer support, lead qualification, and personalized engagement.",
    icon: <MessageSquare className="w-8 h-8 text-[#333333]" />,
    category: "Customer Support",
    status: "Available"
  },
  {
    name: "Shopify",
    description: "Integrate with Shopify to automate order processing, provide shopping assistance, and handle customer queries.",
    icon: <ShoppingCart className="w-8 h-8 text-[#95BF47]" />,
    category: "E-commerce",
    status: "Coming Soon"
  },
  {
    name: "Twilio",
    description: "Enable voice and SMS capabilities for your AI agents through Twilio to provide omnichannel support and outreach.",
    icon: <Phone className="w-8 h-8 text-[#F22F46]" />,
    category: "Communication",
    status: "Coming Soon"
  },
  {
    name: "Google Analytics",
    description: "Connect your AI agents with Google Analytics to gather insights, generate reports, and track performance metrics.",
    icon: <BarChart className="w-8 h-8 text-[#E37400]" />,
    category: "Analytics",
    status: "Coming Soon"
  },
  {
    name: "DocuSign",
    description: "Integrate with DocuSign to automate document signing workflows, contract management, and approval processes.",
    icon: <FileText className="w-8 h-8 text-[#FFCC00]" />,
    category: "Documentation",
    status: "Coming Soon"
  }
];

const IntegrationCard = ({ name, description, icon, category, status }: IntegrationCardProps) => {
  return (
    <div className="bg-white dark:bg-empire-dark p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-empire-medium/10 dark:border-empire-charcoal/50">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className="p-2 bg-gray-100 dark:bg-empire-charcoal rounded-lg mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-empire-dark dark:text-white">{name}</h3>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full ${
          status === "Available" 
            ? "bg-empire-cyan/10 text-empire-cyan" 
            : "bg-empire-purple/10 text-empire-purple"
        }`}>
          {status}
        </span>
      </div>
      <p className="text-empire-dark/70 dark:text-empire-light/70 text-sm mb-4">
        {description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs bg-empire-medium/10 dark:bg-empire-charcoal/70 text-empire-dark/70 dark:text-empire-light/70 px-2 py-1 rounded-md">
          {category}
        </span>
        <a 
          href={status === "Available" ? `/integrations/${name.toLowerCase()}` : "#"}
          className={`text-sm flex items-center ${
            status === "Available" 
              ? "text-empire-cyan hover:text-empire-darkCyan" 
              : "text-empire-dark/40 dark:text-empire-light/40 cursor-not-allowed"
          }`}
        >
          {status === "Available" ? "Learn more" : "Coming soon"}
          {status === "Available" && <Share2 className="w-3.5 h-3.5 ml-1" />}
        </a>
      </div>
    </div>
  );
};

const Integrations: React.FC = () => {
  useEffect(() => {
    document.title = "Integrations | The Clone Empire";
  }, []);

  return (
    <Layout>
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-empire-light to-white dark:from-empire-darkest dark:to-empire-dark py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-[30%] -left-[10%] w-[80%] h-[70%] bg-empire-cyan/5 rounded-full blur-[120px] opacity-40"></div>
            <div className="absolute top-[30%] -right-[10%] w-[70%] h-[50%] bg-empire-cyan/10 rounded-full blur-[100px] opacity-60"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 pt-10">
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-flex items-center rounded-full border border-empire-cyan/30 bg-empire-cyan/10 backdrop-blur-sm px-4 py-2 text-sm dark:text-empire-cyan text-empire-darkCyan font-medium mb-6">
                <Puzzle className="mr-2 h-3.5 w-3.5" />
                Connect Your Tools
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-empire-dark dark:text-white mb-4">
                Powerful <span className="inline-block text-gradient bg-gradient-to-r from-empire-cyan via-empire-cyan to-empire-cyan">Integrations</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-empire-dark dark:text-empire-light max-w-3xl mx-auto">
                Connect your AI agents with the tools and platforms you already use to create a seamless workflow.
              </p>
            </div>
          </div>
        </section>

        {/* Integrations Grid */}
        <section className="py-16 md:py-24 bg-white dark:bg-empire-dark">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold text-empire-dark dark:text-white mb-4">
                  Available Integrations
                </h2>
                <p className="text-empire-dark/70 dark:text-empire-light/70">
                  Connect your AI agents with your favorite tools and platforms to enhance their capabilities.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <a
                  href="/contact"
                  className="inline-block bg-empire-cyan hover:bg-empire-darkCyan text-white font-bold py-2 px-6 rounded-lg text-sm transition-colors duration-300"
                >
                  Request Custom Integration
                </a>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {integrationData.map((integration, index) => (
                <IntegrationCard
                  key={index}
                  name={integration.name}
                  description={integration.description}
                  icon={integration.icon}
                  category={integration.category}
                  status={integration.status}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* API Section */}
        <section className="py-16 md:py-24 bg-empire-light dark:bg-empire-darkest relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tl from-empire-cyan/5 to-transparent opacity-60"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-empire-dark dark:text-white mb-6">
                  Powerful API for Custom Integrations
                </h2>
                <p className="text-empire-dark/70 dark:text-empire-light/70 mb-6 text-lg">
                  Beyond our pre-built integrations, our robust API allows you to create custom connections with any platform or service you need.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="p-1 bg-empire-cyan/10 rounded-full mt-1 mr-3">
                      <div className="w-2 h-2 bg-empire-cyan rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-empire-dark dark:text-white">RESTful API</h3>
                      <p className="text-empire-dark/70 dark:text-empire-light/70 text-sm">
                        Standard RESTful API with comprehensive documentation for easy integration.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-empire-cyan/10 rounded-full mt-1 mr-3">
                      <div className="w-2 h-2 bg-empire-cyan rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-empire-dark dark:text-white">Webhooks</h3>
                      <p className="text-empire-dark/70 dark:text-empire-light/70 text-sm">
                        Event-based webhooks to trigger actions in your systems when specific events occur.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-empire-cyan/10 rounded-full mt-1 mr-3">
                      <div className="w-2 h-2 bg-empire-cyan rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-empire-dark dark:text-white">SDKs</h3>
                      <p className="text-empire-dark/70 dark:text-empire-light/70 text-sm">
                        Software Development Kits available in multiple languages including JavaScript, Python, and Ruby.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/api-docs"
                    className="inline-block bg-empire-cyan hover:bg-empire-darkCyan text-white font-bold py-2 px-6 rounded-lg text-sm transition-colors duration-300"
                  >
                    View API Documentation
                  </a>
                  <a
                    href="/developers"
                    className="inline-block bg-transparent border border-empire-cyan text-empire-cyan dark:text-empire-cyan font-bold py-2 px-6 rounded-lg text-sm transition-colors duration-300"
                  >
                    Developer Resources
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white dark:bg-empire-dark p-6 rounded-xl shadow-lg border border-empire-medium/10 dark:border-empire-charcoal/50">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <pre className="bg-empire-charcoal text-empire-light rounded-lg p-4 overflow-x-auto text-sm font-mono">
                    <code>{`// Example API call to create an AI agent
const response = await fetch('https://api.cloneempire.com/v1/agents', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    name: 'Sales Assistant',
    type: 'sales',
    personality: 'friendly',
    voice: 'female',
    integrations: ['salesforce', 'slack']
  })
});

const agent = await response.json();
console.log(agent);`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-empire-darkest via-empire-dark to-empire-darkest relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[30%] -right-[10%] w-[70%] h-[50%] bg-empire-cyan/5 rounded-full blur-[100px] opacity-30"></div>
            <div className="absolute -bottom-[30%] -left-[10%] w-[80%] h-[70%] bg-empire-cyan/5 rounded-full blur-[120px] opacity-20"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need a Custom Integration?
              </h2>
              <p className="text-empire-light/80 max-w-2xl mx-auto mb-8 text-lg">
                If you don't see the integration you need, our team can build a custom solution for your specific requirements.
              </p>
              <a
                href="/contact"
                className="inline-block bg-empire-cyan hover:bg-empire-darkCyan text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
              >
                Request Custom Integration
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Integrations; 