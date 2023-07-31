import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    todo: []
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        fetchTodosSuccess: (state, action) => {
            state.todo = action.payload;
        },
        addTodoSuccess: (state, action) => {
            state.todo.push(action.payload)
        },
        deleteTodoSuccess: (state, action) => {
            // state.todo.splice(action.payload, 1)
            state.todo = state.todo.filter((todo) => todo.id !== action.payload);
        }
    }
})
export const { deleteTodoSuccess, addTodoSuccess, fetchTodosSuccess } = todoSlice.actions
// export default todoSlice.reducer


export const fetchTodos = () => async (dispatch) => {
    try {
        const response = await axios.get("http://localhost:8080/todo");
        dispatch(fetchTodosSuccess(response.data));
    } catch (error) {
        // Handle error here (e.g., dispatch an error action)
        dispatch(fetchTodosSuccess(error.message))
    }
};
export const addTodo = (todo) => async (dispatch) => {
    try {
        const response = await axios.post("http://localhost:8080/todo", todo);
        dispatch(addTodoSuccess(response.data));
    } catch (error) {
        // Handle error here (e.g., dispatch an error action)
        dispatch(fetchTodosSuccess(error.message))
    }
};

export const deleteTodo = (id) => async (dispatch) => {
    try {
        await axios.delete(`http://localhost:8080/todo/${id}`);
        dispatch(deleteTodoSuccess(id));
    } catch (error) {
        // Handle error here (e.g., dispatch an error action)
        dispatch(fetchTodosSuccess(error.message))
    }
};

export default todoSlice.reducer;