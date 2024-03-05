import React, { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

const SangoThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounded] = useState<boolean>(false);

  useEffect(() => {
    setMounded(true);
  }, []);

  if (!mounted) {
    return <div>{children}</div>;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default SangoThemeProvider;
