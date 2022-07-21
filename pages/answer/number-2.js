import Head from 'next/head'
import ButtonBack from '../../components/btnBack'
import CardNumberThree from '../../components/cardNumberThree'

function NumbeTwo() {
  return (
     <div className="w-full max-w-7xl mx-auto my-20">
      <Head>
        <title>Azlogistic | Answer 02</title>
      </Head>
      <ButtonBack />
      <div className='mt-10'>
        <CardNumberThree />
      </div>
     </div>
  )
}

export default NumbeTwo