
import React from 'react'
import healthImg from '../../assets/Diet.png'
import FramerUp from '../Framer/FramerUp'
import FramerDown from '../Framer/FramerDown'

import { IoIosCheckmarkCircle } from "react-icons/io";

const DietPlan = () => {

  return (
    <section className='my-16 flex justify-around items-center max-md:flex-col-reverse gap-16 px-8'>
      <div className='max-w-[550px]'>
         <FramerDown>
            <h3 className='md:text-5xl text-3xl font-semibold mb-6'>
               <span className='text-orange'>Nourish Your Body: </span>
               Personalized Diet Plans for Optimal Wellness.
            </h3>
         </FramerDown>

         <FramerUp>
         <p className=' mb-12 text-gray md:text-lg'>
            Experience the transformative power of custom diet plans tailored to your needs, curated by our dedicated team of expert dietitians.
         </p>
         </FramerUp>
         <FramerUp>
            <div className='flex gap-3 my-6'>
               <div>
                  <IoIosCheckmarkCircle className='text-4xl text-checkGreen' /> 
               </div> 
               <div>
                  <h4 className='md:text-2xl text-xl font-semibold'>
                     Customized Nutrition Strategies
                  </h4>    
                  <p className='text-gray'>
                     Our dietitians assess your unique requirements and preferences to create comprehensive nutrition strategies that support your health goals and promote overall well-being.
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
                     Holistic Meal Planning
                  </h4>    
                  <p className='text-gray'>
                     Embrace a holistic approach to wellness with our meticulously crafted meal plans, designed to not only nourish your body but also cater to your taste preferences and lifestyle.
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
                     Ongoing Nutritional Support
                  </h4>    
                  <p className='text-gray'>
                     Benefit from continuous guidance and support from our dedicated dietitians, who are committed to helping you navigate your dietary journey and achieve sustainable, long-term health improvements.
                  </p>
               </div> 
            </div>    
         </FramerUp>  
         
      </div>

      <div className='md:h-[900px] max-md:w-full'>
         <img src={healthImg} alt="Preventive Care Programs" className='h-full w-full object-cover animate-image' />
      </div>
    </section>
  )
}

export default DietPlan
