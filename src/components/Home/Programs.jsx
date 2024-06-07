import React from 'react'

const Programs = () => {
  return (
    <section className='mt-12 px-8 mb-32 flex justify-center items-center flex-col'>
      <h3 className=' font-semibold text-5xl mb-4'>Our Programs<span className='text-orange'>.</span></h3>
      <p className='text-gray text-center'>Explore exclusive, tailor-made wellness programs at [App Name] for your well-being</p> 
      <div className='flex flex-wrap justify-center items-center gap-6 mt-12'>
         <button className='w-[300px] py-16 border border-lightGray rounded-lg text-lg flex justify-center items-center gap-4 shadow-2xl hover:shadow-lightOrange duration-200'>
            Weight Loss
         </button>
         <button className='w-[300px] py-16 border border-lightGray rounded-lg text-lg flex justify-center items-center gap-4 shadow-2xl hover:shadow-lightOrange duration-200'>
            Diabetes Reversal
         </button>
         <button className='w-[300px] py-16 border border-lightGray rounded-lg text-lg flex justify-center items-center gap-4 shadow-2xl hover:shadow-lightOrange duration-200'>
            PCOD/PCOS
         </button>
      </div>
    </section>
  )
}

export default Programs
