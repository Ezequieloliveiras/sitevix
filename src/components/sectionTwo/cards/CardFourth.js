import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Modal from '../modal/ModalFour'
import Image from "next/legacy/image"
import SiteRestaurante from '../../../../public/images/restaurant.avif'
import { Box, TitleCard, StyleCard } from './StylesCards'


export default function ActionAreaCard() {
  return (
    <StyleCard>
      <Box>
        <Image
          src={SiteRestaurante}
          priority
          alt="siteRestaurante"
        />
      </Box>
      <CardContent>
        <TitleCard>
          Restaurante
        </TitleCard>
        <Typography color="text.secondary">
          Destaque o seu restaurante e atraia clientes de todo o mundo com um site profissional.
        </Typography>
      </CardContent>
      <Modal />
    </StyleCard>

  )
}
