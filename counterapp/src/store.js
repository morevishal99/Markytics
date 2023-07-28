// import { legacy_createStore } from "redux";
// import reducer from "./Redux/reducer"

// const store = legacy_createStore(reducer)
// export default store

import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './Redux/CounterReducer/CounterReducer'; // Replace this path with the actual path to your reducer file
import userSlice from "./Redux/UserReducer/userReducer"
const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice
  },
});

export default store;
