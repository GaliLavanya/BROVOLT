'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqData = {
  general: [
    {
      q: 'What is BREVOLT?',
      a: 'BREVOLT is a global EV charging infrastructure provider. We build and operate high-power, reliable, and user-friendly charging stations to make electric mobility accessible to everyone.',
    },
    {
      q: 'Where can I find BREVOLT charging stations?',
      a: 'You can locate all our charging stations in real-time through the BREVOLT Mobile App or via the Charging Network page on our website. The app also shows current availability, power output, and pricing.',
    },
    {
      q: 'Are your charging stations powered by green energy?',
      a: 'Absolutely. 100% of the electricity supplied through the BREVOLT network is sourced from certified renewable energy providers, ensuring your journey is completely carbon-neutral.',
    },
  ],
  pricing: [
    {
      q: 'Can I cancel my subscription anytime?',
      a: 'Yes, you can cancel or change your subscription at any time directly through your account page or the mobile app without any penalty or cancelation fees.',
    },
    {
      q: 'Are there any additional fees?',
      a: 'No, we believe in transparent pricing. The only charges you pay are for the actual energy consumed (per kWh) and any standard session fees clearly shown before charging begins. There are no hidden costs.',
    },
    {
      q: 'What is included in the BREVOLT charging passes?',
      a: 'Our charging passes offer discounted per-kWh rates across our network, priority reservation windows, access to premium partner stations, and 24/7 dedicated support.',
    },
  ],
  app: [
    {
      q: 'Is the app free to download?',
      a: 'Yes, the BREVOLT Mobile App is completely free to download on both the Apple App Store and Google Play Store.',
    },
    {
      q: 'Can I use the app without creating an account?',
      a: 'You can browse nearby stations and check availability without an account, but you must register a free account and add a payment method to start a charging session.',
    },
    {
      q: 'What payment methods are accepted?',
      a: 'We accept all major credit and debit cards (Visa, Mastercard, American Express), Apple Pay, Google Pay, and direct bank transfers (SEPA/ACH) for enterprise accounts.',
    },
    {
      q: 'Can I reserve a charger in advance?',
      a: 'Yes, premium subscription members and pass holders can reserve any available charger up to 2 hours in advance to guarantee their slot upon arrival.',
    },
  ],
}

type TabType = 'general' | 'pricing' | 'app'

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState<TabType>('general')
  const [openIndexes, setOpenIndexes] = useState<number[]>([])

  const toggleAccordion = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index))
    } else {
      setOpenIndexes([...openIndexes, index])
    }
  }

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab)
    setOpenIndexes([]) // Reset open accordions on tab change
  }

  return (
    <>
      <Navigation />
      <main className="bg-background min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about charging with BREVOLT
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center space-x-2 border-b border-border pb-px mb-12">
            {(['general', 'pricing', 'app'] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-6 py-3 font-semibold transition-all relative ${
                  activeTab === tab
                    ? 'text-accent'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab === 'general' && 'General'}
                {tab === 'pricing' && 'Pricing & Subscriptions'}
                {tab === 'app' && 'Mobile App'}
                {activeTab === tab && (
                  <motion.div
                    layoutId="active-tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Accordion Questions */}
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                {faqData[activeTab].map((faq, index) => {
                  const isOpen = openIndexes.includes(index)
                  return (
                    <div
                      key={index}
                      className="border border-border rounded-lg bg-card overflow-hidden hover:border-primary/50 transition-colors"
                    >
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full flex items-center justify-between p-6 text-left font-bold text-foreground hover:text-accent transition-colors"
                      >
                        <span className="text-lg">{faq.q}</span>
                        <ChevronDown
                          size={20}
                          className={`text-muted-foreground transition-transform duration-300 ${
                            isOpen ? 'rotate-180 text-accent' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                          >
                            <div className="px-6 pb-6 pt-1 text-muted-foreground leading-relaxed border-t border-border/50">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
