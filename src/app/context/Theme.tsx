import React from "react";
import { ThemeProvider } from "next-themes";

const SangoThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default SangoThemeProvider;
