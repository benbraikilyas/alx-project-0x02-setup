import { type UserProps } from '@/interfaces'

type UserCardProps = Pick<UserProps, 'name' | 'email' | 'address' | 'username' | 'phone' | 'website'>

const UserCard = ({ name, email, address, username, phone, website }: UserCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{name}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">@{username}</p>
      <div className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
        <p><span className="font-medium">Email:</span> {email}</p>
        {phone && <p><span className="font-medium">Phone:</span> {phone}</p>}
        {website && <p><span className="font-medium">Website:</span> {website}</p>}
        <p>
          <span className="font-medium">Address:</span> {address.street}, {address.suite}, {address.city} {address.zipcode}
        </p>
      </div>
    </div>
  )
}

export default UserCard


