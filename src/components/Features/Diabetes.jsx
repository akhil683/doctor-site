import React from 'react'
import diabetesImg from '../../assets/health-score.png'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import FramerDown from '../Framer/FramerDown'
import FramerUp from '../Framer/FramerUp'

const Diabetes = () => {
  return (
    <section className='my-16 flex justify-around items-center max-md:flex-col gap-12 px-8'>
      <div className='md:h-[900px] max-md:w-full'>
         <img src={diabetesImg} loading='lazy' alt="Preventive Care Programs" className='h-full w-full object-cover animate-image' />
      </div>
      <div className='max-w-[500px]'>
         <FramerDown>
            <h3 className='md:text-5xl text-3xl font-semibold mb-6'>
               Personalized coaching that helps you manage 
               <span className='text-orange'> diabetes </span>
               
            </h3>
         </FramerDown>

         <FramerUp>
         <p className='mb-12 text-gray md:text-lg'>
            Experienced diabetes management was made easy through our personalised coaching. Our tailored approach ensures you navigate diabetes with confidence and ease. Join us today for a stress-free journey towards better health.
         </p>
         </FramerUp>
         <FramerUp>
            <div className='flex gap-3 my-6'>
               <div>
                  <IoIosCheckmarkCircle className='text-4xl text-checkGreen' /> 
               </div> 
               <div>
                  <h4 className='md:text-2xl text-xl font-semibold'>
                     Building the foundation for a healthy body
                  </h4>    
                  <p className='text-gray'>
                     Taking essential steps and making mindful choices to establish a solid groundwork that promotes a state of overall well-being and physical health.
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
                     Remodeling
                  </h4>    
                  <p className='text-gray'>
                     Receive a carefully designed plan that is personalized to your needs and assimilates easily into your daily life.
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
                     Personalized Treatment Plan
                  </h4>    
                  <p className='text-gray'>
                     A tailored and individualised healthcare strategy designed to address specific needs and conditions, ensuring the most effective and customised approach to treatment and recovery.
                  </p>
               </div> 
            </div>    
         </FramerUp>  
         
      </div>

    </section>
  )
}

export default Diabetes
