import React, { useState, useEffect } from 'react';
import ErrorBoundary from '@/lib/ErrorBoundary';
import { Button } from "@/components/ui/button";

interface ImportErrorHandlerProps {
  importFn: () => Promise<any>;
  componentName: string;
  children: React.ReactNode;
}

const ImportError = ({ componentName, error }: { componentName: string; error: Error }) => {
  return (
    <div className="p-6 mx-auto my-8 max-w-3xl bg-empire-darker rounded-lg border border-empire-canyon-deep/20">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-empire-canyon-deep/10 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-empire-canyon-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-empire-canyon-deep">Failed to load {componentName}</h2>
      </div>
      
      <div className="bg-empire-darkest/70 p-4 rounded-md mb-4 overflow-auto">
        <pre className="text-empire-silver text-sm whitespace-pre-wrap">
          {error.message}
          {error.stack && (
            <div className="mt-2 p-2 bg-empire-darkest/50 rounded border border-empire-medium/10">
              <details>
                <summary className="cursor-pointer text-empire-cyan/80 hover:text-empire-cyan">Show stack trace</summary>
                <div className="mt-2 text-xs text-empire-silver/70 whitespace-pre-wrap overflow-x-auto">
                  {error.stack}
                </div>
              </details>
            </div>
          )}
        </pre>
      </div>
      
      <div className="bg-empire-cyan/10 p-4 rounded-md text-sm">
        <h3 className="font-medium text-empire-cyan mb-2">Possible Solutions:</h3>
        <ul className="list-disc pl-5 space-y-2 text-empire-light">
          <li>Check if all the images and assets required by {componentName} exist in the public folder</li>
          <li>Check if all the imports in {componentName} exist in their respective libraries</li>
          <li>Verify that the correct version of dependencies is installed</li>
          <li>Check console for more detailed error information</li>
          <li>Try refreshing the page</li>
        </ul>
      </div>
      
      <div className="mt-5 text-center">
        <Button 
          variant="primary" 
          onClick={() => window.location.reload()}
        >
          Refresh Page
        </Button>
      </div>
    </div>
  );
};

export const ImportErrorHandler: React.FC<ImportErrorHandlerProps> = ({ 
  importFn, 
  componentName,
  children
}) => {
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    // Attempt to import the component
    importFn()
      .catch((err: Error) => {
        console.error(`Error importing ${componentName}:`, err);
        setError(err);
      });
      
    // Check if window is defined (browser environment)
    if (typeof window !== 'undefined') {
      // Listen for global errors that might be related to this component
      const handleError = (event: ErrorEvent) => {
        // Only capture errors that might be related to this component
        if (event.message.includes(componentName) || 
            (event.error && event.error.stack && event.error.stack.includes(componentName))) {
          console.error(`Error potentially related to ${componentName}:`, event.error);
          setError(event.error);
          // Prevent default browser error handling
          event.preventDefault();
        }
      };
      
      window.addEventListener('error', handleError);
      
      return () => {
        window.removeEventListener('error', handleError);
      };
    }
  }, [importFn, componentName]);
  
  if (error) {
    return <ImportError componentName={componentName} error={error} />;
  }
  
  return (
    <ErrorBoundary fallback={<ImportError componentName={componentName} error={new Error("Component failed to render")} />}>
      {children}
    </ErrorBoundary>
  );
}; 