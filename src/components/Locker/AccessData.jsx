import React from 'react'

const AccessData = () => {
  return (
    <section className='my-16'>
      <div className='flex flex-col justify-center items-center gap-12 text-center'>
         <h3 className='md:text-5xl text-3xl px-2 max-w-[600px] font-semibold'>
            Access your health data anywhere, anytime, all in one place. 
         </h3>    
         <p className='text-lg text-gray'>
            Get a plan that works for you 
         </p>
      </div> 
      <div className='flex flex-wrap justify-center items-center  my-12 text-gray font-semibold text-lg'>
         <div className='w-[220px] h-[150px] shadow-lg shadow-lightGray flex justify-center items-center border border-lightGray'>
            <p>Prescriptions</p>
         </div>
         <div className='w-[220px] h-[150px] shadow-lg shadow-lightGray flex justify-center items-center border border-lightGray'>
            <p>Lab Reports</p>
         </div>
         <div className='w-[220px] h-[150px] shadow-lg shadow-lightGray flex justify-center items-center border border-lightGray'>
            <p>Medical Invoices</p>
         </div>
         <div className='w-[220px] h-[150px] shadow-lg shadow-lightGray flex justify-center items-center border border-lightGray'>
            <p>Medical Certificates</p>
         </div>
      </div>
    </section>
  )
}

export default AccessData
