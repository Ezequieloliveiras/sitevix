import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Modal from '../modal/ModalThird'

export default function ActionAreaCard() {
  return (

    <Card sx={{ maxWidth: 345, margin: '5px' }}>

        <CardMedia
          component="img"
          height="auto"
          src="https://i.imgur.com/wuxDWOn.png"
          alt="green iguana"
        />

        <CardContent >

          <Typography gutterBottom variant="h5" component="div" sx={{ color: '#f57c00' }}>

            Portfólios de Arte
            
          </Typography>

          <Typography color="text.secondary">

            Exiba seu trabalho de forma deslumbrante e conquiste novos clientes com um portfólio de arte online.

          </Typography>

        </CardContent>

      <Modal/>

    </Card>

  )
}
