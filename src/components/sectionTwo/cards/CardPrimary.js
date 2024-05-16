import Image from "next/legacy/image"

import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import ModalImage from '../modal/Modal'
import Architecture from '../../../../public/images/architecture.avif'
import { Box, TitleCard, StyleCard } from './StylesCards'

export default function ActionAreaCard() {

  return (

    <StyleCard>
      <Box>
        <Image
          src={Architecture}
          priority
          alt="Arquitetura"
        />
      </Box>
      <CardContent>
        <TitleCard gutterBottom>
          Sites Corporativos
        </TitleCard>
        <Typography color="text.secondary">
          Destaque a sua marca e alcance um público global com um site corporativo profissional.
        </Typography>
      </CardContent>
      <ModalImage />
    </StyleCard>
  )
}
