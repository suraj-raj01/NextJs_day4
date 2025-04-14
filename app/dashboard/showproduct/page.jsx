'use client'
import axios from 'axios';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

const app = () => {
  const[mydata,setData] = useState([]);
  
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
  
  useEffect(()=>{
    loadData();
  },[])


const res=mydata.map((key)=>{
  return(
    <>
    <tr>
      <td>{key.name}</td>
      <td>{key.model}</td>
      <td>{key.price}</td>
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
        <div id="dashboard">
        <div id="sidebar">
        <Link href='insert'>Insert</Link>
          <Link href='showproduct'>Show Product</Link>
          {/* <Link href='showuser'>Show User</Link> */}
          <Link href='search'>Search</Link>
          <Link href="searchbycategory">Search by Category</Link>
        </div>
        <div id="content">
        <h1 className='text-3xl text-black text-center font-bold'>Show Product</h1>
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
            {res}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}

export default app
