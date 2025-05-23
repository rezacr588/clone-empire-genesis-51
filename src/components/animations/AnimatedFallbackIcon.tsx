import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedFallbackIconProps {
  type: string;
  className?: string;
}

const AnimatedFallbackIcon: React.FC<AnimatedFallbackIconProps> = ({ type, className = "h-10 w-10" }) => {
  switch (type) {
    case 'TrendingUp':
      return (
        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Base circle */}
          <motion.circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="1"
            fill="currentColor"
            fillOpacity="0.05"
            animate={{ 
              scale: [1, 1.05, 1],
              fillOpacity: [0.05, 0.1, 0.05]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3,
              ease: "easeInOut"
            }}
          />
          
          {/* Trending graph line */}
          <motion.path
            d="M23 6l-9.5 9.5-5-5L1 18"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          />
          
          {/* Arrow */}
          <motion.path
            d="M17 6h6v6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
          
          {/* Data points */}
          {[
            { cx: 23, cy: 6, delay: 1.2 },
            { cx: 13.5, cy: 15.5, delay: 1.5 },
            { cx: 8.5, cy: 10.5, delay: 1.7 },
            { cx: 1, cy: 18, delay: 1.9 }
          ].map((point, index) => (
            <motion.circle
              key={index}
              cx={point.cx}
              cy={point.cy}
              r="1.5"
              fill="currentColor"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                delay: point.delay, 
                duration: 0.3,
                type: "spring"
              }}
            />
          ))}
        </motion.svg>
      );
      
    case 'BookOpen':
      return (
        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Base circle */}
          <motion.circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="1"
            fill="currentColor"
            fillOpacity="0.05"
            animate={{ 
              scale: [1, 1.05, 1],
              fillOpacity: [0.05, 0.1, 0.05]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3,
              ease: "easeInOut"
            }}
          />
          
          {/* Book spine */}
          <motion.line
            x1="12" 
            y1="4" 
            x2="12" 
            y2="20"
            stroke="currentColor"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8 }}
          />
          
          {/* Left page */}
          <motion.path
            d="M12 4 C 8 4, 4 6, 4 12 C 4 18, 8 20, 12 20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          />
          
          {/* Right page */}
          <motion.path
            d="M12 4 C 16 4, 20 6, 20 12 C 20 18, 16 20, 12 20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          />
          
          {/* Text lines (left page) */}
          {[7, 10, 13, 16].map((y, i) => (
            <motion.line
              key={`left-${i}`}
              x1="6"
              y1={y}
              x2="9"
              y2={y}
              stroke="currentColor"
              strokeOpacity="0.7"
              strokeWidth="1"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 0.7 }}
              transition={{ delay: 1.5 + (i * 0.1), duration: 0.4 }}
            />
          ))}
          
          {/* Text lines (right page) */}
          {[7, 10, 13, 16].map((y, i) => (
            <motion.line
              key={`right-${i}`}
              x1="15"
              y1={y}
              x2="18"
              y2={y}
              stroke="currentColor"
              strokeOpacity="0.7"
              strokeWidth="1"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 0.7 }}
              transition={{ delay: 1.6 + (i * 0.1), duration: 0.4 }}
            />
          ))}
        </motion.svg>
      );
      
    case 'MessageSquare':
      return (
        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Base circle */}
          <motion.circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="1"
            fill="currentColor"
            fillOpacity="0.05"
            animate={{ 
              scale: [1, 1.05, 1],
              fillOpacity: [0.05, 0.1, 0.05]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3,
              ease: "easeInOut"
            }}
          />
          
          {/* Message square */}
          <motion.path
            d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
          />
          
          {/* Message dots */}
          {[
            { cx: 9, cy: 10 },
            { cx: 12, cy: 10 },
            { cx: 15, cy: 10 }
          ].map((dot, index) => (
            <motion.circle
              key={index}
              cx={dot.cx}
              cy={dot.cy}
              r="1"
              fill="currentColor"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1, 1, 1, 0], opacity: [0, 1, 1, 1, 0] }}
              transition={{ 
                delay: 1.2 + (index * 0.3), 
                duration: 1.5, 
                repeat: Infinity,
                repeatDelay: 1
              }}
            />
          ))}
        </motion.svg>
      );
      
    default:
      // Generic fallback with pulsing effect
      return (
        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          initial={{ opacity: 0.8 }}
          animate={{ 
            opacity: 1,
            rotate: 360
          }}
          transition={{ 
            opacity: { duration: 0.5 },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
        >
          <motion.circle
            cx="12"
            cy="12"
            r="6"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="currentColor"
            fillOpacity="0.1"
            animate={{ 
              r: [6, 8, 6],
              strokeOpacity: [1, 0.3, 1],
              fillOpacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut"
            }}
          />
          
          {/* Orbital ring */}
          <motion.circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="2 4"
            fill="none"
            animate={{ rotate: 360 }}
            transition={{ 
              repeat: Infinity, 
              duration: 10,
              ease: "linear"
            }}
          />
          
          {/* Orbiting dot */}
          <motion.circle
            cx="12"
            cy="2"
            r="1.5"
            fill="currentColor"
            animate={{ 
              cx: [12, 22, 12, 2, 12],
              cy: [2, 12, 22, 12, 2]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 5,
              ease: "linear",
              times: [0, 0.25, 0.5, 0.75, 1]
            }}
          />
        </motion.svg>
      );
  }
};

export default AnimatedFallbackIcon; 