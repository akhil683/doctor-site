import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'
import img from '../assets/img.jpg'
import img2 from '../assets/login.jpg'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Carousel = () => (
   <Swiper
      spaceBetween={30}
      autoplay={{
         delay: 1000,
         disableOnInteraction: false,
      }}
      loop={true}
      effect={'fade'}
      navigation={true}
      modules={[EffectFade, Navigation, Pagination]}
      className="mySwiper md:h-[500px] h-[300px]"
   >
      <SwiperSlide className='w-full'>
         <img src={img} className='w-full h-full object-cover' />
      </SwiperSlide>
      <SwiperSlide className='w-full h-full'>
         <img src={img2} className='w-full h-full object-cover' />
      </SwiperSlide>
      <SwiperSlide className='w-full h-full'>
         <img src={img} className='w-full h-full object-cover' />
      </SwiperSlide>
      <SwiperSlide className='w-full h-full' >
         <img src={img2} className='w-full h-full object-cover' />
      </SwiperSlide>
      <SwiperSlide className='w-full h-full' >
         <img src={img} className='w-full h-full object-cover' />
      </SwiperSlide>
      <div className='prev'></div>
      <div className='next'></div>
   </Swiper>
)

export default Carousel
