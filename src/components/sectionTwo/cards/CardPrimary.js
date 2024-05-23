import Image from "next/legacy/image"

import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import ModalImage from '../modal/Modal'
import Corporativo from '../../../../public/images/corporate.avif'
import { Box, TitleCard, StyleCard } from './StylesCards'

export default function ActionAreaCard() {

  return (

    <StyleCard>
      <Box>
        <Image
          src={Corporativo}
          priority
          alt="Arquitetura"
        />
      </Box>
      <CardContent>
        <TitleCard>
          Sites Corporativos
        </TitleCard>
        <Typography color="text.secondary">
        Valorize sua marca e alcance um público global com um site corporativo profissional.
        </Typography>
      </CardContent>
      <ModalImage />
    </StyleCard>
  )
}
