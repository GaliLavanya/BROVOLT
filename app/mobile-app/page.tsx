'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { 
  Download, MapPin, Zap, BarChart3, Bell, Lock, 
  ChevronRight, Smartphone, Compass, Shield, CreditCard, 
  Star, Trophy, Eye, User, FileText, LifeBuoy
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type ScreenType = 'login' | 'find' | 'booking' | 'charging' | 'wallet' | 'rewards' | 'history' | 'support';

export default function MobileAppPage() {
  const [activeScreen, setActiveScreen] = useState<ScreenType>('find')

  // Screen mockups content renderer
  const renderScreenContent = () => {
    switch (activeScreen) {
      case 'login':
        return (
          <div className="h-full bg-slate-950 text-white p-6 flex flex-col justify-between select-none">
            <div className="text-center pt-8">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-primary/30">
                <span className="text-xl font-bold text-white">B</span>
              </div>
              <h3 className="text-lg font-bold">Welcome to BREVOLT</h3>
              <p className="text-xs text-muted-foreground mt-1">Accelerating Sustainable Mobility</p>
            </div>
            <div className="space-y-3">
              <input type="email" placeholder="Email Address" disabled className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs placeholder-slate-500 focus:outline-none" />
              <input type="password" placeholder="Password" disabled className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs placeholder-slate-500 focus:outline-none" />
              <button disabled className="w-full py-2 bg-primary text-white text-xs font-semibold rounded-lg shadow-md">Sign In</button>
              <div className="text-center text-[10px] text-slate-500">Or continue with Google or Apple ID</div>
            </div>
            <div className="text-center text-[10px] text-slate-600 pb-2">By continuing you agree to our Terms of Service</div>
          </div>
        )
      case 'find':
        return (
          <div className="h-full bg-slate-950 text-white p-4 flex flex-col justify-between select-none">
            <div className="relative">
              <div className="flex items-center space-x-2 bg-slate-900 border border-slate-800 rounded-lg p-2 text-xs text-slate-400">
                <MapPin size={14} className="text-primary" />
                <span>Search charging stations...</span>
              </div>
            </div>
            {/* Map Simulation */}
            <div className="my-3 flex-grow bg-slate-900 rounded-lg relative overflow-hidden flex items-center justify-center border border-slate-800">
              <Image
                src="/images/phone-map.png"
                alt="Map with Highlighted Locations"
                fill
                className="object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-slate-950/20" />
              <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-accent rounded-full animate-ping" />
              <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-accent rounded-full border border-white" />
              
              <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-primary rounded-full animate-ping" />
              <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-primary rounded-full border border-white" />
            </div>
            {/* Card info */}
            <div className="bg-slate-900 border border-slate-850 p-3 rounded-lg">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs font-bold">Highway Plaza Hub #12</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded-full font-bold">AVAILABLE</span>
              </div>
              <p className="text-[10px] text-slate-450">NH-48 Corridor, Near Toll Road</p>
              <div className="flex justify-between items-center mt-2 pt-2 border-t border-slate-800 text-[10px] text-slate-400">
                <span>DC 240kW • CCS2</span>
                <span className="font-bold text-accent">₹18/kWh</span>
              </div>
            </div>
          </div>
        )
      case 'booking':
        return (
          <div className="h-full bg-slate-950 text-white p-4 flex flex-col justify-between select-none">
            <div className="pt-2">
              <h3 className="text-sm font-bold mb-1">Reserve a Slot</h3>
              <p className="text-[10px] text-slate-400">Lock your charger before arrival to prevent queue wait times.</p>
            </div>
            <div className="space-y-3 my-4">
              <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg">
                <span className="text-[10px] text-slate-400 block mb-1">SELECTED STATION</span>
                <span className="text-xs font-bold">Urban Grid Depot #04</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg text-center">
                  <span className="text-[9px] text-slate-500 block">TIME SLOT</span>
                  <span className="text-xs font-semibold text-accent mt-0.5 block">14:00 - 14:30</span>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg text-center">
                  <span className="text-[9px] text-slate-500 block">RESERVATION FEE</span>
                  <span className="text-xs font-semibold text-emerald-450 mt-0.5 block">₹50 Refundable</span>
                </div>
              </div>
            </div>
            <button disabled className="w-full py-2.5 bg-accent text-accent-foreground text-xs font-bold rounded-lg shadow-md mt-auto">
              Confirm Reservation
            </button>
          </div>
        )
      case 'charging':
        return (
          <div className="h-full bg-slate-950 text-white p-4 flex flex-col justify-between select-none">
            <div className="text-center pt-4">
              <span className="text-[10px] bg-primary/20 text-primary border border-primary/30 px-2 py-0.5 rounded-full font-semibold">CHARGING ACTIVE</span>
              <h3 className="text-xs text-slate-400 mt-2">Connected to Gun #2 (DC Fast)</h3>
            </div>
            {/* Battery graphic */}
            <div className="flex flex-col items-center justify-center my-6">
              <div className="relative w-28 h-28 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-4 border-slate-800 border-t-accent animate-spin" style={{ animationDuration: '2s' }} />
                <div className="text-center">
                  <span className="text-3xl font-bold text-accent">74%</span>
                  <span className="text-[9px] text-slate-500 block">8.4 kW delivered</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 p-3 rounded-lg border border-slate-850 space-y-1.5">
              <div className="flex justify-between text-[10px]">
                <span className="text-slate-400">Time Elapsed:</span>
                <span className="font-semibold">00:18:24</span>
              </div>
              <div className="flex justify-between text-[10px]">
                <span className="text-slate-400">Current Cost:</span>
                <span className="font-semibold text-emerald-400">₹151.20</span>
              </div>
            </div>
            <button disabled className="w-full py-2 bg-red-600 text-white text-xs font-bold rounded-lg mt-3">
              Stop Charging Session
            </button>
          </div>
        )
      case 'wallet':
        return (
          <div className="h-full bg-slate-950 text-white p-4 flex flex-col justify-between select-none">
            <div className="pt-2">
              <span className="text-[10px] text-slate-400 block">BREVOLT WALLET</span>
              <span className="text-2xl font-bold">₹1,450.00</span>
            </div>
            {/* Card interface */}
            <div className="my-4 bg-gradient-to-r from-primary to-blue-600 rounded-xl p-4 shadow-lg flex flex-col justify-between h-28 border border-white/10">
              <div className="flex justify-between items-start">
                <span className="text-[9px] text-white/70 tracking-widest font-mono">BREVOLT PASS</span>
                <span className="font-bold text-xs italic">B</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] block opacity-80 text-white/80">Account Linked ID</span>
                <span className="text-[11px] font-mono tracking-wider">**** **** 4890</span>
              </div>
            </div>
            <div className="space-y-2">
              <button disabled className="w-full py-2 bg-slate-900 border border-slate-850 hover:bg-slate-800 text-white text-xs font-bold rounded-lg flex items-center justify-center gap-1.5">
                <CreditCard size={14} /> Add Money via UPI / Card
              </button>
            </div>
            <div className="text-[9px] text-slate-500 text-center pb-1">Automated low-balance auto-fill optional</div>
          </div>
        )
      case 'rewards':
        return (
          <div className="h-full bg-slate-950 text-white p-4 flex flex-col justify-between select-none">
            <div className="pt-2 text-center">
              <Trophy className="w-10 h-10 text-amber-500 mx-auto mb-2" />
              <h3 className="text-sm font-bold">Eco-Trophy Points</h3>
              <p className="text-[10px] text-slate-400">Earn rewards while protecting the atmosphere.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg my-3 text-center">
              <span className="text-2xl font-bold text-amber-400">420 Pts</span>
              <span className="text-[9px] text-slate-500 block mt-1">Value: ₹42.00 Charging Credit</span>
            </div>
            <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-850 text-[10px] space-y-2 text-slate-400">
              <p className="font-semibold text-white">REWARDS BENCHMARKS</p>
              <div className="flex justify-between border-b border-slate-800 pb-1">
                <span>Free 5 kWh coupon</span>
                <span className="text-amber-500">500 Pts</span>
              </div>
              <div className="flex justify-between">
                <span>Priority slot pre-booking</span>
                <span className="text-amber-500">800 Pts</span>
              </div>
            </div>
            <button disabled className="w-full py-2 bg-primary/20 border border-primary/30 text-primary text-xs font-bold rounded-lg mt-auto">
              Claim Points
            </button>
          </div>
        )
      case 'history':
        return (
          <div className="h-full bg-slate-950 text-white p-4 flex flex-col justify-between select-none">
            <div className="pt-2 mb-2">
              <h3 className="text-sm font-bold">Charging History</h3>
            </div>
            <div className="flex-grow space-y-2 overflow-y-auto pr-1">
              {[
                { date: 'Yesterday, 18:32', energy: '18.4 kWh', cost: '₹331.20', station: 'NH-48 Plaza #12' },
                { date: '25 Jun, 12:15', energy: '22.1 kWh', cost: '₹397.80', station: 'Urban Grid #04' },
                { date: '19 Jun, 09:44', energy: '12.0 kWh', cost: '₹216.00', station: 'Corporate Plaza #01' }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-900 p-2.5 rounded-lg border border-slate-850 flex justify-between items-center text-[10px]">
                  <div>
                    <span className="font-bold text-white block">{item.station}</span>
                    <span className="text-slate-500 text-[9px] mt-0.5 block">{item.date}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-emerald-400 block">{item.cost}</span>
                    <span className="text-slate-400 text-[9px] block">{item.energy}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-[10px] text-accent text-center pt-2 font-semibold hover:underline cursor-pointer">
              Download Full Invoice (PDF)
            </div>
          </div>
        )
      case 'support':
        return (
          <div className="h-full bg-slate-950 text-white p-4 flex flex-col justify-between select-none">
            <div className="pt-2">
              <h3 className="text-sm font-bold mb-1">Help & Support</h3>
              <p className="text-[10px] text-slate-400">Need help with a session or transaction?</p>
            </div>
            <div className="space-y-2.5 my-4">
              {[
                { label: 'Issue with Charging Gun', action: 'Raise Ticket' },
                { label: 'Payment Deducted, No Charge', action: 'Refund Help' },
                { label: 'App Location Inaccuracy', action: 'Submit Feedback' }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-850 p-2.5 rounded-lg flex justify-between items-center text-[10px] hover:bg-slate-850 transition-colors">
                  <span className="text-slate-200">{item.label}</span>
                  <span className="text-accent font-semibold">{item.action} →</span>
                </div>
              ))}
            </div>
            <div className="bg-primary/10 border border-primary/20 p-3 rounded-lg text-center mt-auto">
              <p className="text-[10px] text-primary font-bold">24/7 HELPLINE HOTLINE</p>
              <p className="text-xs font-bold text-foreground mt-0.5">+1 (234) 567-890</p>
            </div>
          </div>
        )
    }
  }

  return (
    <>
      <Navigation />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="py-24 border-b border-border bg-gradient-to-b from-background to-card/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Copy & Store Downloads */}
              <div className="lg:col-span-7 text-center lg:text-left space-y-6">
                <span className="text-primary font-bold uppercase tracking-wider text-sm">BREVOLT Companion App</span>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  Your Complete EV Charging Partner
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Real-time occupancy maps, one-tap UPI payments, remote diagnostics, and carbon offset tracking—all directly inside a gorgeous, unified interface.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                  <button className="px-8 py-3.5 bg-primary text-primary-foreground rounded-lg hover:bg-blue-600 transition-colors font-semibold flex items-center space-x-2 shadow-lg shadow-primary/20 cursor-pointer text-sm">
                    <Download size={18} />
                    <span>Get iOS App</span>
                  </button>
                  <button className="px-8 py-3.5 bg-accent text-accent-foreground rounded-lg hover:bg-orange-600 transition-colors font-semibold flex items-center space-x-2 shadow-lg shadow-accent/20 cursor-pointer text-sm">
                    <Download size={18} />
                    <span>Get Android App</span>
                  </button>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Star className="text-amber-500 fill-amber-500" size={16} />
                    <span className="font-bold text-foreground">4.8 ★</span>
                    <span>App Store</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="text-amber-500 fill-amber-500" size={16} />
                    <span className="font-bold text-foreground">4.7 ★</span>
                    <span>Play Store</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Phone Simulator */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="relative w-80 h-[640px] bg-slate-900 border-[10px] border-slate-800 rounded-[48px] shadow-2xl overflow-hidden ring-4 ring-border">
                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-slate-800 rounded-b-2xl z-20 flex items-center justify-center">
                    <div className="w-16 h-1.5 bg-slate-900 rounded-full mb-1" />
                  </div>
                  {/* Phone Content Screen */}
                  <div className="h-full pt-6">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeScreen}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="h-full"
                      >
                        {renderScreenContent()}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Tabs Indicator to change mockup screen */}
                <div className="mt-8 flex flex-wrap justify-center gap-1.5 max-w-md bg-muted/40 p-1.5 rounded-lg border border-border">
                  {[
                    { id: 'login', label: 'Login' },
                    { id: 'find', label: 'Find' },
                    { id: 'booking', label: 'Book' },
                    { id: 'charging', label: 'Charge' },
                    { id: 'wallet', label: 'Wallet' },
                    { id: 'rewards', label: 'Points' },
                    { id: 'history', label: 'History' },
                    { id: 'support', label: 'Support' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveScreen(tab.id as ScreenType)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer ${activeScreen === tab.id ? 'bg-primary text-primary-foreground shadow-sm font-bold' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Checklist Grid */}
        <section className="py-20 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Mobile Features Designed for Speed</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: MapPin, title: 'Live Availability', desc: 'Real-time check on connector availability before arriving.' },
                { icon: Compass, title: 'Map Navigation', desc: 'Direct turn-by-turn routing to the nearest active charging point.' },
                { icon: CreditCard, title: 'Secure Payment Gateway', desc: 'Instant UPI, Cards, Net Banking, and wallet payments.' },
                { icon: BarChart3, title: 'Charging History Logs', desc: 'Complete logs of historical charges, costs, and invoices.' },
                { icon: Lock, title: 'Integrated Wallet', desc: 'Instant deposit options with smart auto-balance backup options.' },
                { icon: Trophy, title: 'Trophy Membership', desc: 'Eco-points for every kg of CO2 offset, redeemable for credits.' },
                { icon: Zap, title: 'Remote Stop/Start', desc: 'Trigger charging sessions wirelessly via cloud communication.' },
                { icon: Shield, title: 'Fleet Integrations', desc: 'Switch profiles to corporate accounts for billing coordination.' }
              ].map((f, i) => (
                <div key={i} className="bg-background border border-border rounded-lg p-6">
                  <f.icon className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-bold text-foreground text-sm mb-1.5">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">System Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-xl font-bold text-foreground mb-4">iOS App Requirements</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Requires iOS 14.0 or later</li>
                  <li>• Compatible with iPhone 11 and later</li>
                  <li>• Storage size: ~85MB</li>
                  <li>• Background Location permissions recommended</li>
                </ul>
              </div>
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-xl font-bold text-foreground mb-4">Android App Requirements</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Requires Android 9.0 or later</li>
                  <li>• Compatible with most smartphone brands</li>
                  <li>• Storage size: ~92MB</li>
                  <li>• Precise location clearances required</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
