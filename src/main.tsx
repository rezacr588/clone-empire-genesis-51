import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FontLoader } from './lib/FontLoader'
import ErrorBoundary from './lib/ErrorBoundary'

// Initialize theme before React hydration to prevent flash
const initializeTheme = () => {
  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set theme class on document element
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
  } else if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    // Default to dark mode if no preference saved
    document.documentElement.classList.add('dark');
  }
};

// Run theme initialization immediately
initializeTheme();

// Create root element with proper error boundaries
createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <FontLoader>
      <App />
    </FontLoader>
  </ErrorBoundary>
);
