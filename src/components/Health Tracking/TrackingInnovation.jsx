import React from 'react'
import FramerDown from '../Framer/FramerDown'
import FramerUp from '../Framer/FramerUp'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import centerImg from "../../assets/tracking/real-time-health-tracking.png"

const TrackingInnovation = () => {
  return (
    <section className='my-16 flex justify-around items-center max-md:flex-col gap-16 px-8'>
      <div className='md:max-w-[600px] max-md:w-full'>
         <img src={centerImg} loading='lazy' alt="Preventive Care Programs" className='h-full w-full object-cover animate-image' />
      </div>
      <div className='max-w-[500px]'>
         <FramerDown>
            <h3 className='md:text-5xl text-3xl font-semibold mb-6'>
               Empower Your Wellness Journey with Real-time Health Tracking Innovation
               <span className='text-orange'>.</span>
            </h3>
         </FramerDown>

         <FramerUp>
         <p className='mb-12 text-gray md:text-lg'>
            Effortlessly monitor your health goals and progress with our innovative, real-time health tracker, designed to empower your wellness journey.
         </p>
         </FramerUp>
         <FramerUp>
            <div className='flex gap-3 my-6'>
               <div>
                  <IoIosCheckmarkCircle className='text-4xl text-checkGreen' /> 
               </div> 
               <div>
                  <h4 className='md:text-2xl text-xl font-semibold'>
                     Key Health Metric Tracking
                  </h4>    
                  <p className='text-gray'>
                     Monitor vital signs including blood sugar, heart rate, and weight.
                  </p>
               </div> 
            </div>    
         </FramerUp>  
         <FramerUp>
            <div className='flex gap-3 my-6'>
               <div>
                  <IoIosCheckmarkCircle className='text-4xl text-checkGreen' /> 
               </div> 
               <div>
                  <h4 className='md:text-2xl text-xl font-semibold'>
                     Detailed Health Data Analysis
                  </h4>    
                  <p className='text-gray'>
                     Access comprehensive insights for informed health management decisions.
                  </p>
               </div> 
            </div>    
         </FramerUp>  
         
         <FramerUp>
            <div className='flex gap-3 my-6'>
               <div>
                  <IoIosCheckmarkCircle className='text-4xl text-checkGreen' /> 
               </div> 
               <div>
                  <h4 className='md:text-2xl text-xl font-semibold'>
                     Advanced Data Security
                  </h4>    
                  <p className='text-gray'>
                     Guarantee top-notch data security and privacy for users.
                  </p>
               </div> 
            </div>    
         </FramerUp>  
         
      </div>

    </section>
  )
}

export default TrackingInnovation
