import { useState, useEffect } from 'react'
import {
    IconButton,
    Modal,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { Box } from '@mui/system';
import EditConductor from './EditConductorModel';
interface funcData {
    name: string,
    uname: string,
    email: string,
    password: string,
    mobile: string,
    dob: string,
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#f2f2f2',
    boxShadow: 24,
    p: 4,
    borderRadius: '8px'
};
const dummy = [
    {
        name: 'Baburao Apte',
        uname: 'baburao_apte',
        email: 'baburaoApte@gmail.com',
        password: '12345678',
        mobile: '7773223432',
        dob: '13-4-1995',
    },
    {
        name: 'Baburao Apte 1',
        uname: 'baburao_apte_1',
        email: 'baburaoApte@gmail.com',
        password: '12345678',
        mobile: '7773223432',
        dob: '13-4-1995',
    },
    {
        name: 'Baburao Apte 2',
        uname: 'baburao_apte_2',
        email: 'baburaoApte@gmail.com',
        password: '12345678',
        mobile: '7773223432',
        dob: '13-4-1995',
    },
    {
        name: 'Baburao Apte 3',
        uname: 'baburao_apte_3',
        email: 'baburaoApte@gmail.com',
        password: '12345678',
        mobile: '7773223432',
        dob: '13-4-1995',
    },
    {
        name: 'Baburao Apte 4',
        uname: 'baburao_apte_4',
        email: 'baburaoApte@gmail.com',
        password: '12345678',
        mobile: '7773223432',
        dob: '13-4-1995',
    },
]
const ConductorTable = () => {
    const [open, setOpen]: any = useState(false);
    const [dataSet, setDataSet]: any = useState([{
        name: '',
        uname: '',
        email: '',
        password: '',
        mobile: '',
        dob: '',
    }])
    useEffect(() => {
        setDataSet(dummy)
    }, [])

    const student_rows = dataSet.map((data: any) => (
        createData(
            data.name,
            data.uname,
            data.email,
            data.password,
            data.mobile,
            data.dob,
        )
    ))

    function createData(name: string, uname: string, email: string, password: string, mobile: string, dob: string): funcData {
        return {
            name, uname, email, password, mobile, dob
        };
    }



    return (
        <>
            <div className='mt-10 px-5 p-4' >
                <Typography variant='h4' className="my-5" >Manage Conductors</Typography>
                <TableContainer component={Paper} sx={{ marginBottom: "100px" }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>User name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Password</TableCell>
                                <TableCell>Mobile number</TableCell>
                                <TableCell>Date of Birth</TableCell>
                                <TableCell>Delete</TableCell>
                                <TableCell>Edit</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {student_rows?.map((row: any) => (
                                <TableRow
                                    key={row.mobile + row.email + row.uname + row.name}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.uname}
                                    </TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>{row.password}</TableCell>
                                    <TableCell>{row.mobile}</TableCell>
                                    <TableCell>{row.dob}</TableCell>
                                    <TableCell>
                                        <IconButton color="error" onClick={() => confirm("Are you sure about that?")} >
                                            <AiOutlineDelete />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>
                                        <IconButton color="primary" onClick={() => setOpen(true)}>
                                            <AiOutlineEdit />
                                        </IconButton>
                                        <Modal
                                            open={open}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style}>
                                                <EditConductor setOpen={setOpen} initialValues={row} />
                                            </Box>
                                        </Modal>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>

    )
}

export default ConductorTable