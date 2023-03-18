import React, { SyntheticEvent, useState } from 'react'
import { Box, Button, TextField, Typography } from "@mui/material";
import { profile_edit_textfield, modelAutocomplete } from '../styles'

const EditStations = ({ setOpen, initialValues }: any) => {
    const [conductor, setConductor] = useState({
        ...initialValues
    })
    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        console.log(conductor);

    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Create Conductor
                </Typography>
                <TextField
                    label="station id"
                    sx={profile_edit_textfield}
                    variant="standard"
                    color="info"
                    type="number"
                    value={conductor.name}
                    onChange={(e) => {
                        setConductor({
                            ...conductor,
                            id: e.target.value
                        })
                    }}
                />
                <TextField
                    label="station name"
                    sx={profile_edit_textfield}
                    variant="standard"
                    color="info"
                    type="text"
                    value={conductor.uname}
                    onChange={(e) => {
                        setConductor({
                            ...conductor,
                            name: e.target.value
                        })
                    }}
                />

                <TextField
                    label="latitude"
                    sx={profile_edit_textfield}
                    variant="standard"
                    color="info"
                    type="number"
                    value={conductor.email}
                    onChange={(e) => {
                        setConductor({
                            ...conductor,
                            latitude: e.target.value
                        })
                    }}
                />
                <TextField
                    label="longitude"
                    sx={profile_edit_textfield}
                    placeholder="create email"
                    variant="standard"
                    color="info"
                    type="number"
                    value={conductor.email}
                    onChange={(e) => {
                        setConductor({
                            ...conductor,
                            longitude: e.target.value
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
                        edit conductor
                    </Button>
                </Box>
            </form>
        </div>
    )
}

export default EditStations