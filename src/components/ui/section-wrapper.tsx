import React from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  hasTopBorder?: boolean;
  hasBottomBorder?: boolean;
  hasGridOverlay?: boolean;
  hasBackgroundPattern?: boolean; // For more complex patterns if needed
  bgColor?: string; // e.g., 'bg-empire-darkest', 'bg-empire-dark'
  py?: string; // e.g., 'py-20', 'py-24'
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className,
  as: Component = 'section',
  hasTopBorder = false,
  hasBottomBorder = false,
  hasGridOverlay = false,
  hasBackgroundPattern = false, // Default to false
  bgColor = 'bg-empire-darkest', // Default background
  py = 'py-20', // Default padding
  ...props
}) => {
  return (
    <Component
      className={cn(
        'relative overflow-hidden',
        bgColor,
        py,
        className
      )}
      {...props}
    >
      {hasTopBorder && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-empire-silver/10 to-transparent"></div>
      )}
      {hasBottomBorder && (
         <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-empire-silver/10 to-transparent"></div>
      )}
      {hasGridOverlay && (
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(217, 217, 217, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(217, 217, 217, 0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        ></div>
      )}
      {/* Placeholder for more complex background patterns */}
      {hasBackgroundPattern && (
        <div className="absolute inset-0 pointer-events-none opacity-5">
          {/* Example: Add more sophisticated SVG or CSS patterns here */}
        </div>
      )}
      <div className="container mx-auto px-4 relative z-10">
        {children}
      </div>
    </Component>
  );
}; 