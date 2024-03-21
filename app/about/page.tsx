// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
import Link from 'next/link'

import React from "react";

import Header from "../components/Header";
import router from 'next/router';

import styles from './page.module.css'

export default function Page() {
    return (
      
     
      
        <><h1 className="text-2xl p-6 m-16 text center font-bold underline">
        I am currently working on it

        <div  className=" p-6 justify-content"> 
        <img
          src="icon8.png"
          alt="basic Logo"
          width={145}
          height={137}
       
        />
        </div>

        <div  className=" p-6 align content center"> 
        <img
          src="sponge.png"
          alt="basic Logo"
          width={145}
          height={137}
       
        />
        </div>

        </h1 ><Link href="/"className="text-3xl p-16 m-16 justify-content center">Home</Link></>

       
    )  
}







 