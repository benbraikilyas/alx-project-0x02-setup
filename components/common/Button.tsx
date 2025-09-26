import { type ButtonProps } from '@/interfaces'

const Button = ({
  children,
  size = 'medium',
  shape = 'rounded-md',
  variant = 'primary',
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) => {
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  }

  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full'
  }

  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500'
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${sizeClasses[size]}
        ${shapeClasses[shape]}
        ${variantClasses[variant]}
        transition-colors
        focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        font-medium
      `}
    >
      {children}
    </button>
  )
}

export default Button