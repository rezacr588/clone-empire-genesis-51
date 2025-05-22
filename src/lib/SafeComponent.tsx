import React, { ReactNode, Suspense, lazy, ComponentType } from 'react';
import ErrorBoundary from './ErrorBoundary';

interface SafeComponentProps {
  importer: () => Promise<{ default: ComponentType<any> }>;
  fallback?: ReactNode;
  props?: Record<string, any>;
  errorMessage?: string;
}

const DefaultLoading = () => (
  <div className="flex justify-center items-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-empire-cyan"></div>
  </div>
);

const DefaultError = ({ message }: { message?: string }) => (
  <div className="rounded-md bg-empire-darker/50 p-4 m-2">
    <div className="flex">
      <div className="flex-shrink-0">
        <svg className="h-5 w-5 text-empire-red" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="ml-3">
        <h3 className="text-sm font-medium text-empire-red">
          Component Failed to Load
        </h3>
        {message && (
          <div className="mt-2 text-sm text-empire-silver">
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  </div>
);

export function SafeComponent({
  importer,
  fallback = <DefaultLoading />,
  props = {},
  errorMessage,
}: SafeComponentProps): JSX.Element {
  // Use React.lazy for dynamic import
  const LazyComponent = lazy(async () => {
    try {
      return await importer();
    } catch (error) {
      console.error('Error loading component:', error);
      // Return a component that renders the error
      return {
        default: () => <DefaultError message={errorMessage || (error as Error).message} />
      };
    }
  });

  return (
    <ErrorBoundary
      fallback={<DefaultError message={errorMessage || "Failed to render component"} />}
    >
      <Suspense fallback={fallback}>
        <LazyComponent {...props} />
      </Suspense>
    </ErrorBoundary>
  );
} 