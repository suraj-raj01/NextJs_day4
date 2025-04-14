"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function InsertProduct() {
  const [Input, setInput] = useState("");
  const [filename,setFile] = useState("");
  const [userType,setUserType] = useState("")

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(Input);
  };

  const handlefileChange=(e)=>{
    let filename = e.target.files[0];
    setFile(filename)
    console.log(filename);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", filename);
    formData.append("upload_preset", "myphotos");
    formData.append("cloud_name", "dtrpmtbie");
    let cloudinary_api = "https://api.cloudinary.com/v1_1/dtrpmtbie/auto/upload";
    let api = "http://localhost:3000/api/product"
    try {
        const response = await axios.post(cloudinary_api,formData);
        console.log(response.data.url);
        const data = await axios.post(api,{img:response.data.url,category:userType,...Input});
        console.log(data);
        alert("Data Inserted success");
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <>
      <Link href="/"></Link>

      <div id="dashboard">
        <div id="sidebar">
          <Link href="insert">Insert</Link>
          <Link href="showproduct">Show Product</Link>
          {/* <Link href="showuser">Show User</Link> */}
          <Link href='search'>Search</Link>
          <Link href="searchbycategory">Search by Category</Link>
        </div>
        <div id="content">

          <div id="signup">
            <form>
              <h1 className="text-2xl p-2">User Product</h1>
              <label htmlFor="">Select Category</label>
              <select name="category" id="" value={userType}
              onChange={(e) => {
                setUserType(e.target.value);
              }}>
                <option name="Mobile" value="Mobile">Mobile</option>
                <option name="Laptop" value="Laptop">Laptop</option>
                <option name="Tv" value="Tv">Tv</option>
                <option name="Watch" value="Watch">Watch</option>
              </select>
              <input
                type="text"
                placeholder="enter product name"
                name="name"
                value={Input.name}
                onChange={handleInput}
              />
              <input
                type="text"
                placeholder="enter product model"
                name="model"
                value={Input.model}
                onChange={handleInput}
              />
              <input
                type="number"
                placeholder="enter product price "
                name="price"
                value={Input.price}
                onChange={handleInput}
              />
              <label htmlFor="">select product photo</label>
              <input type="file"
              onChange={handlefileChange}
                
              />
              <button
                className="p-2 bg-black text-white"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}
