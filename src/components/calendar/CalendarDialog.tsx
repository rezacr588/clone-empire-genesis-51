import React, { useState, ReactNode } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';
import { CalendarBase } from './CalendarBase';
import { ErrorDisplay } from './ErrorDisplay';

interface CalendarDialogProps {
  calendarId?: string;
  text?: ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg";
  onError?: (error: Error) => void;
}

export const CalendarDialog: React.FC<CalendarDialogProps> = ({
  calendarId,
  text = "Book a Demo",
  className = "bg-empire-red hover:bg-empire-red/90 text-white",
  size = "default",
  onError,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  const handleError = (error: Error) => {
    setHasError(true);
    if (onError) onError(error);
  };

  const handleClose = () => setIsOpen(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className={className} size={size} disabled={isLoading}>
          {isLoading ? 'Loading...' : text}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] p-0">
        {hasError ? (
          <ErrorDisplay 
            message="We couldn't load the scheduling widget. Please check your calendar ID or try again later." 
            variant="dialog" 
            onClose={handleClose}
          />
        ) : (
          <CalendarBase 
            calendarId={calendarId}
            styles={{ height: '700px' }}
            onError={handleError}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}; 