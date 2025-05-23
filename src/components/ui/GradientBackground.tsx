import React from 'react';

interface GradientBackgroundProps {
  children: React.ReactNode;
  variant?: 'default' | 'cyan' | 'purple' | 'red' | 'multi';
  className?: string;
  animated?: boolean;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
  variant = 'default',
  className = '',
  animated = true
}) => {
  // Define gradient classes based on variant
  const gradientClasses = {
    default: (
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className={`absolute -top-[30%] -left-[10%] w-[80%] h-[70%] bg-empire-cyan/20 dark:bg-empire-cyan/10 rounded-full blur-[120px] ${animated ? 'animate-pulse-subtle animation-delay-1000' : ''}`}></div>
        <div className={`absolute top-[30%] -right-[10%] w-[70%] h-[50%] bg-empire-purple/20 dark:bg-empire-purple/10 rounded-full blur-[100px] ${animated ? 'animate-float' : ''}`}></div>
      </div>
    ),
    cyan: (
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className={`absolute -top-[20%] left-[20%] w-[80%] h-[70%] bg-empire-cyan/30 dark:bg-empire-cyan/20 rounded-full blur-[120px] ${animated ? 'animate-pulse-subtle' : ''}`}></div>
        <div className={`absolute top-[40%] -right-[20%] w-[60%] h-[40%] bg-empire-cyan/20 dark:bg-empire-cyan/10 rounded-full blur-[100px] ${animated ? 'animate-float animation-delay-500' : ''}`}></div>
      </div>
    ),
    purple: (
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className={`absolute -top-[30%] -left-[20%] w-[80%] h-[60%] bg-empire-purple/30 dark:bg-empire-purple/20 rounded-full blur-[120px] ${animated ? 'animate-pulse-subtle animation-delay-700' : ''}`}></div>
        <div className={`absolute top-[50%] right-[10%] w-[50%] h-[50%] bg-empire-purple/20 dark:bg-empire-purple/10 rounded-full blur-[100px] ${animated ? 'animate-float animation-delay-200' : ''}`}></div>
      </div>
    ),
    red: (
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className={`absolute -top-[10%] left-[10%] w-[60%] h-[50%] bg-empire-red/30 dark:bg-empire-red/20 rounded-full blur-[120px] ${animated ? 'animate-pulse-subtle animation-delay-300' : ''}`}></div>
        <div className={`absolute top-[40%] -right-[10%] w-[70%] h-[60%] bg-empire-red/20 dark:bg-empire-red/10 rounded-full blur-[100px] ${animated ? 'animate-float animation-delay-800' : ''}`}></div>
      </div>
    ),
    multi: (
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className={`absolute -top-[20%] -left-[10%] w-[60%] h-[50%] bg-empire-cyan/30 dark:bg-empire-cyan/20 rounded-full blur-[120px] ${animated ? 'animate-pulse-subtle' : ''}`}></div>
        <div className={`absolute top-[20%] right-[20%] w-[50%] h-[40%] bg-empire-purple/30 dark:bg-empire-purple/20 rounded-full blur-[100px] ${animated ? 'animate-float animation-delay-500' : ''}`}></div>
        <div className={`absolute top-[60%] left-[20%] w-[40%] h-[30%] bg-empire-red/30 dark:bg-empire-red/20 rounded-full blur-[100px] ${animated ? 'animate-pulse-subtle animation-delay-1000' : ''}`}></div>
      </div>
    ),
  };
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {gradientClasses[variant]}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GradientBackground; 