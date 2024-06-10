import React from 'react'
import DemoButton from '../DemoButton'
import FramerDown from '../Framer/FramerDown'
import FramerUp from '../Framer/FramerUp'
import healthImg from "../../assets/home/pharmacy-mgmt.png"

const Pharmacy = () => {
  return (
      <section className='flex justify-around items-center max-md:flex-col-reverse gap-4 px-8 mb-20'>
      <div className='max-w-[600px]'>
         <img src={healthImg} alt="Preventive Care Programs" className='h-full w-full object-cover animate-image' />
      </div>

      <div className='max-w-[600px]'>
         <FramerDown>
            <h3 className='md:text-5xl text-3xl font-semibold mb-4'>
               Pharmacy Management
            </h3>
         </FramerDown>

         <FramerUp>
            <p className='mb-4 text-gray'>
               Manage your inventory, purchase bills, sales bill, returns, expiry alerts.
            </p>
            <DemoButton />
         </FramerUp>
      </div>
    </section>
  )
}

export default Pharmacy
