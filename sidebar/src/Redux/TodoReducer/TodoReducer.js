import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    todo: []
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todo.push(action.payload)
        },
        deleteTodo: (state, action) => {
            state.todo.splice(action.payload, 1)
        }
    }
})
export const { addTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer