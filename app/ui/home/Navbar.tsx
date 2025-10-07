"use client"

import Link from "next/link"
import Navlinks from "./navlinks"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from 'next/navigation'
import {
  HomeIcon,
  InformationCircleIcon,
  PhoneArrowDownLeftIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { name: 'Homepage', href: '/', icon: HomeIcon },
    { name: 'Info', href: '/Info', icon: InformationCircleIcon },
    { name: 'Contact us', href: '/', icon: PhoneArrowDownLeftIcon },
    { name: 'Class sessions', href: '/class-sessions', icon: VideoCameraIcon },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 shadow-lg pb-3 pt-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
        
        {/* Logo left */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/sevenpm1.png"
              alt="Seven PM DJ Academy"
              width={100}
              height={60}
              className="h-auto w-auto"
              style={{
                animation: 'smooth-spin 14s linear infinite'
              }}
              priority
            />
          </Link>
        </div>

        {/* Navlinks center - Hidden on mobile */}
        <div className="hidden md:flex flex-1 justify-center">
          <Navlinks />
        </div>

        {/* Join Us button right - Hidden on mobile */}
        <div className="hidden md:flex flex-shrink-0 pr-4">
          <button 
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-md font-semibold text-sm shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 opacity-90 cursor-not-allowed"
            disabled
            aria-disabled="true"
          >
            Join us!
          </button>
        </div>

        {/* Hamburger menu - Visible only on mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-blue-300 focus:outline-none transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu - Collapsible */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50">
          <div className="max-w-6xl mx-auto px-4 py-4">
            {/* Mobile version of navigation links */}
            <div className="flex flex-col space-y-4">
              {links.map((link) => {
                const LinkIcon = link.icon
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-white font-medium transition-colors duration-200 ${
                      pathname === link.href 
                        ? 'bg-blue-600/20 text-blue-300 border-l-2 border-blue-400' 
                        : 'hover:bg-slate-700/50 hover:text-blue-200'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <LinkIcon className="w-5 h-5" />
                    <span>{link.name}</span>
                  </Link>
                )
              })}
            </div>
            
            {/* Mobile Join Us button */}
            <div className="mt-4 pt-4 border-t border-slate-700/50">
              <button 
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-3 rounded-md font-semibold text-sm shadow-lg opacity-90 cursor-not-allowed"
                disabled
                aria-disabled="true"
              >
                Join us!
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}