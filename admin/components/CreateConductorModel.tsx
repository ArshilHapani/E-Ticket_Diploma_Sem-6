import React, { ReactPropTypes } from 'react'
import { Box, Button, TextField, Typography } from "@mui/material";
import { profile_edit_textfield, modelAutocomplete } from '../styles'

const CreateConductorModel = ({ setOpen }: any) => {
    return (
        <div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Create Conductor
            </Typography>
            <TextField
                label="name"
                sx={profile_edit_textfield}
                placeholder="create name"
                variant="standard"
                color="info"
                type="text"
            />
            <TextField
                label="username"
                sx={profile_edit_textfield}
                placeholder="create username"
                variant="standard"
                color="info"
                type="text"
            />

            <TextField
                label="email"
                sx={profile_edit_textfield}
                placeholder="create email"
                variant="standard"
                color="info"
                type="email"
            />
            <TextField
                label="password"
                sx={profile_edit_textfield}
                placeholder="create password"
                variant="standard"
                color="info"
                type="text"
            />
            <TextField
                label="date of birth"
                sx={profile_edit_textfield}
                variant="standard"
                color="info"
                type="date"
                InputLabelProps={{ shrink: true }}
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
                    variant="contained"
                    type="submit"
                    color="primary"
                >
                    create conductor
                </Button>
            </Box>
        </div>
    )
}

export default CreateConductorModel