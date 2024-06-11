import React from 'react'
import ReactBeforeSlidercomponent from "react-before-after-slider-component"
import 'react-before-after-slider-component/dist/build.css'

import firstImg from "../assets/slider/3.png"

const Slider = ({ imageTwo }) => {
   const FIRST_IMAGE = {
      imageUrl: firstImg
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
      className=''
   />
   </div>
  )
}

export default Slider
