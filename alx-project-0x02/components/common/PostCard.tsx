import { PostProps } from '@/interfaces'

const PostCard = ({ title, content, userId }: Omit<PostProps, 'id'>) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {content}
      </p>
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
        <span>Author ID: {userId}</span>
      </div>
    </div>
  )
}

export default PostCard