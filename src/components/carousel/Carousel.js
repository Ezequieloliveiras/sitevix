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

    {id: '1', image: 'https://i.imgur.com/2vqz5il.png', title: 'Sites Corporativos'},
    {id: '2', image: 'https://i.imgur.com/yQf6dN6.png', title:'Lojas Online'},
    {id: '3', image: 'https://i.imgur.com/jF3xQ2Y.png', title:'Sites de Arte Ambiente'},

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













// import Carousel from 'react-material-ui-carousel';
// import Image from 'next/image';

// import Models from './images/models.png'
// import Corporate from './images/corporate.png'
// import Art from './images/art.png'


// export default function CarouselComponent() {
//     return (
//         <div style={{ height: '400px' }}>
//             <Carousel autoPlay={false} sx={{ width: '100%', maxHeight: '100%', overflow: 'hidden' }} indicators={false}>
              

//                 <Image style={{ height: '400px', width: 'auto', }} src={Corporate} sx={{
//                     objectFit: 'cover',
//                 }} />
            


//                 <Image height={400} width={1500} src={Models} alt="model"
//                     sizes="100vw"
//                     style={{
//                         width: '100%',
//                         height: '400px',
//                         objectFit:'cover'
//                     }} />


//                 <Image style={{ height: '400px', width: '100%' }} src={Art} sx={{
//                     objectFit: 'cover',
//                 }} />
//             </Carousel>
//         </div>
//     );
// }
