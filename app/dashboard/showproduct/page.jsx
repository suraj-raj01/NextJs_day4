'use client'
import axios from 'axios';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import DashboardHeader from '@/app/components/DashboardHeader';
import DashboardFooter from '@/app/components/DashboardFooter';
import { useRouter } from 'next/navigation';

const app = () => {
  const[mydata,setData] = useState([]);
  const [search, setSearch] = useState("");
  const [mydata1, setMydata1] = useState([]);
  const [status,setStatus] = useState(true)
  const router = useRouter();

  const addProduct=()=>{
    router.push("insert")
  }
  
  const loadData=async()=>{
    let api = "http://localhost:3000/api/product"
    try {
      const res = await axios.get(api);
      console.log(res.data)
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleInput = async (e) => {
    e.preventDefault();
    let stdname = e.target.value;
    setSearch(stdname)
    let api = "http://localhost:3000/api/searchproduct";
    try {
      const response = await axios.post(api, {search:search});
      console.log(response);
      setMydata1(response.data);
      setStatus(false);
    } catch (error) {
      console.log(error);
    }
  };

    const res1 = mydata1.map((key) => {
      return (
        <>
          <tr>
            <td>{key.name}</td>
            <td>{key.model}</td>
            <td>{key.price}</td>
            <td>
              <Image src={key.img} alt="product image" height={50} width={70} />
            </td>
          </tr>
        </>
      );
    });
  
  useEffect(()=>{
    loadData();
  },[])

let count=0;
const res=mydata.map((key)=>{
  count++;
  return(
    <>
    <tr>
      <td>{key.name.toUpperCase()}</td>
      <td>{key.model}</td>
      <td>{key.price} {" ₹"}</td>
      <td>
      <Image src={key.img} alt='product photo' height={50} width={70}/>
      </td>
    </tr>
    </>
  )
})

  return (
    <div>
        <Link href='/dashbaord/showproduct'></Link>
        <DashboardHeader/>
        <div id="dashboard">
        {/* <div id="sidebar">
        <Link href='insert'>Insert</Link>
          <Link href='showproduct'>Show Product</Link>
         
          <Link href="searchbycategory">Search by Category</Link>
          <Link href="analysis">Analysis</Link>
        </div> */}
        <div id="content">
        <h1 className='text-3xl text-black text-center font-bold'>Show Product</h1>
        <form id="search">
            <input
              type="text"
              placeholder="enter product name"
              name="search"
              value={search}
              onChange={handleInput}
            />
            {/* <button className="p-2 bg-black text-white" onClick={handleSearch}>
              Submit
            </button> */}
          </form>
          <button className='p-2 mb-2 bg-green-600 ml-2 text-white' onClick={addProduct}>+ Add Product</button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Model</th>
              <th>Price</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            {status?(
              res
            ):(res1)}
          </tbody>
        </table>
        </div>
      </div>
      <DashboardFooter/>
    </div>
  )
}

export default app
