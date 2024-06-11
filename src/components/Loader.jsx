import React from 'react'
import { TailSpin } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='text-5xl min-h-screen flex justify-center items-center'>
      <TailSpin
        height={80} 
        width={80}
        color='#e8762c'

      />
    </div>
  )
}

export default Loader
