// counterActions.js
import { INCREMENT, DECREMENT } from './action.type';

export const incrementCounter = (key) => ({
  type: INCREMENT,
  payload: { key },
});

export const decrementCounter = (key) => ({
  type: DECREMENT,
  payload: { key },
});
