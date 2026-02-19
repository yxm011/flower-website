import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Ana Səhifə', href: '/' },
    { name: 'Kataloq', href: '/catalog' },
    { name: 'Haqqımızda', href: '/about' },
  ]

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-gray-800 hover:text-pink-600 transition-colors">
              Gard Buket.
            </h1>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="tel:+994702197070"
              className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-full hover:border-pink-500 transition-colors duration-200"
            >
              <Phone size={18} />
              <span className="font-medium">+994 (70) 219 70 70</span>
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+994702197070"
                className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-full hover:border-pink-500 transition-colors duration-200 w-fit"
              >
                <Phone size={18} />
                <span className="font-medium">+994 (70) 219 70 70</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
