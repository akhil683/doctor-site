import React from 'react'
import lockerImg from "../../assets/locker.png"

const Hero = () => {
  return (
  <section className='my-[75px] justify-center items-center flex flex-col'>
   <div className='py-12 flex flex-col justify-center items-center gap-8'>
      <h3 className='md:text-5xl text-3xl font-semibold'>Keep Private  data, Private</h3>
      <p className='text-gray max-w-[600px] text-center text-lg'>
         Your DocPlix transformation plan helps you control your blood sugar and insulin levels through tweaks in your fitness regime, eating habits, current lifestyle.
      </p> 
   </div>
   <img src={lockerImg} alt="locker Image" className='animate-image' />
  </section>
  )
}

export default Hero
