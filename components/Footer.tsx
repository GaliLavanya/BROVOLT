'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Share2, Heart, Code } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="BREVOLT Logo"
                width={140}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Revolutionizing electric vehicle charging with fast, reliable, and sustainable solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-bold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions" className="text-slate-600 hover:text-accent text-sm transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/charging-network" className="text-slate-600 hover:text-accent text-sm transition-colors">
                  Charging Network
                </Link>
              </li>
              <li>
                <Link href="/business" className="text-slate-600 hover:text-accent text-sm transition-colors">
                  Business
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-600 hover:text-accent text-sm transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-slate-900 font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-600 hover:text-accent text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-600 hover:text-accent text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-slate-600 hover:text-accent text-sm transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/franchise" className="text-slate-600 hover:text-accent text-sm transition-colors">
                  Franchise
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-600 hover:text-accent text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-accent text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-900 font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-slate-600 text-sm">
                <Mail size={16} className="text-accent" />
                <a href="mailto:hello@brevolt.in" className="hover:text-accent transition-colors">
                  hello@brevolt.in
                </a>
              </li>
              <li className="flex items-center space-x-2 text-slate-600 text-sm">
                <Phone size={16} className="text-accent" />
                <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start space-x-2 text-slate-600 text-sm">
                <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span>3rd Floor, Newmark House, Unit No: 303 B, Plot No: 56, Patrika Nagar, Madhapur, Serilingampalle (M), Hyderabad, Telangana 500081</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Bottom */}
        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <p className="text-slate-500 text-sm">
                © 2026 Reach All. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-xs">
                <Link href="/privacy" className="text-slate-500 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-slate-300">|</span>
                <Link href="/terms" className="text-slate-500 hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-accent transition-colors">
                <Code size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-accent transition-colors">
                <Share2 size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-accent transition-colors">
                <Heart size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
