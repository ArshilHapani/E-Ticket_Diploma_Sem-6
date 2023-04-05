// @ts-nocheck
import React from 'react'

import { IoBusOutline } from 'react-icons/io5'
import { FaUserAlt } from 'react-icons/fa'
import { TbFileInvoice } from 'react-icons/tb'
import { Container } from '@mui/system';
import Tilt from 'react-tilt';
import Navbar from '@/components/Navbar';
import { IconButton, Stack, Tooltip, Typography } from '@mui/material';
import conductorImage from '../assets/Bus_conductor.svg'
import Image from 'next/image';
import Link from 'next/link';
import { BiLogOutCircle } from 'react-icons/bi';
import { useRouter } from 'next/router';

const HomePage = () => {
    const router = useRouter();


    return (
        <>
            <Navbar />
            <Container className="mt-[13vh] bg-slate-50 ">
                <Typography variant="h4" textAlign="center" sx={{ margin: '1rem 0' }} >Services</Typography>
                <Stack direction="row" alignItems="center" flexWrap="wrap" justifyContent="center" gap={4} >
                    <Link href="/ConductorTable">
                        <Tilt className="box w-[350px] transition-shadow hover:shadow-lg  h-[350px] bg-slate-50 rounded-lg">
                            <Stack className="w-full h-full card-gradient p-[1px] rounded-[20px] shadow-card  " alignItems="center" justifyContent="center" gap={2} >
                                <Image src={conductorImage} alt="conductor" height={70} width={70} />
                                <Typography textAlign='center' variant='h5'> conductors</Typography>
                            </Stack>
                        </Tilt>
                    </Link>
                    <Link href="/UserTable">
                        <Tilt className="box w-[350px] transition-shadow hover:shadow-lg  h-[350px] bg-slate-50 rounded-lg">
                            <Stack className="w-full h-full card-gradient p-[1px] rounded-[20px] shadow-card  " alignItems="center" justifyContent="center" gap={2} >
                                <FaUserAlt style={{ height: 70, width: 70 }} />
                                <Typography textAlign='center' variant='h5'> users</Typography>
                            </Stack>
                        </Tilt>
                    </Link>
                    <Link href="/BusStopsTable" >
                        <Tilt className="box w-[350px] transition-shadow hover:shadow-lg  h-[350px] bg-slate-50 rounded-lg">
                            <Stack className="w-full h-full card-gradient p-[1px] rounded-[20px] shadow-card  " alignItems="center" justifyContent="center" gap={2} >
                                <IoBusOutline style={{ height: 70, width: 70 }} />
                                <Typography textAlign='center' variant='h5'> bus Stops</Typography>
                            </Stack>
                        </Tilt>
                    </Link>
                    <Link href="/InvoicesTable" >
                        <Tilt className="box w-[350px] transition-shadow hover:shadow-lg  h-[350px] bg-slate-50 rounded-lg">
                            <Stack className="w-full h-full card-gradient p-[1px] rounded-[20px] shadow-card  " alignItems="center" justifyContent="center" gap={2} >
                                <TbFileInvoice style={{ height: 70, width: 70 }} />
                                <Typography textAlign='center' variant='h5'> invoices</Typography>
                            </Stack>
                        </Tilt>
                    </Link>
                </Stack>
            </Container>
            <Tooltip title="logout" arrow placement="right" className="fixed bottom-3 left-3" >
                <IconButton color='error' onClick={() => {
                    sessionStorage.clear();
                    router.push('/');
                }}>
                    <BiLogOutCircle />
                </IconButton>
            </Tooltip>
        </>

    )
}

export default HomePage;