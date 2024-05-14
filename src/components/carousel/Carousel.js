import SitesCorporativos from '../../../public/images/sitescorporativos.avif'
import Estetica from '../../../public/images/estetica.avif'
import LojaOnline from '../../../public/images/lojaonline.avif'

import {
  StyledBox,
  CarouselSlide,
  CardSlide,
  ImageTeste,
} from './StylesCarousel'

function SlideCarousel() {
  return (
    <div className='container'>
      <StyledBox>
        <CarouselSlide autoPlay>
          <CardSlide>
            <ImageTeste src={Estetica} priority
              alt='estetica' />
          </CardSlide>
          <CardSlide>
            <ImageTeste src={SitesCorporativos} priority
              alt='empresa' />
          </CardSlide>
          <CardSlide>
            <ImageTeste src={LojaOnline} priority
              alt='lojaonline' />
          </CardSlide>
        </CarouselSlide>
      </StyledBox>
    </div>
  )
}

export default SlideCarousel
