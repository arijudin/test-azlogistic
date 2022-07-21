import Link from 'next/link'
import * as Icon from 'react-feather'

function ButtonBack() {
  return (
    <Link href={ '/' } passHref>
      <a className='text-sm text-blue-500 hover:text-blue-600 capitalize inline-flex items-center'>
        <Icon.ChevronLeft className='w-4 h-4 mr-2' />
        back
      </a>
    </Link>
  )
}

export default ButtonBack