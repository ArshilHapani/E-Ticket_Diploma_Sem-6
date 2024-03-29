import { useState, useEffect } from 'react'
import {
    Avatar,
    Box,
    IconButton,
    Modal,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    Typography,
} from "@mui/material";
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import Navbar from '@/components/Navbar';
import EditConductor from '@/components/EditConductorModel';
import { style } from '../styles'
interface funcData {
    img: string,
    id: string,
    name: string,
    uname: string,
    email: string,
    mobile: string,
    dob: string,
}

const ConductorTable = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [dataSet, setDataSet] = useState<Array<object>>([])
    const [indexMeasure, setIndexMeasure] = useState<number>(0);
    useEffect(() => {
        fetchConductors();
    }, [])
    async function fetchConductors() {

        const conductors = await fetch("http://localhost:6565/admin/fetchAllConductor", {
            method: "GET",
            //@ts-ignore
            headers: {
                'Content-type': 'application/json',
                authToken: sessionStorage.getItem('admin'),
            },
        })
        const res = await conductors.json();
        if (res.success) {
            setDataSet(res.conductors)
        }

    }
    const student_rows = dataSet.map((data: any) => (
        createData(
            data.c_img,
            data.c_id,
            data.c_name,
            data.c_uname,
            data.c_email,
            data.c_no,
            data.c_dob,
        )
    ))

    function createData(img: string, id: string, name: string, uname: string, email: string, mobile: string, dob: string): funcData {
        return {
            img, id, name, uname, email, mobile, dob
        };
    }



    return (
        <>
            <Navbar />
            <div className='mt-[16vh] px-5 p-4' >
                <Typography variant='h4' className="my-5 text-slate-500" >Manage Conductors</Typography>
                <TableContainer component={Paper} sx={{ marginBottom: "100px" }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Image</TableCell>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>User name</TableCell>
                                <TableCell>email</TableCell>
                                <TableCell>Mobile number</TableCell>
                                <TableCell>Date of Birth</TableCell>
                                <TableCell>Edit</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {student_rows?.map((row: any, index: number) => (
                                <TableRow
                                    key={row.mobile + row.email + row.uname + row.name}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <Avatar src={row.img !== null && row.img} alt={row.name} >
                                            {row.img === null && row.name.charAt(0).toUpperCase()}
                                        </Avatar>
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.uname}</TableCell>
                                    <TableCell>{row.email === "" ? "not added" : row.email}</TableCell>
                                    <TableCell>{row.mobile === null ? "not added" : row.mobile}</TableCell>
                                    <TableCell>{row.dob}</TableCell>
                                    <TableCell>
                                        <Tooltip title={`Edit ${row.name}`} arrow placement='right' >
                                            <IconButton color="primary" onClick={() => setOpen(true)}>
                                                <AiOutlineEdit />
                                            </IconButton>
                                        </Tooltip>
                                        <ButtonAnnotation open={open} indexMeasure={indexMeasure} row={row} index={index} setOpen={setOpen} />
                                    </TableCell>
                                    <TableCell>
                                        <Tooltip title={`Delete ${row.name}`} arrow placement='right' >
                                            <IconButton color="error" onClick={() => confirm("Are you sure about that?")} >
                                                <AiOutlineDelete />
                                            </IconButton>
                                        </Tooltip>
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



function ButtonAnnotation({ row, index, setOpen, open, indexMeasure }: any) {
    return (
        <Modal
            open={indexMeasure === index ? open : false}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            // @ts-ignore
            key={row.img + index}
        >
            <Box sx={style}>
                {/*@ts-ignore */}
                <EditConductor setOpen={setOpen} initialValues={row} />
            </Box>
        </Modal>
    )
}
