import React from 'react'
import FramerDown from '../Framer/FramerDown'
import FramerUp from '../Framer/FramerUp'
import HeroImg from "../../assets/hero.png"

const Hero = () => {
  return (
    <section className='mt-[75px] flex justify-center items-center flex-col'>
      <div className='max-w-[600px] px-12'>
         <FramerDown>
         <h2 className='sm:text-5xl text-3xl font-semibold text-center mt-16'>
            Turn losing weight into a fun and healthy habit
            <span className='text-orange'>.</span> 
         </h2> 
         </FramerDown>
         <FramerUp>
         <p className='text-gray text-center mt-12'>
            Attain lasting well-being by making simple and impactful adjustments to both your diet and exercise routine.
         </p>
         </FramerUp>
      </div>
      <img src={HeroImg} alt="Hero Image" className='w-full animate-image' />
    </section>
  )
}

export default Hero
