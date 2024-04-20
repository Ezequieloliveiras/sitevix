
import './carousel.css'
import {register} from 'swiper/element/bundle'

register()

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { Swiper, SwiperSlide } from 'swiper/react'


function Carousel() {

const data = [

    {id: '1', image: 'https://i.imgur.com/pEeobyC.png', title: 'Sites Corporativos'},
    {id: '2', image: 'https://i.imgur.com/eO8Kuau.png', title:'Lojas Online'},
    {id: '3', image: 'https://i.imgur.com/wtE0Lky.png', title:'Site de Arte Ambiente'},

]

    return(

        <div className='container'>
        <Swiper className='swiper-slider'
          slidesPerView={1}
          pagination={{clickable: true}}
          
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} className='swiper-slider' autoP>
              <div className="slider-item-container">
                <img src={item.image} alt='slider' className='slider-item' />
                <div className="slider-item-title">{item.title}</div>
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
