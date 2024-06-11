import React from 'react'
import FramerDown from '../Framer/FramerDown'
import FramerUp from '../Framer/FramerUp'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import healthImg from "../../assets/health-track.png"

const Tracker = () => {
  return (
    <section className='my-16 flex justify-around items-center max-md:flex-col-reverse gap-12 px-8'>
      <div className='max-w-[550px]'>
         <FramerDown>
            <h3 className='md:text-5xl text-3xl font-semibold mb-6'>
               Revamp Your Fitness Journey with our Real-Time Workout Tracker: Monitor and Maximise Your Progress!
            </h3>
         </FramerDown>

         <FramerUp>
         <p className=' mb-12 text-gray md:text-lg'>
            Optimise your fitness routine for maximum effectiveness and gains.
         </p>
         </FramerUp>
         <FramerUp>
            <div className='flex gap-3 my-6'>
               <div>
                  <IoIosCheckmarkCircle className='text-4xl text-checkGreen' /> 
               </div> 
               <div>
                  <h4 className='md:text-2xl text-xl font-semibold'>
                     Stay motivated with our cutting-edge Real-Time Fitness Tracker.
                  </h4>    
                  <p className='text-gray'>
                     Fuel your fitness journey with unwavering motivation, thanks to our state-of-the-art Real-Time Fitness Tracker, designed to keep you inspired and on track
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
                     Effortlessly monitor your workouts and see immediate results.
                  </h4>    
                  <p className='text-gray'>
                     Effortlessly keep tabs on your exercise routines and witness instant progress, empowering you to achieve your fitness goals with confidence.
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
                     Optimise your fitness routine for maximum effectiveness and gains
                  </h4>    
                  <p className='text-gray'>
                     Unlock the full potential of your fitness regimen, fine-tuning it for ultimate effectiveness and exceptional gains in your health and well-being.
                  </p>
               </div> 
            </div>    
         </FramerUp>  
         
      </div>

      <div className='md:h-[900px] max-md:w-full'>
         <img src={healthImg} loading='lazy' alt="Preventive Care Programs" className='h-full w-full object-cover animate-image' />
      </div>
    </section>
  )
}

export default Tracker
