import React from 'react'
import heroImg from '../../assets/hero.png'

const Hero = () => {

  return (
    <section className='pt-[100px] text-5xl flex max-md:flex-col justify-center items-center min-h-screen max-md:gap-12 md:px-12'>
      <div className=''>
         <h1 className='font-semibold text-center max-md:text-3xl'>Nurturing Your Well-being: <br /> Discover Our Programs <br /> Ecosystem <span className='text-orange'>.</span></h1>
         <p className='mt-2 md:text-base text-sm text-gray text-center'>Discover Healthier Living: Explore Our Tailored Lifestyle and Wellness Programs.</p>
         <div className='flex justify-center max-md:flex-col items-center gap-4 mt-6'>
            <button className='md:w-[200px] w-[180px] py-3 md:text-xl text-base bg-orange hover:bg-lightOrange rounded-full text-white duration-200'>
               Talk to Us
            </button>
            <button className='md:w-[200px] w-[180px] py-3 md:text-xl text-base border border-orange hover:bg-orange hover:text-white duration-200 rounded-full text-orange'>
               Know More
            </button>
         </div>
      </div>
      <div className='relative md:h-[450px]'>
         <img src={heroImg} alt="Hero Image" className='h-full object-cover drop-shadow-orange ' />
      </div>
    </section>
  )
}

export default Hero