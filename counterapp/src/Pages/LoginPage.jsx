import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setemail] = useState("");
  const [password, setpassword] = useState('');
  const [currentPassword, setcurrentPassword] = useState("");
  const [warnigntext, setwarnigntext] = useState(false);
  const usersDetails = JSON.parse(localStorage.getItem("userDetail")) || [] // get all user data  form localStorage
  // console.log('usersDetails: ', usersDetails);

  const handlFormData = () => {
    if (email && currentPassword && password) {   //check if all fileds are not empty 
      let filteruser = usersDetails.filter((item) => item.email === email) //check if user is present or not
      console.log('filteruser: ', filteruser);

      if (filteruser.length === 1) {  //if user present navigate to counter page
        localStorage.setItem("email", filteruser[0].email)
        localStorage.setItem("name", filteruser[0].name)
        alert("Login Success")
        navigate("/counter")
        return
      }
      else {//if user not present redirect to signin page
        alert("user not found please signin first")
        navigate("/")
      }
    }
  }
  const handleRoute = () => {
    navigate("/")
  }

  useEffect(() => {
    if (password && currentPassword) { //check if password or currentPassword matches
      if (password === currentPassword) {
        setwarnigntext("It Seems Good")
      } else {
        setwarnigntext(" Password mismatch")
      }
    }
  }, [password, currentPassword]);
  return (
    <>
      <div className='container'>
        <div>Login</div>
        <form className='form'>
          <input type="email" placeholder='Enter email' onChange={(e) => setemail(e.target.value)} />
          <input type="password" placeholder='Enter password' onChange={(e) => setpassword(e.target.value)} />
          <input type="text" placeholder='Re-Enter password' onChange={(e) => setcurrentPassword(e.target.value)} />
          {warnigntext ? <h6 className='warnigntext'>{warnigntext}</h6> : ""}
          <button disabled={password !== currentPassword} onClick={handlFormData}>Login</button>
        </form>
        <hr />
        <h4>OR</h4>
        <h3>New User? <span className='linkSpan' onClick={handleRoute}>SignUp</span> </h3>
      </div>
    </>
  )
}
export default LoginPage