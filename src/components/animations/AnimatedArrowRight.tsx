import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedArrowRightProps {
  className?: string;
}

const AnimatedArrowRight: React.FC<AnimatedArrowRightProps> = ({ className = "h-5 w-5" }) => {
  return (
    <motion.svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      initial={{ x: 0 }}
      whileHover={{ x: 3 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <path 
        d="M5 12H19" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <motion.path 
        d="M12 5L19 12L12 19" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        animate={{ 
          d: ["M12 5L19 12L12 19", "M13 5L20 12L13 19", "M12 5L19 12L12 19"] 
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5, 
          ease: "easeInOut" 
        }}
      />
    </motion.svg>
  );
};

export default AnimatedArrowRight; 