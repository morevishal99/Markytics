// import { INCREMENT, DECREMENT } from './action.type';

// const initialState = {
//   a: 0,
//   b: 0,
//   c: 0,
// };

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         [action.payload.key]: state[action.payload.key] + 1,
//       };
//     case DECREMENT:
//       return {
//         ...state,
//         [action.payload.key]: state[action.payload.key] - 1,
//       };
//     default:
//       return state;
//   }
// };

// export default counterReducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  a: 0,
  b: 0,
  c: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      // state[action.payload.key] =state[action.payload.key]+ 1;
      state[action.payload.key] += 1;
    },
    decrement: (state, action) => {
      state[action.payload.key] -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
