import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './Redux/CounterReducer/CounterReducer'; // Replace this path with the actual path to your reducer file
// import userSlice from "./Redux/UserReducer/userReducer"
import todoSlice from "./Redux/TodoReducer/TodoReducer"
const store = configureStore({
  reducer: {
    counter: counterSlice,
    // user: userSlice,
    todo: todoSlice
  },
});

export default store;