import { useState } from 'react'

function Input({ onEmailValidated, onEmailChange }) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const handleEmailChange = (ev) => {
    const newEmail = ev.target.value
    setEmail(newEmail)
    onEmailChange(newEmail)
  }

  const validateEmail = () => {
    if (!emailRegex.test(email)) {
      setEmailError('Valid email required')
    } else {
      setEmailError('')
      onEmailValidated()
    }
  }

  return (
    <>
      <div className="flex justify-between">
        <label htmlFor="emai" className="text-[12px] md:text-[14px] text-black font-poppins">
          Email Address
        </label>
        {emailError && (
          <p className="text-[12px] md:text-[14px] text-red-400 font-poppins">{emailError}</p>
        )}
      </div>
      <input
        id="email"
        type="email"
        value={email}
        placeholder="exemple@email.com"
        onChange={handleEmailChange}
        onBlur={validateEmail}
        className={`border-2 py-4 px-3 border-background-color
        rounded-[10px] text-[12px] md:text-[14px] placeholder:text-[12px] 
        md:placeholder:text-[14px] max-w-[280px] md:max-w-[402px] outline-none
        duration-300 focus:border-secondary transition-all 
        focus:bg-white focus:md:bg-primary
        ${emailError ? 'bg-red-200' : 'md:bg-primary'}`}
      />
    </>
  )
}

export default Input
