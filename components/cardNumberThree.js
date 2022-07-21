import Image from 'next/image'

function CardNumberThree() {
  return (
    <div className='w-[152px] h-[192px] rounded-3xl text-center pt-10'
      style={{ boxShadow: '0 4px 12px rgba(0,0,0, .1)' }}>
      <Image
          src='/iconDealer.png'
          height={'80%'}
          width={'80%'}
          alt='' />
      <p className='mt-3 leading-[20px]'>Dealership & Workshop</p>
    </div>
  )
}

export default CardNumberThree