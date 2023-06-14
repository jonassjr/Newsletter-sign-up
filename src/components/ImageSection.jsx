import { useEffect, useState } from 'react'

function ImageSection({ mobileImg, desktopImg }) {
  const [image, setImage] = useState(mobileImg)

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth
      const breakpointWidth = 1024

      if (screenWidth >= breakpointWidth) {
        setImage(desktopImg)
      } else {
        setImage(mobileImg)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="md:order-2 md:bg-third-color md:h-full md:w-[420px] md:rounded-[10px]">
      <img src={image} alt="newsletter img" className="w-full mb-4 md:mb-0 md:h-full" />
    </div>
  )
}

export default ImageSection
