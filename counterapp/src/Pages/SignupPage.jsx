import React, { useState } from 'react'
import "../Style/SignupPage.css"
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate()
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const usersDetails = JSON.parse(localStorage.getItem("userDetail")) || [] // get all user data  form localStorage
  // console.log('usersDetails: ', usersDetails);

  const handlFormData = () => {

    if (email && name && password) {   //if all fileds are not empty add user
      let filteruser = usersDetails.filter((item) => item.email === email) //check if user is already present or not
      // console.log('filteruser: ', filteruser);

      if (filteruser.length === 1) {  //if user present do nothing 
        alert("User already register please login")
        navigate("/login")
        return
      }
      else {   // is new user login add user data to locaStorage
        let singleUserDetail = { //user object
          email: email, name: name, password: password
        }
        usersDetails.push(singleUserDetail)
        localStorage.setItem("userDetail", JSON.stringify(usersDetails))
        alert("signUp successfull")
        navigate("/login")
      }

    } else {
      alert("Feilds Cannot be empty") //if fields are empty alert user 
    }
  }
  const handleRoute = () => {
    navigate("/login")
  }
  return (
    <>
      <div className='container'>
        <div>Signup</div>
        <form className='form'>
          <input type="text" placeholder='Enter name' value={name} onChange={(e) => setname(e.target.value)} />
          <input type="email" placeholder='Enter email' value={email} onChange={(e) => setemail(e.target.value)} />
          <input type="password" placeholder='Enter password' value={password} onChange={(e) => setpassword(e.target.value)} />
          <button onClick={handlFormData}>Submit</button>
        </form>
        <hr />
        <h4>OR</h4>
        <h3>Already a User? <span className='linkSpan' onClick={handleRoute}>Login</span> </h3>
      </div>
    </>
  )
}
export default SignupPage