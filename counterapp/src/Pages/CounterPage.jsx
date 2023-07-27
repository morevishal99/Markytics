import React from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { decrementCounter, incrementCounter } from '../Redux/action';
import CounterChart from './CounterChart';
import "../Style/CounterPage.css"

const CounterPage = () => {
    // const [counter, setcounter] = useState({ a: 0, b: 0, c: 0 });//normal counter object 
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
                borderColor: "rgb(255, 99, 132)",
                // data: [counter.a, counter.b, counter.c],
                data: counterValue,
            },
        ],
    };
    // const style = {
    //     display: "flex",
    //     gap: "60px",
    //     justifyContent: "center",
    //     border: "1px solid white",
    //     borderRadius: "10px",
    //     width: "60%",
    //     margin: "auto",
    //     boxShadow: "10px 10px 100px black",
    //     marginTop: "20px"
    // }

    return (
        <>
           
            <div className='chartContainer' >
                <div>{Object.entries(counterStore).map(([key, value], index) => //counter object mapped here
                    <div className='counterDiv' key={index}>
                        <h1>{key.toUpperCase()}:{value}</h1>
                        <button onClick={() => increment(key, value)}>INC</button>
                        <button disabled={value === 0} onClick={() => decrement(key, value)}>DEC</button>
                    </div>

                )}</div>
                <div className='chart' >{<CounterChart data={data} />}</div>
            </div>
        </>
    )
}

export default CounterPage
