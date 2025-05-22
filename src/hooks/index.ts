/**
 * Custom hooks library for the Clone Empire application
 * 
 * This library includes reusable React hooks for UI animations, state management,
 * and other common functionality used throughout the application.
 */

// UI and Animation Hooks
export { default as useTypewriter } from './useTypewriter';
export { default as useMouseTracking } from './useMouseTracking';
export { default as useNetworkAnimation } from './useNetworkAnimation';
export { default as useIsMobile } from './use-mobile';

// State Management Hooks
export { default as useTheme } from './useTheme';
export { default as useToast } from './use-toast';

// Export types
export type { ToastProps } from './use-toast'; 