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

    // Add font-loading class to html element to prevent transitions during load
    document.documentElement.classList.add('font-loading');

    // Use the document.fonts API if available to check when fonts are loaded
    if ('fonts' in document) {
      // Load Exo 2 font
      Promise.all([
        document.fonts.load('300 1em "Exo 2"'),
        document.fonts.load('400 1em "Exo 2"'),
        document.fonts.load('500 1em "Exo 2"'),
        document.fonts.load('600 1em "Exo 2"'),
        document.fonts.load('700 1em "Exo 2"'),
        // Add Space Grotesk font for headings
        document.fonts.load('400 1em "Space Grotesk"'),
        document.fonts.load('500 1em "Space Grotesk"'),
        document.fonts.load('700 1em "Space Grotesk"'),
      ])
        .then(() => {
          console.log('Fonts loaded successfully');
          
          // Wait for next frame to ensure styles have been applied
          requestAnimationFrame(() => {
            // Remove font-loading class once fonts are available
            document.documentElement.classList.remove('font-loading');
            
            // Add a class to indicate fonts are loaded
            document.documentElement.classList.add('fonts-loaded');
            
            // Set state to render children
            setFontsLoaded(true);
          });
        })
        .catch(err => {
          console.error('Error loading fonts:', err);
          // Even if there's an error, we'll show the content anyway after a delay
          setTimeout(() => {
            document.documentElement.classList.remove('font-loading');
            document.documentElement.classList.add('fonts-loaded');
            setFontsLoaded(true);
          }, 800);
        });
    } else {
      // Fallback for browsers that don't support document.fonts
      // Just wait a moment and assume fonts are loaded
      setTimeout(() => {
        document.documentElement.classList.remove('font-loading');
        document.documentElement.classList.add('fonts-loaded');
        setFontsLoaded(true);
      }, 500);
    }
  }, []);

  return (
    <FontContext.Provider value={{ fontsLoaded }}>
      {/* Show loading state if fonts aren't loaded yet */}
      {!fontsLoaded ? (
        <div className="font-sans min-h-screen flex items-center justify-center bg-empire-darkest text-empire-light">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border-t-2 border-r-2 border-empire-cyan animate-spin mb-4"></div>
            <span className="text-empire-silver">Loading Clone Empire...</span>
          </div>
        </div>
      ) : (
        children
      )}
    </FontContext.Provider>
  );
}; 