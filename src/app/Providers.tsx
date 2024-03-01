"use client";
import React from "react";
import { StoreProvider } from "./store/StoreProvider";
import { MuiThemeProvider } from "./context/MuiTheme";
import SangoThemeProvider from "./context/Theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <StoreProvider>
        <SangoThemeProvider>
          <MuiThemeProvider>{children}</MuiThemeProvider>
        </SangoThemeProvider>
      </StoreProvider>
    </>
  );
};

export default Providers;
