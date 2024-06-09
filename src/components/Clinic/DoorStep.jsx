import React from 'react'
import FramerUp from '../Framer/FramerUp'

const DoorStep = () => {
  return (
    <section className='py-12 flex max-md:flex-col md:justify-center items-center gap-16 px-8'>
      
      <div className='max-w-[600px]'>
        <FramerUp>
         <h3 className='text-center md:text-5xl text-3xl font-semibold mb-6 leading-tight'>
            <span className='text-orange'>Comprehensive Healthcare Services at Your Doorstep: </span> 
            Remote Clinic Facilities and Offerings
         </h3>
        </FramerUp>
      </div>

      <FramerUp>
      <div className='flex flex-wrap justify-center gap-4 items-center'>
         <button className='py-12 px-2 font-semibold text-lg w-[220px] h-[150px] border border-lightGray shadow-md'>
            Expert Consultations Available
         </button>
         <button className='py-12 px-2 font-semibold text-lg w-[220px] h-[150px] border border-lightGray shadow-md'>
            On-site Pharmacy Access
         </button>
         <button className='py-12 px-2 font-semibold text-lg w-[220px] h-[150px] border border-lightGray shadow-md'>
            In-House Pathology Services
         </button>
         <button className='py-12 px-2 font-semibold text-lg w-[220px] h-[150px] border border-lightGray shadow-md'>
            Remote Teleconsultation Options
         </button>
      </div>
      </FramerUp>
    </section>
  )
}

export default DoorStep
