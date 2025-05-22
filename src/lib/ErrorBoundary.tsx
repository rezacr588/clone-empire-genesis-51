import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error caught by ErrorBoundary:', error);
    console.error('Component stack:', errorInfo.componentStack);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      return (
        <div className="min-h-screen flex items-center justify-center bg-empire-darker p-4">
          <div className="bg-empire-darkest border border-empire-cyan/20 rounded-lg shadow-lg p-6 max-w-lg w-full">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-empire-red/10 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-empire-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-2 text-center">Something went wrong</h1>
            
            <div className="bg-empire-darker/50 rounded p-4 mb-4 overflow-auto max-h-40">
              <pre className="text-empire-red text-sm whitespace-pre-wrap break-words">
                {this.state.error?.toString()}
              </pre>
            </div>
            
            <p className="text-empire-silver mb-6 text-center">
              Please check the console for more details and try refreshing the page.
            </p>
            
            <div className="flex justify-center">
              <button
                onClick={() => window.location.reload()}
                className="bg-empire-cyan hover:bg-empire-darkCyan text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 