import Link from "next/link";

export default function page(){
  return (
    <div>
      <Link href='/products'></Link>
      <h1 className='text-4xl text-black text-center font-bold'>Product Page</h1>
    </div>
  )
}


