"use client"
import React from "react"
import { useTheme } from "next-themes"
import Link from "next/link";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";


export default function HomePage(){
    // const { setTheme } = useTheme()
    const { resolvedTheme, setTheme } = useTheme();
   
    return(
        <>
        <Link href='/home'></Link>
        <TopNavbar/>
        <h1 className='text-4xl text-center font-bold mt-5 mb-10'>Home Page</h1>
        
        {/* <select name="" id="">
            <option value="" onClick={() => setTheme("light")}>Light</option>
            <option value="" onClick={() => setTheme("dark")}>Dark</option>
            <option value="" onClick={() => setTheme("system")}>System</option>
        </select> */}
        <br /><br />
        <div className="py-0 px-8">
      <div className="flex flex-col justify-center px-8 w-full">
        <nav className="relative flex items-center justify-between w-full max-w-2xl pt-8 pb-8 mx-auto text-gray-900 border-gray-200 dark:border-gray-700 sm:pb-16">
          <span className="text-gray-700 dark:text-gray-200 p-1 sm:px-3 sm:py-2 ">
            Current theme: {resolvedTheme}
          </span>
          <button onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            selectedTheme={resolvedTheme}>
            change
            </button>
        </nav>
      </div>
    </div>
        <Footer/>
        </>
    )
}