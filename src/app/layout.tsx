import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { StoreProvider } from "./store/StoreProvider";
import { MuiThemeProvider } from "./context/MuiTheme";
import { ThemeProvider } from "./context/Theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sango",
  description:
    "A news web app providing daily feeds, job opportunities, articles, events and different posts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <ThemeProvider>
        <MuiThemeProvider>
          <html lang="en" className="bg-darkHeader lg:bg-dark">
            <body className={inter.className} suppressHydrationWarning={true}>
              {children}
            </body>
          </html>
        </MuiThemeProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}
