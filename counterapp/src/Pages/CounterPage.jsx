import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { decrementCounter, incrementCounter } from '../Redux/action';

const CounterPage = () => {
    const [counter, setcounter] = useState({ a: 0, b: 0, c: 0 });//normal counter object 
    const counterStore = useSelector((store) => store)//counter object from redux store
    // console.log('counterStore: ', counterStore);
    const dispatch = useDispatch()
    const increment = (key, value) => { //incremnet function to increase the value of counter object 
        // setcounter((prev) => ({
        //     ...prev, [key]: prev[key] + 1
        // }))
        dispatch(incrementCounter(key))
    }
    const decrement = (key, value) => { //decremnet function to increase the value of counter object 
        // setcounter((prev) => ({
        //     ...prev, [key]: prev[key] - 1
        // }))
        dispatch(decrementCounter(key))
    }
    return (
        <>
            <div>
                Counter Page
            </div>
            <div>{Object.entries(counterStore).map(([key, value],index) => //counter object mapped here
                <div key={index}>
                    <h1>{key.toUpperCase()}:{value}</h1>
                    <button onClick={() => increment(key, value)}>INC</button> 
                    <button disabled={value === 0} onClick={() => decrement(key, value)}>DEC</button>
                </div>

            )}</div>
        </>
    )
}

export default CounterPage
