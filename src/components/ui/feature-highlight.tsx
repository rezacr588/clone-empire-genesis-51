import React from 'react';

interface FeatureHighlightProps {
  title: string;
  description: string;
}

export const FeatureHighlight = ({
  title,
  description,
}: FeatureHighlightProps) => {
  
  return (
    <div 
      className={`group glass-card p-6 rounded-xl transition-all duration-300 border border-empire-medium/10 hover:border-empire-canyon-deep/20 relative overflow-hidden flex flex-col hover-lift`}
    >
      <div 
        className={`absolute -inset-px opacity-0 group-hover:opacity-15 transition-opacity duration-500 bg-empire-silver/5 rounded-xl blur-md`}
      ></div>

      <h3 className={`text-xl font-medium mb-2 text-empire-silver group-hover:text-empire-canyon-deep transition-colors`}>{title}</h3>
      <p className="text-empire-medium/90 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureHighlight; 