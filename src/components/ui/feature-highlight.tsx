import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color?: 'cyan' | 'red' | 'lime' | 'purple';
  direction?: 'left' | 'right';
}

export const FeatureHighlight = ({
  title,
  description,
  icon: Icon,
  color = 'cyan',
  direction = 'left'
}: FeatureProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const colorClasses = {
    cyan: {
      text: 'text-empire-cyan',
      bg: 'bg-empire-cyan',
      iconBg: 'bg-empire-cyan/10',
      shadow: 'shadow-empire-cyan/20',
      border: 'border-empire-cyan/20',
      glow: 'before:bg-empire-cyan/5',
    },
    red: {
      text: 'text-empire-red',
      bg: 'bg-empire-red',
      iconBg: 'bg-empire-red/10',
      shadow: 'shadow-empire-red/20',
      border: 'border-empire-red/20',
      glow: 'before:bg-empire-red/5',
    },
    lime: {
      text: 'text-empire-lime',
      bg: 'bg-empire-lime',
      iconBg: 'bg-empire-lime/10',
      shadow: 'shadow-empire-lime/20',
      border: 'border-empire-lime/20',
      glow: 'before:bg-empire-lime/5',
    },
    purple: {
      text: 'text-empire-purple',
      bg: 'bg-empire-purple',
      iconBg: 'bg-empire-purple/10',
      shadow: 'shadow-empire-purple/20',
      border: 'border-empire-purple/20',
      glow: 'before:bg-empire-purple/5',
    }
  };
  
  const classes = colorClasses[color];
  
  return (
    <div 
      className={`flex ${direction === 'right' ? 'flex-row-reverse' : 'flex-row'} items-start gap-6 relative`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`w-16 h-16 rounded-xl flex items-center justify-center ${classes.iconBg} relative 
          before:absolute before:inset-0 before:rounded-xl ${classes.border} before:border before:transform
          ${isHovered ? 'before:scale-[1.15] before:opacity-100' : 'before:scale-100 before:opacity-0'}
          before:transition-all before:duration-300 before:z-[-1]`}
      >
        <Icon className={`w-7 h-7 ${classes.text}`} />
        <div className={`absolute -top-1 -right-1 w-2 h-2 ${classes.bg} rounded-full ${isHovered ? 'animate-pulse-subtle' : ''}`}></div>
      </div>
      
      <div className={`flex-1 ${direction === 'right' ? 'text-right' : 'text-left'}`}>
        <h3 className={`text-xl font-semibold ${classes.text} mb-2`}>{title}</h3>
        <p className="dark:text-empire-light/80 text-empire-dark/80 text-sm leading-relaxed">{description}</p>
      </div>
      
      {/* Connection line */}
      <div className={`absolute top-8 left-8 w-[calc(100%-2rem)] h-px bg-gradient-to-r 
        ${direction === 'right' ? 'from-transparent' : `from-[${classes.text}]/10`} 
        ${direction === 'right' ? `to-[${classes.text}]/10` : 'to-transparent'}
        origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}>
      </div>
    </div>
  );
};

export default FeatureHighlight; 