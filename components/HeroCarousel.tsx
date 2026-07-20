'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, Leaf, Zap, Globe, Sparkles } from 'lucide-react'

const slides = [
  {
    id: 1,
    image: '/images/charging-station.jpg',
    title: 'Powering the Future of Electric Mobility',
    subtitle: 'Reliable, Fast & Smart EV Charging Infrastructure. Charge Anywhere. Drive Everywhere.',
  },
  {
    id: 2,
    image: '/images/charging-station-2.png',
    title: 'Ultra-Fast Charging Depot',
    subtitle: 'High-speed DC chargers engineered to get you charged up and moving in minutes.',
  },
  {
    id: 3,
    image: '/images/hero-3.png',
    title: 'Intelligent Charging Network',
    subtitle: 'Access thousands of reliable smart stations across the nation powered by 100% green energy.',
  },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    setAutoPlay(false)
  }

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      <AnimatePresence>
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === current ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/35 to-black/20" />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          key={`content-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
            {slides[current].title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 text-balance">
            {slides[current].subtitle}
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Link href="/charging-network" className="px-8 py-3 bg-primary text-primary-foreground rounded-lg transition-all font-semibold shadow-md">
              Find Charger
            </Link>
            <Link href="/franchise" className="px-8 py-3 border-2 border-primary text-white hover:bg-primary/10 rounded-lg transition-all font-semibold shadow-md">
              Become a Partner
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="text-white" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index)
              setAutoPlay(false)
            }}
            className={`h-2 rounded-full transition-all ${
              index === current ? 'bg-primary w-8' : 'bg-white/40 w-2 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Learn More Modal */}
      <AnimatePresence>
        {isLearnMoreOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-card border border-border rounded-lg max-w-2xl w-full overflow-hidden shadow-2xl relative"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-card/90 backdrop-blur-md px-6 py-4 border-b border-border flex items-center justify-between z-10">
                <div className="flex items-center space-x-2 text-accent">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-bold text-lg text-foreground">About BREVOLT Mobility</span>
                </div>
                <button
                  onClick={() => setIsLearnMoreOpen(false)}
                  className="p-1 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Revolutionizing Electric Charging
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    BREVOLT is a global leader in high-power EV charging infrastructure. We combine next-generation power technology, seamless customer software, and 100% certified renewable energy to make driving electric cleaner and easier than ever before.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-muted/30 border border-border p-4 rounded-lg text-center">
                    <Zap className="w-8 h-8 text-primary mx-auto mb-2 animate-bounce" />
                    <h4 className="font-bold text-foreground mb-1">Ultra-Fast</h4>
                    <p className="text-xs text-muted-foreground">Up to 350kW output charging 0-80% in 15-30 mins</p>
                  </div>
                  <div className="bg-muted/30 border border-border p-4 rounded-lg text-center">
                    <Leaf className="w-8 h-8 text-accent mx-auto mb-2" />
                    <h4 className="font-bold text-foreground mb-1">100% Green</h4>
                    <p className="text-xs text-muted-foreground">Powered exclusively by solar, wind, and hydro energy</p>
                  </div>
                  <div className="bg-muted/30 border border-border p-4 rounded-lg text-center">
                    <Globe className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                    <h4 className="font-bold text-foreground mb-1">Global Coverage</h4>
                    <p className="text-xs text-muted-foreground">Over 5,000 charging stations across 45 countries</p>
                  </div>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 flex items-start space-x-3">
                  <span className="text-xl">💡</span>
                  <div>
                    <h5 className="font-bold text-primary text-sm">Did you know?</h5>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                      By switching from gas to EV and charging on the BREVOLT network, you offset up to 400g of CO2 per mile driven. Use our Carbon Calculator on the Sustainability page to see your impact!
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="bg-muted/30 px-6 py-4 border-t border-border flex justify-end space-x-3">
                <Link
                  href="/about"
                  onClick={() => setIsLearnMoreOpen(false)}
                  className="px-4 py-2 border border-border text-foreground hover:bg-muted font-semibold rounded-lg transition-colors text-center text-sm"
                >
                  View Full About Page
                </Link>
                <button
                  onClick={() => setIsLearnMoreOpen(false)}
                  className="px-5 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-blue-700 transition-colors cursor-pointer text-sm shadow-md"
                >
                  Got It
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
