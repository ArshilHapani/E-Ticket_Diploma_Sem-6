import { IconButton } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import Image from 'next/image'
import React from 'react'
import { AiOutlinePlus, AiOutlineUser } from 'react-icons/ai'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center shadow-md my-2 ' >
            <div className='mx-4 hover:shadow-sm' >
                <Tooltip title="E ticket Admin panel" placement="right" arrow >
                    <Image src="/favicon.png" alt="Logo" height={60} width={60} />
                </Tooltip>
            </div>
            <div className='mx-4 flex ' >
                <ul className='flex items-center justify-center gap-4' >
                    <li>
                        <Tooltip title="profile" placement='bottom' arrow>
                            <IconButton color="primary"  ><AiOutlineUser /></IconButton>
                        </Tooltip>
                    </li>
                    <li className='text-3xl' >
                        <Tooltip title="create conductor" placement='bottom' arrow>
                            <IconButton color="primary"   ><AiOutlinePlus /></IconButton>
                        </Tooltip>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar