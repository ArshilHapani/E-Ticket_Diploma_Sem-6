import React, { SyntheticEvent, useState } from 'react'
import { Box, Button, TextField, Typography } from "@mui/material";
import { profile_edit_textfield, modelAutocomplete } from '../styles'
import { functionEditUserModelProps } from '@/interfaces';

const EditUser = ({ setOpen, initialValues }: functionEditUserModelProps) => {

    const [user, setUser] = useState({
        ...initialValues
    })

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        console.log(user);
    }
    return (

        <form onSubmit={handleSubmit} >
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Manage User
            </Typography>
            <TextField
                label="name"
                sx={profile_edit_textfield}
                variant="standard"
                color="info"
                type="text"
                value={user.name}
                onChange={(e) => {
                    setUser({
                        ...user,
                        name: e.target.value
                    })
                }}
            />
            <TextField
                label="username"
                sx={profile_edit_textfield}
                variant="standard"
                color="info"
                type="text"
                value={user.uname}
                onChange={(e) => {
                    setUser({
                        ...user,
                        uname: e.target.value
                    })
                }}
            />

            <TextField
                label="email"
                sx={profile_edit_textfield}
                variant="standard"
                color="info"
                type="email"
                value={user.email}
                onChange={(e) => {
                    setUser({
                        ...user,
                        email: e.target.value
                    })
                }}
            />
            <TextField
                label="balance"
                sx={profile_edit_textfield}
                variant="standard"
                color="info"
                type="number"
                value={user.balance}
                onChange={(e) => {
                    setUser({
                        ...user,
                        balance: parseFloat(e.target.value)
                    })
                }}
            />
            <Box sx={modelAutocomplete.generateTicketButtonContainer}>
                <Button
                    variant="outlined"
                    color="error"
                    sx={modelAutocomplete.generateTicketButton.cancelButton}
                    onClick={() => setOpen(false)}
                >
                    Cancel
                </Button>
                <Button
                    variant="outlined"
                    type="submit"
                    sx={modelAutocomplete.generateTicketButton}
                >
                    edit user
                </Button>
            </Box>
        </form>
    )
}

export default EditUser