import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import styled from 'styled-components'
import Image from "next/legacy/image"
import Architecture from '../../../../public/images/architecture.png'


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
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <div>
            <ButtonModal onClick={handleOpen} id='botaoVeja'>Veja</ButtonModal>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <BoxImage>

                    <Image
                        style={{width:'100%', height:'auto'}}
                        src={Architecture}
                        alt="Arquitetura"
                        priority
                    />
                </BoxImage>
            </Modal>
        </div>
    )
}
