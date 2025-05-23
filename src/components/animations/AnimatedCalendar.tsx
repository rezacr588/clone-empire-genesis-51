import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedCalendarProps {
  className?: string;
}

const AnimatedCalendar: React.FC<AnimatedCalendarProps> = ({ className = "h-4 w-4" }) => {
  return (
    <motion.svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <motion.rect 
        x="3" 
        y="4" 
        width="18" 
        height="18" 
        rx="2" 
        ry="2" 
        stroke="currentColor" 
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.line 
        x1="16" 
        y1="2" 
        x2="16" 
        y2="6" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      />
      <motion.line 
        x1="8" 
        y1="2" 
        x2="8" 
        y2="6" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      />
      <motion.line 
        x1="3" 
        y1="10" 
        x2="21" 
        y2="10" 
        stroke="currentColor" 
        strokeWidth="1.5"
        initial={{ strokeDashoffset: 24, strokeDasharray: 24 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ delay: 1, duration: 1 }}
      />
      <motion.circle 
        cx="8" 
        cy="14" 
        r="1" 
        fill="currentColor"
        animate={{ 
          opacity: [0.7, 0.2, 0.7],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5,
          ease: "easeInOut"
        }}
      />
      <motion.circle 
        cx="12" 
        cy="14" 
        r="1" 
        fill="currentColor"
        animate={{ 
          opacity: [0.7, 0.2, 0.7],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5,
          ease: "easeInOut",
          delay: 0.3
        }}
      />
    </motion.svg>
  );
};

export default AnimatedCalendar; 