import React,{useState} from 'react'
import "../Style/SignupPage.css"
import { Link } from 'react-router';
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate()
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  
  const handlFormData = () => {
    alert("hello")
  }
  const handleRoute = () => {
    navigate("/login")
  }
  return (
    <>
      <div className='container'>
        <div>Signup</div>
        <form className='form'>
          {/* <h6>Email</h6> */}
          <input type="text" placeholder='Enter name' onChange={(e)=>setname(e.target.value)} />
          <input type="email" placeholder='Enter email' onChange={(e)=>setemail(e.target.value)} />
          <input type="password" placeholder='Enter password' onChange={(e)=>setpassword(e.target.value)} />
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