"use client"

import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-sky-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block">Become The</span>
          <span className="block bg-gradient-to-r from-blue-300 to-sky-400 bg-clip-text text-transparent">
            DJ You're Meant To Be
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
          Master the decks. Command the crowd. Create unforgettable experiences.
          Your journey to main stage starts here.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            href="/contact"
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-2xl hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300"
          >
            Start Your DJ Journey
          </Link>
          <Link
            href="/class_session"
            className="border-2 border-blue-300 text-blue-300 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-300 hover:text-slate-900 transform hover:scale-105 transition-all duration-300"
          >
            View Class Sessions
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-blue-200">Students Trained</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">10+</div>
            <div className="text-blue-200">Industry Partners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-blue-200">Success Rate</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  )
}