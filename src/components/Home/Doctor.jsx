import React from 'react'
import FramerUp from '../Framer/FramerUp'
import FramerDown from '../Framer/FramerDown'

import img from "../../assets/ehr-intro.png"

const Doctor = () => {

  return (
      <section className='flex justify-around items-center max-md:flex-col gap-4 px-8'>
      <div className='md:h-[380px] max-md:w-full'>
         <img src={img} alt="Health Record Systemj" className='h-full w-full object-cover animate-image' />
      </div>

      <div className='max-w-[400px]'>
         <FramerDown>
            <h3 className='md:text-5xl text-3xl font-semibold mb-4'>
               Are you a Doctor ?
            </h3>
         </FramerDown>

         <FramerUp>
            <p className='mb-4'>
               Enhance your practice with our cutting-edge Electronic Health Records (EHR) system. Digitize your clinic, streamline workflows, and provide top-notch care with DocPlix's innovative healthcare solutions tailored for doctors.
            </p>
            <button className='px-8 py-3 md:text-lg rounded-full border border-lightOrange text-orange'>
               Know More
            </button>
         </FramerUp>
      </div>
    </section>
  )
}

export default Doctor
