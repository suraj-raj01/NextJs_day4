"use client";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const [mydata, setMydata] = useState([]);


  const handleInput = async (e) => {
    e.preventDefault();
    let stdname = e.target.value;
    setSearch(stdname)
    let api = "http://localhost:3000/api/searchproduct";
    try {
      const response = await axios.post(api, {search:search});
      console.log(response);
      setMydata(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch=()=>{

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
    <>
      <Link href="dashboard/search"></Link>
      <div id="dashboard">
        <div id="sidebar">
          <Link href="insert">Insert</Link>
          <Link href="showproduct">Show Product</Link>
          {/* <Link href='showuser'>Show User</Link> */}
          <Link href="search">Search</Link>
          <Link href="searchbycategory">Search by Category</Link>
        </div>
        <div id="content">
          <h1 className="text-3xl text-black text-center font-bold p-3">
            Search Page
          </h1>
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
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Model</th>
                <th>Price</th>
                <th>Photo</th>
              </tr>
            </thead>
            <tbody>{res}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}
