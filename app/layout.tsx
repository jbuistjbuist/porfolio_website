
import React from "react";
import { Inter } from "next/font/google";
import "@styles/globals.scss";
import Nav from "./_components/nav";
import { Metadata } from "next";
import { ColorsProvider } from "./_hooks";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jeremy Buist - Web Developer",
  description: "Portfolio of Jeremy Buist, Web Developer and Designer",
  keywords: "Jeremy Buist, Jeremy, Buist, Web Development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ColorsProvider>
        <Nav />
        <main>{children}</main>
        </ColorsProvider>
      </body>
    </html>
  );
}
