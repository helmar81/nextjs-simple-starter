import Layout from '../components/layout'
import { useRouter } from 'next/router'
import React from "react";
 
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}