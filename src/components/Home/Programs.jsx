import React from 'react'
import weightLossImg from "../../assets/programs/weight.png"
import DiabetesImg from "../../assets/programs/diabetes.png"
import PCODImg from "../../assets/programs/pcos.png"

const Programs = () => {

  return (
    <section className='mt-12 px-8 mb-32 flex justify-center items-center flex-col'>
      <h3 className=' font-semibold md:text-5xl text-3xl mb-4'>Our Programs<span className='text-orange'>.</span></h3>
      <p className='text-gray text-center max-md:text-sm'>Explore exclusive, tailor-made wellness programs at [App Name] for your well-being</p> 
      <div className='flex flex-wrap font-Montserrat font-semibold justify-center items-center gap-6 mt-12'>
         <button className='w-[300px] py-16 border border-lightGray rounded-lg text-lg flex justify-center items-center gap-4 shadow-2xl hover:shadow-lightOrange duration-200'>
            <img src={weightLossImg} alt="weight loss program" className='w-10 h-10' />
            Weight Loss
         </button>
         <button className='w-[300px] py-16 border border-lightGray rounded-lg text-lg flex justify-center items-center gap-4 shadow-2xl hover:shadow-lightOrange duration-200'>
            <img src={DiabetesImg} alt="Diabetes program" className='w-10 h-10' />
            Diabetes Reversal
         </button>
         <button className='w-[300px] py-16 border border-lightGray rounded-lg text-lg flex justify-center items-center gap-4 shadow-2xl hover:shadow-lightOrange duration-200'>
            <img src={PCODImg} alt="PCOD program" className='w-10 h-10' />
            PCOD/PCOS
         </button>
      </div>
    </section>
  )
}

export default Programs
