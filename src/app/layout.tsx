import "./globals.css";
import "./styles/fonts.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";

import Header from "./components/header";
import Footer from "./components/footer";
import projectTheme from "./styles/muiTheme";

export const metadata = {
  title: "Ana Codes",
  description: "Anastasiia's resume app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={projectTheme}>
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
