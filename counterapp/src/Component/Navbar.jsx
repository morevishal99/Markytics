import React from 'react'
import { useNavigate } from 'react-router'
import "../Style/Navbar.css"
import { useSelector, useDispatch } from "react-redux";


const Navbar = () => {
  const name = localStorage.getItem("name")
  // const email = localStorage.getItem("email")
  const navigate = useNavigate()
  const user = useSelector((state) => state.user);
  console.log('user: ', user);

  const handleLogout = () => {
    // setTimeout(()=>{
    //   alert("Logged Out")
    // })
    localStorage.clear()
    navigate("/")
  }
  return (
    <>

      <div className='navContainer'>
        <h3>Welcome to counter app</h3>
        {name?<div className='navbar'>
          <h3>{name}</h3>
          {/* <h3>{email}</h3> */}
          {name ? <button onClick={handleLogout}>Logout </button> : ""}

        </div>:null}
        

      </div>

    </>
  )
}

export default Navbar