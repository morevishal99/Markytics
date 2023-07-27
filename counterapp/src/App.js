// // import logo from './logo.svg';
// // import './App.css';
// // import CounterPage from './Pages/CounterPage';
// // import AllRoutes from './Routes/AllRoutes';
// // import Navbar from './Component/Navbar';

// // function App() {
  
// //   return (
// //     <div className="App" >
// //       <Navbar />
// //       <AllRoutes />
// //     </div>
// //   );
// // }

// // export default App;
// import './App.css';
// import HandleSubmit from './Pages/HandleSubmit';
// import { useRef } from 'react';
 
// function App() {
//   const dataRef = useRef()
 
//   const submithandler = (e) => {
//     e.preventDefault()
//     HandleSubmit(dataRef.current.value)
//     dataRef.current.value = ""
//   }
 
//   return (
//     <div className="App">
//       <form onSubmit={submithandler}>
//         <input type= "text" ref={dataRef} />
//         <button type = "submit">Save</button>
//       </form>
//     </div>
//   );
// }
 
// export default App;

// src/App.js
import React from 'react';
import Signup from './Pages/Signup.jsx';
import Login from './Pages/Login.jsx';

function App() {
  return (
    <div>
      <h1>Firebase Authentication Demo</h1>
      <Signup />
      <Login />
    </div>
  );
}

export default App;
