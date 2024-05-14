import SitesCorporativos from '../../../public/images/sitescorporativos.png'
import Estetica from '../../../public/images/estetica.png'
import LojaOnline from '../../../public/images/lojaonline.png'

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
            <ImageTeste src={SitesCorporativos}
              layout='responsive' alt='empresa'/>
          </CardSlide>
          <CardSlide>
            <ImageTeste src={Estetica}
              layout='responsive' alt='estetica'/>
          </CardSlide>
          <CardSlide>
            <ImageTeste src={LojaOnline}
              layout='responsive' alt='lojaonline'/>
          </CardSlide>
        </CarouselSlide>
      </StyledBox>
    </div>
  )
}

export default SlideCarousel
