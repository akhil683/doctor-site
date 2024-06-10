import React from 'react'
import FramerUp from '../Framer/FramerUp'
import img from "../../assets/home/patient-profile.png"
import DemoButton from '../DemoButton'

const Operate = () => {
  return (
    <section className='py-12 flex max-md:flex-col md:justify-center items-center gap-16 px-8'>
      
      <div className='max-w-[500px]'>
        <FramerUp>
         <h3 className='md:text-5xl text-3xl font-semibold mb-6 leading-tight'>
          Patient Records
        </h3>
        <p className='text-gray text-lg mb-4'>
          Patient records are the most essential part of an EHR. Docplix provides an easy & simple platform to record and access the patient records anytime anywhere through our web and mobile App.
        </p>
        <DemoButton />
        </FramerUp>
      </div>

      <FramerUp>
      <div className='max-w-[700px]'>
        <img src={img} alt="patient record" className='drop-shadow-blue' /> 
      </div>
      </FramerUp>
    </section>
  )
}

export default Operate
