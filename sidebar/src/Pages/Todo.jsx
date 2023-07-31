import React from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { addTodo, deleteTodo } from '../Redux/TodoReducer/TodoReducer';


const Todo = () => {
    const todo = useSelector((store) => store.todo.todo)//counter object from redux store
    console.log(todo);
    // console.log('counterStore: ', counterStore);
    const dispatch = useDispatch()
    const [todoValue, settodoValue] = React.useState("");
    const handleSubmit = () => {
        let payload = {
            todo: todoValue
        }
        // console.log(payload)
        dispatch(addTodo(payload))
        settodoValue("")
    }
    const handleDelete = (index) => {
        dispatch(deleteTodo(index))
    }
    return (
        <>
            <h1>Todo App</h1>
            <div style={{ width: "70%", margin: "auto" }}>
                <input style={{ border: "1px solid red", borderRadius: "10px", width: "90%", margin: "auto", marginTop: "20px" }} type="text" value={todoValue} onInput={(e) => settodoValue(e.target.value)} />
                <button disabled={!todoValue} onClick={handleSubmit}>ADD</button>
                {/* <h1>{todoValue}</h1> */}
                {todo?.map((item, index) =>
                    <div key={index} style={{ display: "flex", gap: "20px", marginTop: "5px", border: "1px solid black", boxShadow: "10px 10px 100px red", borderRadius: "10px", padding: "5px" }}>
                        <h4 style={{ color: "red", marginTop: "7px" }}>{index + 1} :- {item.todo.toUpperCase()}</h4>
                        <h2 style={{ backgroundColor: "aliceblue", margin: "2px", borderRadius: "6px", padding: "2px" }} onClick={() => handleDelete(item.id)} >Delete</h2>
                    </div>
                )}
            </div>
        </>

    )
}

export default Todo
