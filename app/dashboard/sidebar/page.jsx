import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',padding:'20px',color:'white', width:'300px'}}>
      <Link href='insert'>Insert Page</Link>
      <Link href='showuser'>Show User</Link>
      <Link href='showproduct'>Show Product</Link>
    </div>
  )
}

export default Sidebar
