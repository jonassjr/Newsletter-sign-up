function Input() {
  return (
    <>
      <label htmlFor="emai" className="text-[12px] text-black font-poppins">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        placeholder="exemple@email.com"
        className="border-2 py-4 px-3 border-background-color 
        rounded-[10px] text-[12px] placeholder:text-[12px] max-w-[280px]
        focus:border-secondary outline-none transition-all duration-300"
      />
    </>
  )
}

export default Input
