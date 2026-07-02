'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { 
  TrendingUp, Users, Zap, Globe, 
  Clock, Landmark, CheckCircle2, ShieldCheck, Mail 
} from 'lucide-react'

export default function FranchisePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    investment: '$500K - $1M',
    propertyType: 'Own land',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <>
      <Navigation />
      <main className="bg-background">
        {/* Hero */}
        <section className="py-24 border-b border-border bg-gradient-to-b from-background to-card/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 text-center lg:text-left">
                <span className="text-primary font-bold uppercase tracking-wider text-sm">Franchise Program</span>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground mt-2 mb-6 leading-tight">
                  Become a BREVOLT Partner
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Partner with India's most trusted intelligent EV charging network. Secure your financial future in the clean energy market.
                </p>
                <div className="mt-8 flex justify-center lg:justify-start">
                  <a href="#apply" className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-blue-600 transition-colors font-semibold shadow-lg shadow-primary/20">
                    Apply Now
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 relative h-80 rounded-xl overflow-hidden border-2 border-primary/20 shadow-2xl">
                <Image
                  src="/images/franchise-hero.png"
                  alt="Franchise Hub"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ROI and Business Model Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Business Model & ROI Estimates</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Charging Hub Model',
                  investment: '$500K - $1M',
                  roi: 'Estimated 24% - 30% Annual ROI',
                  payback: 'Payback Period: 2.5 - 3 Years',
                  specs: ['10-20 Smart Chargers', 'Designed for city centers', '24/7 automated operations', 'Split-revenue platform']
                },
                {
                  title: 'Territory Franchise',
                  investment: '$1M - $3M',
                  roi: 'Estimated 28% - 35% Annual ROI',
                  payback: 'Payback Period: 2.2 - 2.8 Years',
                  specs: ['50-100 regional chargers', 'Exclusive territory distribution rights', 'Dedicated local manager support', 'Volume-based power tariff savings']
                },
                {
                  title: 'Master Franchise',
                  investment: '$3M+',
                  roi: 'Estimated 32% - 40% Annual ROI',
                  payback: 'Payback Period: 1.8 - 2.5 Years',
                  specs: ['200+ network stations', 'Sub-franchising capabilities', 'Custom corporate partnerships', 'Tier-1 grid integration commissions']
                }
              ].map((model, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-colors flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{model.title}</h3>
                    <p className="text-accent text-lg font-bold mb-1">{model.investment}</p>
                    <div className="bg-primary/5 border border-primary/20 p-3 rounded-lg mb-6 text-sm text-foreground font-semibold">
                      <p className="text-emerald-500">{model.roi}</p>
                      <p className="text-muted-foreground font-medium text-xs mt-0.5">{model.payback}</p>
                    </div>
                    <ul className="space-y-3">
                      {model.specs.map((spec, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Setup and Support Offerings */}
        <section className="py-20 bg-card border-t border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-4xl font-bold text-foreground mb-8">Comprehensive Franchise Support</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: 'Complete Setup', desc: 'Site selection, civil engineering, hardware procurement, and installation handled entirely by BREVOLT.' },
                    { title: 'Software Platform', desc: 'Centralized CRM, real-time occupancy maps, and automatic billing systems with instant payouts.' },
                    { title: 'Branding & Marketing', desc: 'Complete outdoor signage, local advertising campaigns, and integration into the global BREVOLT app.' },
                    { title: 'Operations & Training', desc: 'Ongoing technical maintenance, emergency support, and full training for local staff.' }
                  ].map((item, i) => (
                    <div key={i} className="bg-background border border-border rounded-xl p-6 shadow-sm">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                        <ShieldCheck size={20} />
                      </div>
                      <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5 relative h-96 rounded-xl overflow-hidden border border-border shadow-lg">
                <Image
                  src="/images/franchise-support.png"
                  alt="Operations Software Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Franchise Requirements</h2>
            <div className="space-y-4">
              {[
                'Access to a suitable location (owned or leased parking lot, highway road, retail front)',
                'Ability to acquire electrical connections (BREVOLT assists with local power grid clearances)',
                'Financial liquidity matching the selected franchise model tier',
                'Commitment to uphold international safety and operational quality benchmarks',
                'Local regulatory clearances (BREVOLT legal team guides this execution)'
              ].map((req, i) => (
                <div key={i} className="flex items-start space-x-3 p-4 bg-card border border-border rounded-lg">
                  <span className="w-6 h-6 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-foreground text-sm md:text-base">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Application Form */}
        <section className="py-20 bg-card border-t border-border" id="apply">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Franchise Application Form</h2>
              <p className="text-muted-foreground">Submit your details, and our business expansion team will connect with you within 48 hours.</p>
            </div>

            {isSubmitted ? (
              <div className="bg-background border border-emerald-500/20 rounded-xl p-8 text-center shadow-lg animate-scale-up">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Application Received Successfully!</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Thank you for your interest in BREVOLT. Our business development team has received your application and is reviewing the location compatibility. We will contact you shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-sm text-primary hover:underline font-semibold"
                >
                  Submit Another Form
                </button>
              </div>
            ) : (
              <div className="bg-background border border-border rounded-xl p-8 shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-foreground font-semibold mb-2 text-sm">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-foreground font-semibold mb-2 text-sm">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-foreground font-semibold mb-2 text-sm">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-foreground font-semibold mb-2 text-sm">Preferred Location / State</label>
                      <input
                        type="text"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                        placeholder="e.g. Mumbai, Maharashtra"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-foreground font-semibold mb-2 text-sm">Investment Capacity</label>
                      <select
                        name="investment"
                        value={formData.investment}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                      >
                        <option>$100K - $500K</option>
                        <option>$500K - $1M</option>
                        <option>$1M - $3M</option>
                        <option>$3M+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-foreground font-semibold mb-2 text-sm">Property Status</label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                      >
                        <option>Own land</option>
                        <option>Leased plot</option>
                        <option>Parking lot owner</option>
                        <option>Highway roadside plot</option>
                        <option>No property yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-foreground font-semibold mb-2 text-sm">Additional Details / Message (Optional)</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors resize-none text-sm"
                      placeholder="Tell us about your proposed site or investment group..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-primary/20 cursor-pointer"
                  >
                    Submit Franchise Application
                  </button>
                </form>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
