import { useState } from 'react'

export function Button({ onClick, text }) {
  return (
    <button
      id="sign-up-btn"
      type="submit"
      className="py-4 text-[12px] md:text-[14px] bg-background-color 
      rounded-[10px] font-poppins font-semibold text-primary max-w-[280px]
      md:max-w-[402px] duration-500 hover:bg-[#285A82] hover:shadow-xl"
      onClick={onClick}
    >
      {text}
    </button>
  )
}
