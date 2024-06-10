import React from 'react'
import DigitalImg from '../../assets/home/stats.png'
import FramerDown from '../Framer/FramerDown'
import FramerUp from '../Framer/FramerUp'
import DemoButton from '../DemoButton'

const DigitalVault = () => {
  return (
    <section className='my-16 flex justify-around items-center max-md:flex-col gap-16 px-8'>
      <div className='max-w-[450px]'>
         <FramerDown>
            <h3 className='md:text-5xl text-3xl font-semibold mb-4'>
               Practice Management Made Easy
            </h3>
         </FramerDown>

         <FramerUp>
         <p className='mb-4 text-gray text-lg'>
            Our mission at DocPlix is to make life easier for healthcare providers. We want to help doctors, dentists, and hospitals by giving them a super easy way to manage patient records. We believe that our system can improve patient care, help doctors work more efficiently, and provide better information for making important decisions. We're all about making healthcare better and simpler for everyone.
         </p>
         <DemoButton />
         </FramerUp>
      </div>

      <div className='max-w-[660px]'>
         <img src={DigitalImg} alt="Preventive Care Programs" className='h-full w-full object-cover animate-image' />
      </div>
    </section>
  )
}

export default DigitalVault
