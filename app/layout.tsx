import "./globals.css"
import { Inter } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import Header from "./components/Header";




import React from "react";




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


</head>
      <body
        className={`${inter.className} bg-slate-50 dark:bg-[#121f31] `}
      >
 <header/>
        
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeSwitcher />
          <main>{children}</main>
          
        
         
        </ThemeProvider>
       
        
      </body>
    </html>
  );
}
