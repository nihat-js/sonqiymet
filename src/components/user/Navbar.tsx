'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Search, ShoppingCart, Menu, X } from 'lucide-react'

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link 
    href={href} 
    className="relative px-3 py-2 transition-colors duration-300 hover:text-blue-500 group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
  </Link>
)

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Phone className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">TelefonTap</span>
            </Link>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="relative rounded-full bg-gray-100 p-2 flex items-center">
              <input
                type="text"
                placeholder="Search phones..."
                className="bg-transparent border-none focus:outline-none text-sm w-48 md:w-64"
              />
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <NavItem href="/buy">Buy</NavItem>
            <NavItem href="/sell">Sell</NavItem>
            <NavItem href="/about">About</NavItem>
            <Link href="/cart" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
              <ShoppingCart className="h-6 w-6" />
            </Link>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/buy" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50">Buy</Link>
            <Link href="/sell" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50">Sell</Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50">About</Link>
            <Link href="/cart" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50">Cart</Link>
          </div>
          <div className="px-4 py-3">
            <div className="relative rounded-md bg-gray-100 p-2 flex items-center">
              <input
                type="text"
                placeholder="Search phones..."
                className="bg-transparent border-none focus:outline-none text-sm w-full"
              />
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

