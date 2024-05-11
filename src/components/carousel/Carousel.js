
import Carousel from 'react-material-ui-carousel'
import Image from 'next/image'
import SitesCorporativos from '../../../public/images/sitescorporativos.png'
import Estetica from '../../../public/images/estetica.png'
import LojaOnline from '../../../public/images/lojaonline.png'
import { Box, Card } from '@mui/material'
import styled from 'styled-components'

const StyledBox = styled(Box)`
height: 500px;
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
  @media (min-width:769px) {
    max-height:100%;
  }
`

function SlideCarousel() {



  return (

    <div className='container'>


      <StyledBox >
        <Carousel sx={{height:'500px'}} autoPlay>

          <CardSlide >

            <ImageTeste src={LojaOnline}

              layout='responsive' alt='sitescorporativos' />

          </CardSlide>

          <CardSlide >

            <ImageTeste src={LojaOnline} 

            style={{ width: '100%', height: '100%',  }} alt='estetica' />

          </CardSlide>

          <CardSlide >

            <ImageTeste src={LojaOnline} 

            style={{ width: '100%', height: 'auto',  }} alt='lojaonline' />

          </CardSlide>

        </Carousel>

      </StyledBox>


    </div>

  )
}

export default SlideCarousel
