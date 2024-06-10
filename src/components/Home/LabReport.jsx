import React from 'react'
import FramerDown from '../Framer/FramerDown'
import FramerUp from '../Framer/FramerUp'
import DemoButton from '../DemoButton'
import img from "../../assets/home/lab-reports-billing.png"
const LabReport = () => {
  return (
      <section className='flex justify-around items-center max-md:flex-col gap-4 px-8'>
      <div className='max-w-[500px]'>
         <FramerDown>
            <h3 className='md:text-5xl text-3xl font-semibold mb-4'>
               Lab Reports & Billing
            </h3>
         </FramerDown>

         <FramerUp>
            <p className='mb-4'>
               Make customise templates of lab reports and manage billing.
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

export default LabReport
