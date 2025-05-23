import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTagProps {
  className?: string;
}

const AnimatedTag: React.FC<AnimatedTagProps> = ({ className = "h-4 w-4" }) => {
  return (
    <motion.svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <motion.path 
        d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        initial={{ opacity: 0.7 }}
        animate={{ 
          opacity: [0.7, 1, 0.7],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 3,
          ease: "easeInOut"
        }}
      />
      <motion.circle 
        cx="7" 
        cy="7" 
        r="1" 
        fill="currentColor"
        animate={{ 
          r: [1, 1.5, 1],
          fillOpacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2,
          ease: "easeInOut"
        }}
      />
    </motion.svg>
  );
};

export default AnimatedTag; 