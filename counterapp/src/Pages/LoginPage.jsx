import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setemail] = useState("");
  const [password, setpassword] = useState('');
  const [currentPassword, setcurrentPassword] = useState("");
  const [warnigntext, setwarnigntext] = useState(false);

  const handlFormData = () => {
    // alert("hello")

  }
  const handleRoute = () => {
    navigate("/")
  }
  useEffect(() => {
    if (password && currentPassword) {

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