import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Mail, MapPin, Phone, Calendar, User } from 'lucide-react';
import Layout from "@/components/Layout";
import { toast } from "@/hooks/use-toast";
import CalendlyInline from "@/components/CalendlyInline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TEAM } from "@/lib/config";

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
  const [imageError, setImageError] = useState(false);
  
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
  
  const handleImageError = () => {
    setImageError(true);
  };
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
              <span className="bg-gradient-to-r from-empire-silver via-empire-red to-empire-silver bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>
            <p className="text-lg md:text-xl text-empire-medium mb-8 max-w-2xl mx-auto">
              Ready to revolutionize your customer interactions with AI? Our team is here to help you get started.
            </p>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-empire-red/5 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-empire-charcoal/20 blur-[100px] rounded-full"></div>
        </div>
      </section>
      
      {/* Contact Options */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="form" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-empire-charcoal">
              <TabsTrigger value="form" className="data-[state=active]:bg-empire-red data-[state=active]:text-white">Contact Form</TabsTrigger>
              <TabsTrigger value="schedule" className="data-[state=active]:bg-empire-red data-[state=active]:text-white">Schedule a Call</TabsTrigger>
            </TabsList>
            
            <TabsContent value="form">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info with Image */}
                <div>
                  <div className="relative mb-8">
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-empire-charcoal to-empire-darker">
                      {imageError ? (
                        <img 
                          src="/images/team/placeholder.svg" 
                          alt="Team Member"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <img 
                          src="/images/team/customer-success-manager.jpg" 
                          alt={`${TEAM.CONTACT.NAME} - ${TEAM.CONTACT.ROLE}`}
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                          onError={handleImageError}
                          loading="lazy"
                        />
                      )}
                    </div>
                    <div className="absolute -bottom-4 left-0 right-0 mx-auto text-center py-4 px-6 bg-empire-red/90 backdrop-blur-sm rounded-lg max-w-md shadow-lg shadow-empire-red/20">
                      <h3 className="text-xl font-semibold mb-1">{TEAM.CONTACT.NAME}</h3>
                      <p className="text-sm text-empire-light">{TEAM.CONTACT.ROLE}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6 mt-12 bg-empire-darker/50 p-6 rounded-xl border border-empire-charcoal/30">
                    <h3 className="text-xl font-medium mb-4 text-empire-cyan">Contact Information</h3>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-empire-charcoal flex items-center justify-center mr-4">
                        <Mail className="h-5 w-5 text-empire-red" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Email Us</h3>
                        <p className="text-empire-medium">info@cloneempire.ai</p>
                        <p className="text-empire-medium">support@cloneempire.ai</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-empire-charcoal flex items-center justify-center mr-4">
                        <Phone className="h-5 w-5 text-empire-red" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Call Us</h3>
                        <p className="text-empire-medium">+1 (555) 123-4567</p>
                        <p className="text-empire-medium">Monday - Friday, 9AM - 6PM EST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-empire-charcoal flex items-center justify-center mr-4">
                        <MapPin className="h-5 w-5 text-empire-red" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Visit Us</h3>
                        <p className="text-empire-medium">123 AI Boulevard</p>
                        <p className="text-empire-medium">San Francisco, CA 94105</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-empire-charcoal flex items-center justify-center mr-4">
                        <Calendar className="h-5 w-5 text-empire-red" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Schedule a Call</h3>
                        <p className="text-empire-medium">Use our calendar to book a demo or consultation</p>
                        <Button 
                          variant="link" 
                          className="text-empire-red p-0 h-auto"
                          onClick={() => (document.querySelector('[data-value="schedule"]') as HTMLElement | null)?.click()}
                        >
                          Schedule now <ArrowRight className="ml-1 h-4 w-4 inline" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Form */}
                <div>
                  <div className="bg-empire-darker border border-empire-charcoal/50 rounded-xl p-8 shadow-lg">
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
                              className="bg-empire-charcoal border-empire-charcoal/50 focus:border-empire-red"
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
                              className="bg-empire-charcoal border-empire-charcoal/50 focus:border-empire-red"
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
                              className="bg-empire-charcoal border-empire-charcoal/50 focus:border-empire-red"
                            />
                          </div>
                          <div>
                            <label htmlFor="interest" className="block text-sm font-medium mb-1">Interest</label>
                            <Select value={formData.interest} onValueChange={handleSelectChange}>
                              <SelectTrigger className="bg-empire-charcoal border-empire-charcoal/50 focus:border-empire-red">
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
                            className="bg-empire-charcoal border-empire-charcoal/50 focus:border-empire-red resize-none"
                            required
                          />
                        </div>
                        
                        <div className="flex items-start space-x-2">
                          <Checkbox 
                            id="consent" 
                            checked={formData.consent}
                            onCheckedChange={handleCheckboxChange}
                            className="mt-0.5 data-[state=checked]:bg-empire-red data-[state=checked]:border-empire-red"
                          />
                          <label
                            htmlFor="consent"
                            className="text-sm font-medium leading-none text-empire-silver"
                          >
                            I agree to be contacted about The Clone Empire products and services
                          </label>
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="bg-empire-red hover:bg-empire-red/90 text-white w-full"
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
            </TabsContent>
            
            <TabsContent value="schedule">
              <div className="max-w-4xl mx-auto">
                <div className="bg-empire-darker border border-empire-charcoal/50 rounded-xl p-6 shadow-lg">
                  <h3 className="text-2xl font-medium mb-6 text-center">Schedule a Demo or Consultation</h3>
                  <CalendlyInline 
                    url="https://calendly.com/clone-empire/demo" 
                    styles={{ height: '750px' }} 
                    className="w-full"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-20 bg-empire-darker relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-empire-medium/20 to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">Find Us</h2>
          
          <div className="rounded-xl overflow-hidden h-96 w-full max-w-5xl mx-auto border border-empire-charcoal/50 shadow-lg">
            <iframe
              title="The Clone Empire Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764066075955!3d37.75781499697245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1656543941133!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
