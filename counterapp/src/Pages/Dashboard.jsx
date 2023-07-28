import React, { useContext } from "react";
import { Link, Navigate, Redirect } from "react-router-dom";
// import { AuthContext } from "../firebaseConfig/Auth";
// import firebaseConfig from "../firebaseConfig/firebase";

const Dashboard = () => {
  // const { currentUser } = useContext(AuthContext);
  // if (!currentUser) {
  //   // return <Redirect to="/login" />;
  //   return Navigate("/login")
  // }
  return (
    <div style={{ width: "60%", margin: "auto", justifyContent: "space-around", gap: "20px" }}>
      {/* <h1>Welcome</h1>
      <p>This is the dashboard, if you can see this you're logged in.</p>
      <button onClick={() => firebaseConfig.auth().signOut()}>Sign out</button> */}
      <h4>
        <Link to="/todo"> Todo App</Link>
      </h4>
      
      <h4>
        <Link to="/counter">Counter App</Link>
      </h4>
    </div>
  );
};

export default Dashboard;
