import Head from 'next/head'
import ButtonBack from '../../components/btnBack'
import Button from '../../components/button'
import CardNumberThree from '../../components/cardNumberThree'
import { useState } from 'react'

function NumbeNine() {
  const [cards, setCards] = useState(['a'])
  const [isLoading, setLoading] = useState(false)

  const duplicateCard = () => {
    let cardArray = cards
    cardArray.push('a')
    
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setCards(cardArray);
    }, 3000);
  }

  return (
     <div className="w-full max-w-7xl mx-auto my-20">
      <Head>
        <title>Azlogistic | Answer 09</title>
      </Head>
      <ButtonBack />
      <div className='mt-10'>
        <div className='text-center'>
          <Button className={`hover:shadow-md select-none ${isLoading ? 'bg-gray-200 text-white border-white hover:cursor-not-allowed hover:shadow-none' : ''}`}
            disabled={isLoading}
            onClick={ () => {
              if (!isLoading) duplicateCard()
            }} />
        </div>
        <div className='py-10 mx-auto'>
          <div className='grid grid-cols-4 gap-8 w-fit mx-auto'>
            { cards.map((item, key) => (
              <CardNumberThree key={key} />
            ))}
          </div>
        </div>
      </div>
     </div>
  )
}

export default NumbeNine