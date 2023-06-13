import Input from './components/Input'

import { TickCircle } from 'iconsax-react'

import mobileImg from './assets/mobile-img.svg'
import { Button } from './components/Button'

function App() {
  return (
    <div>
      <div>
        <img src={mobileImg} alt="newsletter img" className="w-full mb-4" />
      </div>
      <div className="flex flex-col gap-6 font-poppins mx-4 xs:mx-auto xs:w-[280px]">
        <div>
          <h1
            className="text-[32px] font-semibold
           text-background-color"
          >
            Stay In the Loop!
          </h1>
          <p className="text-[14px] text-gray-700">
            Be part of our community of 20,000+ subscribers and receive monthly updates on:
          </p>
        </div>

        <ul className="flex flex-col gap-2 ">
          <li className="text-[14px] text-gray-700 flex gap-x-2">
            <div>
              <TickCircle className="text-secondary" />
            </div>
            <p>Discovering Valuable Products and Features</p>
          </li>
          <li className="text-[14px] text-gray-700 flex gap-x-2">
            <div>
              <TickCircle className="text-secondary" />
            </div>
            <p>Ensuring Successful Updates through Metrics</p>
          </li>
          <li className="text-[14px] text-gray-700 flex min-[283px]:items-center gap-x-2">
            <div>
              <TickCircle className="text-secondary " />
            </div>
            <p>And Many Exciting Topics Await</p>
          </li>
        </ul>

        <form action="" className="flex flex-col gap-y-3 mb-8">
          <Input />
          <Button />
        </form>
      </div>
    </div>
  )
}

export default App
