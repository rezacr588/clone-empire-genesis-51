import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Badge } from './badge';

interface AgentCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  capabilities: string[];
  color?: 'cyan' | 'red' | 'lime' | 'purple';
  badge?: string;
}

export const AgentCard = ({
  title,
  description,
  icon: Icon,
  capabilities,
  color = 'cyan',
  badge
}: AgentCardProps) => {
  const colorClasses = {
    cyan: {
      icon: 'text-empire-cyan',
      border: 'border-empire-cyan/20 hover:border-empire-cyan/30',
      glow: 'before:bg-empire-cyan/5',
    },
    red: {
      icon: 'text-empire-red',
      border: 'border-empire-red/20 hover:border-empire-red/30', 
      glow: 'before:bg-empire-red/5',
    },
    lime: {
      icon: 'text-empire-lime',
      border: 'border-empire-lime/20 hover:border-empire-lime/30',
      glow: 'before:bg-empire-lime/5',
    },
    purple: {
      icon: 'text-empire-purple',
      border: 'border-empire-purple/20 hover:border-empire-purple/30',
      glow: 'before:bg-empire-purple/5',
    }
  };
  
  const classes = colorClasses[color];
  
  return (
    <div className={`bg-white dark:bg-empire-dark relative rounded-xl shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl p-6 overflow-hidden group ${classes.border} before:absolute before:w-32 before:h-32 before:rounded-full before:blur-3xl before:-top-10 before:-right-10 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500 ${classes.glow}`}>
      <div className="relative z-10">
        {badge && (
          <div className="mb-4">
            <Badge variant="outline" className={`border ${classes.border} ${classes.icon} bg-white/10 dark:bg-empire-dark/70`}>
              {badge}
            </Badge>
          </div>
        )}
        
        <div className="flex items-center mb-4">
          <div className={`p-3 rounded-lg ${classes.icon} bg-gray-100 dark:bg-empire-charcoal mr-4`}>
            <Icon className="w-6 h-6" />
          </div>
          <h3 className={`text-2xl font-semibold ${classes.icon}`}>{title}</h3>
        </div>
        
        <p className="text-empire-dark/80 dark:text-empire-light/80 mb-5 text-sm leading-relaxed">{description}</p>
        
        <h4 className="text-sm font-medium mb-2 text-empire-dark dark:text-empire-light">Key Capabilities:</h4>
        <ul className="space-y-1.5">
          {capabilities.map((capability, index) => (
            <li key={index} className="flex items-center text-xs text-empire-dark/70 dark:text-empire-light/70">
              <div className={`w-1.5 h-1.5 rounded-full ${classes.icon} opacity-70 mr-2`}></div>
              {capability}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AgentCard; 