import React from 'react'
import FramerDown from '../Framer/FramerDown'
import FramerUp from '../Framer/FramerUp'
import img from '../../assets/home/staff-management.png'
import DemoButton from '../DemoButton'

const Staff = () => {
  return (
      <section className='flex justify-around items-center max-md:flex-col gap-4 px-8'>
      <div className='max-w-[500px]'>
         <FramerDown>
            <h3 className='md:text-5xl text-3xl font-semibold mb-4'>
               Staff Management
            </h3>
         </FramerDown>

         <FramerUp>
            <p className='mb-4'>
               Increase employee productivity by managing staff throguh our DocPlix EHR
            </p>
            <DemoButton />    
         </FramerUp>
      </div>
      <div className='max-w-[600px]'>
         <img src={img} alt="Health Record Systemj" className='h-full w-full object-cover animate-image' />
      </div>
      
    </section>
  )
}

export default Staff
