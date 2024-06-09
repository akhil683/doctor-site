import React from 'react'
import FramerDown from '../Framer/FramerDown'
import FramerUp from '../Framer/FramerUp'
import centerImg from "../../assets/advantages.png"
import { IoIosCheckmarkCircle } from 'react-icons/io'

const RemoteCenter = () => {
  return (
    <section className='my-16 flex justify-around items-center max-md:flex-col gap-16 px-8'>
      <div className='md:max-h-[400px] max-md:w-full'>
         <img src={centerImg} alt="Preventive Care Programs" className='h-full w-full object-cover animate-image' />
      </div>
      <div className='max-w-[500px]'>
         <FramerDown>
            <h3 className='md:text-5xl text-3xl font-semibold mb-6'>
               <span className='text-orange'>Advantages of Opting for Our Remote Centers: </span>
               Accessible Healthcare, Expert Specialists, and Advanced Facilities for Improved Well-being.
            </h3>
         </FramerDown>

         <FramerUp>
         <p className='mb-12 text-gray md:text-lg'>
            Experience comprehensive healthcare at our remote centers, where you can access top-notch medical expertise, advanced diagnostic facilities, and hassle-free services for your overall well-being and convenience.
         </p>
         </FramerUp>
         <FramerUp>
            <div className='flex gap-3 my-6'>
               <div>
                  <IoIosCheckmarkCircle className='text-4xl text-checkGreen' /> 
               </div> 
               <div>
                  <h4 className='md:text-2xl text-xl font-semibold'>
                     Expert Superspecialists
                  </h4>    
                  <p className='text-gray'>
                     Access renowned specialists catering to diverse healthcare needs with personalized care and expert guidance for all medical concerns and queries.
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
                     Convenient Services
                  </h4>    
                  <p className='text-gray'>
                     Enjoy seamless access to integrated facilities including an in-house pharmacy and advanced pathology services for efficient healthcare delivery and hassle-free medical assistance.
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
                     Teleconsultation Options
                  </h4>    
                  <p className='text-gray'>
                     Avail the benefits of virtual consultations, enabling easy access to doctors remotely, ensuring timely guidance and support for your healthcare needs from the comfort of your home.
                  </p>
               </div> 
            </div>    
         </FramerUp>  
         
      </div>

    </section>
  )
}

export default RemoteCenter
