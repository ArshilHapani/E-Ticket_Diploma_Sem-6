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
import { Container, Typography } from '@mui/material';
import Navbar from '@/components/Navbar';


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
            text: 'Recharge Collection and Tickets Revenu',
        },
    },
};
export const options1 = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom' as const,
        },
        title: {
            display: true,
            text: 'Number of ticket generated',
        },
    },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'august', 'september', 'october', 'november', 'december'];
export const data1 = {
    labels,
    datasets: [
        {
            label: 'tickets generated',
            data: [400, 432, 567, 322, 643, 644, 532, 664, 234, 654, 224, 432],
            backgroundColor: '#339989'
        }
    ]
}

export const data = {
    labels,
    datasets: [
        {
            label: "collections",
            data: [45000, 33424, 40000, 57647, 21112, 42312, 67868, 23532, 25464, 57547, 43274, 43221],
            backgroundColor: 'rgba(0, 99, 232, 0.5)',
        },
        {
            label: "tickets generated",
            data: [24325, 25436, 63224, 64322, 64323, 65321, 76542, 64421, 6543, 76536, 21134, 76654],
            backgroundColor: 'rgba(255, 9, 2, 0.5)',
        },
    ],
};
const StatisTics = () => {
    return (
        <>
            <Navbar />
            <Container className="mt-[13vh]">
                <Typography variant="h4" textAlign="center" sx={{ margin: '1rem 0' }} >Analysis</Typography>
                <div className='flex h-full w-full gap-[10vh] flex-wrap my-5 justify-center items-center' >
                    <Bar options={options} data={data} />
                    <Bar options={options1} data={data1} />
                </div>
            </Container>
        </>
    )
}

export default StatisTics