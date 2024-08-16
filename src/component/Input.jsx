import React, { useRef } from 'react'

function Input({placeholder, extraStyle, type, name }) {
  return (
    <input name={name} placeholder={placeholder} type={type} className={`w-full placeholder:text-gray-200 placeholder:opacity-50 outline-none font-medium rounded p-[13px] font-kubmh text-sm border-[.5px] border-gray-100 leading-[17.36px] ${extraStyle}`}/>
  )
}

export default Input