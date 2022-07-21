import * as Icon from 'react-feather'

function Button({className, onClick, disabled = false}) {
  return (
    <a onClick={onClick} disabled={disabled} className={`text-sm border border-blue-600 text-blue-600 rounded-full py-2 px-6 inline-flex items-center hover:cursor-pointer ${className}`}>
      <Icon.Plus className='w-4 h-4 mr-1' />
      Button
    </a>
  )
}

export default Button