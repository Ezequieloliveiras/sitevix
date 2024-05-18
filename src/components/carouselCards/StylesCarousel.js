import styled from 'styled-components'
import Image from "next/legacy/image"
import { Box } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import Swiper from 'swiper'

const StyledBox = styled(Box)`

@media (max-width:500px) {
    height: auto;
  }
`
const CardSlide = styled.div`
  height: 500px;

  @media (max-width:540px) {
    height: auto;
  }

  @media (min-width:768px) {
    height: auto;
  }
`
const ImageTeste = styled(Image)`
  object-fit: cover;
  height:100%;
`
const CarouselSlide = styled(Carousel)`
  height: auto;
`

export {
    StyledBox,
    CarouselSlide,
    CardSlide,
    ImageTeste,
}