// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
import Link from 'next/link'

import React from "react";

export default function Page() {
    return (
      
     
        <><h1 className="text-4xl p-16 content-center font-bold underline">
        I am currently working on it

        <div  className=" p-16 content-center"> 
        <img
          src="icon8.png"
          alt="basic Logo"
          width={145}
          height={137}
       
        />
        </div>

        <div className="p-0 content-center"> </div>
      </h1 ><Link href="/"  className="text-4xl p-16 content-center">Home</Link></>
     
    
    )  
}







 