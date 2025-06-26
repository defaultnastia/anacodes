import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Lato } from "next/font/google";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import clsx from "clsx";

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
      <body className={clsx(lato.className, "min-h-screen flex flex-col")}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
