import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import {Button} from '@nextui-org/button';

import router, { useRouter } from 'next/navigation'

import Header from "./components/Header"

export default function Home() {
  return (



    <main className={styles.main}>
  

      <h1 className="text-3xl font-bold underline">
      Hello Amazonians !
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
          src="/aws.png"
          alt="aws Logo"
          width={180}
          height={137}
          priority
        />
       
      </div>

      <p className="p-8 content-center">I was able to create this Application</p>

      <div className={styles.grid}>

    

     

</div>
      
      <span> created with Amplify + NEXT.js </span>
      <Image
          src="/amplify.svg"
          alt="Amplify Logo"
          width={45}
          height={37}
          priority
        />
     
     
      <Image
          src="/next.svg"
          alt="Amplify Logo"
          width={45}
          height={37}
          priority
        />
       <Link href="/about">Dashboard</Link>
    
    </main>


)
}







