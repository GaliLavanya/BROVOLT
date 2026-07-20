'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="bg-[#021c02] text-slate-100 border-t border-emerald-900/20">
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
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Revolutionizing electric vehicle charging with fast, reliable, and sustainable solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/charging-network" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Charging Network
                </Link>
              </li>
              <li>
                <Link href="/business" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Business
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/franchise" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Franchise
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-white text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-slate-400 text-sm">
                <Mail size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="mailto:hello@brevolt.in" className="hover:text-white transition-colors">
                    hello@brevolt.in
                  </a>
                  <a href="mailto:info@brevolt.in" className="hover:text-white transition-colors mt-0.5">
                    info@brevolt.in
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-2 text-slate-400 text-sm">
                <Phone size={16} className="text-primary" />
                <a href="tel:+919393313414" className="hover:text-white transition-colors">
                  +91 93933 13414
                </a>
              </li>
              <li className="flex items-start space-x-2 text-slate-400 text-sm">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>3rd Floor, Newmark House, Unit No: 303 B, Plot No: 56, Patrika Nagar, Madhapur, Serilingampalle (M), Hyderabad, Telangana 500081</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Bottom */}
        <div className="border-t border-emerald-900/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <p className="text-slate-400 text-sm">
                © 2026 Reach All. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-xs">
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-slate-700">|</span>
                <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="https://www.facebook.com/profile.php?id=61591666437785" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
                <FaFacebookF size={18} />
              </a>
              <a href="https://www.instagram.com/bre_volt/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
                <FaInstagram size={18} />
              </a>
              <a href="https://x.com/BREVOLTi5" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="X (Twitter)">
                <FaXTwitter size={18} />
              </a>
              <a href="https://www.youtube.com/@Brevolt-y3h" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="YouTube">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
