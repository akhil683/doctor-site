import React from 'react'
import weightLossImg from "../../assets/programs/weight.png"
import DiabetesImg from "../../assets/programs/diabetes.png"
import PCODImg from "../../assets/programs/pcos.png"
import FramerDown from '../Framer/FramerDown'
import FramerUp from '../Framer/FramerUp'

const Programs = () => {

  return (
    <section className='mt-12 px-8 mb-32 flex justify-center items-center flex-col'>

      <FramerDown>
         <h3 className=' font-semibold md:text-5xl text-3xl mb-4 max-w-[600px] text-center'>
            An easy way to manage all your patient Records
            <span className='text-orange'>.</span></h3>
      </FramerDown>

      <FramerUp>
         <p className='text-gray text-center max-md:text-sm'>
            Eliminate paperwork from your practice, Practice Medicine, Not Administration.
            </p> 
      </FramerUp> 

      <FramerUp>
      <div className='flex flex-wrap font-Montserrat font-semibold justify-center items-center gap-6 mt-12'>
         <button className='w-[250px] h-[150px] px-4 py-16 border border-lightGray rounded-lg text-lg flex justify-center items-center gap-4 shadow-2xl'>
            Intuitive & Easy to User
         </button>
         <button className='w-[250px] h-[150px] px-4 py-16 border border-lightGray rounded-lg text-lg flex justify-center items-center gap-4 shadow-2xl'>
            Multi Device
         </button>
         <button className='w-[250px] h-[150px] px-4 py-16 border border-lightGray rounded-lg text-lg flex justify-center items-center gap-4 shadow-2xl'>
            Easy appointment scheduling & Tracking
         </button>
         <button className='w-[250px] h-[150px] px-4 py-16 border border-lightGray rounded-lg text-lg flex justify-center items-center gap-4 shadow-2xl'>
            E-Prescription
         </button>
         <button className='w-[250px] h-[150px] px-4 py-16 border border-lightGray rounded-lg text-lg flex justify-center items-center gap-4 shadow-2xl'>
            Patient Engagement
         </button>
         <button className='w-[250px] h-[150px] px-4 py-16 border border-lightGray rounded-lg text-lg flex justify-center items-center gap-4 shadow-2xl'>
            Real Time Sync
         </button>
         <button className='w-[250px] h-[150px] px-4 py-16 border border-lightGray rounded-lg text-lg flex justify-center items-center gap-4 shadow-2xl'>
            Most Safe and Secure
         </button>
      </div>
      </FramerUp>

    </section>
  )
}

export default Programs
