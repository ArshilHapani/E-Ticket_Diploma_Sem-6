// @ts-nocheck
import React from 'react'

import { IoBusOutline } from 'react-icons/io5'
import { FaUserAlt } from 'react-icons/fa'
import { TbFileInvoice } from 'react-icons/tb'
import { Container } from '@mui/system';
import Navbar from '@/components/Navbar';
import { Card, IconButton, Stack, Tooltip, Typography } from '@mui/material';
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
            <Container className="mt-[13vh]">
                <Typography variant="h3" textAlign="center" className='text-slate-500' sx={{ margin: '1rem 0' }} >Services</Typography>
                <Stack direction="row" alignItems="center" flexWrap="wrap" justifyContent="center" gap={4} >
                    <Link href="/ConductorTable">
                        <Card className="Card w-[350px] transition-shadow hover:shadow-lg  h-[150px] bg-[#d90429] rounded-lg">
                            <Stack className="w-full h-full card-gradient p-[1px] rounded-[20px] shadow-card">
                                <div className='relative top-3 left-3' >
                                    <Typography className="text-white text-[1.8rem]" >Conductors</Typography>
                                </div>
                                <div className='relative top-3 right-3' >
                                    {/* <Image src={conductorImage} alt="conductor" className="object-cover" height={70} width={70} /> */}
                                </div>
                            </Stack>
                        </Card>
                    </Link>
                    <Link href="/UserTable">
                        <Card className="Card w-[350px] transition-shadow hover:shadow-lg  h-[150px] bg-[#0582ca] rounded-lg">
                            <Stack className="w-full h-full card-gradient p-[1px] rounded-[20px] shadow-card  "  >
                                <div className='relative top-3 left-3' >
                                    <Typography className="text-white text-[1.8rem]" >Users</Typography>
                                </div>
                                <div className="relative bottom-3 left-3">
                                    {/* <FaUserAlt /> */}
                                </div>
                            </Stack>
                        </Card>
                    </Link>
                    <Link href="/BusStopsTable" >
                        <Card className="Card w-[350px] transition-shadow hover:shadow-lg  h-[150px] bg-[#fbb13c] rounded-lg">
                            <Stack className="w-full h-full card-gradient p-[1px] rounded-[20px] shadow-card  "  >
                                {/* <IoBusOutline style={{ height: 70, width: 70 }} /> */}
                                <div className='relative top-3 left-3' >
                                    <Typography className="text-white text-[1.8rem]" >Bus stops</Typography>
                                </div>
                            </Stack>
                        </Card>
                    </Link>
                    <Link href="/InvoicesTable" >
                        <Card className="Card w-[350px] transition-shadow hover:shadow-lg  h-[150px] bg-[#2c6e49] rounded-lg">
                            <Stack className="w-full h-full card-gradient p-[1px] rounded-[20px] shadow-card  "  >
                                {/* <TbFileInvoice style={{ height: 70, width: 70 }} /> */}
                                <div className='relative top-3 left-3' >
                                    <Typography className="text-white text-[1.8rem]" >Invoices</Typography>
                                </div>
                            </Stack>
                        </Card>
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