
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
// import Carousel from 'react-material-ui-carousel'


import 'swiper/css'
 import 'swiper/css/pagination'
 import 'swiper/css/scrollbar'
 import 'swiper/css/autoplay'
 import './carousel.css'

import SitesCorporativos from '../../../public/images/1.avif'
 import Estetica from '../../../public/images/1.avif'
import LojaOnline from '../../../public/images/1.avif'
import Image from 'next/image'
// import { Box, Card, CardMedia } from '@mui/material'

register()

function SlideCarousel() {

   const data = [

    { id: '1', image: SitesCorporativos, title: 'Sites Corporativos' },
    { id: '3', image: LojaOnline, title: 'Blogs' },
    { id: '2', image: Estetica, title: 'Lojas Online' },

   ]

  return (

    <div className='container'>
      
        <Swiper 
          className='swiper-slider'
          slidesPerView={1}
          pagination={{clickable: true}}
          autoplay={true}
          >
          {data.map((item) => (

            <SwiperSlide key={item.id} className='swiper-slider'>

                <Image src={item.image} alt='sites' className='slider-item' fetchPriority='high' priority/>

            </SwiperSlide>

          ))}

        </Swiper> 

    </div>

  )
}

export default SlideCarousel


// import SitesCorporativos from '../../../public/images/sitescorporativos.avif'
// import Estetica from '../../../public/images/estetica.avif'
// import LojaOnline from '../../../public/images/lojaonline.avif'

// import {
//   StyledBox,
//   CarouselSlide,
//   CardSlide,
//   ImageTeste,
// } from './StylesCarousel'

// function SlideCarousel() {
//   return (
//     <div className='container'>
//       <StyledBox>
//         <CarouselSlide autoPlay>
//           <CardSlide>
//             <ImageTeste src={Estetica} priority
//               alt='estetica' />
//           </CardSlide>
//           <CardSlide>
//             <ImageTeste src={SitesCorporativos} priority
//               alt='empresa' />
//           </CardSlide>
//           <CardSlide>
//             <ImageTeste src={LojaOnline} priority
//               alt='lojaonline' />
//           </CardSlide>
//         </CarouselSlide>
//       </StyledBox>
//     </div>
//   )
// }

// export default SlideCarousel
