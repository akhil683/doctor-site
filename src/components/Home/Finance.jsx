import React from 'react'
import FramerDown from '../Framer/FramerDown'
import FramerUp from '../Framer/FramerUp'
import DemoButton from '../DemoButton'
import healthImg from "../../assets/home/accounting-finance.png"

const Finance = () => {
  return (
      <section className='flex justify-around items-center max-md:flex-col-reverse gap-16 px-8 my-20'>
      <div className='max-w-[600px]'>
         <img src={healthImg} loading='lazy' alt="Preventive Care Programs" className='h-full w-full object-cover animate-image' />
      </div>

      <div className='max-w-[600px]'>
         <FramerDown>
            <h3 className='md:text-5xl text-3xl font-semibold mb-4'>
               Account & Finance
            </h3>
         </FramerDown>

         <FramerUp>
            <p className='mb-4 text-gray'>
               Generate multiple types of reports. Analyse the revenue of your clinic/hospital. An easy way to track all your financial performance.
            </p>
            <DemoButton />
         </FramerUp>
      </div>
    </section>
  )
}

export default Finance
