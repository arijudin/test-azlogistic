import Head from 'next/head'
import ButtonBack from '../../components/btnBack'
import Button from '../../components/button'

function NumbeOne() {
  return (
     <div className="w-full max-w-7xl mx-auto my-20">
      <Head>
        <title>Azlogistic | Answer 01</title>
      </Head>
      <ButtonBack />
      <div className='mt-10'>
        <Button />
      </div>
     </div>
  )
}

export default NumbeOne