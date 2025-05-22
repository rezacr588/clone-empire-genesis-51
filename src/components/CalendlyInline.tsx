import React, { useEffect, useRef } from 'react';

interface CalendlyInlineProps {
  url: string;
  prefill?: Record<string, any>;
  styles?: React.CSSProperties;
  className?: string;
}

const CalendlyInline: React.FC<CalendlyInlineProps> = ({
  url,
  prefill = {},
  styles = { height: '700px' },
  className = '',
}) => {
  const calendlyRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (calendlyRef.current && window.Calendly) {
      window.Calendly.initInlineWidget({
        url,
        parentElement: calendlyRef.current,
        prefill,
      });
    }
    
    // Create a new MutationObserver to watch for when Calendly is loaded
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'childList' &&
          mutation.addedNodes.length > 0 &&
          calendlyRef.current
        ) {
          // Once Calendly is loaded, initialize it
          if (window.Calendly) {
            window.Calendly.initInlineWidget({
              url,
              parentElement: calendlyRef.current,
              prefill,
            });
            observer.disconnect(); // Stop observing once initialized
          }
        }
      });
    });
    
    // Start observing the target node with the configured parameters
    if (calendlyRef.current) {
      observer.observe(document.body, { childList: true, subtree: true });
    }
    
    return () => {
      observer.disconnect();
    };
  }, [url, prefill]);

  return (
    <div 
      ref={calendlyRef}
      className={className}
      style={{ minWidth: '320px', ...styles }}
    />
  );
};

export default CalendlyInline;

// Ensure TypeScript knows about Calendly
declare global {
  interface Window {
    Calendly: any;
  }
} 