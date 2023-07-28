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

  const handlFormData = async () => {

    if (email && name && password) {   //if all fileds are not empty add user
      // let filteruser = usersDetails.filter((item) => item.email === email) //check if user is already present or not
      // // console.log('filteruser: ', filteruser);

      // if (filteruser.length === 1) {  //if user present do nothing 
      //   alert("User already register please login")
      //   navigate("/login")
      //   return
      // }
      // else {   // is new user login add user data to locaStorage
      //   let singleUserDetail = { //user object
      //     email: email, name: name, password: password
      //   }
      //   usersDetails.push(singleUserDetail)
      //   localStorage.setItem("userDetail", JSON.stringify(usersDetails))
      //   alert("signUp successfull")
      //   navigate("/login")
      // }
      // let res=await("http://localhost:8080/user")
      let res = await fetch(`http://localhost:8080/user?email=${email}`)
      let data = await res.json()
      if (data.length === 1) {
        alert("user Alrady registered please Login")
        navigate("/login")
      } else {
        const payload = {
          name: name,
          email: email,
          password: password
        }

        let res = await fetch("http://localhost:8080/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        })
        alert("signin sucessfull")
      }
      // console.log('data: ', data);


      // const payload = {
      //   name: name,
      //   email: email,
      //   password: password
      // }

      // let res = await fetch("http://localhost:8080/user", {
      //   method:"POST",
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify(payload)
      // })
      // let data = await res.json()
      // console.log('data: ', data);



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
        <div className='form'>
          <input type="text" placeholder='Enter name' value={name} onChange={(e) => setname(e.target.value)} />
          <input type="email" placeholder='Enter email' value={email} onChange={(e) => setemail(e.target.value)} />
          <input type="password" placeholder='Enter password' value={password} onChange={(e) => setpassword(e.target.value)} />
          <button onClick={handlFormData}>SignIn</button>
        </div>
        <hr />
        <h4>OR</h4>
        <h3>Already a User? <span className='linkSpan' onClick={handleRoute}>Login</span> </h3>
      </div>
    </>
  )
}
export default SignupPage


// import React, {useState} from "react";
// import { Navigate, Redirect } from "react-router-dom";
// import firebaseConfig from "../firebaseConfig/firebase";

// const SignupPage = () => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { email, password } = e.target.elements;
//     try {
//       firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
//       setCurrentUser(true);
//     } catch (error) {
//       alert(error);
//     }
//   };
//   if (currentUser) {
//       // return <Redirect to="/dashboard" />;
//       return Navigate("/dashboard")
//   }
//   return (
//     <>
//       <h1>Sign Up</h1>
//       <form onSubmit={handleSubmit}>
//         <label for="email">Email</label>
//         <input type="email" name="email" placeholder="Email" />
//         <label for="password">Password</label>
//         <input type="password" name="password" placeholder="Password" />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// };

// export default SignupPage;
