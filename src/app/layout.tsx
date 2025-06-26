import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Lato } from "next/font/google";
import clsx from "clsx";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export const metadata: Metadata = {
  title: "Ana Codes",
  description: "Anastasiia's resume app",
};

const lato = Lato({ subsets: ["latin"], weight: ["400", "700", "900"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={clsx(
          lato.className,
          "min-h-screen flex flex-col bg-background text-foreground",
        )}
      >
        {/* Centered content wrapper */}
        <div className="w-full max-w-[2400px] mx-auto px-4 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
