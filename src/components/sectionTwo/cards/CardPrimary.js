import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

import ModalImage from '../modal/Modal'

export default function ActionAreaCard() {
  return (


    <Card sx={{ maxWidth: 345, margin: '5px' }}>

      <CardActionArea>

        <CardMedia
          component="img"
          height="auto"
          src="https://i.imgur.com/9ogyyKs.png"
          alt="green iguana"
        />

        <CardContent >

          <Typography gutterBottom variant="h5" component="div" sx={{ color: '#f57c00' }}>

            Sites Corporativos

          </Typography>

          <Typography color="text.secondary">

            Destaque a sua marca e alcance um público global com um site corporativo profissional.

          </Typography>

        </CardContent>
      </CardActionArea>
      <ModalImage />

    </Card>
  )
}
