import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules'

import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

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
         delay: 2000,
         disableOnInteraction: false,
      }}
      speed={1000}
      loop={true}
      effect={'fade'}
      navigation={{
         nextEl: '.next',
         prevEl: '.prev',
      }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      className="mySwiper md:h-[500px] h-[300px]"
   >
      <div className='prev'><GrFormPrevious /></div>
      <div className='next'><GrFormNext /></div>
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
   </Swiper>
)

export default Carousel
