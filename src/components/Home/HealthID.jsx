import React from 'react'
import healthImg from '../../assets/health-id.png'
import FramerUp from '../Framer/FramerUp'
import FramerDown from '../Framer/FramerDown'

import { IoIosCheckmarkCircle } from "react-icons/io";

const HealthID = () => {

  return (
    <section className='my-16 flex justify-around items-center max-md:flex-col-reverse gap-16 px-8'>
      <div className='max-w-[450px]'>
         <FramerDown>
            <h3 className='md:text-5xl text-3xl font-semibold mb-4'>
               <span className='text-orange'>Health ID: </span>
               Your Simple Key to Instant Digital Access to Your Health Records!
            </h3>
         </FramerDown>

         <FramerUp>
         <p className='mb-4 text-gray md:text-lg'>
            Ayushman Bharat Health Account (ABHA) ID is a unique identification number provided to eligible beneficiaries under the Ayushman Bharat Digital Mission (ABDM).
         </p>
         </FramerUp>
         <FramerUp>
            <div className='flex gap-3 my-6'>
               <div>
                  <IoIosCheckmarkCircle className='text-4xl text-checkGreen' /> 
               </div> 
               <div>
                  <h4 className='md:text-2xl text-xl font-semibold'>Financial Protection</h4>    
                  <p className='text-gray'>
                     Individuals and families can avail cashless treatment and hospitalization services, ensuring that healthcare is affordable and accessible to all.
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
                     Access to Quality Healthcare
                  </h4>    
                  <p className='text-gray'>
                     Beneficiaries gain access to a network of empaneled hospitals, clinics, and healthcare providers across the country.
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
                     Portabiliity
                  </h4>    
                  <p className='text-gray'>
                     Beneficiaries can access healthcare services anywhere in India, regardless of their place or residence
                  </p>
               </div> 
            </div>    
         </FramerUp>  
         
      </div>

      <div className='md:h-[800px] max-md:w-full'>
         <img src={healthImg} alt="Preventive Care Programs" className='h-full w-full object-cover animate-image' />
      </div>
    </section>
  )
}

export default HealthID
