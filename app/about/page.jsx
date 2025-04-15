import Link from 'next/link'
import React from 'react'
import TopNavbar from '../components/TopNavbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div>
       <Link href='/about'></Link>   
       <TopNavbar/> 
       <h1 className='text-4xl text-center font-bold mt-10 mb-10'>About Page</h1>    
       <Footer/>                                     
    </div>
  )
}


