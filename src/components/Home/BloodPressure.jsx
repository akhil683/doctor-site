import React from 'react'
import trackHealthImg from "../../assets/track-health.png"

const BloodPressure = () => {

  return (
      <section className='flex justify-around items-center max-md:flex-col gap-1 px-8'>
      <div className='md:h-[500px] max-md:w-full'>
         <img src={trackHealthImg} alt="Preventive Care Programs" className='h-full w-full object-cover' />
      </div>
      <div className='max-w-[400px]'>
         <h3 className='md:text-3xl text-2xl font-semibold mb-4'>Healthy Choices, Bigger Rewards – Start Earning as You Keep Thriving!</h3>
         <p className='mb-4 text-gray'>Elevate Your Health, Elevate Your Rewards: Effortlessly Track Your Well-being with Our User-Friendly Solutions !</p>
         <button className='px-8 py-3 text-lg rounded-full border border-lightGray'>
            Learn more 
         </button>
      </div>
    </section>
  )
}

export default BloodPressure
