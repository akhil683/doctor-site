import React from 'react'

const Input = ({ type, name, placeholder, value, onChange }) => {

  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className='w-full p-3 placeholder:text-gray bg-bgWhite focus:bg-white outline-gray border border-lightGray text-lg'
    />
  )
}

export default Input
