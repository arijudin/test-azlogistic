import Head from 'next/head'
import * as Icon from 'react-feather'
import ButtonBack from '../../components/btnBack'
import { Popover } from '@headlessui/react'
import { Float } from '@headlessui-float/react'

function NumbeFour() {
  return (
     <div className="w-full max-w-7xl mx-auto my-20">
      <Head>
        <title>Azlogistic | Answer 04</title>
      </Head>
      <ButtonBack />
      <div className='mt-10'>
        <Popover className="relative">
          <Float
            placement="bottom-center"
            offset={15}
            shift={6}
            flip={10}
            arrow
            portal
            enter="transition duration-200 ease-out"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition duration-150 ease-in"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1">
            <Popover.Button className='text-sm border border-blue-600 text-blue-600 rounded-full py-2 px-6 inline-flex items-center focus-visible:outline-none'>
              <Icon.Plus className='w-4 h-4 mr-1' />
              Button
            </Popover.Button>
            <Popover.Panel className="bg-white border border-gray-200 rounded-lg shadow-lg focus:outline-none">
              <Float.Arrow className="absolute bg-white w-5 h-5 rotate-45 border border-gray-200" />
              <div className='relative text-center bg-white rounded-lg text-xs py-2 px-20'>
                Hello World
              </div>
            </Popover.Panel>
          </Float>
        </Popover>
      </div>
     </div>
  )
}

export default NumbeFour