import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div id="dashboard">
        <div id="sidebar">
            <Link href='dashboard/insert'>Insert</Link>
            <Link href='showproduct'>Show Product</Link>
            <Link href='showuser'>Show User</Link>
        </div>
        <div id="content">

        </div>
      </div>
    </div>
  )
}

export default page
