'use client'
import axios from "axios";
import Link from "next/link";
import { useState } from "react"
import { useRouter } from 'next/navigation'
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";

export default function SignUp(){
  const[Input,setInput] = useState("");
  const router = useRouter()

  const handleInput=(e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setInput(values=>({...values,[name]:value}))
    console.log(Input);
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    let api = "http://localhost:3000/api/information"
    try {
        await axios.post(api,Input);
        router.push('/signin')
        alert("Registration Successfully Completed!!");
    } catch (error) {
        console.log(error);
    }
  }

  return(
    <>
    <Link href='/signup'></Link>
    <TopNavbar/>
    {/* <h1 className='text-4xl text-center font-bold'>SignUp Page</h1> */}

    <div id="signup">
      <br />
    <form>
        <h3 className='text-1xl p-2'>User Registration</h3>
        <input type="text" placeholder='enter your name' 
        name='name'
        value={Input.name}
        onChange={handleInput}
        />
        <input type="text" placeholder='enter your email' 
        name='email'
        value={Input.email}
        onChange={handleInput}
        />
        <input type="text" placeholder='enter your contact '
        name='contact'
        value={Input.contact}
        onChange={handleInput}
        />
        <input type="password" placeholder='enter your password '
        name='password'
        value={Input.password}
        onChange={handleInput}
        />
        <button className='p-2 bg-black text-white' onClick={handleSubmit}>Submit</button>

     <Link href='signin' className="font-bold">Already Have an account</Link>
     <br />
    </form>
    <br /><br />
    </div>
    <Footer/>
    </>
  )
}