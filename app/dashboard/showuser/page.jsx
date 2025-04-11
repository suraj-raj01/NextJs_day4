'use client'
import axios from 'axios';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const app = () => {

const[data,setData] = useState([]);

const loadData=async()=>{
  let api = "http://localhost:3000/api/information"
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

const ans = data.map((key)=>{
  return(
    <>
    <tr>
      <td>{key.name}</td>
      <td>{key.email}</td>
      <td>{key.contact}</td>
    </tr>
    </>
  )
})

  return (
    <div>
        <Link href='dashboard/showuser'></Link>
        <div id="dashboard">
        <div id="sidebar">
            <Link href='insert'>Insert</Link>
            <Link href='showproduct'>Show Product</Link>
            <Link href='showuser'>Show User</Link>
        </div>
        <div id="content">
        <h1 className='text-4xl text-black text-center font-bold'>User Show Page</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {ans}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}

export default app