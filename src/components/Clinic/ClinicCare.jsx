
import React from 'react'
import careImg from "../../assets/accessibleCare.png"
import FramerDown from '../Framer/FramerDown'
import FramerUp from '../Framer/FramerUp'

const ClinicCare = () => {
   
  return (
    <section className='mt-16 py-12 flex flex-col md:justify-center items-center gap-16 px-8'>
      
      <div className='w-full p-2'>
         <img src={careImg} loading='lazy' alt="Accessible Care" className='h-full w-full object-cover animate-image' />
      </div>

      <div className='text-center'>
        <FramerDown>
          <h3 className='md:text-5xl text-3xl font-semibold mb-6 leading-tight'><span className='text-orange'>Accessible Care Anywhere:</span> Our Network of Remote Clinics Bringing Quality Healthcare to Your Doorstep</h3>
        </FramerDown>
        <FramerUp>
          <p className=' text-gray'>Bringing exceptional healthcare to your doorstep, we extend our reach to the heart of tier 2 and tier 3 cities, addressing the critical gap in specialized medical services. Our remote clinics, staffed with expert super-specialist doctors, aim to provide comprehensive healthcare solutions to areas lacking access to quality medical care.</p>
        </FramerUp>
      </div>

    </section>
  )
}

export default ClinicCare
