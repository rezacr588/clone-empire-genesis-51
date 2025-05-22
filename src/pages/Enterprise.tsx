import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import { Building2, Shield, Users, Globe, Server, Lock, CheckCircle } from "lucide-react";

const Enterprise: React.FC = () => {
  useEffect(() => {
    document.title = "Enterprise Solutions | The Clone Empire";
  }, []);

  return (
    <Layout>
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-empire-light to-white dark:from-empire-darkest dark:to-empire-dark py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-[30%] -left-[10%] w-[80%] h-[70%] bg-empire-purple/5 rounded-full blur-[120px] opacity-40"></div>
            <div className="absolute top-[30%] -right-[10%] w-[70%] h-[50%] bg-empire-cyan/10 rounded-full blur-[100px] opacity-60"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 pt-10">
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-flex items-center rounded-full border border-empire-purple/30 bg-empire-purple/10 backdrop-blur-sm px-4 py-2 text-sm dark:text-empire-purple text-empire-purple font-medium mb-6">
                For Large Organizations
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-empire-dark dark:text-white mb-4">
                Enterprise-Grade <span className="inline-block text-gradient bg-gradient-to-r from-empire-purple via-empire-cyan to-empire-purple">AI Workforce</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-empire-dark dark:text-empire-light max-w-3xl mx-auto">
                Secure, scalable, and customizable AI agent solutions for your organization's unique challenges and opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-24 bg-white dark:bg-empire-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-empire-dark dark:text-white mb-4">
                Enterprise-Grade Features
              </h2>
              <p className="text-empire-dark/70 dark:text-empire-light/70 max-w-2xl mx-auto">
                Our enterprise solution is built to meet the rigorous demands of large organizations across all industries.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-empire-light/50 dark:bg-empire-charcoal p-6 rounded-xl border border-empire-medium/10 dark:border-empire-charcoal">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-empire-purple/10 mr-4">
                    <Shield className="w-6 h-6 text-empire-purple" />
                  </div>
                  <h3 className="text-xl font-semibold text-empire-dark dark:text-white">Enterprise Security</h3>
                </div>
                <p className="text-empire-dark/70 dark:text-empire-light/70 text-sm">
                  SOC 2 Type II compliant with end-to-end encryption, SSO integration, and role-based access controls.
                </p>
              </div>
              
              <div className="bg-empire-light/50 dark:bg-empire-charcoal p-6 rounded-xl border border-empire-medium/10 dark:border-empire-charcoal">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-empire-cyan/10 mr-4">
                    <Users className="w-6 h-6 text-empire-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-empire-dark dark:text-white">Dedicated Support</h3>
                </div>
                <p className="text-empire-dark/70 dark:text-empire-light/70 text-sm">
                  Assigned account manager and technical team available 24/7 for strategic and implementation assistance.
                </p>
              </div>
              
              <div className="bg-empire-light/50 dark:bg-empire-charcoal p-6 rounded-xl border border-empire-medium/10 dark:border-empire-charcoal">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-empire-red/10 mr-4">
                    <Building2 className="w-6 h-6 text-empire-red" />
                  </div>
                  <h3 className="text-xl font-semibold text-empire-dark dark:text-white">Custom Development</h3>
                </div>
                <p className="text-empire-dark/70 dark:text-empire-light/70 text-sm">
                  Tailored AI agent solutions designed specifically for your business processes and requirements.
                </p>
              </div>
              
              <div className="bg-empire-light/50 dark:bg-empire-charcoal p-6 rounded-xl border border-empire-medium/10 dark:border-empire-charcoal">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-empire-lime/10 mr-4">
                    <Server className="w-6 h-6 text-empire-lime" />
                  </div>
                  <h3 className="text-xl font-semibold text-empire-dark dark:text-white">Private Deployment</h3>
                </div>
                <p className="text-empire-dark/70 dark:text-empire-light/70 text-sm">
                  On-premise or private cloud deployment options available with dedicated infrastructure.
                </p>
              </div>
              
              <div className="bg-empire-light/50 dark:bg-empire-charcoal p-6 rounded-xl border border-empire-medium/10 dark:border-empire-charcoal">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-empire-purple/10 mr-4">
                    <Globe className="w-6 h-6 text-empire-purple" />
                  </div>
                  <h3 className="text-xl font-semibold text-empire-dark dark:text-white">Global Scale</h3>
                </div>
                <p className="text-empire-dark/70 dark:text-empire-light/70 text-sm">
                  Deploy AI agents worldwide with multi-language support and regional compliance configurations.
                </p>
              </div>
              
              <div className="bg-empire-light/50 dark:bg-empire-charcoal p-6 rounded-xl border border-empire-medium/10 dark:border-empire-charcoal">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-empire-cyan/10 mr-4">
                    <Lock className="w-6 h-6 text-empire-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-empire-dark dark:text-white">Compliance</h3>
                </div>
                <p className="text-empire-dark/70 dark:text-empire-light/70 text-sm">
                  Built to meet GDPR, HIPAA, CCPA, and industry-specific regulatory requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Comparison Table */}
        <section className="py-16 md:py-24 bg-empire-light dark:bg-empire-darkest">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-empire-dark dark:text-white mb-4">
                Standard vs Enterprise
              </h2>
              <p className="text-empire-dark/70 dark:text-empire-light/70 max-w-2xl mx-auto">
                Compare our standard offering with our enterprise solution to find the right fit for your organization.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] bg-white dark:bg-empire-dark rounded-xl shadow-xl">
                <thead>
                  <tr className="border-b border-empire-medium/10 dark:border-empire-charcoal">
                    <th className="text-left py-4 px-6 text-empire-dark dark:text-white">Feature</th>
                    <th className="text-center py-4 px-6 text-empire-dark dark:text-white">Standard</th>
                    <th className="text-center py-4 px-6 text-empire-purple">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-empire-medium/10 dark:border-empire-charcoal">
                    <td className="py-4 px-6 text-empire-dark dark:text-white font-medium">AI Agent Types</td>
                    <td className="text-center py-4 px-6 text-empire-dark/70 dark:text-empire-light/70">All Standard Types</td>
                    <td className="text-center py-4 px-6 text-empire-dark/70 dark:text-empire-light/70">
                      All Standard + Custom Agent Development
                    </td>
                  </tr>
                  <tr className="border-b border-empire-medium/10 dark:border-empire-charcoal">
                    <td className="py-4 px-6 text-empire-dark dark:text-white font-medium">Support</td>
                    <td className="text-center py-4 px-6 text-empire-dark/70 dark:text-empire-light/70">Email & Community Support</td>
                    <td className="text-center py-4 px-6 text-empire-dark/70 dark:text-empire-light/70">
                      24/7 Priority Support with Dedicated Account Team
                    </td>
                  </tr>
                  <tr className="border-b border-empire-medium/10 dark:border-empire-charcoal">
                    <td className="py-4 px-6 text-empire-dark dark:text-white font-medium">Deployment</td>
                    <td className="text-center py-4 px-6 text-empire-dark/70 dark:text-empire-light/70">Cloud-Hosted</td>
                    <td className="text-center py-4 px-6 text-empire-dark/70 dark:text-empire-light/70">
                      Cloud, Private Cloud or On-Premise
                    </td>
                  </tr>
                  <tr className="border-b border-empire-medium/10 dark:border-empire-charcoal">
                    <td className="py-4 px-6 text-empire-dark dark:text-white font-medium">Security</td>
                    <td className="text-center py-4 px-6 text-empire-dark/70 dark:text-empire-light/70">Standard Security</td>
                    <td className="text-center py-4 px-6 text-empire-dark/70 dark:text-empire-light/70">
                      Enterprise-Grade Security & Compliance
                    </td>
                  </tr>
                  <tr className="border-b border-empire-medium/10 dark:border-empire-charcoal">
                    <td className="py-4 px-6 text-empire-dark dark:text-white font-medium">SLA</td>
                    <td className="text-center py-4 px-6 text-empire-dark/70 dark:text-empire-light/70">Not Available</td>
                    <td className="text-center py-4 px-6 text-empire-dark/70 dark:text-empire-light/70">
                      Custom SLA with Financial Guarantees
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-empire-dark dark:text-white font-medium">Custom Integrations</td>
                    <td className="text-center py-4 px-6 text-empire-dark/70 dark:text-empire-light/70">
                      Standard API Integrations
                    </td>
                    <td className="text-center py-4 px-6 text-empire-dark/70 dark:text-empire-light/70">
                      Custom Enterprise Integrations & Development
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-empire-dark via-empire-charcoal to-empire-dark relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[30%] -right-[10%] w-[70%] h-[50%] bg-empire-purple/5 rounded-full blur-[100px] opacity-30"></div>
            <div className="absolute -bottom-[30%] -left-[10%] w-[80%] h-[70%] bg-empire-cyan/5 rounded-full blur-[120px] opacity-20"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to scale your AI workforce?
                </h2>
                <p className="text-empire-light/80 max-w-2xl mx-auto mb-8 text-lg">
                  Our enterprise team will work with you to design a custom solution that meets your organization's specific needs.
                </p>
                <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
                  <li className="flex items-center text-empire-light/80">
                    <CheckCircle className="w-5 h-5 text-empire-purple mr-2" />
                    <span>Expert Consultation</span>
                  </li>
                  <li className="flex items-center text-empire-light/80">
                    <CheckCircle className="w-5 h-5 text-empire-purple mr-2" />
                    <span>Tailored Solution</span>
                  </li>
                  <li className="flex items-center text-empire-light/80">
                    <CheckCircle className="w-5 h-5 text-empire-purple mr-2" />
                    <span>Implementation Support</span>
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="inline-block bg-empire-purple hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
                >
                  Contact Enterprise Sales
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Enterprise; 