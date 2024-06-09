import React from 'react'

const GetInTouch = () => {
  return (
    <div className='flex justify-between items-center flex-wrap md:mx-12 mx-4 my-16 p-12 max-md:p-6 rounded-lg bg-lightOrange gap-6'>
     <div className='text-white'>
         <h4 className='md:text-4xl text-3xl font-semibold mb-2'>Get in Touch!</h4> 
         <p>Be a part of India's Healthcare Revolution</p>
      </div> 
      <div className='flex gap-2'>
         <a href="" className='px-4 text-lg py-2 rounded-full bg-black text-white'>Whatsapp Us</a>
         <a href="" className='px-4 text-lg py-2 rounded-full bg-black text-white'>Call Us</a>
      </div>
    </div>
  )
}

export default GetInTouch
