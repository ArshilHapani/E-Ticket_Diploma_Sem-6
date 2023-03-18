import React from 'react'

import { IoBusOutline } from 'react-icons/io5'
import { FaUserAlt } from 'react-icons/fa'
import { TbFileInvoice } from 'react-icons/tb'
import { Container } from '@mui/system';
import Navbar from '@/components/Navbar';
import { Box, Stack, Typography } from '@mui/material';
import conductorImage from '../assets/Bus_conductor.svg'
import Image from 'next/image';
import Link from 'next/link';


const HomePage = () => {
    return (
        <>
            <Navbar />
            <Container className="mt-[13vh]">
                <Typography variant="h4" textAlign="center" sx={{ margin: '1rem 0' }} >Services</Typography>
                <Stack direction="row" alignItems="center" flexWrap="wrap" justifyContent="center" gap={4} >
                    <Link href="/ConductorTable">
                        <Box className="w-[350px] transition-shadow hover:shadow-lg hover:-translate-y-1 h-[350px] bg-slate-50 rounded-lg">
                            <Stack className="h-full w-full" alignItems="center" justifyContent="center" gap={2} >
                                <Image src={conductorImage} alt="conductor" height={70} width={70} />
                                <Typography textAlign='center' variant='h5'> conductors</Typography>
                            </Stack>
                        </Box>
                    </Link>
                    <Link href="/UserTable">
                        <Box className="w-[350px] transition-shadow hover:shadow-lg hover:-translate-y-1 h-[350px] bg-slate-50 rounded-lg">
                            <Stack className="h-full w-full" alignItems="center" justifyContent="center" gap={2} >
                                <FaUserAlt style={{ height: 70, width: 70 }} />
                                <Typography textAlign='center' variant='h5'> users</Typography>
                            </Stack>
                        </Box>
                    </Link>
                    <Link href="/BusStopsTable" >
                        <Box className="w-[350px] transition-shadow hover:shadow-lg hover:-translate-y-1 h-[350px] bg-slate-50 rounded-lg">
                            <Stack className="h-full w-full" alignItems="center" justifyContent="center" gap={2} >
                                <IoBusOutline style={{ height: 70, width: 70 }} />
                                <Typography textAlign='center' variant='h5'> bus Stops</Typography>
                            </Stack>
                        </Box>
                    </Link>
                    <Link href="/InvoicesTable" >
                        <Box className="w-[350px] transition-shadow hover:shadow-lg hover:-translate-y-1 h-[350px] bg-slate-50 rounded-lg">
                            <Stack className="h-full w-full" alignItems="center" justifyContent="center" gap={2} >
                                <TbFileInvoice style={{ height: 70, width: 70 }} />
                                <Typography textAlign='center' variant='h5'> invoices</Typography>
                            </Stack>
                        </Box>
                    </Link>
                </Stack>
            </Container>
        </>

    )
}

export default HomePage;