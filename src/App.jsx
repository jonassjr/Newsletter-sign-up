import Input from './components/Input'

import { Button } from './components/Button'
import ImageSection from './components/ImageSection'
import FeatureList from './components/FeatureList'

import mobileImg from './assets/mobile-img.svg'
import desktopImg from './assets/desktop-img.svg'
import HeaderSection from './components/HeaderSection'

function App() {
  return (
    <div className="md:bg-background-color md:w-full h-screen flex md:items-center justify-center">
      <section className="md:grid grid-cols-2 gap-x-8 md:bg-primary  md:place-items-center h-[570px] md:p-8 md:rounded-[35px]">
        <ImageSection mobileImg={mobileImg} desktopImg={desktopImg} />

        <div className="flex flex-col gap-6 font-poppins mx-4 xs:mx-auto xs:w-[280px] md:w-[402px]">
          <HeaderSection />

          <FeatureList />

          <form action="" className="flex flex-col gap-y-3 mb-8 md:mb-0">
            <Input />
            <Button />
          </form>
        </div>
      </section>
    </div>
  )
}

export default App
