import React from 'react'
import heroImg from '../../assets/ehr-intro.png'
import FramerDown from '../Framer/FramerDown'
import FramerUp from '../Framer/FramerUp'
import { Link } from 'react-router-dom'

const Hero = () => {

  return (
    <section className='md:mt-[75px] text-5xl flex max-md:flex-col justify-center items-center min-h-screen gap-12 md:px-12'>
      <div className='max-w-[500px]'>
         <FramerDown>
            <h1 className='font-semibold text-center max-md:text-3xl'>
               Paper Records have their limitations
               <span className='text-orange'> !</span>
            </h1>
         </FramerDown>
         <FramerUp>
            <p className='mt-2 px-4 md:text-base text-sm text-gray text-center'>
               We made practice mangement Simlplified, Organise & Digitise your practice with the most efficient
               <span className='text-orange'> [App Name] EHR</span>
            </p>
         </FramerUp>
         <FramerUp>
         <div className='flex justify-center max-md:flex-col items-center gap-4 max-md:gap-2 mt-6'>
            <button className='md:w-[200px] w-[180px] py-3 md:text-xl text-base bg-orange hover:bg-lightOrange rounded-full text-white duration-200'>
               Talk to Us
            </button>
            <Link to="/features">
            <button className='md:w-[200px] w-[180px] py-3 md:text-xl text-base border border-orange hover:bg-orange hover:text-white duration-200 rounded-full text-orange'>
               Know More
            </button>
            </Link>
         </div>
         </FramerUp> 
      </div>
      <div className='relative md:max-w-[650px]'>
         <img src={heroImg} alt="Hero Image" className='h-full object-cover drop-shadow-orange animate-image' />
      </div>
    </section>
  )
}

export default Hero
