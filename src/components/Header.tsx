'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Briefcase } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Plywood History', href: '/history' },
    { 
      name: 'Our Products', 
      href: '/products',
      submenu: [
        { name: 'Specifications', href: '/specifications' },
        { name: 'Services', href: '/services' }
      ]
    },
    { name: 'Portofolios', href: '/projects-portofolio', icon: Briefcase },
    { name: 'Free Samples', href: '/samples' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-gray-800 to-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">MP</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900">MEGA PLYWOOD</h1>
                <p className="text-sm text-gray-600">INDONESIA</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </Link>
                    {isProductsOpen && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center ${
                      item.name === 'Portofolios' 
                        ? 'text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200' 
                        : 'text-gray-700 hover:text-black'
                    }`}
                  >
                    {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-black focus:outline-none focus:text-black"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium flex items-center ${
                      item.name === 'Portofolios' 
                        ? 'text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200' 
                        : 'text-gray-700 hover:text-black'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="text-gray-600 hover:text-black block px-3 py-2 text-sm font-medium"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
