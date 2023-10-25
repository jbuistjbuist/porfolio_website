"use client";

import React from "react";
import { Inter } from "next/font/google";
import "@styles/globals.scss";
import Nav from "./_components/nav";
import { ColorsProvider } from "./_hooks";
import { Helmet } from "react-helmet";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Jeremy Buist - Web Developer",
  description: "Portfolio of Jeremy Buist, Web Developer and Designer",
  keywords: "Jeremy Buist, Jeremy, Buist, Jeremy Buist's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1" />
      </Helmet>
      <body className={inter.className}>
        <ColorsProvider>
          <Nav />
          <main>{children}</main>
        </ColorsProvider>
      </body>
    </html>
  );
}
