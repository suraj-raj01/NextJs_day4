import Link from "next/link";

export default function HomePage(){
    return(
        <>
        <Link href='/home'></Link>
        <h1 className='text-4xl text-black text-center font-bold'>Home Page</h1>
        </>
    )
}