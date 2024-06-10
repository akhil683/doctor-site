import React from 'react'
import trackHealthImg from "../../assets/home/opd_appointment.png"
import FramerDown from '../Framer/FramerDown'
import FramerUp from '../Framer/FramerUp'
import DemoButton from '../DemoButton'

const BloodPressure = () => {

  return (
      <section className='flex justify-around items-center max-md:flex-col-reverse gap-4 px-8'>
      <div className='md:h-[500px] max-md:w-full'>
         <img src={trackHealthImg} alt="Preventive Care Programs" className='h-full w-full object-cover animate-image' />
      </div>

      <div className='max-w-[500px]'>
         <FramerDown>
            <h3 className='md:text-5xl text-3xl font-semibold mb-4'>
               OPD & Appointment
            </h3>
         </FramerDown>

         <FramerUp>
            <p className='mb-4 text-gray'>Elevate Your Health, Elevate Your Rewards: Effortlessly Track Your Well-being with Our User-Friendly Solutions !</p>
            <DemoButton />
         </FramerUp>
      </div>
    </section>
  )
}

export default BloodPressure
