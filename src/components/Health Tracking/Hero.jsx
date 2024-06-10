import React from 'react'
import img from "../../assets/tracking/ipad.png"
import { IoIosCheckmarkCircle } from 'react-icons/io'
const Hero = () => {
  return (
    <section className='mt-[80px] flex-col py-16 justify-center items-center flex'>
     <div className='max-w-[600px] text-center'>
         <h3 className='md:text-5xl text-3xl font-semibold'>Effortlessly Monitor of what really matters</h3> 
         <p className='text-lg text-gray mt-8'>
            DocPlix transformation plan helps you control your blood sugar and insulin levels through tweaks in your fitness regime, eating habits, and current lifestyle.
         </p>
      </div> 
      <div className='max-w-[1000px] flex justify-center items-center gap-x-24 gap-y-8 text-2xl max-md:text-base flex-wrap mt-16 animate-image'>
         <button className='flex justify-center items-center gap-2 font-semibold px-12 py-6 rounded-xl shadow-xl shadow-gray'>
            <IoIosCheckmarkCircle className='text-checkGreen text-2xl' />
            HbA1c
         </button>
         <button className='flex gap-2 font-semibold items-center px-12 py-6 rounded-xl shadow-xl shadow-gray'>
            <IoIosCheckmarkCircle className='text-checkGreen text-2xl' />
            Heart Rate
         </button>
         <button className='flex items-center gap-2 font-semibold px-12 py-6 rounded-xl shadow-xl shadow-gray'>
            <IoIosCheckmarkCircle className='text-checkGreen text-2xl' />
            Blood Pressure
         </button>
         <button className='flex items-center gap-2 font-semibold px-12 py-6 rounded-xl shadow-xl shadow-gray'>
            <IoIosCheckmarkCircle className='text-checkGreen text-2xl' />
            Blood Sugar Levels
         </button>
         <button className='flex items-center gap-2 font-semibold px-12 py-6 rounded-xl shadow-xl shadow-gray'>
            <IoIosCheckmarkCircle className='text-checkGreen text-2xl' />
            and many more...
         </button>
      </div>
      <img src={img} alt="iPad image" />
    </section>
  )
}

export default Hero
