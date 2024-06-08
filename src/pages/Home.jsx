import React from 'react'
import Hero from '../components/Home/Hero'
import Carousel from '../components/Carousel'
import Programs from '../components/Home/Programs'
import Care from '../components/Home/Care'
import Operate from '../components/Home/Operate'
import Panchakosha from '../components/Home/Panchakosha'
import PreventiveCare from '../components/Home/PreventiveCare'
import BloodPressure from '../components/Home/BloodPressure'
import DigitalVault from '../components/Home/DigitalVault'
import BookAppointment from '../components/Home/BookAppointment'

const Home = () => {
  return (
    <>
      <Hero />
      <Programs /> 
      <Carousel />
      <Care />
      <Operate />

      <h3 className='md:text-5xl text-xl font-semibold text-center md:my-20 my-6'>
        <span className='text-orange'>Endocrinologist-Led,</span> 
        <br />
        AI-Powered Personalized Healthcare Programs 
        <span className='text-orange'>.</span>
      </h3>

      <Panchakosha />

      <h3 className='md:text-5xl text-3xl text-center font-semibold md:px-24 px-8 mt-20'>
        Unlocking the Future of Fitness: Dive into  Our Connected Ecosytsem
        <span className='text-orange'>.</span>
      </h3>
      <p className='text-gray mt-4 text-center'>Transform Your Well-being Holistically and Embark on a transformative journey like never before</p>

      <PreventiveCare />
      <BloodPressure />
      <DigitalVault />
      <BookAppointment />
    </>
  )
}

export default Home
