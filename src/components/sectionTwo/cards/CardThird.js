import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Modal from '../modal/ModalThird'
import Image from 'next/image'
import Arte from '../../../../public/images/arte.png'
import {Box} from './StylesCards'

export default function ActionAreaCard() {
  return (

    <Card sx={{ maxWidth: 345, margin: '5px', backgroundColor: '#F0F0F0' }}>
      <Box>
        <Image
          style={{width:'100%', height:'auto'}}
          src={Arte}
          alt="site de arte"
        />

      </Box>

      <CardContent >

        <Typography gutterBottom variant="h5" component="div" sx={{ color: '#f57c00' }}>

          Portfólios de Arte

        </Typography>

        <Typography color="text.secondary">

          Exiba seu trabalho de forma deslumbrante e conquiste novos clientes com um portfólio de arte online.

        </Typography>

      </CardContent>

      <Modal />

    </Card>

  )
}
