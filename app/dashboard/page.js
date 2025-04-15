import Link from 'next/link'
import React from 'react'
import DashboardHeader from '../components/DashboardHeader'
import DashboardFooter from '../components/DashboardFooter'

const page = () => {
  return (
    <div>
      <DashboardHeader/>
      <div id="dashboard">
        {/* <div id="sidebar">
            <Link href='dashboard/insert'>Insert</Link>
            <Link href='showproduct'>Show Product</Link>
            <Link href="searchbycategory">Search by Category</Link>
            <Link href="analysis">Analysis</Link>
        </div> */}
        <div id="content">
        <h1 className='text-3xl text-black text-center font-bold'>Welcome To Dashboard</h1>
        </div>
      </div>
      <DashboardFooter/>
    </div>
  )
}

export default page
