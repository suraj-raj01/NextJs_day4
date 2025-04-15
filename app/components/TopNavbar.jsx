'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function TopNavbar() {
  const router = useRouter();
  const signIn=()=>{
    router.push('/signin');
  }

  return (
    <div>
      <div id="navbar">
        <div id="box">
          <h1 className="text-4xl text-white">ECommerce</h1>
        </div>
        <div id="box">
          <Link href="home">Home</Link>
          <Link href="about">About</Link>
          <Link href="products">Product</Link>
          <Link href="#">Services</Link>
        </div>
        <div id="box">
          <Link href="signin">SignIn</Link>
          <Link href="signup">SignUp</Link>
        </div>
      </div>
    </div>
  )
}
