import { useState } from 'react'

import { Button, FeatureList, HeaderSection, ImageSection, Input, Modal } from './components'

import mobileImg from './assets/mobile-img.svg'
import desktopImg from './assets/desktop-img.svg'

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
    setValidEmail(false)
  }

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail)
  }

  return (
    <div
      className="md:bg-background-color md:w-full h-screen flex 
      md:items-center justify-center"
    >
      {!showModal && (
        <section
          className={`first-line: md:grid grid-cols-2 gap-x-8 md:bg-primary 
        md:place-items-center h-[570px] md:p-8 md:rounded-[35px]
        `}
        >
          <ImageSection mobileImg={mobileImg} desktopImg={desktopImg} />

          <div className="flex flex-col gap-6 font-poppins mx-4 xs:mx-auto xs:w-[280px] md:w-[402px]">
            <HeaderSection />

            <FeatureList />

            <form action="" className="flex flex-col gap-y-3 mb-8 md:mb-0">
              <Input onEmailValidated={handleEmailValidated} onEmailChange={handleEmailChange} />
              <Button
                type="submit"
                text={'Receive Monthly Newsletter'}
                onClick={handleFormSubmit}
              />
            </form>
          </div>
        </section>
      )}
      {showModal && <Modal email={email} onClick={closeModal} />}
    </div>
  )
}

export default App
