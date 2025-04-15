"use client";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import DashboardHeader from "@/app/components/DashboardHeader";
import DashboardFooter from "@/app/components/DashboardFooter";

const page = () => {
  const[selectItem,setSelectItem] = useState("");
  const[mydata,setMydata] = useState([]);


  const handleChange=async(e)=>{
    let name = e.target.name;
    let value = e.target.value;
    let searchCategory = e.target.value;
    setSelectItem(searchCategory);
    setSelectItem(values=>({...values,[name]:value}))
    console.log(selectItem);
    let api = "http://localhost:3000/api/searchbycategories";
    try {
      const response = await axios.post(api, {model:searchCategory});
      console.log(response.data);
      setMydata(response.data);

    } catch (error) {
      console.log(error);
    }
  }

  const res = mydata.map((key) => {
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

  return (
    <div>
      <Link href='/dashbaord/searchbycategory'></Link>
      <DashboardHeader/>
      <div id="dashboard">
        {/* <div id="sidebar">
          <Link href="insert">Insert</Link>
          <Link href="showproduct">Show Product</Link>
          
          <Link href="searchbycategory">Search by Category</Link>
          <Link href="analysis">Analysis</Link>
        </div> */}
        <div id="content">
          <h1 className="text-3xl text-black text-center font-bold p-3">
            Search by Category
          </h1>

          <form action="" id="search">
          <select name="name" id="" value={setSelectItem.name} onChange={handleChange}>
            <option value="">Select Model</option>
            <option name="Dell" value="Dell">Dell</option>
            <option name="Acer" value="Acer">Acer</option>
            <option name="OPPO" value="OPPO">OPPO</option>
          </select>
          </form>
          
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
      <DashboardFooter/>
    </div>
  )
}

export default page
