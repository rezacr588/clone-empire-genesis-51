import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Features from "@/components/Features";

const CloneTypes = () => {
  useEffect(() => {
    document.title = "Clone Types | The Clone Empire";
  }, []);

  return (
    <div className="bg-empire-light dark:bg-empire-darkest text-empire-dark dark:text-white min-h-screen font-exo">
      <Navbar />
      <main>
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default CloneTypes; 