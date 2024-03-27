import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import {Button} from '@nextui-org/button';

import router, { useRouter } from 'next/navigation'

import Header from "./components/Header"

export default function Home() {
  return (

    <main className={styles.main}>
  
<header/>
      <h1 className="text-2xl font-bold underline">
      Hello Amazonians
    </h1>

    <Image
          src="/basic.svg"
          alt="basic Logo"
          width={45}
          height={37}
          priority
        />
        
    <p className="p-2 content-center">after spending hours on</p>

      <div className= "p-2 content-center">
        <Image
          className={styles.logo}
          src="/AWS.png"
          alt="aws Logo"
          width={180}
          height={137}
          priority
        />
       
      </div>

      <p className="p-2 justify-content">I was able to create this Application</p>

    
     
<div className="p-12 content-center">
       <Link href="/about" className="text-2xl underline center">Dashboard</Link>
       </div>

      <span className="p-2 content-center"> created with </span>

      <Image
          src="/next.svg"
          alt="next Logo"
          width={85}
          height={57}
          priority
        />
     
     <span className="p-2 content-center">+ deployed on Amplify </span>
      <Image
          src="/amplify.svg"
          alt="Amplify Logo"
          width={45}
          height={37}
          priority
        />

<div className="p-6 content-center">
<a
      
      href="https://uspekhi.web.app" rel="noopener"  target="_blank"  >
     
       Copyright © {new Date().getFullYear()} USPEKHI
    </a>
    </div>
    </main>

)
}







