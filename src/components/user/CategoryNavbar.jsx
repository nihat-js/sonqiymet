'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Smartphone, Headphones, SmartphoneIcon as Smartphone2, Tablet, Watch, Laptop, MoreHorizontal } from 'lucide-react'

const categories = [
  { name: 'Phones', icon: Smartphone, href: '/category/phones' },
  { name: 'Earphones', icon: Headphones, href: '/category/earphones' },
  { name: 'Cases', icon: Smartphone2, href: '/category/cases' },
  { name: 'Tablets', icon: Tablet, href: '/category/tablets' },
  { name: 'Smartwatches', icon: Watch, href: '/category/smartwatches' },
  { name: 'Laptops', icon: Laptop, href: '/category/laptops' },
]

const CategoryTab = ({ category, isActive, onClick }) => (
  <Link
    href={category.href}
    className={`flex items-center px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
      isActive
        ? 'bg-blue-500 text-white'
        : 'text-gray-600 hover:bg-gray-100'
    }`}
    onClick={onClick}
  >
    <category.icon className="w-5 h-5 mr-2" />
    <span className="hidden sm:inline">{category.name}</span>
  </Link>
)

export default function CategoryNavbar() {
  const [activeCategory, setActiveCategory] = useState(categories[0].name)
  const [isMoreOpen, setIsMoreOpen] = useState(false)

  const visibleCategories = categories.slice(0, 5)
  const moreCategories = categories.slice(5)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4 overflow-x-auto hide-scrollbar">
            {visibleCategories.map((category) => (
              <CategoryTab
                key={category.name}
                category={category}
                isActive={activeCategory === category.name}
                onClick={() => setActiveCategory(category.name)}
              />
            ))}
          </div>
          {moreCategories.length > 0 && (
            <div className="relative">
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-full hover:bg-gray-100 focus:outline-none"
              >
                <MoreHorizontal className="w-5 h-5" />
                <span className="hidden sm:inline ml-2">More</span>
              </button>
              {isMoreOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                  {moreCategories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setActiveCategory(category.name)
                        setIsMoreOpen(false)
                      }}
                    >
                      <category.icon className="w-5 h-5 mr-2" />
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

