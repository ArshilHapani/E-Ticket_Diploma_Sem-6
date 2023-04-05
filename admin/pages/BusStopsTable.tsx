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
import { style } from '../styles'
import EditStations from '@/components/EditStations';

interface funcData {
    id: number,
    name: string,
    latitude: number,
    longitude: number
}

const BusStopsTable = () => {
    const [open, setOpen]: any = useState(false);
    const [dataSet, setDataSet]: any = useState([])
    useEffect(() => {
        fetchConductors();
    }, [])
    async function fetchConductors() {
        const passenger = await fetch("http://localhost:6565/admin/fetchAllStations", {
            method: "GET",
            //@ts-ignore
            headers: {
                'Content-type': 'application/json',
                authToken: sessionStorage.getItem('admin'),
            },
        })
        const res = await passenger.json();
        console.log(res);

        if (res.success) {
            setDataSet(res.stations);
        }

    }
    const student_rows = dataSet.map((data: any) => (
        createData(
            data.st_id,
            data.st_name,
            data.st_lat,
            data.st_long,
        )
    ))

    function createData(id: number, name: string, latitude: number, longitude: number): funcData {
        return {
            id, name, latitude, longitude
        };
    }



    return (
        <>
            <Navbar />
            <div className='mt-[16vh] px-5 p-4' >
                <Typography variant='h4' className="my-5" >All users</Typography>
                <TableContainer component={Paper} sx={{ marginBottom: "100px" }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Station ID</TableCell>
                                <TableCell>Station name</TableCell>
                                <TableCell>Latitude</TableCell>
                                <TableCell>Longitude</TableCell>
                                <TableCell>Edit</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {student_rows?.map((row: any) => (
                                <TableRow
                                    key={row.mobile + row.email + row.uname + row.name}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.latitude}</TableCell>
                                    <TableCell>{row.longitude}</TableCell>
                                    <TableCell>
                                        <Tooltip title={`Edit ${row.name}`} arrow placement='right' >
                                            <IconButton color="primary" onClick={() => setOpen(true)}>
                                                <AiOutlineEdit />
                                            </IconButton>
                                        </Tooltip>
                                        <Modal
                                            open={open}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style}>
                                                <EditStations setOpen={setOpen} initialValues={row} />
                                            </Box>
                                        </Modal>
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

export default BusStopsTable