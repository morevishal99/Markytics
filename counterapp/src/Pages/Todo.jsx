import React from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { addTodo, deleteTodo } from '../Redux/TodoReducer/TodoReducer';


const Todo = () => {
    const todo = useSelector((store) => store.todo.todo)//counter object from redux store
    // console.log( todo);
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
            {/* <h.o1>Todo App</h.o1> */}
            <div>
                <input type="text" value={todoValue} onInput={(e) => settodoValue(e.target.value)} />
                <button disabled={!todoValue} onClick={handleSubmit}>ADD</button>
                {/* <h1>{todoValue}</h1> */}
                {todo?.map((item, index) =>
                    <div>
                        <h4>{item.todo}</h4>
                        <button onClick={() => handleDelete(index)} >del</button>
                    </div>
                )}
            </div>
        </>

    )
}

export default Todo
