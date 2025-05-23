import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'primary' | 'canyon' | 'silver' | 'light' | 'medium';
  badgeClassName?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  center?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeVariant = 'primary',
  badgeClassName = '',
  title,
  titleHighlight,
  subtitle,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  center = true
}) => {
  // Split the title if there is a highlight
  let titleContent;
  if (titleHighlight) {
    const titleParts = title.split(titleHighlight);
    titleContent = (
      <>
        {titleParts[0]}
        <span className="text-gradient bg-gradient-to-r from-empire-cyan to-empire-canyon-deep">
          {titleHighlight}
        </span>
        {titleParts[1]}
      </>
    );
  } else {
    titleContent = title;
  }

  return (
    <motion.div 
      className={`${center ? 'text-center' : ''} ${className}`}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {badge && (
        <div className={`${center ? 'inline-block' : ''} mb-4`}>
          <Badge 
            variant={badgeVariant} 
            className={`${badgeClassName}`}
          >
            {badge}
          </Badge>
        </div>
      )}
      <h1 className={`text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4 ${titleClassName}`}>
        <span className="text-empire-light">
          {titleContent}
        </span>
      </h1>
      {subtitle && (
        <p className={`text-lg md:text-xl text-empire-silver ${center ? 'max-w-3xl mx-auto' : ''} opacity-80 ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader; 