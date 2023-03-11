import { useState } from 'react'
import Container from '@mui/material/Container';
import Chart from "react-apexcharts";
import { Box } from '@mui/system';

const HomePage = () => {
    const options: object = {
        chart: {
            id: "Date"
        },
        xaxis: {
            categories: ['3-4', '4-4', '5-4', '6-4', '7-4', '8-4', '9-4', '10-4', '11-4']
        },
    }


    const series: any =
        [
            {
                name: "Recharge",
                data: [3230, 1240, 4345, 2150, 1149, 4560, 2170, 2191],
            },
        ]

    return (
        <Container className="my-3" >
            <Box sx={{ width: '50%' }}>
                <Chart
                    type='bar'
                    options={options}
                    series={series}
                    width={400}
                    height={300}

                />
                <h1 className='text-xl px-7 text-gray-800' >Overall transactions done by conductors </h1>
            </Box>
        </Container>
    )
}

export default HomePage