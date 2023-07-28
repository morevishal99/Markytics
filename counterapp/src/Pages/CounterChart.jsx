import React from 'react'
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2'


const CounterChart = ({ data }) => {
    return (
        <div >
            <Bar data={data} />
        </div>
    )
}

export default CounterChart
