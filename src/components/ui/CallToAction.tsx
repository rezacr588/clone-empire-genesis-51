import React from 'react';
import { motion } from 'framer-motion';
import { GoHighLevelCalendar } from '@/components/calendar';
import MotionCard from '@/components/animations/MotionCard';

interface CallToActionProps {
  title: string;
  description: string;
  calendarId: string;
  buttonText: string;
  className?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  calendarId,
  buttonText,
  className = ''
}) => {
  return (
    <MotionCard
      delay={0.7}
      hoverEffect="none"
      className={`rounded-xl p-6 md:p-8 bg-empire-dark/70 dark:bg-empire-darker border border-empire-medium/20 backdrop-blur-lg shadow-xl ${className}`}
      whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
    >
      <div className="md:flex items-center">
        <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
          <h3 className="text-xl md:text-2xl font-bold text-empire-light mb-3">{title}</h3>
          <p className="text-empire-silver/90">
            {description}
          </p>
        </div>
        <div className="md:w-1/3">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <GoHighLevelCalendar 
              calendarId={calendarId}
              text={buttonText}
              className="w-full bg-gradient-to-r from-empire-cyan to-empire-purple text-empire-darkest font-semibold hover:opacity-90 transition-opacity duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-offset-empire-darkest focus:ring-empire-cyan rounded-lg flex items-center gap-2 justify-center"
              size="lg"
            />
          </motion.div>
        </div>
      </div>
    </MotionCard>
  );
};

export default CallToAction; 