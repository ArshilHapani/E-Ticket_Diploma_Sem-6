//@ts-nocheck
import React, { useEffect, useState } from 'react'
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
            text: 'Recharge Collection and Tickets Revenue',
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
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'august', 'september', 'october', 'november', 'december', 'one', 'ffr', 2, 4, 6, 7, 64, 3, 2, 45, 46, 57, 54754, 754, 754, 7547, 547, 547, 4573, 524, 42, 7247, 347, 357, 58, 54865, 95, 3, 634, 754, 8659, "i677", 53623, 632, 645, 8659, 65, 765, 557, 5745, 757, 547, 45754, 754, 757, 547, 54754, 7, 547, 547, 5475, 475, 4754, 754, 754, 75, 757, 547, 547, 547, 547, 547, 547, 547, 57, 547, 547, 547, 547, 47, 547, 754, 72, 757, 457, 547, 547, 547, 547, 547, 547, 547, 547, 547, 547, 657, 65, 58, 657, 56, 2346, 3416, 36, 57, 4576, 38, 568, 64, 75, 634, 54, 3654, 76, 63, 724, 643, 7, 457, 675, 53, 7537, 7, 64865, 8658, 68, 768, 67, 7537, 6537, 658, 658, 6587, 865, 75, 65, 868, 768, 57, 2457, 658, 679, 6789, 7757, 5637, 57657, 6576, 5765, 868, 686, 577, 537, 3547, 5765, 8658, 658, 658, 686, 868, 65876, 586, 53865, 376, 576, 575, 6765, 765, 7653, 767, 657, 657, 658, 658, 657, 3673, 573, 6765, 7];
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

const StatisTics = () => {
    const [payments, setPayments] = useState({ dates: [], payments: [] });
    useEffect(() => {
        fetchPaymentsData();
    }, [])
    async function fetchPaymentsData() {
        const data = await fetch("http://localhost:6565/admin/dailyPayment", {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                authToken: sessionStorage.getItem('admin')?.toString(),
            }
        })
        const res = await data.json();
        if (res.success) {
            setPayments({ ...payments, dates: res.dates, payments: res.payments })
        }
    }
    const labels = payments.dates;
    const data = {
        labels,
        datasets: [
            {
                label: "collections",
                data: payments.payments,
                backgroundColor: 'rgba(0, 99, 232, 0.5)',
            },
            {
                label: "tickets generated",
                data: [],
                backgroundColor: 'rgba(255, 9, 2, 0.5)',
            },
        ],
    };
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