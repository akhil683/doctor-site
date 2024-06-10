import React from 'react'
import FramerUp from '../Framer/FramerUp'
import FramerDown from '../Framer/FramerDown'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import Img from "../../assets/health-care-user-friendly.png"

const UserFriendly = () => {
  return (
    <section className='my-16 flex justify-around items-center max-md:flex-col gap-12 px-8'>
      <div className='md:h-[800px] max-md:w-full'>
         <img src={Img} alt="Preventive Care Programs" className='h-full w-full object-cover animate-image' />
      </div>
      <div className='max-w-[500px]'>
         <FramerDown>
            <h3 className='md:text-5xl text-3xl font-semibold mb-6'>
               Simplify healthcare with our user-friendly solutions, supporting you every step of the way.
            </h3>
         </FramerDown>

         <FramerUp>
         <p className='mb-12 text-gray md:text-lg'>
            Experience the ultimate digital health organizer - manage, share, and understand your medical information effortlessly, ensuring healthcare convenience.
            <br /><br />
            Efficient digital records for you and your family's healthcare
         </p>
         </FramerUp>
         <FramerUp>
            <div className='flex gap-3 my-6'>
               <div>
                  <IoIosCheckmarkCircle className='text-4xl text-checkGreen' /> 
               </div> 
               <div>
                  <h4 className='md:text-2xl text-xl font-semibold'>
                     Multiple profile management
                  </h4>    
                  <p className='text-gray'>
                     Upload your family's medical records and maintain multiple profiles effortlessly
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
                     Data sharing for different purposes
                  </h4>    
                  <p className='text-gray'>
                     Safely share your family's data for medical needs and beyond
                  </p>
               </div> 
            </div>    
         </FramerUp>  
      </div>
    </section>
  )
}

export default UserFriendly
