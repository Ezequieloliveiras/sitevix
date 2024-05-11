import {register} from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import './carousel.css'

import SitesCorporativos from '../../../public/images/sitescorporativos.avif'
import Estetica from '../../../public/images/estetica.avif'
import LojaOnline from '../../../public/images/lojaonline.avif'
import Image from 'next/image'

register()

function Carousel() {

const data = [

  {id: '3', image: LojaOnline, title:'Blogs'},
  {id: '2', image: Estetica, title:'Lojas Online'},
  {id: '1', image: SitesCorporativos, title: 'Sites Corporativos'},

]

    return(

        <div className='container'>

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

        </Swiper>

      </div>
      
    )
}

export default Carousel
