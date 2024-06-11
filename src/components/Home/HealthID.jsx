import React from 'react'
import healthImg from '../../assets/home/ipd.png'
import FramerUp from '../Framer/FramerUp'
import FramerDown from '../Framer/FramerDown'
import DemoButton from '../DemoButton'

const HealthID = () => {

  return (
      <section className='flex justify-around items-center max-md:flex-col-reverse gap-4 px-8 mb-20'>
      <div className='max-w-[600px]'>
         <img src={healthImg} loading='lazy' alt="Preventive Care Programs" className='h-full w-full object-cover animate-image' />
      </div>

      <div className='max-w-[500px]'>
         <FramerDown>
            <h3 className='md:text-5xl text-3xl font-semibold mb-4'>
               IPD
            </h3>
         </FramerDown>

         <FramerUp>
            <p className='mb-4 text-gray'>
               Manage IPD across all wings & departments. Transferring IPD from one wing to another is just a click away. Assigning Doctors and managing visiting consultants were never easy before
            </p>
            <DemoButton />
         </FramerUp>
      </div>
    </section>
  )
}

export default HealthID
