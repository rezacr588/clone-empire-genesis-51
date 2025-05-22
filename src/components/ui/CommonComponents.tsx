import React, { ReactNode } from 'react';

// Common section title component
export const SectionTitle = ({
  title,
  gradient = false,
  className = '',
  children,
}: {
  title: string | ReactNode;
  gradient?: boolean;
  className?: string;
  children?: ReactNode;
}) => (
  <div className={`mb-8 ${className}`}>
    <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${gradient ? 'text-gradient bg-gradient-to-r from-empire-cyan via-empire-red to-empire-cyan' : 'dark:text-white text-empire-dark'}`}>
      {title}
    </h2>
    {children}
  </div>
);

// Stat card component 
export const StatCard = ({
  value,
  label,
  className = '',
}: {
  value: string;
  label: string;
  className?: string;
}) => (
  <div className={`glass-card p-6 rounded-xl text-left ${className}`}>
    <h3 className="text-3xl font-bold dark:text-empire-cyan text-empire-darkCyan mb-2">{value}</h3>
    <p className="dark:text-empire-light text-empire-dark text-sm">{label}</p>
  </div>
);

// Background gradient component
export const BackgroundGradient = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-[30%] -left-[10%] w-[80%] h-[70%] bg-empire-red/5 rounded-full blur-[120px] opacity-40"></div>
    <div className="absolute top-[30%] -right-[10%] w-[70%] h-[50%] bg-empire-cyan/10 rounded-full blur-[100px] opacity-60"></div>
  </div>
);

// Badge component
export const TagBadge = ({
  text,
  icon,
  className = '',
}: {
  text: string;
  icon?: ReactNode;
  className?: string;
}) => (
  <span className={`inline-flex items-center rounded-full border border-empire-cyan/30 bg-empire-cyan/10 px-4 py-2 text-sm dark:text-empire-cyan text-empire-darkCyan font-medium ${className}`}>
    {icon && <span className="mr-2">{icon}</span>}
    <span className="animate-pulse-subtle mr-1.5 h-1.5 w-1.5 rounded-full bg-empire-cyan"></span>
    {text}
  </span>
);

// Section wrapper
export const Section = ({
  children,
  className = '',
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) => (
  <section id={id} className={`py-16 md:py-24 relative overflow-hidden ${className}`}>
    <BackgroundGradient />
    <div className="container mx-auto px-4 relative z-10">
      {children}
    </div>
  </section>
);

// Feature card
export const FeatureCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) => (
  <div className="bg-empire-darker/50 backdrop-blur-sm p-6 rounded-xl transition-all duration-300 hover-lift group border border-empire-cyan/10">
    <div className="w-14 h-14 rounded-lg mb-5 flex items-center justify-center bg-empire-charcoal">
      {icon}
    </div>
    <h3 className="text-xl font-medium mb-3 dark:text-white text-empire-dark group-hover:text-empire-cyan transition-colors">{title}</h3>
    <p className="dark:text-empire-light text-empire-dark mb-5">{description}</p>
  </div>
); 