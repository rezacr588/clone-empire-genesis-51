import React from 'react';
import { Badge } from './badge';

interface AgentCardProps {
  title: string;
  description: string;
  capabilities: string[];
  badgeText?: string;
  badgeVariant?: 'canyon' | 'silver' | 'medium' | 'light' | 'primary' | 'default' | 'secondary' | 'destructive' | 'outline';
}

export const AgentCard = ({
  title,
  description,
  capabilities,
  badgeText,
  badgeVariant = 'silver'
}: AgentCardProps) => {
  return (
    <div className={`glass-card group relative overflow-hidden rounded-xl p-5 border border-empire-medium/10 transition-all duration-300 hover-lift flex flex-col h-full`}>
      <div className={`absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-10 bg-empire-silver/5 rounded-xl blur-sm`}></div>
      
      {badgeText && (
        <Badge variant={badgeVariant} className="mb-3 self-start text-xs">
          {badgeText}
        </Badge>
      )}
      
      <h3 className="text-lg font-medium mb-2 text-empire-light group-hover:text-empire-cyan transition-colors">{title}</h3>
      <p className="text-empire-silver text-sm mb-4 flex-grow">{description}</p>
      
      <div className="space-y-1.5 mt-auto">
        {capabilities.map((capability, i) => (
          <div key={i} className="flex items-center text-xs">
            <div className="w-1 h-1 rounded-full bg-empire-silver/70 mr-2 flex-shrink-0"></div>
            <span className="text-empire-silver/80">{capability}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentCard; 