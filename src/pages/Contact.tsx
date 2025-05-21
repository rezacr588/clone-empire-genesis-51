
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
    consent: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
  
  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, consent: checked }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message received",
        description: "We'll get back to you as soon as possible!",
      });
      
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        interest: "",
        message: "",
        consent: false
      });
    }, 1500);
  };
  
  return (
    <div className="bg-empire-darkest text-white min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                <span className="text-gradient bg-gradient-to-r from-white via-empire-cyan to-white">
                  Get in Touch
                </span>
              </h1>
              <p className="text-lg md:text-xl text-empire-light mb-8 max-w-2xl mx-auto">
                Ready to revolutionize your customer interactions with AI? Our team is here to help you get started.
              </p>
            </div>
          </div>
          
          {/* Background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-empire-cyan/5 blur-[150px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-empire-red/5 blur-[100px] rounded-full"></div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-semibold mb-6">Contact Information</h2>
                <p className="text-empire-light mb-12 max-w-md">
                  Have questions about our AI Clone technology? Want to see a personalized demo? Our team is ready to assist you.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-empire-darker flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-empire-cyan" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email Us</h3>
                      <p className="text-empire-light">info@cloneempire.ai</p>
                      <p className="text-empire-light">support@cloneempire.ai</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-empire-darker flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-empire-cyan" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Call Us</h3>
                      <p className="text-empire-light">+1 (555) 123-4567</p>
                      <p className="text-empire-light">Monday - Friday, 9AM - 6PM EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-empire-darker flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5 text-empire-cyan" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Visit Us</h3>
                      <p className="text-empire-light">123 AI Boulevard</p>
                      <p className="text-empire-light">San Francisco, CA 94105</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Form */}
              <div>
                <div className="bg-empire-darker border border-empire-charcoal/50 rounded-xl p-8 neo-glass">
                  <h3 className="text-2xl font-medium mb-6">Send us a message</h3>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                          <Input 
                            id="name"
                            name="name"
                            placeholder="John Doe" 
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-empire-darkest border-empire-charcoal/50 focus:border-empire-cyan"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                          <Input 
                            id="email"
                            name="email"
                            type="email" 
                            placeholder="john@example.com" 
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-empire-darkest border-empire-charcoal/50 focus:border-empire-cyan"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium mb-1">Company</label>
                          <Input 
                            id="company" 
                            name="company"
                            placeholder="Your Company" 
                            value={formData.company}
                            onChange={handleChange}
                            className="bg-empire-darkest border-empire-charcoal/50 focus:border-empire-cyan"
                          />
                        </div>
                        <div>
                          <label htmlFor="interest" className="block text-sm font-medium mb-1">Interest</label>
                          <Select value={formData.interest} onValueChange={handleSelectChange}>
                            <SelectTrigger className="bg-empire-darkest border-empire-charcoal/50 focus:border-empire-cyan">
                              <SelectValue placeholder="Select interest" />
                            </SelectTrigger>
                            <SelectContent className="bg-empire-darker border-empire-charcoal/50">
                              <SelectItem value="sales">Sales Clone</SelectItem>
                              <SelectItem value="support">Support Clone</SelectItem>
                              <SelectItem value="appointment">Appointment Setting</SelectItem>
                              <SelectItem value="custom">Custom Solution</SelectItem>
                              <SelectItem value="partnership">Partnership</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                        <Textarea 
                          id="message"
                          name="message"
                          placeholder="Tell us how we can help..." 
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="bg-empire-darkest border-empire-charcoal/50 focus:border-empire-cyan resize-none"
                          required
                        />
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <Checkbox 
                          id="consent" 
                          checked={formData.consent}
                          onCheckedChange={handleCheckboxChange}
                          className="mt-0.5"
                        />
                        <label
                          htmlFor="consent"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to be contacted about The Clone Empire products and services
                        </label>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="bg-empire-darkCyan hover:bg-empire-cyan text-white w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-20 bg-empire-darker relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-empire-medium/20 to-transparent"></div>
          
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-12 text-center">Find Us</h2>
            
            <div className="rounded-xl overflow-hidden border border-empire-charcoal/50 h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.95431994036!2d-122.43913267504103!3d37.77748051706335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858086f1d52a3d%3A0xd9f7b27ae8ef045!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1653050899804!5m2!1sen!2s"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="The Clone Empire Location"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
