import React from 'react'

const Operate = () => {
  return (
    <section className='py-12 flex max-md:flex-col md:justify-center items-center gap-16 px-8'>
      <div className='max-w-[500px]'>
         <h3 className='text-center md:text-5xl text-3xl font-semibold mb-6 leading-tight'><span className='text-orange'>Where We Operate:</span> Discover Our Current Centers and Locations for Easy Access to Quality Healthcare Services</h3>
      </div>
      <div className='flex flex-wrap justify-center gap-4 items-center'>
         <button className='py-12 font-semibold text-lg w-[220px] border border-lightGray shadow-md'>Lucknow</button>
         <button className='py-12 font-semibold text-lg w-[220px] border border-lightGray shadow-md'>Basti</button>
         <button className='py-12 font-semibold text-lg w-[220px] border border-lightGray shadow-md'>Gonda Sultanpur</button>
         <button className='py-12 font-semibold text-lg w-[220px] border border-lightGray shadow-md'>Lucknow</button>
      </div>
    </section>
  )
}

export default Operate
