function Input() {
  return (
    <>
      <label htmlFor="emai" className="text-[12px] md:text-[14px] text-black font-poppins">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        placeholder="exemple@email.com"
        className="md:bg-primary border-2 py-4 px-3 border-background-color
        rounded-[10px] text-[12px] md:text-[14px] placeholder:text-[12px] 
        md:placeholder:text-[14px] max-w-[280px] md:max-w-[402px] outline-none
        duration-300 focus:border-secondary transition-all"
      />
    </>
  )
}

export default Input
