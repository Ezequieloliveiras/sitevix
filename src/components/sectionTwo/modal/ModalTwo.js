import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import styled from 'styled-components'

import Loja from '../../../../public/images/loja.avif'
import Image from "next/legacy/image"

const BoxImage = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.25);
    
    @media (max-width: 768px) {
        width: 95%;
    }

    @media (min-width: 900px) {
        width: 60%;
    }
`
const ButtonModal = styled(Button)`
&& {
    background-color: #f57c00;
    color: #fff;
    margin-top: 10px;
    margin-bottom: 20px;
    &:hover {
        background-color: #ef6c00;
    }
}
`
export default function BasicModal() {
    const [open, setOpen] = useState(false)
    const [imageLoaded, setImageLoaded] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <BoxImage>
                {!imageLoaded && <div>Loading...</div>}
                    <Image
                        src={Loja}
                        alt="lojaOnline"
                        priority
                        layout='responsive'
                        quality={100}
                        onLoad={() => setImageLoaded(true)}
                    />
                </BoxImage>
            </Modal>
            <ButtonModal onClick={handleOpen}>Ver</ButtonModal>
        </>
    )
}
