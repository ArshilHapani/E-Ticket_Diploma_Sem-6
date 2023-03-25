import { IconButton } from "@mui/material";
import { Tooltip, Modal } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { TfiPlus } from "react-icons/tfi";
import { GoGraph, GoLocation } from "react-icons/go";
import CreateConductorModel from "./CreateConductorModel";
import AddStationsModel from "./AddStationsModel";
import Link from "next/link";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#f2f2f2",
    boxShadow: 24,
    p: 4,
    borderRadius: "8px",
};

const Navbar = () => {
    const [open, setOpen]: any = useState(false);
    const [addTicketModel, setAddTicketModel]: any = useState(false);
    return (
        <Stack
            direction="row"
            sx={{
                position: "fixed",
                top: 0,
                right: 0,
                left: 0,
                width: "100vw",
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(12px)",
            }}
            justifyContent="space-between"
            alignItems="center"
            className="shadow-md z-10 h-[70px]"
        >
            <Stack direction="row" gap={4} alignItems="center" className="px-4">
                <Link href="/HomePage">
                    {" "}
                    <Image
                        src="/svg/logo-no-background.svg"
                        alt="logo"
                        height={60}
                        width={60}
                    />
                </Link>
                <Tooltip title="Profile" placement="bottom" arrow>
                    <IconButton color="primary">
                        <AiOutlineUser />
                    </IconButton>
                </Tooltip>
                {/* User page... */}
                <Tooltip title="Insights" placement="bottom" arrow>
                    <Link href="/StatisTics">
                        <IconButton color="primary">
                            <GoGraph />
                        </IconButton>
                    </Link>
                </Tooltip>
            </Stack>
            <Box className="px-4 flex gap-4 ">
                <Tooltip title="Add stations" placement="bottom" arrow>
                    <IconButton color="primary" onClick={() => setAddTicketModel(true)}>
                        <GoLocation />
                    </IconButton>
                </Tooltip>
                {/* station model.... */}
                <Modal
                    open={addTicketModel}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <AddStationsModel setOpen={setAddTicketModel} />
                    </Box>
                </Modal>
                <Tooltip title="Add admin" placement="bottom" arrow>
                    <IconButton color="primary">
                        <RiAdminLine />
                    </IconButton>
                </Tooltip>
                {/* Add admin model... */}
                <Tooltip title="Add Conductor" placement="bottom" arrow>
                    <IconButton color="primary" onClick={() => setOpen(true)}>
                        <TfiPlus />
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
    );
};

export default Navbar;
