// import { register } from 'swiper/element/bundle'
// import { Swiper, SwiperSlide } from 'swiper/react'
import Carousel from 'react-material-ui-carousel'
import Image from 'next/image'

// import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/scrollbar'
// import 'swiper/css/autoplay'
// import './carousel.css'

import SitesCorporativos from '../../../public/images/sitescorporativos.avif'
import Estetica from '../../../public/images/estetica.avif'
import LojaOnline from '../../../public/images/lojaonline.avif'
import { Box, Card, CardMedia } from '@mui/material'

// register()

function SlideCarousel() {

  // const data = [

  //   { id: '3', image: LojaOnline, title: 'Blogs' },
  //   { id: '2', image: Estetica, title: 'Lojas Online' },
  //   { id: '1', image: SitesCorporativos, title: 'Sites Corporativos' },

  // ]

  return (

    <div className='container'>


      <Box sx={{ height: '500px' }}>
        <Carousel autoPlay>

          <div style={{ height: '500px' }}>

            <Image src={SitesCorporativos} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt='sitescorporativos' />

          </div>

          <div style={{ height: '500px' }}>

            <Image src={Estetica} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt='estetica' />

          </div>

          <div style={{ height: '500px' }}>

            <Image src={LojaOnline} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt='lojaonline' />

          </div>

        </Carousel>

      </Box>


      {/* 
        <Swiper 
          className='swiper-slider'
          slidesPerView={1}
          pagination={{clickable: true}}
          autoplay={true}
          >
          {data.map((item) => (

            <SwiperSlide key={item.id} className='swiper-slider'>

                <Image src={item.image} alt='sites' className='slider-item' fetchPriority='high'/>

            </SwiperSlide>

          ))}

        </Swiper> */}

    </div>

  )
}

export default SlideCarousel
