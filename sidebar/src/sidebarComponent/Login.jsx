import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUserDetails, setLoginStatus, setSigninStatus } from "../Redux/UserReducer/Userreducer"; // Replace this with the actual path to your userSlice


const LoginPage = () => {
    const navigate = useNavigate()
    const [email, setemail] = useState("");
    const [password, setpassword] = useState('');
    const [currentPassword, setcurrentPassword] = useState("");
    const [warnigntext, setwarnigntext] = useState(false);
    const usersDetails = JSON.parse(localStorage.getItem("userDetail")) || [] // get all user data  form localStorage
    // console.log('usersDetails: ', usersDetails);
    const dispatch = useDispatch();


    const handlFormData = async () => {
        if (email && currentPassword && password) {   //check if all fileds are not empty 
            // let filteruser = usersDetails.filter((item) => item.email === email) //check if user is present or not
            // console.log('filteruser: ', filteruser);

            // if (filteruser.length === 1) {  //if user present navigate to counter page
            //   localStorage.setItem("email", filteruser[0].email)
            //   localStorage.setItem("name", filteruser[0].name)
            //   alert("Login Success")
            //   navigate("/counter")
            //   return
            // }
            // else {//if user not present redirect to signin page
            //   alert("user not found please signin first")
            //   navigate("/")
            // }

            let res = await fetch(`http://localhost:8080/user?email=${email}&password=${password}`)
            let data = await res.json()
            console.log('data: ', data);
            if (data) {
                const payload = {
                    name: data[0].name,
                    email: data[0].email
                }
                console.log('payload: ', payload);
                dispatch(setUserDetails(payload));
                dispatch(setLoginStatus(true));
                localStorage.setItem("email", data[0].email)
                localStorage.setItem("name", data[0].name)
                alert("Login Success")
                // navigate("/dashboard")
                dispatch(setLoginStatus(true))
                dispatch(setSigninStatus(false))

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
                <div className='form'>
                    <input type="email" placeholder='Enter email' onChange={(e) => setemail(e.target.value)} />
                    <input type="password" placeholder='Enter password' onChange={(e) => setpassword(e.target.value)} />
                    <input type="text" placeholder='Re-Enter password' onChange={(e) => setcurrentPassword(e.target.value)} />
                    {warnigntext ? <h6 className='warnigntext'>{warnigntext}</h6> : ""}
                    <button disabled={password !== currentPassword} onClick={handlFormData}>Login</button>
                </div>
                <hr />
                <h4>OR</h4>
                <h3>New User? <span className='linkSpan' onClick={handleRoute}>SignUp</span> </h3>
            </div>
        </>
    )
}
export default LoginPage



// import React, { useContext } from "react";
// import { Navigate, Redirect } from "react-router-dom";
// import { AuthContext } from "../firebaseConfig/Auth";
// import firebaseConfig from "../firebaseConfig/firebase";

// const LoginPage = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { email, password } = e.target.elements;
//     try {
//       firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
//     } catch (error) {
//       alert(error);
//     }
//   };
//   const { currentUser } = useContext(AuthContext);
//   if (currentUser) {
//     // return <Redirect to="/dashboard" />;
//     return Navigate("/dashboard")
//   }
//   return (
//     <>
//       <h1>Log In</h1>
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

// export default LoginPage;

// export default function Login() {
//   const dispatch = useDispatch();
//   const SignInWithGoogle = () => {
//     auth
//       .signInWithPopup(googleProvider)
//       .then((res) => {
//         const { displayName, email } = res.user;
//         dispatch(loginAction(res.user.providerData));
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   };

//   return <LogginButton SignInWithGoogle={SignInWithGoogle}></LogginButton>;
// }
