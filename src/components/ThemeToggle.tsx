
import React from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme} 
      className="bg-transparent hover:bg-transparent"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-empire-silver transition-all" />
      ) : (
        <Moon className="h-5 w-5 text-empire-dark transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
