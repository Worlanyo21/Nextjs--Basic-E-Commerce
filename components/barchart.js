"use client"

import React,{ useState,useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
 


export default function BarChart() {
const [data, setData] = useState({
    datasets: [],
});
const [chartOptions, setChartOptions] = useState({})

useEffect(() => {
    setData({
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Sales $',
                data: [41111, 434556, 65347, 434325, 44209, 423432, 553454],
                borderColor: 'rgb(53, 162, 235',
                backgroundColor: 'rgb(53, 162, 235, 0.4'
            },
        ]
    })
    setChartOptions({
        plugins: {
            legend: {
                positions: 'top',
            },
            title: {
                display: true,
                text: 'Daily revenue'
            }
        },
        maintainAspectRatio: false,
        responsive: true

    })
},[])
    return(
        <>
        <div className='w-full md:col-span-2 relative lg:h-[70vh] m-auto p-4 border rounded bg-white'>
            <Bar
            data={data}
            options={chartOptions}
            />
        </div>
        </>
    )
}