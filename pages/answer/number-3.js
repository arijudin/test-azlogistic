import Head from 'next/head'
import Image from 'next/image'
import ButtonBack from '../../components/btnBack'

function NumbeThree() {
  return (
     <div className="w-full max-w-7xl mx-auto my-20">
      <Head>
        <title>Azlogistic | Answer 02</title>
      </Head>
      <ButtonBack />
      <div className='mt-10'>
        <div className='p-4 flex justify-between w-full max-w-2xl'>
          <div className='inline-flex'>
            <Image
                src='/avatar.png'
                height={'100%'}
                width={'100%'}
                alt='' />
            <div className='py-4 ml-8'>
              <p className='text-lg font-bold mb-3'>PT. Truk Maju Bersama</p>
              <div className='inline-flex items-start'>
                <Image
                    src='/goldMedal.svg'
                    height={'24px'}
                    width={'24px'}
                    alt='' />
                <span className='ml-1 text-sm font-bold text-[#D0AF6B]'>Gold Transporter</span>
              </div>
            </div>
          </div>
          <div className='flex-none py-4'>
            <div className='bg-[#336AEE] rounded-full py-1 px-6 text-white text-xs font-medium flex item-center'>
              <Image
                src='/edit.svg'
                height={'15px'}
                width={'15px'}
                alt='' />
                <span className='ml-1'>Edit</span>
            </div>
          </div>
        </div>
      </div>
     </div>
  )
}

export default NumbeThree