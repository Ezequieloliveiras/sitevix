import Image from "next/legacy/image"
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import ModalImage from '../modal/ModalTwo'
import Loja from '../../../../public/images/loja.avif'
import { Box } from './StylesCards'

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345, margin: '5px', padding:'10px' }}>
      <Box>
        <Image
          src={Loja}
          priority
          alt="loja online"
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: '#f57c00' }}>
          Lojas Online
        </Typography>
        <Typography color="text.secondary"  sx={{ textAlign: 'justify',letterSpacing: '1px' }}>
          Venda seus produtos e serviços 24 horas por dia, 7 dias por semana, com uma loja online personalizada.
        </Typography>
      </CardContent>
      <ModalImage/>
    </Card>
  )
}
