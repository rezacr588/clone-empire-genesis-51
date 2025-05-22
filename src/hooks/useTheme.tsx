import { useState, useEffect } from 'react';

/**
 * Theme options type
 */
type Theme = 'dark' | 'light';

/**
 * A custom hook that manages theme state and persists user preferences
 * 
 * @param defaultTheme - Optional default theme if no preference is found (defaults to system preference)
 * @returns An object containing the current theme state and toggle function
 */
export function useTheme(defaultTheme?: Theme) {
  const [theme, setTheme] = useState<Theme | null>(null);

  // Initialize theme on mount
  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light' || (!savedTheme && !systemPrefersDark)) {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    } else if (defaultTheme) {
      setTheme(defaultTheme);
      if (defaultTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [defaultTheme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      
      // Update DOM
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      // Store preference
      localStorage.setItem('theme', newTheme);
      
      return newTheme;
    });
  };

  // Set theme function
  const setThemePreference = (newTheme: Theme) => {
    setTheme(newTheme);
    
    // Update DOM
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Store preference
    localStorage.setItem('theme', newTheme);
  };

  return { 
    theme, 
    toggleTheme,
    setTheme: setThemePreference,
    isDark: theme === 'dark',
    isLight: theme === 'light'
  };
}

export default useTheme; 