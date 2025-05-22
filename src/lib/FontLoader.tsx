import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Create a context for font loading status
const FontContext = createContext({ fontsLoaded: false });

export const useFonts = () => useContext(FontContext);

interface FontLoaderProps {
  children: ReactNode;
}

export const FontLoader: React.FC<FontLoaderProps> = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // Check if the document is available (client-side only)
    if (typeof document === 'undefined') {
      return;
    }

    // Use the document.fonts API if available to check when fonts are loaded
    if ('fonts' in document) {
      // Load Exo 2 font
      Promise.all([
        document.fonts.load('300 1em "Exo 2"'),
        document.fonts.load('400 1em "Exo 2"'),
        document.fonts.load('500 1em "Exo 2"'),
        document.fonts.load('600 1em "Exo 2"'),
        document.fonts.load('700 1em "Exo 2"'),
      ])
        .then(() => {
          console.log('Exo 2 fonts loaded successfully');
          setFontsLoaded(true);
          // Add a class to the body to indicate fonts are loaded
          document.body.classList.add('fonts-loaded');
        })
        .catch(err => {
          console.error('Error loading fonts:', err);
          // Even if there's an error, we'll show the content anyway after a delay
          setTimeout(() => setFontsLoaded(true), 1000);
        });
    } else {
      // Fallback for browsers that don't support document.fonts
      // Just wait a moment and assume fonts are loaded
      setTimeout(() => setFontsLoaded(true), 500);
    }
  }, []);

  return (
    <FontContext.Provider value={{ fontsLoaded }}>
      {/* Optional: Show loading state if fonts aren't loaded yet */}
      {!fontsLoaded ? (
        <div className="font-sans min-h-screen flex items-center justify-center bg-empire-darkest text-white">
          Loading...
        </div>
      ) : (
        children
      )}
    </FontContext.Provider>
  );
}; 