import { TickCircle } from 'iconsax-react'
import Button from './Button'

function Modal({ email, onClick }) {
  return (
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

        <Button type="button" text={'Dismiss message'} onClick={onClick} />
      </div>
    </div>
  )
}

export default Modal
