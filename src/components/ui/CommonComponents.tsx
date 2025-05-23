import React, { ReactNode } from 'react';

// Common section title component
export const SectionTitle = ({
  title,
  gradientText = false,
  className = '',
  children,
}: {
  title: string | ReactNode;
  gradientText?: boolean;
  className?: string;
  children?: ReactNode;
}) => (
  <div className={`mb-8 ${className}`}>
    <h2 className={`text-3xl md:text-4xl font-medium mb-4 ${gradientText ? 'text-gradient bg-gradient-to-r from-empire-silver to-empire-medium' : 'text-empire-light'}`}>
      {title}
    </h2>
    {children && <div className="text-empire-medium text-lg max-w-2xl mx-auto">{children}</div>}
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
  <div className={`glass-card p-5 rounded-xl text-center ${className}`}>
    <h3 className="text-2xl font-semibold text-empire-silver mb-1">{value}</h3>
    <p className="text-empire-medium/80 text-xs">{label}</p>
  </div>
);

// Background gradient component
export const BackgroundGradient = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[50%] bg-empire-silver/5 rounded-full blur-[90px] opacity-20 animate-pulse-subtle"></div>
    <div className="absolute top-[25%] -right-[10%] w-[50%] h-[40%] bg-empire-red/10 rounded-full blur-[80px] opacity-25 animate-float"></div>
  </div>
);

// Badge component
export const TagBadge = ({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) => (
  <span className={`inline-flex items-center rounded-full border border-empire-silver/20 bg-empire-silver/5 px-3 py-1 text-xs text-empire-silver font-medium ${className}`}>
    {text}
  </span>
);

// Section wrapper
export const Section = ({
  children,
  className = '',
  id,
  hasBackgroundGradient = true,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  hasBackgroundGradient?: boolean;
}) => (
  <section id={id} className={`py-16 md:py-20 relative overflow-hidden bg-empire-darkest ${className}`}>
    {hasBackgroundGradient && <BackgroundGradient />}
    <div className="container mx-auto px-4 relative z-10">
      {children}
    </div>
  </section>
);

// Feature card
export const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="glass-card p-6 rounded-xl transition-all duration-300 hover-lift group border border-empire-medium/10">
    <h3 className="text-xl font-medium mb-2 text-empire-silver group-hover:text-empire-red transition-colors">{title}</h3>
    <p className="text-empire-medium text-sm">{description}</p>
  </div>
); 