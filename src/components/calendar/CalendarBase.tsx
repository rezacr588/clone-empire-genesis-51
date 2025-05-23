import React, { useEffect, useRef, useState } from 'react';
import { getCalendarEmbedUrl } from '@/lib/goHighLevelApi';
import { ErrorDisplay } from './ErrorDisplay';

interface CalendarBaseProps {
  calendarId?: string;
  styles?: React.CSSProperties;
  className?: string;
  onLoad?: () => void;
  onError?: (error: Error) => void;
  showLoader?: boolean;
}

export const CalendarBase: React.FC<CalendarBaseProps> = ({
  calendarId,
  styles = { height: '700px' },
  className = '',
  onLoad,
  onError,
  showLoader = true,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    if (!calendarId) {
      setHasError(true);
      if (onError) onError(new Error('No calendar ID provided'));
    }
  }, [calendarId, onError]);

  const handleIframeLoad = () => {
    setIsLoading(false);
    if (onLoad) onLoad();
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
    if (onError) onError(new Error('Failed to load calendar'));
  };

  const embedUrl = calendarId ? getCalendarEmbedUrl(calendarId) : '';

  if (hasError) {
    return <ErrorDisplay message="Failed to load scheduling widget" />;
  }

  return (
    <div 
      className={`calendar-container ${className}`}
      style={{ minWidth: '320px', position: 'relative', ...styles }}
    >
      {isLoading && showLoader && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 bg-opacity-50 z-10">
          <div className="w-8 h-8 border-4 border-empire-cyan border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <iframe
        ref={iframeRef}
        src={embedUrl}
        onLoad={handleIframeLoad}
        onError={handleIframeError}
        style={{ 
          width: '100%', 
          height: '100%', 
          border: 'none',
          borderRadius: '0.5rem'
        }}
        title="Schedule Appointment"
        allow="camera; microphone; autoplay; encrypted-media; fullscreen;"
      />
    </div>
  );
}; 