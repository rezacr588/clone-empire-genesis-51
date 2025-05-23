import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedUserProps {
  className?: string;
}

const AnimatedUser: React.FC<AnimatedUserProps> = ({ className = "h-4 w-4" }) => {
  return (
    <motion.svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <motion.path 
        d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0.6 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.circle 
        cx="12" 
        cy="7" 
        r="4" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        animate={{ 
          scale: [1, 1.1, 1],
          strokeWidth: [1.5, 1.75, 1.5]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 3,
          ease: "easeInOut"
        }}
      />
      <motion.circle
        cx="12"
        cy="7"
        r="2"
        fill="currentColor"
        fillOpacity={0.2}
        animate={{ 
          fillOpacity: [0.2, 0.4, 0.2],
          r: [2, 2.5, 2]
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

export default AnimatedUser; 