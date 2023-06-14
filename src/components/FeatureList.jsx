import { TickCircle } from 'iconsax-react'

function FeatureList() {
  return (
    <ul className="flex flex-col gap-2 ">
      <li className="text-[14px]  md:text-[16px] text-gray-700 flex gap-x-2">
        <div>
          <TickCircle variant="Broken" className="text-secondary" />
        </div>
        <p>Discovering Valuable Products and Features</p>
      </li>
      <li className="text-[14px]  md:text-[16px] text-gray-700 flex gap-x-2">
        <div>
          <TickCircle variant="Broken" className="text-secondary" />
        </div>
        <p>Ensuring Successful Updates through Metrics</p>
      </li>
      <li className="text-[14px]  md:text-[16px] text-gray-700 flex min-[283px]:items-center gap-x-2">
        <div>
          <TickCircle variant="Broken" className="text-secondary " />
        </div>
        <p>And Many Exciting Topics Await</p>
      </li>
    </ul>
  )
}

export default FeatureList
