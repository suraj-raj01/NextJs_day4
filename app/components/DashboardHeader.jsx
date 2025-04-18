'use client'
import { HiOutlineBars4 } from "react-icons/hi2";
import { useRouter } from "next/navigation"
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { IoMdLogOut } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import { SiSimpleanalytics } from "react-icons/si";
import { VscColorMode } from "react-icons/vsc";
import { useTheme } from "next-themes"

const DashboardHeader = () => {
    const[sts,setStaus] = useState(true);
    const router = useRouter();
    const { resolvedTheme, setTheme } = useTheme();
    const logout=()=>{
        router.push("/home");
    }

    const sidebar=()=>{
        document.getElementById("icon").style.display='none';
        document.getElementById("slidebar").style.display="block"
    }
    const closeBtn=()=>{
        document.getElementById("icon").style.display='block';
        document.getElementById("slidebar").style.display="none"
    }

  return (
    <div>
        <Link href='dashboard/insert'></Link>
        <div id="navbar">
        <div id="box">
            
            <h2 className='text-4xl text-white flex gap-5'><FaBars className="text-4xl p-1 mt-1" onClick={sidebar} id="icon"/> DashBoard</h2>
        </div>
        <div id="box"></div>
        <div id="box" className=" w-36 flex">
            {/* <span className="text-white font-bold cursor-pointer"  ></span> */}
        <span class="cursor-pointer text-white font-medium me-0 flex text-1xl  p-2 rounded-sm bg-red-600" onClick={logout}>LOGOUT <IoMdLogOut className="text-2xl ml-2"/></span>
        <span className="p-1.5 ml-2 mt-0.8 text-white font-bold text-3xl cursor-pointer">
            <VscColorMode  onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            selectedTheme={resolvedTheme}/></span>
        </div>
        
        </div>
        <div id="slidebar">
            <h1 onClick={closeBtn} className="flex pl-4 gap-2 text-4xl mt-2 text-red-500"> <IoMdCloseCircle className="mt-1"/></h1>
            <br />
          <span className="font-bold text-white p-3 cursor-pointer"  onClick={()=>{router.push("/dashboard/insert")}}>Insert Data</span>
            <br />
          <br />
          <span className="font-bold text-white p-3 cursor-pointer"  onClick={()=>{router.push("/dashboard/showproduct")}}>Show Product</span>
          {/* <Link href="showproduct">Show Product</Link> */}
          <br />
          <br />
          <span className="font-bold text-white p-3 cursor-pointer"  onClick={()=>{router.push("/dashboard/searchbycategory")}}>Search By Category</span>
          {/* <Link href="searchbycategory">Search by Category</Link> */}
          <br />
          <br />
          <span className="font-bold text-white p-3 cursor-pointer"  onClick={()=>{router.push("/dashboard/analysis")}}>Analyse Data</span>
          {/* <Link href="analysis"> Analyse Data</Link> */}
        </div>
    </div>
  )
}

export default DashboardHeader