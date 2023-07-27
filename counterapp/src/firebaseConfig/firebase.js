// // // firebaseConfig.js
// // import firebase from 'firebase/compat/app';
// // import 'firebase/compat/app';


// // const firebaseConfig = {
// //   apiKey: "AIzaSyBW45W7JMfPkoNUNGJmtjfaiZrPAglzpuw",
// //   authDomain: "counter-app-d0830.firebaseapp.com",
// //   projectId: "counter-app-d0830",
// //   storageBucket: "counter-app-d0830.appspot.com",
// //   messagingSenderId: "1039984234122",
// //   appId: "1:1039984234122:web:fbf9cdb2c952198d44e773",
// //   measurementId: "G-F9WZW0JKPX"
// // };


// // const firebaseApp = firebase.initializeApp(firebaseConfig);

// // export default firebaseApp;
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "@firebase/firestore"

// const firebaseConfig = {
//   apiKey: "AIzaSyBW45W7JMfPkoNUNGJmtjfaiZrPAglzpuw",
//   authDomain: "counter-app-d0830.firebaseapp.com",
//   projectId: "counter-app-d0830",
//   storageBucket: "counter-app-d0830.appspot.com",
//   messagingSenderId: "1039984234122",
//   appId: "1:1039984234122:web:fbf9cdb2c952198d44e773",
//   measurementId: "G-F9WZW0JKPX"
// };


// const app = initializeApp(firebaseConfig);
// export const firestore = getFirestore(app)


import { initializeApp } from 'firebase/app';
// import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBW45W7JMfPkoNUNGJmtjfaiZrPAglzpuw",
  authDomain: "counter-app-d0830.firebaseapp.com",
  projectId: "counter-app-d0830",
  storageBucket: "counter-app-d0830.appspot.com",
  messagingSenderId: "1039984234122",
  appId: "1:1039984234122:web:fbf9cdb2c952198d44e773",
  measurementId: "G-F9WZW0JKPX"
};

const firebaseApp=initializeApp(firebaseConfig);

export default firebaseApp;