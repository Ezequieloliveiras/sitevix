import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Modal from '../modal/ModalFifth'
import Image from "next/legacy/image"

import Viagens from '../../../../public/images/trips.avif'
import { Box, TitleCard, StyleCard } from './StylesCards'


export default function ActionAreaCard() {
  return (
    <StyleCard>
      <Box>
        <Image
          src={Viagens}
          priority
          alt="siteDeCatalogo"
        />
      </Box>
      <CardContent>
        <TitleCard>
          Site de Viagens
        </TitleCard>
        <Typography color="text.secondary">
          Promova seus destinos e alcance viajantes de todo o mundo com um site profissional.
        </Typography>
      </CardContent>
      <Modal />
    </StyleCard>

  )
}
