'use client'
import { useRouter } from 'next/navigation'
import axios from "axios";
import Link from "next/link";
import { useState } from "react"
import TopNavbar from '../components/TopNavbar';
import Footer from '../components/Footer';

export default function page(){
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
      let api = "http://localhost:3000/api/login"
      try {
          const response = await axios.post(api,Input);
          router.push('/dashboard')
          console.log(response.data)
          localStorage.setItem("name",response.data.name)
          alert(response.data.msg);
      } catch (error) {
          console.log(error);
      }
    }
  
    return(
      <>
      <Link href='/'></Link>
      <TopNavbar/>
      <h1 className='text-4xl text-center font-bold'>SignIn Page</h1>
  
      <div id="signup">
      <form>
          <h1 className='text-3xl p-2'>Sign In</h1>

          <input type="text" placeholder='enter your email' 
          name='email'
          value={Input.email}
          onChange={handleInput}
          />
          
          <input type="password" placeholder='enter your password '
          name='password'
          value={Input.password}
          onChange={handleInput}
          />
          <button className='p-2 bg-black text-white w-xs' onClick={handleSubmit}>Submit</button>
          <Link href='/' className="font-bold">Dont Have an account</Link>
          <br />
      </form>
      </div>
      <Footer/>
      </>
    )
  }