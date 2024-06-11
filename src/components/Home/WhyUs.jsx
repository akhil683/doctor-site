import React from 'react'
import FramerDown from '../Framer/FramerDown'
import FramerUp from '../Framer/FramerUp'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import centerImg from "../../assets/home/why-choose-us.png"

const WhyUs = () => {
  return (
    <section className='my-16 flex justify-around items-center max-md:flex-col gap-16 px-8'>
      <div className='max-w-[600px]'>
         <FramerDown>
            <h3 className='md:text-5xl text-3xl font-semibold mb-6 text-orange'>
              Why Choose [App Name] ? 
            </h3>
         </FramerDown>

         <FramerUp>
         <p className='mb-12 text-gray md:text-lg'>
            [App Name] is the healthcare record partner you can rely on. We're not just any EHR provider; we're here to make managing healthcare records as easy as possible. Here's why you should pick us:
         </p>
         </FramerUp>
         <FramerUp>
            <div className='flex gap-3 my-6'>
               <div>
                  <IoIosCheckmarkCircle className='text-4xl text-checkGreen' /> 
               </div> 
               <div>
                  <h4 className='md:text-2xl text-xl font-semibold'>
                     Easy and User-Friendly
                  </h4>    
                  <p className='text-gray'>
                     We believe in keeping things simple. Docplix is designed to make managing healthcare records easy, so you can spend more time caring for patients..
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
                     Helping Healthcare Professionals
                  </h4>    
                  <p className='text-gray'>
                     Our system is all about helping healthcare professionals do their job better. It makes work more efficient, improves patient care, and provides the information you need.
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
                     Always Up-to-Date
                  </h4>    
                  <p className='text-gray'>
                     We're constantly improving. With new features and updates, we stay on top of the latest healthcare trends, so you always have the best tools.
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
                     Trustworthy and Safe
                  </h4>    
                  <p className='text-gray'>
                     Your data's safety is a top priority for Docplix. We keep your patient records safe and follow all the rules to make sure your data stays secure.
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
                     We're Here for You
                  </h4>    
                  <p className='text-gray'>
                     We're on your side. Docplix offers support and training to help you get the most out of our system.
                  </p>
               </div> 
            </div>    
         </FramerUp>  
         <p className='text-orange text-lg'>With [App Name], managing health records is easier and better than ever.</p>
      </div>
      <div className='md:max-h-[400px] max-md:w-full'>
         <img src={centerImg} loading='lazy' alt="Preventive Care Programs" className='h-full w-full object-cover animate-image' />
      </div>
    </section>
  )
}

export default WhyUs
