import React from 'react'
import ReactBeforeSlidercomponent from "react-before-after-slider-component"
import 'react-before-after-slider-component/dist/build.css'


const Slider = ({ imageOne, imageTwo }) => {
   const FIRST_IMAGE = {
      imageUrl: imageOne
   }
   const SECOND_IMAGE = {
      imageUrl: imageTwo
   }

  return (
   <div className='max-w-[500px] shadow-xl shadow-gray'>
   <ReactBeforeSlidercomponent 
      firstImage={FIRST_IMAGE} 
      secondImage={SECOND_IMAGE}
      delimiterColor='#e8762c'
      className='w-full h-full object-cover'
   />
   </div>
  )
}

export default Slider
