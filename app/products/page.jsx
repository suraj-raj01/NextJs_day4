import Link from "next/link";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";

export default function page(){
  return (
    <div>
      <Link href='/products'></Link>
      <TopNavbar/>
      <h1 className='text-4xl text-center font-bold mt-5 mb-8'>Product Page</h1>
      <Footer/>
    </div>
  )
}


