import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FontLoader } from './lib/FontLoader'
import ErrorBoundary from './lib/ErrorBoundary'

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <FontLoader>
      <App />
    </FontLoader>
  </ErrorBoundary>
);
