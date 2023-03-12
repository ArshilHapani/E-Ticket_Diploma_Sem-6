import { IconButton } from '@mui/material'
import { Tooltip, Modal } from '@mui/material';
import { Box, Stack } from '@mui/system'
import Image from 'next/image'
import React, { ReactPropTypes } from 'react'
import { AiOutlinePlus, AiOutlineUser } from 'react-icons/ai';
import CreateConductorModel from './CreateConductorModel';


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


const Navbar = () => {
    const [open, setOpen]: any = React.useState(false);
    const handleOpen = () => setOpen(true);
    return (
        <Stack direction="row" justifyContent="space-between" alignItems="center" className="shadow-md h-[70px]" >
            <Box className="px-4" >
                <Image src="/svg/logo-no-background.svg" alt="logo" height={60} width={60} />
            </Box>
            <Box className="px-4 flex gap-4 ">
                <Tooltip title="Profile" placement='bottom' arrow >
                    <IconButton color="primary" >
                        <AiOutlineUser />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Add Conductor" placement='bottom' arrow >
                    <IconButton color="primary" onClick={handleOpen}>
                        <AiOutlinePlus />
                    </IconButton>
                </Tooltip>
                <Modal
                    open={open}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <CreateConductorModel setOpen={setOpen} />
                    </Box>
                </Modal>
            </Box>
        </Stack>
    )
}

export default Navbar