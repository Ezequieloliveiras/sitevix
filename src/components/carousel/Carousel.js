import { register } from 'swiper/element/bundle'
// import { Swiper, SwiperSlide } from 'swiper/react'
import Carousel from 'react-material-ui-carousel'


// import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/scrollbar'
// import 'swiper/css/autoplay'
// import './carousel.css'

// import SitesCorporativos from '../../../public/images/sitescorporativos.avif'
// import Estetica from '../../../public/images/estetica.avif'
// import LojaOnline from '../../../public/images/lojaonline.avif'
// import Image from 'next/image'
import { Box, Card, CardMedia } from '@mui/material'

register()

function SlideCarousel() {

  // const data = [

  //   { id: '3', image: LojaOnline, title: 'Blogs' },
  //   { id: '2', image: Estetica, title: 'Lojas Online' },
  //   { id: '1', image: SitesCorporativos, title: 'Sites Corporativos' },

  // ]

  return (

    <div className='container'>


      <Box sx={{height:'500px'}}>
        <Carousel autoPlay>
          <Card>
            <CardMedia  sx={{height:'500px'}} image='https://source.unsplash.com/random?a=1' title= 'imagem'/>
          </Card>
          <Card>
            <CardMedia sx={{height:'500px'}} image='https://source.unsplash.com/random?a=2' />
          </Card>
            <Card>
            <CardMedia sx={{height:'500px'}} image='https://source.unsplash.com/random?a=2' />
          </Card>
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
