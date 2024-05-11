
import Carousel from 'react-material-ui-carousel'
import Image from 'next/image'

import SitesCorporativos from '../../../public/images/sitescorporativos.png'
import Estetica from '../../../public/images/estetica.png'
import LojaOnline from '../../../public/images/lojaonline.png'
import { Box } from '@mui/material'
import styled from 'styled-components'


const StyledBox = styled(Box)`
height: 500px;
@media (max-width:768px) {
    height: 300px;
  }
`

const CardSlide = styled.div`
height: 500px ;
  @media (max-width:768px) {
    height: 300px;
  }
`



function SlideCarousel() {



  return (

    <div className='container'>


      <StyledBox >
        <Carousel autoPlay>

          <CardSlide >

            <Image src={SitesCorporativos}

             style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt='sitescorporativos' />

          </CardSlide>

          <CardSlide >

            <Image src={Estetica} 

            style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt='estetica' />

          </CardSlide>

          <CardSlide >

            <Image src={LojaOnline} 

            style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt='lojaonline' />

          </CardSlide>

        </Carousel>

      </StyledBox>


    </div>

  )
}

export default SlideCarousel
