import React from 'react'
import Programs from '../components/Home/Programs'
import Hero from '../components/Features/Hero'
import Diabetes from '../components/Features/Diabetes'
import DietPlan from '../components/Features/DietPlan'
import Fitness from '../components/Features/Fitness'
import Tracker from '../components/Features/Tracker'
import GetInTouch from '../components/Features/GetInTouch'

const Features = () => {
  return (
   <>
      <Hero />
      <Programs />
      <Diabetes />
      <DietPlan />
      <Fitness />
      <Tracker />
      <GetInTouch />
   </>
  )
}

export default Features
