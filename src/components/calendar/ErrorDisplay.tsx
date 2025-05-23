import React from 'react';

interface ErrorDisplayProps {
  message: string;
  className?: string;
  variant?: 'inline' | 'dialog';
  onClose?: () => void;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({
  message,
  className = '',
  variant = 'inline',
  onClose,
}) => {
  if (variant === 'dialog') {
    return (
      <div className={`flex flex-col items-center justify-center p-6 text-center ${className}`}>
        <div className="w-12 h-12 rounded-full bg-red-100 mb-4 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-red-500">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h3 className="text-lg font-medium mb-2">Failed to load scheduling</h3>
        <p className="text-muted-foreground mb-4">{message}</p>
        {onClose && (
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-empire-cyan text-white rounded-md hover:bg-empire-darkCyan"
          >
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={`p-4 border border-red-300 bg-red-50 rounded-md ${className}`}>
      <p className="text-red-800">{message}</p>
    </div>
  );
}; 