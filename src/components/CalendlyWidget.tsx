import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';
import { CALENDLY } from '@/lib/config';

interface CalendlyWidgetProps {
  url?: string;
  text?: string;
  className?: string;
  prefill?: Record<string, any>;
  isButton?: boolean;
  size?: "default" | "sm" | "lg";
  onError?: (error: Error) => void;
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({
  url = CALENDLY.DEFAULT_URL,
  text = "Book a Demo",
  className = "bg-empire-canyon-deep hover:bg-empire-canyon-deep/90 text-white",
  prefill = {},
  isButton = true,
  size = "default",
  onError,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  // Load Calendly script
  useEffect(() => {
    setIsLoading(true);
    
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => {
        setIsLoading(false);
      };
      script.onerror = (e) => {
        console.error('Failed to load Calendly script:', e);
        setIsLoading(false);
        setHasError(true);
        if (onError) onError(new Error('Failed to load Calendly script'));
      };
      document.body.appendChild(script);
    } else {
      setIsLoading(false);
    }

    return () => {
      // No need to remove script, as it's shared
    };
  }, [onError]);

  useEffect(() => {
    // Initialize Calendly when dialog opens
    if (isOpen && window.Calendly) {
      try {
        window.Calendly.initInlineWidget({
          url,
          parentElement: document.getElementById('calendly-inline-widget'),
          prefill,
        });
        setHasError(false);
      } catch (error) {
        console.error('Error initializing Calendly widget:', error);
        setHasError(true);
        if (onError) onError(error as Error);
      }
    }
  }, [isOpen, url, prefill, onError]);

  if (isButton) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className={className} size={size} disabled={isLoading}>
            {isLoading ? 'Loading...' : text}
            <ChevronRight size={18} className="ml-1" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] p-0">
          {hasError ? (
            <div className="flex flex-col items-center justify-center p-10 text-center">
              <div className="w-12 h-12 rounded-full bg-empire-canyon/10 mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-empire-canyon">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Failed to load scheduling</h3>
              <p className="text-muted-foreground mb-4">
                We couldn't load the scheduling widget. Please check your Calendly URL or try again later.
              </p>
              <Button onClick={() => setIsOpen(false)}>Close</Button>
            </div>
          ) : (
            <div id="calendly-inline-widget" style={{ minWidth: '320px', height: '700px' }} />
          )}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <div>
      {hasError ? (
        <div className="p-4 border border-empire-canyon/30 bg-empire-canyon/5 rounded-md">
          <p className="text-empire-canyon-deep">Failed to load scheduling widget</p>
        </div>
      ) : (
        <div id="calendly-inline-widget" style={{ minWidth: '320px', height: '700px' }} />
      )}
    </div>
  );
};

export default CalendlyWidget;

// Add TypeScript type for Calendly
declare global {
  interface Window {
    Calendly: any;
  }
} 