import React from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import CounterChart from './CounterChart';
import { increment, decrement } from "../Redux/CounterReducer/CounterReducer"
import "../Style/CounterPage.css"

const CounterPage = () => {
    const counterStore = useSelector((store) => store.counter)//counter object from redux store
    const dispatch = useDispatch()
    // const increment = (key, value) => { //incremnet function to increase the value of counter object 
    // setcounter((prev) => ({
    //     ...prev, [key]: prev[key] + 1
    // }))
    //     dispatch(incrementCounter(key))
    // }
    // const decrement = (key, value) => { //decremnet function to increase the value of counter object 
    // setcounter((prev) => ({
    //     ...prev, [key]: prev[key] - 1
    // }))
    //     dispatch(decrementCounter(key))
    // }
    let labels = []     // lebel array to get key value from object 
    let counterValue = []     // countervalue  array to get value from counter object
    for (let key in counterStore) {
        labels.push(key)
        counterValue.push(counterStore[key])
    }
    const data = {
        labels: labels,

        datasets: [
            {
                label: "COUNTER CHART",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "white",
                // color:"red",
                data: counterValue,
            },
        ],
    };
    return (
        <>

            <h3>Counter App</h3>
            <div className='chartContainer' >
                <div className='counterDiv'>{Object.entries(counterStore).map(([key, value], index) => //counter object mapped here
                    <div key={index}>
                        <h1>{key.toUpperCase()}:{value}</h1>
                        {/* <button onClick={() => increment(key, value)}>INC</button> */}
                        {/* <button disabled={value === 0} onClick={() => decrement(key, value)}>DEC</button> */}
                        <button onClick={() => dispatch(increment({ key }))}>Inc </button>
                        <button disabled={value === 0} onClick={() => dispatch(decrement({ key }))}>Dec </button>
                    </div>

                )}</div>

                <div className='chart' >{<CounterChart data={data} />}</div>
            </div>
        </>
    )
}

export default CounterPage
