"use client";
import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FD7401",
    },
    secondary: {
      main: "#FF8755",
    },
    success: {
      main: '#00B83E"',
    },
    error: {
      main: "#dc3545",
    },
    info: {
      main: "#738AFF",
    },
  },
  typography: {},
  transitions: {},
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FFF",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: "#242535",
        },
      },
    },
  },
});

export function MuiThemeProvider(props: any) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
