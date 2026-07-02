'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Share2, Heart, Code } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">B</span>
              </div>
              <span className="text-lg font-bold text-foreground">BREVOLT</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Revolutionizing electric vehicle charging with fast, reliable, and sustainable solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions" className="text-muted-foreground hover:text-accent text-sm transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/charging-network" className="text-muted-foreground hover:text-accent text-sm transition-colors">
                  Charging Network
                </Link>
              </li>
              <li>
                <Link href="/business" className="text-muted-foreground hover:text-accent text-sm transition-colors">
                  Business
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-accent text-sm transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-accent text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-accent text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-muted-foreground hover:text-accent text-sm transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/franchise" className="text-muted-foreground hover:text-accent text-sm transition-colors">
                  Franchise
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-accent text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-accent text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Mail size={16} className="text-accent" />
                <a href="mailto:hello@brevolt.com" className="hover:text-accent transition-colors">
                  hello@brevolt.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Phone size={16} className="text-accent" />
                <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start space-x-2 text-muted-foreground text-sm">
                <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span>123 Electric Way, Tesla City, TC 10001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} BREVOLT. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Code size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Share2 size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Heart size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
