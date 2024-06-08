import React from 'react'
import img from "../../assets/pcp.png"

const PreventiveCare = () => {
  return (
    <section className='mt-20 flex justify-around items-center max-md:flex-col-reverse gap-4 md:px-16 px-8'>
      <div className='max-w-[500px]'>
         <h3 className='md:text-3xl text-2xl font-semibold mb-4'>Preventive Care Programs</h3>
         <p className='mb-4 text-gray'>Discover the Power of Preventive Care Programs - Proactive Health Solutions for a Better Tomorrow. Learn how our programs can keep you at your best.</p>
         <button className='px-8 py-3 text-lg rounded-full border border-lightGray'>
            Learn more 
         </button>
      </div>
      <div className='md:h-[400px] max-md:w-full'>
         <img src={img} alt="Preventive Care Programs" className='h-full w-full object-cover drop-shadow-blue' />
      </div>
    </section>
  )
}

export default PreventiveCare
