import { type CardProps } from '@/interfaces'

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-4">
      <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        {content}
      </p>
    </div>
  )
}

export default Card