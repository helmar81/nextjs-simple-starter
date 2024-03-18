// pages/_app.js
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import Layout from './layout'
import { useRouter } from 'next/router'

import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./components/navigation";



function MyApp() {
  return (
    
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light" children={undefined}>
        
      </NextThemesProvider>
    </NextUIProvider>

  
    
  )
}

export default MyApp;