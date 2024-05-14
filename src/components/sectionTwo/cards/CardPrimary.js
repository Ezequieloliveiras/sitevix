import Image from "next/legacy/image"
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import ModalImage from '../modal/Modal'
import Architecture from '../../../../public/images/architecture.png'
import { Box } from './StylesCards'

export default function ActionAreaCard() {

  return (

    <Card sx={{ maxWidth: 345, margin: '5px', backgroundColor: '#F0F0F0' }}>
      <Box>
        <Image
          style={{width:'100%', height:'auto'}}
          src={Architecture}
          alt="Arquitetura"
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: '#f57c00' }}>
          Sites Corporativos
        </Typography>
        <Typography color="text.secondary">
          Destaque a sua marca e alcance um público global com um site corporativo profissional.
        </Typography>
      </CardContent>
      <ModalImage />
    </Card>
  )
}
