
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import './carouselCard.css'

import CardOne from '../sectionTwo/cards/CardPrimary'
import CardTwo from '../sectionTwo/cards/CardSecondary'
import CardTree from '../sectionTwo/cards/CardThird'

register()

function SlideCarousel() {
  const data = [

    { id: '1', Component: CardOne},
    { id: '2', Component: CardTwo},
    { id: '3', Component: CardTree},
    { id: '4', Component: CardOne},
    { id: '5', Component: CardTree},
  ]

  return (
    <>
      <Swiper
        className='swiper-sliderCard '
      
        autoplay={false}
        // pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
      >
        {data.map((item) => (

          <SwiperSlide key={item.id} className='swiper-slider'>
            <item.Component/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default SlideCarousel


