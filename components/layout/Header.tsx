import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()

  const navLinks = [
    { href: '/home', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/posts', label: 'Posts' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  router.pathname === link.href
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300'
                } hover:text-blue-500 px-3 py-2 text-sm font-medium transition-colors`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header