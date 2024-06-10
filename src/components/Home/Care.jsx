import React from 'react'
import careImg from "../../assets/home/digital-abdm.png"
import FramerDown from '../Framer/FramerDown'
import FramerUp from '../Framer/FramerUp'

const Care = () => {
   
  return (
    <section className='mt-6 py-12 flex max-md:flex-col md:justify-center items-center gap-16 px-8'>
      
      <div className='md:h-[350px] max-md:w-full p-2'>
         <img src={careImg} alt="Accessible Care" className='h-full w-full object-cover animate-image' />
      </div>

      <div className='max-w-[500px]'>
        <FramerDown>
          <h3 className='md:text-5xl text-3xl font-semibold mb-6 leading-tight'>
            Join the Digital Health Ecosystem Of India with Ayush Bharat Digital Mission
          </h3>
        </FramerDown>
        <FramerUp>
          <p className=' text-gray text-lg'>
              Very Soon you can Create ABHA ID with DocPlix EHR.
          </p>
        </FramerUp>
         <FramerDown>
            <h3 className='md:text-5xl text-3xl font-semibold mt-12 mb-4 text-orange'>Ayushman Bharat Digital Mission</h3>
         </FramerDown>
         <FramerUp>
            <p className='text-lg mb-4 text-gray'>
               Creating India's Digital Health Ecosystem
            </p>
         </FramerUp>
      </div>

    </section>
  )
}

export default Care
