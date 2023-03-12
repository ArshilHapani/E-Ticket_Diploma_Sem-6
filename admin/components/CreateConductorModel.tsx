import React, { SyntheticEvent, useState } from 'react'
import { Box, Button, TextField, Typography } from "@mui/material";
import { profile_edit_textfield, modelAutocomplete } from '../styles'

const CreateConductorModel = ({ setOpen }: any) => {
    const [conductor, setConductor] = useState({
        uname: "",
        pwd: "",
        name: "",
        email: "",
        dob: "",
    })
    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const create = await fetch("http://localhost:6565/createconductor", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                uname: conductor.uname,
                pwd: conductor.pwd,
                name: conductor.name,
                email: conductor.email,
                dob: conductor.dob
            })
        })
        const response = await create.json();
        console.log(response);
        if (response.success) {
            alert("Successfully created a new conductor");
            setOpen(false);
        } else {
            alert("Failed to create a new conductor");
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
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
                    value={conductor.name}
                    onChange={(e) => {
                        setConductor({
                            ...conductor,
                            name: e.target.value
                        })
                    }}
                />
                <TextField
                    label="password"
                    sx={profile_edit_textfield}
                    placeholder="create password"
                    variant="standard"
                    color="info"
                    type="text"
                    value={conductor.pwd}
                    onChange={(e) => {
                        setConductor({
                            ...conductor,
                            pwd: e.target.value
                        })
                    }}
                />
                <TextField
                    label="username"
                    sx={profile_edit_textfield}
                    placeholder="create username"
                    variant="standard"
                    color="info"
                    type="text"
                    value={conductor.uname}
                    onChange={(e) => {
                        setConductor({
                            ...conductor,
                            uname: e.target.value
                        })
                    }}
                />

                <TextField
                    label="email"
                    sx={profile_edit_textfield}
                    placeholder="create email"
                    variant="standard"
                    color="info"
                    type="email"
                    value={conductor.email}
                    onChange={(e) => {
                        setConductor({
                            ...conductor,
                            email: e.target.value
                        })
                    }}
                />
                <TextField
                    label="date of birth"
                    sx={profile_edit_textfield}
                    variant="standard"
                    color="info"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    value={conductor.dob}
                    onChange={(e) => {
                        setConductor({
                            ...conductor,
                            dob: e.target.value
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
                        create conductor
                    </Button>
                </Box>
            </form>
        </div>
    )
}

export default CreateConductorModel