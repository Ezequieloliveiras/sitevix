
import Carousel from 'react-material-ui-carousel'
import Image from 'next/image'
import SitesCorporativos from '../../../public/images/sitescorporativos.png'
import Estetica from '../../../public/images/estetica.png'
import LojaOnline from '../../../public/images/lojaonline.png'
import { Box, Card } from '@mui/material'
import styled from 'styled-components'

const StyledBox = styled(Box)`

@media (max-width:768px) {
    height: 300px;
  }
`

const CardSlide = styled.div`
height: 500px;


  @media (max-width:768px) {
    max-height: 200px;
  }
`

const ImageTeste = styled(Image)`
object-fit: cover;
height:100%;
  @media (min-width:769px) {
    max-height:100%;
  }
`

function SlideCarousel() {



  return (

    <div className='container'>


      <StyledBox >
        <Carousel sx={{ height: 'auto' }} autoPlay>

          <CardSlide >

            <ImageTeste src={SitesCorporativos}

              layout='responsive' alt='sitescorporativos' />

          </CardSlide>

          <CardSlide >

            <ImageTeste src={Estetica}

              layout='responsive' alt='estetica' />

          </CardSlide>

          <CardSlide >

            <ImageTeste src={LojaOnline}

              layout='responsive' alt='lojaonline' />

          </CardSlide>

        </Carousel>

      </StyledBox>


    </div>

  )
}

export default SlideCarousel
