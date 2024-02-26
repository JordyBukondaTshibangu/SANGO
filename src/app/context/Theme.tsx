"use client";
// ThemeContext.tsx
import React, { createContext, useState } from "react";

interface Theme {
  mode: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext<Theme>({
  mode: "dark",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>({
    mode: "dark",
    toggleTheme: () => {
      setTheme((prevTheme) => ({
        ...prevTheme,
        mode: prevTheme.mode === "dark" ? "light" : "dark",
      }));
    },
  });

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  ); // Removed unnecessary return statement
};

export { ThemeContext, ThemeProvider };
