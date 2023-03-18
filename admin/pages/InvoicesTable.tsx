import { useState, useEffect } from 'react'
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import Navbar from '@/components/Navbar';

interface funcData {
    time: string,
    amount: number,
    id: string,
    payment_to: string,
    payment_by: string,
}

const InvoicesTable = () => {
    const [open, setOpen]: any = useState(false);
    const [dataSet, setDataSet]: any = useState([])
    useEffect(() => {
        fetchConductors();
    }, [])
    async function fetchConductors() {
        const passenger = await fetch("http://localhost:6565/admin/fetchAllPayment", {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                authToken: sessionStorage.getItem('admin'),
            },
        })
        const res = await passenger.json();

        if (res.success) {
            setDataSet(res.payments);
        }

    }
    const student_rows = dataSet.map((data: any) => (
        createData(
            data.pay_time,
            data.pay_amount,
            data.pay_id,
            data.p_uname,
            data.c_uname,
        )
    ))

    function createData(time: string, amount: number, id: string, payment_to: string, payment_by: string): funcData {
        return {
            time, amount, id, payment_to, payment_by
        };
    }



    return (
        <>
            <Navbar />
            <div className='mt-[16vh] px-5 p-4' >
                <Typography variant='h4' className="my-5" >Payments</Typography>
                <TableContainer component={Paper} sx={{ marginBottom: "100px" }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>time</TableCell>
                                <TableCell>amount</TableCell>
                                <TableCell>id</TableCell>
                                <TableCell>payment done to</TableCell>
                                <TableCell>payment done by</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {student_rows?.map((row: any) => (
                                <TableRow
                                    key={row.id + row.payment_to + row.payment_by + row.time}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell>{row.time}</TableCell>
                                    <TableCell>{row.amount}</TableCell>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.payment_to}</TableCell>
                                    <TableCell>{row.payment_by}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>

    )
}

export default InvoicesTable