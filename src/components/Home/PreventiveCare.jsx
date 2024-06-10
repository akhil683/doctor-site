import React from 'react'
import img from "../../assets/home/intuitive-app.png"
import FramerDown from '../Framer/FramerDown'
import FramerUp from '../Framer/FramerUp'
import DemoButton from '../DemoButton'

const PreventiveCare = () => {
  return (
    <section className='mt-20 flex justify-around items-center max-md:flex-col-reverse gap-8 md:px-16 px-8'>
      <div className='md:h-[700px] max-md:w-full'>
         <img src={img} alt="Preventive Care Programs" className='h-full w-full object-cover animate-image' />
      </div>
      <div className='max-w-[500px]'>
        <FramerDown>
         <h3 className='md:text-5xl text-3xl font-semibold mb-4'>
          Intuitive App
          </h3>
        </FramerDown>
        <FramerUp>
         <p className='mb-4 text-gray text-lg'>
            Record & Access patient record with our intuitive mobile app, available on Ios and Android.
          </p>
          <DemoButton />
        </FramerUp>
      </div>
    </section>
  )
}

export default PreventiveCare
