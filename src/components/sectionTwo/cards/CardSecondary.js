import Image from "next/legacy/image"
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import ModalImage from '../modal/ModalTwo'
import Loja from '../../../../public/images/loja.avif'
import { Box, TitleCard, StyleCard } from './StylesCards'

export default function ActionAreaCard() {
  return (
    <StyleCard>
      <Box>
        <Image
          src={Loja}
          priority
          alt="loja online"
        />
      </Box>
      <CardContent>
        <TitleCard>
          Lojas Online
        </TitleCard>
        <Typography color="text.secondary" >
          Venda seus produtos e serviços 24 horas por dia, 7 dias por semana, com uma loja online personalizada.
        </Typography>
      </CardContent>
      <ModalImage/>
    </StyleCard>
  )
}
