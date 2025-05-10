
import React from 'react';

const CinematicSection = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-empire-darkest">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-empire-medium/20 to-transparent"></div>
      
      {/* Cinematic background with subtle parallax effect */}
      <div 
        className="absolute inset-0 bg-empire-darker opacity-50"
        style={{ 
          backgroundImage: `url('/lovable-uploads/9d02690c-9939-4035-91b9-8bb8dbd0e978.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'luminosity',
          filter: 'blur(8px)'
        }}
      ></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-empire-darkest via-empire-darkest/40 to-empire-darkest"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-8 leading-tight text-white">
            "You don't hire <span className="text-gradient bg-gradient-to-r from-white via-empire-red to-white">employees</span>.
            <br />
            You deploy <span className="text-empire-red">Clones</span>."
          </h2>
          
          <div className="w-16 h-px bg-empire-red/50 mx-auto mb-8"></div>
          
          <p className="text-lg md:text-xl text-empire-light max-w-2xl mx-auto">
            Clone agents that represent your business 24/7, never sleep, never take vacations, and operate at scale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CinematicSection;
