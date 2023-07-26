import React from 'react'
import "../Style/Navbar.css"

const Navbar = () => {
  const name=localStorage.getItem("name")
  const email=localStorage.getItem("email")
  return (
    <>
      <div className='navbar'>
        <h3>{name}</h3>
        {/* <h3>{email}</h3> */}
        <button>Logout </button>
      </div>
    </>
  )
}

export default Navbar