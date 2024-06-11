import React from 'react'
import FramerUp from '../Framer/FramerUp'
import FramerDown from '../Framer/FramerDown'

import img from "../../assets/home/patient-engagement.png"
import DemoButton from '../DemoButton'

const Doctor = () => {

  return (
      <section className='flex justify-around items-center max-md:flex-col gap-4 px-8'>

      <div className='max-w-[500px]'>
         <FramerDown>
            <h3 className='md:text-5xl text-3xl font-semibold mb-4'>
               Patient Engagement
            </h3>
         </FramerDown>

         <FramerUp>
            <p className='mb-4'>
               Connect with your patient through our Bulk Message services. Filter target audience bases on Gender, Age and more with our unique user interface.
            </p>
            <DemoButton />    
         </FramerUp>
      </div>
      <div className='max-w-[600px]'>
         <img src={img} loading='lazy' alt="Health Record Systemj" className='h-full w-full object-cover animate-image' />
      </div>
      
    </section>
  )
}

export default Doctor
