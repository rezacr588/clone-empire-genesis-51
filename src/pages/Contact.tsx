import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Mail, Send, Zap, Calendar } from 'lucide-react';
import Layout from "@/components/Layout";
import { toast } from "@/hooks/use-toast";
import { GoHighLevelCalendar } from "@/components/calendar";
import { cn } from "@/lib/utils";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    document.title = "Contact | The Clone Empire";
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, interest: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Replace with actual API call:
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });
    //   if (!response.ok) throw new Error('Network response was not ok.');
    //   toast({
    //     title: "Message Sent!",
    //     description: "We've received your inquiry and will get back to you shortly.",
    //     variant: "default", // Or a custom success variant
    //   });
    //   setFormData({ name: "", email: "", interest: "", message: "" });
    // } catch (error) {
    //   toast({
    //     title: "Submission Error",
    //     description: "Could not send message. Please try again or email us directly.",
    //     variant: "destructive",
    //   });
    // } finally {
    //   setIsSubmitting(false);
    // }

    toast({
      title: "Message Sent!",
      description: "We've received your inquiry and will get back to you shortly.",
    });
    
    setFormData({ name: "", email: "", interest: "", message: "" });
    setIsSubmitting(false);
  };
  
  if (showCalendar) {
    return (
      <Layout>
        <section className="py-20 md:py-28 min-h-screen flex flex-col items-center justify-center bg-empire-darkest relative overflow-hidden">
          {/* Subtle animated background elements */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-empire-cyan/5 rounded-full blur-[150px] opacity-30 animate-pulse-subtle"></div>
            <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-empire-purple/5 rounded-full blur-[120px] opacity-20 animate-float"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
            <Button 
              variant="outline" 
              onClick={() => setShowCalendar(false)}
              className="mb-8 border-empire-medium/30 hover:border-empire-cyan hover:text-empire-cyan transition-colors"
            >
              Back to Contact Form
            </Button>
            <h2 className="text-3xl md:text-4xl font-medium mb-8 text-center text-empire-light">
              Schedule a <span className="text-gradient bg-gradient-to-r from-empire-cyan to-empire-purple">Consultation</span>
            </h2>
            <div className="w-full max-w-4xl bg-empire-dark/50 p-2 md:p-4 rounded-xl shadow-2xl border border-empire-medium/20 backdrop-blur-md">
              <GoHighLevelCalendar calendarId="discovery-call" styles={{ height: '750px' }} />
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20 md:py-28 min-h-screen flex items-center justify-center bg-empire-darkest relative overflow-hidden">
        {/* Subtle animated background elements */}
        <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute -top-[20%] -left-[20%] w-2/3 h-2/3 bg-empire-cyan/10 rounded-full blur-[150px] opacity-20 animate-pulse-subtle animation-delay-2000"></div>
            <div className="absolute -bottom-[20%] -right-[20%] w-2/3 h-2/3 bg-empire-purple/10 rounded-full blur-[150px] opacity-20 animate-float"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <Zap className="h-12 w-12 text-empire-cyan mx-auto mb-6 opacity-80" />
            <h1 className="text-4xl md:text-5xl font-medium mb-6 text-empire-light leading-tight">
              Connect <span className="text-gradient bg-gradient-to-r from-empire-cyan via-empire-purple to-empire-red">With Us</span>
            </h1>
            <p className="text-lg text-empire-silver mb-10 md:mb-12 max-w-xl mx-auto opacity-80">
              Have a question or a project in mind? Drop us a line or schedule a call. We're ready to build the future, together.
            </p>
          </div>

          <div className="max-w-xl mx-auto bg-empire-dark/30 backdrop-blur-md p-6 md:p-10 rounded-xl shadow-2xl border border-empire-medium/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-empire-silver">Full Name</label>
                <Input 
                  id="name"
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-empire-dark/50 border-empire-medium/30 focus:border-empire-cyan focus:ring-empire-cyan/50 placeholder:text-empire-medium/70 text-empire-light"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-empire-silver">Email Address</label>
                <Input 
                  id="email"
                  name="email"
                  type="email" 
                  placeholder="you@domain.com" 
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-empire-dark/50 border-empire-medium/30 focus:border-empire-cyan focus:ring-empire-cyan/50 placeholder:text-empire-medium/70 text-empire-light"
                  required
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium mb-1.5 text-empire-silver">Primary Interest</label>
                <Select value={formData.interest} onValueChange={handleSelectChange}>
                  <SelectTrigger className="w-full bg-empire-dark/50 border-empire-medium/30 focus:border-empire-cyan focus:ring-empire-cyan/50 text-empire-light placeholder:text-empire-medium data-[placeholder]:text-empire-medium">
                    <SelectValue placeholder="How can we help you?" />
                  </SelectTrigger>
                  <SelectContent className="bg-empire-darker border-empire-medium/50 text-empire-light">
                    <SelectItem value="ai-agents" className="hover:bg-empire-cyan/10 focus:bg-empire-cyan/20">AI Agent Development</SelectItem>
                    <SelectItem value="automation" className="hover:bg-empire-cyan/10 focus:bg-empire-cyan/20">Process Automation</SelectItem>
                    <SelectItem value="consulting" className="hover:bg-empire-cyan/10 focus:bg-empire-cyan/20">AI Strategy Consulting</SelectItem>
                    <SelectItem value="partnership" className="hover:bg-empire-cyan/10 focus:bg-empire-cyan/20">Partnership Opportunities</SelectItem>
                    <SelectItem value="other" className="hover:bg-empire-cyan/10 focus:bg-empire-cyan/20">Other Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-empire-silver">Your Message</label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Tell us about your project or question..." 
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-empire-dark/50 border-empire-medium/30 focus:border-empire-cyan focus:ring-empire-cyan/50 min-h-[120px] placeholder:text-empire-medium/70 text-empire-light"
                  required
                  rows={5}
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className={cn(
                  "w-full text-lg py-3 bg-gradient-to-r from-empire-cyan to-empire-purple text-empire-darkest font-semibold hover:opacity-90 transition-opacity duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-offset-empire-darkest focus:ring-empire-cyan",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-10 text-center">
                <p className="text-empire-silver mb-3">Or, schedule a direct consultation:</p>
                <Button 
                    variant="outline" 
                    onClick={() => setShowCalendar(true)}
                    className="border-empire-cyan/50 text-empire-cyan hover:bg-empire-cyan/10 hover:border-empire-cyan transition-colors group"
                >
                    Schedule a Call <Calendar className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                </Button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-empire-medium/20 text-center">
                <p className="text-sm text-empire-medium">
                    You can also reach us directly at:
                </p>
                <a href="mailto:connect@cloneempire.ai" className="text-empire-cyan hover:text-empire-purple transition-colors group mt-1 inline-flex items-center">
                    connect@cloneempire.ai
                    <Mail className="ml-1.5 h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity"/>
                </a>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
