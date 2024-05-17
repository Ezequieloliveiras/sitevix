import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Modal from '../modal/ModalThird'
import Image from "next/legacy/image"
import Arte from '../../../../public/images/art.avif'
import { Box, TitleCard, StyleCard } from './StylesCards'


export default function ActionAreaCard() {
  return (
    <StyleCard>
      <Box>
        <Image
          src={Arte}
          priority
          alt="site de arte"
        />
      </Box>
      <CardContent>
        <TitleCard>
          Portfólios de Arte
        </TitleCard>
        <Typography color="text.secondary">
          Exiba seu trabalho de forma deslumbrante e conquiste novos clientes com um portfólio de arte online.
        </Typography>
      </CardContent>
      <Modal/>
    </StyleCard>

  )
}
