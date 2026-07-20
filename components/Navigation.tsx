'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Network', href: '/charging-network' },
    { label: 'Franchise', href: '/franchise' },
    { label: 'Business', href: '/business' },
    { label: 'App', href: '/mobile-app' },
    { label: 'Sustainability', href: '/sustainability' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              src="/images/logo.png"
              alt="BREVOLT Logo"
              width={140}
              height={40}
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors relative group text-sm font-medium py-1 ${isActive ? 'text-accent font-bold' : 'text-muted-foreground hover:text-accent'}`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-foreground cursor-pointer p-1"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden pb-4 space-y-1.5 mt-2 bg-background border-t border-border"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-2 rounded-lg transition-colors text-sm ${isActive ? 'text-accent font-semibold bg-accent/10' : 'text-muted-foreground hover:text-accent hover:bg-muted/50'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              className="block w-full px-4 py-2.5 bg-primary text-primary-foreground rounded-lg text-center hover:bg-blue-700 transition-colors mt-4 text-sm font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
