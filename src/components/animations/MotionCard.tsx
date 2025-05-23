import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface MotionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  hoverEffect?: 'lift' | 'scale' | 'glow' | 'border' | 'none';
  appearAnimation?: 'fade' | 'slide' | 'none';
  children: React.ReactNode;
  motionProps?: MotionProps;
}

const MotionCard: React.FC<MotionCardProps> = ({ 
  children, 
  className = "", 
  delay = 0, 
  hoverEffect = 'lift',
  appearAnimation = 'fade',
  motionProps = {},
  ...props 
}) => {
  // Base motion props for entrance animation
  const baseMotionProps: MotionProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, delay },
  };
  
  // Add y animation for slide effect
  if (appearAnimation === 'slide') {
    baseMotionProps.initial = { ...baseMotionProps.initial, y: 20 };
    baseMotionProps.animate = { ...baseMotionProps.animate, y: 0 };
  }
  
  // Hover animations
  const hoverAnimations: Record<string, any> = {
    lift: { 
      whileHover: { y: -5, transition: { duration: 0.2 } },
      className: `${className} transition-shadow duration-300 hover:shadow-lg`
    },
    scale: { 
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.98 },
      className
    },
    glow: { 
      whileHover: { boxShadow: '0 0 15px rgba(0, 233, 255, 0.5)' },
      className: `${className} transition-shadow duration-300`
    },
    border: { 
      whileHover: { borderColor: 'rgba(0, 233, 255, 0.5)' },
      className: `${className} transition-colors duration-300`
    },
    none: {
      className
    }
  };
  
  // Combine with custom props
  const combinedMotionProps = {
    ...baseMotionProps,
    ...hoverAnimations[hoverEffect],
    ...motionProps
  };

  return (
    <motion.div
      {...combinedMotionProps}
      {...props}
      className={combinedMotionProps.className}
    >
      {children}
    </motion.div>
  );
};

export default MotionCard; 