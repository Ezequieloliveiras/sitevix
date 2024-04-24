import {register} from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import './carousel.css'

register()

function Carousel() {

const data = [

    {id: '1', image: 'https://i.imgur.com/eXpeNf2.png', title: 'Sites Corporativos'},
    {id: '2', image: 'https://i.imgur.com/bWLTwdI.png', title:'Lojas Online'},
    {id: '3', image: 'https://i.imgur.com/CzA6DD2.png', title:'Blogs'},

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

              <div className="slider-item-container">

                <img src={item.image} alt='slider' className='slider-item' />

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>
      
    )
}

export default Carousel
