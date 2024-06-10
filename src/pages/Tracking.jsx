import React from 'react'
import Hero from '../components/Health Tracking/Hero'
import GetInTouch from '../components/Features/GetInTouch'
import TrackingInnovation from '../components/Health Tracking/TrackingInnovation'

const Tracking = () => {
  return (
    <>
      <Hero /> 
      <h3 className='md:text-5xl text-3xl px-4 text-center font-semibold'>Making Health Engaging and Fun !</h3>
      <p className='mt-6 text-gray text-lg text-center'>Get a Plan that works for you</p>
      <TrackingInnovation />
      <GetInTouch />
    </>
  )
}

export default Tracking
