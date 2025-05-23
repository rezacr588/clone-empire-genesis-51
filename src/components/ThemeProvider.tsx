import React, { createContext, useContext } from "react";
import { useTheme as useThemeHook } from "@/hooks/useTheme";

type Theme = "dark" | "light";

type ThemeContextType = {
  theme: Theme | null;
  toggleTheme: () => void;
  setTheme: (newTheme: Theme) => void;
  isDark: boolean;
  isLight: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Use the more complete hook implementation
  const themeState = useThemeHook();

  return (
    <ThemeContext.Provider value={themeState}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
