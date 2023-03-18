import React, { SyntheticEvent, useState } from 'react'
import { Box, Button, TextField, Typography } from "@mui/material";
import { profile_edit_textfield, modelAutocomplete } from '../styles'


const AddStationsModel = ({ setOpen }: any) => {
    return (
        <div>
            <form  >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Add Station
                </Typography>
                <TextField
                    label="station id"
                    sx={profile_edit_textfield}
                    variant="standard"
                    color="info"
                    type="number"
                />
                <TextField
                    label="station name"
                    sx={profile_edit_textfield}
                    variant="standard"
                    color="info"
                    type="text"
                />
                <TextField
                    label="latitude"
                    sx={profile_edit_textfield}
                    variant="standard"
                    color="info"
                    type="number"
                />

                <TextField
                    label="longitude"
                    sx={profile_edit_textfield}
                    variant="standard"
                    color="info"
                    type="number"
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
                        Add Station
                    </Button>
                </Box>
            </form>
        </div>
    )
}

export default AddStationsModel