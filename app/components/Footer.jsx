import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import facebook from "@/public/images/facebook.webp";
import insta from "@/public/images/insta.png";
import linkedin from "@/public/images/linkedinn.webp";
import github from "@/public/images/github.webp";

export default function Footer() {
  return (
    <div>
      <div id="footer">
        <div id="box" style={{textAlign:'start'}}>
          <h1 className='text-4xl'>Commercial Web</h1>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ea modi at velit neque qui, tenetur dolores magnam nemo, autem ipsam itaque, sapiente inventore. Exercitationem autem tempore sequi dolores veniam.</p>
        </div>
        <div id="box">
          <Link href="#">About</Link>
          <Link href="#">Services</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Policy</Link>
          <Link href="#">About</Link>
          <Link href="#">About</Link>
        </div>
        <div id="box">
          <Link href="#">Products</Link>
          <Link href="#">Carriers</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Videos</Link>
          <Link href="#">About</Link>
          <Link href="#">About</Link>
        </div>
        <div id="icons">
          <Image src={facebook} alt='facebook' height='50px'/> 
          <Image src={insta} alt='facebook' height='50px'/> 
          <Image src={linkedin} alt='facebook' height='50px'/> 
          <Image src={github} alt='facebook' height='50px'/> 
        </div>
      </div>
    </div>
  )
}


