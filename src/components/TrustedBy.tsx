
import React from 'react';

const TrustedBy = () => {
  const partners = [
    "Tech Founders", 
    "Real Estate Teams", 
    "Agencies", 
    "B2B Services"
  ];

  return (
    <section className="py-14 bg-empire-darkest relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-8">
          <p className="text-empire-light text-sm uppercase tracking-widest">Trusted by</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center h-16 px-6 py-3 border border-empire-charcoal/60 bg-empire-darker/50 rounded-lg"
              >
                <span className="text-empire-silver text-lg font-semibold">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
