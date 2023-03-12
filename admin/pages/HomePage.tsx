import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom' as const,
        },
        title: {
            display: true,
            text: 'Daily Recharge Collection',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: "collections",
            data: [45000, 33424, 40000, 57647, 21112, 42312, 67868],
            backgroundColor: 'rgba(0, 99, 232, 0.5)',
        },
    ],
};

const HomePage = () => {
    return (
        <>
            <div className='flex gap-5 flex-wrap my-5 ' >
                <div className='h-[50vh] w-[600px]' >
                    <Bar options={options} data={data} />
                </div>
                <div className='h-[50vh] w-[600px]' >
                    <Bar options={options} data={data} />
                </div>
            </div>
        </>

    )
}

export default HomePage