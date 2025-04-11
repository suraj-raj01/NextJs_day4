import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <div>
       <Link href='/about'></Link>    
       <h1 className='text-4xl text-black text-center font-bold'>About Page</h1>                                         
    </div>
  )
}


