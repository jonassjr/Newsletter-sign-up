import { useState } from 'react'

function Button({ onClick, text, type }) {
  return (
    <button
      id="sign-up-btn"
      type={type}
      className="py-4 text-[12px] md:text-[14px] bg-background-color 
      rounded-[10px] font-poppins font-semibold text-primary max-w-[280px]
      md:max-w-[402px] duration-500 hover:bg-[#285A82] hover:shadow-xl"
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
