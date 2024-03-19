import "./globals.css"
import { Inter } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

import { GoogleTagManager } from '@next/third-parties/google'

import React from "react";

import {isMobile} from 'react-device-detect';





const inter = Inter({ subsets: ["latin"] });

const styles = {
  background: 'blue',
  fontSize: '24px',
  lineHeight: '2',
};

export const metadata = {
  title: "Amazon Amplify",
  description:
    "created by Helmar Baechle",
};


export default function RootLayout
(
  {
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GMMR8J03PP"></script>
</head>
      <body
        className={`${inter.className} bg-slate-50 dark:bg-[#121f31] `}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeSwitcher />
          <main>{children}</main>

          <GoogleTagManager gtmId="GTM-NRMSGTD9" />
         
        </ThemeProvider>

        
      </body>
    </html>
  );
}