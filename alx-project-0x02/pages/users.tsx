import { useEffect, useState } from 'react'
import UserCard from '@/components/common/UserCard'
import { type UserProps } from '@/interfaces'

const UsersPage = () => {
  const [users, setUsers] = useState<UserProps[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!res.ok) throw new Error('Failed to fetch users')
        const data: UserProps[] = await res.json()
        setUsers(data)
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'Unknown error'
        setError(message)
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  if (loading) {
    return <div className="p-6 text-gray-700 dark:text-gray-200">Loading users...</div>
  }

  if (error) {
    return <div className="p-6 text-red-600">Error: {error}</div>
  }

  return (
    <div className="max-w-4xl mx-auto p-6 grid gap-4 sm:grid-cols-2">
      {users.map(({ id, name, email, address, username, phone, website }) => (
        <UserCard
          key={id}
          name={name}
          email={email}
          address={address}
          username={username}
          phone={phone}
          website={website}
        />
      ))}
    </div>
  )
}

export default UsersPage


