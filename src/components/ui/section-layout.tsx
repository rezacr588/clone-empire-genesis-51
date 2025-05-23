import React from 'react';
import { cn } from "@/lib/utils";

interface SectionLayoutProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
  className?: string;
  hasTopBorder?: boolean;
  hasGridOverlay?: boolean;
  gridOverlayColor?: string; // e.g., "rgba(217, 217, 217, 0.1)" for silver
  gridOverlayOpacity?: number; // e.g., 0.03
  gridCellSize?: string; // e.g., "40px"
}

export const SectionLayout: React.FC<SectionLayoutProps> = ({
  id,
  children,
  className,
  hasTopBorder = false,
  hasGridOverlay = false,
  gridOverlayColor = "rgba(217, 217, 217, 0.1)", // Default to silver
  gridOverlayOpacity = 0.03,
  gridCellSize = "40px",
  ...props
}) => {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden",
        "py-20 md:py-24", // Default padding, can be overridden by className
        className
      )}
      {...props}
    >
      {hasTopBorder && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-empire-silver/10 to-transparent"></div>
      )}
      {hasGridOverlay && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${gridOverlayColor} 1px, transparent 1px), linear-gradient(90deg, ${gridOverlayColor} 1px, transparent 1px)`,
            backgroundSize: `${gridCellSize} ${gridCellSize}`,
            opacity: gridOverlayOpacity,
          }}
        ></div>
      )}
      <div className="container mx-auto px-4 relative z-10">
        {children}
      </div>
    </section>
  );
}; 