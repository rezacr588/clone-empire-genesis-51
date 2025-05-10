
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Features from "@/components/Features";
import CinematicSection from "@/components/CinematicSection";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import Experience from "@/components/Experience";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "The Clone Empire | Automation. Intelligence. Empire.";
  }, []);

  return (
    <div className="bg-empire-darkest text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <CinematicSection />
        <HowItWorks />
        <Pricing />
        <Experience />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
