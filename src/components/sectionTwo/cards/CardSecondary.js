import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

import ModalImage from '../modal/ModalTwo'

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345, margin: '5px' }}>

      <CardActionArea>

        <CardMedia
          component="img"
          height="auto"
          src="https://i.imgur.com/Gw0oBSf.png"
          alt="green iguana"
        />

        <CardContent >

          <Typography gutterBottom variant="h5" component="div" sx={{ color: '#f57c00' }}>

            Lojas Online

          </Typography>

          <Typography color="text.secondary">

            Venda seus produtos e serviços 24 horas por dia, 7 dias por semana, com uma loja online personalizada.

          </Typography>

        </CardContent>

      </CardActionArea>

      <ModalImage />

    </Card>
  )
}
