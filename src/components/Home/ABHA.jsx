import React from 'react'
import img from "../../assets/ayushman.png"
import FramerDown from '../Framer/FramerDown'
import FramerUp from '../Framer/FramerUp'

const ABHA = () => {

  return (
      <section className='flex justify-around items-center max-md:flex-col gap-12 px-8 my-20'>
      <div className='relative md:h-[600px] p-3 bg-black max-md:w-full md:rounded-[50px] rounded-[60px]'>
         <div className='absolute w-[100px] h-[25px] bg-black left-[calc(50%-50px)] rounded-full top-0'></div>
         <img src={img} alt="Preventive Care Programs" className='h-full w-full object-cover]' />
         <p className='absolute w-[300px] shadow-2xl shadow-gray top-[50%] -left-[30%] max-md:left-[calc(50%-150px)] bg-white p-4 text-2xl font-semibold rounded-2xl'>
            ABHA - Ayushman Bharat Health Account or Health ID Card Approved by NDHM.GOV.IN
         </p>
      </div>

      <div className='max-w-[450px]'>
         <FramerDown>
            <h3 className='md:text-5xl text-3xl font-semibold mb-4 leading-9'>
               ABHA - Ayushman Bharat Health Account or Health ID Card Approved by NDHM.GOV.IN
            </h3>
         </FramerDown>

         <FramerUp>
            <p className='mb-4 text-gray'>
               Discover the power of Ayushman Bharat Digital Mission (ABDM) with DocPlix. Easily generate your ABHA ID within our ecosystem and access the full spectrum of healthcare benefits under ABDM.
            </p>
         </FramerUp>
         <FramerDown>
            <h3 className='md:text-5xl text-3xl font-semibold mt-12 mb-4 text-orange'>Ayushman Bharat Digital Mission</h3>
         </FramerDown>
         <FramerUp>
            <p className='mb-4 text-gray'>
               Creating India's Digital Health Ecosystem
            </p>
         </FramerUp>
      </div>
    </section>
  )
}

export default ABHA
