import React from 'react'
import heroImg from '../../assets/hero.png'
import FramerDown from '../Framer/FramerDown'
import FramerUp from '../Framer/FramerUp'

const Hero = () => {

  return (
    <section className='max-md:pt-[100px] text-5xl flex max-md:flex-col justify-center items-center min-h-screen max-md:gap-12 md:px-12'>
      <div>
         <FramerDown>
            <h1 className='font-semibold text-center max-md:text-3xl'>Nurturing Your Well-being: <br /> Discover Our Programs <br /> Ecosystem <span className='text-orange'>.</span></h1>
         </FramerDown>
         <FramerUp>
            <p className='mt-2 px-4 md:text-base text-sm text-gray text-center'>Discover Healthier Living: Explore Our Tailored Lifestyle and Wellness Programs.</p>
         </FramerUp>
         <FramerUp>
         <div className='flex justify-center max-md:flex-col items-center gap-4 mt-6'>
            <button className='md:w-[200px] w-[180px] py-3 md:text-xl text-base bg-orange hover:bg-lightOrange rounded-full text-white duration-200'>
               Talk to Us
            </button>
            <button className='md:w-[200px] w-[180px] py-3 md:text-xl text-base border border-orange hover:bg-orange hover:text-white duration-200 rounded-full text-orange'>
               Know More
            </button>
         </div>
         </FramerUp> 
      </div>
      <div className='relative md:h-[450px]'>
         <img src={heroImg} alt="Hero Image" className='h-full object-cover drop-shadow-orange animate-image' />
      </div>
    </section>
  )
}

export default Hero
