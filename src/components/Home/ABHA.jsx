import React from 'react'
import img from "../../assets/home/billing-payments.png"
import FramerDown from '../Framer/FramerDown'
import FramerUp from '../Framer/FramerUp'
import DemoButton from '../DemoButton'

const ABHA = () => {

  return (
    <section className='my-16 flex justify-around items-center max-md:flex-col gap-16 px-8'>
      <div className='max-w-[450px]'>
         <FramerDown>
            <h3 className='md:text-5xl text-3xl font-semibold mb-4'>
               Billing & Payments
            </h3>
         </FramerDown>

         <FramerUp>
         <p className='mb-4 text-gray text-lg'>
            Docplix Ehr is an easy and simple way to provide invoice and payment receipt to your patients.
         </p>
         <DemoButton />
         </FramerUp>
      </div>

      <div className='max-w-[660px]'>
         <img src={img} alt="Preventive Care Programs" className='h-full w-full object-cover animate-image' />
      </div>
    </section>
  )
}

export default ABHA
