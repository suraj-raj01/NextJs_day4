"use client";
import Link from "next/link";

import DashboardHeader from "@/app/components/DashboardHeader";
import DashboardFooter from "@/app/components/DashboardFooter";
import MyLineChart from "@/app/components/MyChart";
import MyBarChart from "@/app/components/BarChat";
import TotalUserPieChart from "@/app/components/PieChart";
import { useState,useEffect } from "react";
import axios from "axios";

export default function Search() {
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
      },[]);

      let totalItem = 0;
      const res = mydata.map((key)=>{
        totalItem+=1;
        return(
            <>
            </>
        )
      })

      console.log(totalItem);

  return (
    <>
      <Link href="dashboard/analysis"></Link>
      <DashboardHeader/>
      <div id="dashboard">
        {/* <div id="sidebar">
          <Link href="insert">Insert</Link>
          <Link href="showproduct">Show Product</Link>
          <Link href="searchbycategory">Search by Category</Link>
          <Link href="analysis">Analysis</Link>
        </div> */}
        <div id="content">
          {/* <h1 className="text-3xl text-black text-center font-bold p-3">
            Analysis
          </h1> */}
            <div id="main">
                <div id="box">
                    <h2>Total Item</h2>
                    <h2 className="text-3xl">{totalItem}</h2>
                </div>
                
                <div id="box">
                <h2>Sold Item</h2>
                <h2 className="text-3xl">$5</h2>
                </div>
                <div id="box">
                <h2>Unsold Item</h2>
                <h2 className="text-3xl">$2</h2>
                </div>
                <div id="box">
                <h2>Profit / Loss</h2>
                <h2 className="text-3xl flex gap-3">
                    <span className="text-green-500 font-bold">⇡ $541</span>
                    <span className="text-red-500 font-bold">- ⇣ $221</span>
                </h2>
                </div>
            </div>
            <div className="flex" id="chart"> 
            <MyLineChart/>
            <MyBarChart/>
            {/* <TotalUserPieChart/> */}
            </div>
          
        </div>
      </div>
      <DashboardFooter/>
    </>
  );
}
