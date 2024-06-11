import React from 'react'
import FramerDown from '../Framer/FramerDown'
import FramerUp from '../Framer/FramerUp'
import fitnessImg from "../../assets/fitness.png"
import { IoIosCheckmarkCircle } from 'react-icons/io'

const Fitness = () => {
  return (
    <section className='my-16 flex justify-around items-center max-md:flex-col gap-12 px-8'>
      <div className='md:h-[900px] max-md:w-full'>
         <img src={fitnessImg} loading='lazy' alt="Preventive Care Programs" className='h-full w-full object-cover animate-image' />
      </div>
      <div className='max-w-[500px]'>
         <FramerDown>
            <h3 className='md:text-5xl text-3xl font-semibold mb-6'>
               Unlock Your Best Self with Today's 
               <span className='text-orange'> Fitness </span>
               Classes.
            </h3>
         </FramerDown>

         <FramerUp>
         <p className='mb-12 text-gray md:text-lg'>
            Dive into the latest fitness trends and sculpt a healthier, happier version of yourself with our trending fitness classes
         </p>
         </FramerUp>
         <FramerUp>
            <div className='flex gap-3 my-6'>
               <div>
                  <IoIosCheckmarkCircle className='text-4xl text-checkGreen' /> 
               </div> 
               <div>
                  <h4 className='md:text-2xl text-xl font-semibold'>
                     Elite Coaches
                  </h4>    
                  <p className='text-gray'>
                     Experience the best-in-class coaching with expert guidance and unwavering motivation to reach your goals.
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
                     Personalized Fitness Plans
                  </h4>    
                  <p className='text-gray'>
                     Discover personalised diet and workout plans designed specifically for you, aligning with your individual fitness objectives. Achieve your goals with expert guidance and a customised approach to health and wellness.
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
                     Better Health Insights
                  </h4>    
                  <p className='text-gray'>
                     Gain valuable insights for staying on course and enhancing your health routine, ensuring a successful path to wellness.
                  </p>
               </div> 
            </div>    
         </FramerUp>  
         
      </div>

    </section>
  )
}

export default Fitness
