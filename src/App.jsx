import { useState } from 'react'

import Input from './components/Input'
import Button from './components/Button'
import ImageSection from './components/ImageSection'
import FeatureList from './components/FeatureList'
import HeaderSection from './components/HeaderSection'

import mobileImg from './assets/mobile-img.svg'
import desktopImg from './assets/desktop-img.svg'

import { TickCircle } from 'iconsax-react'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [validEmail, setValidEmail] = useState(false)

  const [email, setEmail] = useState('')

  const handleEmailValidated = () => {
    setValidEmail(true)
  }

  const handleFormSubmit = (ev) => {
    ev.preventDefault()
    if (validEmail === true) {
      setShowModal(true)
    }
  }

  const closeModal = () => {
    setShowModal(false)
    window.location.reload()
  }

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail)
  }

  return (
    <div
      className="md:bg-background-color md:w-full h-screen flex 
      md:items-center justify-center"
    >
      <section
        className={`first-line: md:grid grid-cols-2 gap-x-8 md:bg-primary 
        md:place-items-center h-[570px] md:p-8 md:rounded-[35px]
        ${showModal ? 'hidden' : ''}`}
      >
        <ImageSection mobileImg={mobileImg} desktopImg={desktopImg} />

        <div className="flex flex-col gap-6 font-poppins mx-4 xs:mx-auto xs:w-[280px] md:w-[402px]">
          <HeaderSection />

          <FeatureList />

          <form action="" className="flex flex-col gap-y-3 mb-8 md:mb-0">
            <Input onEmailValidated={handleEmailValidated} onEmailChange={handleEmailChange} />
            <Button type="submit" text={'Receive Monthly Newsletter'} onClick={handleFormSubmit} />
          </form>
        </div>
      </section>
      {showModal && (
        <div
          className="modal bg-white md:bg-primary w-full h-screen absolute
         flex items-center justify-center"
        >
          <div
            className="modal-content md:bg-primary md:p-12 w-[280px] px-4 xs:px-0 md:w-[400px] 
            md:shadow-custom-shadow md:rounded-[20px] flex flex-col gap-2 animation"
          >
            <TickCircle variant="Broken" size={72} color="#204969" />
            <h2
              className="text-[32px] md:text-[42px] md:leading-[50px] font-semibold
             text-background-color"
            >
              Thanks For Subscribing!
            </h2>
            <p className="text-[14px] md:text-[16px] text-gray-700 mb-4 md:w-[auto]">
              A confirmation email has been sent to{' '}
              <strong className="text-background-color">{email} </strong>
              click the link to activate your subscription and stay updated.
            </p>

            <Button type="button" text={'Dismiss message'} onClick={closeModal} />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
