import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Ana Codes",
  description: "Anastasiia's resume app",
};

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

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
      <body className={clsx(roboto.className, "min-h-screen flex flex-col")}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
