'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { 
  TrendingUp, Zap, Globe, Clock, Landmark, CheckCircle2, ShieldCheck, 
  ArrowRight, Coins, Building, Fuel, Coffee, ShoppingBag, Home, Truck, 
  Navigation as NavigationIcon, Phone, FileText, Settings, UserCheck, Play,
  Award, Activity
} from 'lucide-react'

export default function FranchisePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    investment: '₹60 Lakhs (1 Station)',
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
      <main className="bg-background min-h-screen">
        {/* Hero Section */}
        <section className="py-24 border-b border-border bg-gradient-to-b from-background to-card/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 text-center lg:text-left">
                <span className="text-accent font-bold uppercase tracking-wider text-sm">Franchise Program</span>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground mt-2 mb-6 leading-tight">
                  Own a BREVOLT EV Charging Station
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
                  Start Your EV Charging Business with BREVOLT
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
                  Become a BREVOLT Station Partner and join India's growing electric mobility revolution. We provide a complete turnkey solution—from site assessment and installation to smart operations and ongoing support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="#apply" className="px-8 py-3.5 bg-primary text-primary-foreground rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                    Get Started <ArrowRight size={18} />
                  </a>
                  <a href="#apply" className="px-8 py-3.5 border border-border text-foreground bg-card/45 hover:bg-card rounded-lg transition-colors font-semibold flex items-center justify-center">
                    Become a Partner
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 relative h-[450px] rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl">
                <Image
                  src="/images/charging-station.jpg"
                  alt="BREVOLT EV Charging Station Canopy"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Investment & Business Potential */}
        <section className="py-24 border-b border-border bg-card/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Investment Card */}
              <div className="bg-card border border-border rounded-2xl p-8 flex flex-col justify-between shadow-xl hover:border-primary/30 transition-all">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      <Landmark size={24} />
                    </div>
                    <div>
                      <span className="text-muted-foreground text-xs uppercase tracking-wider block">Estimated Investment</span>
                      <h3 className="text-3xl font-extrabold text-foreground">Starting from ₹60 Lakhs</h3>
                    </div>
                  </div>

                  <hr className="border-border my-6" />

                  <h4 className="font-bold text-foreground text-lg mb-4">Investment Includes:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'DC Fast Charger',
                      'Electrical Infrastructure',
                      'Installation & Commissioning',
                      'Smart Charging Software',
                      'Mobile App Integration',
                      'Branding & Signage',
                      'Training & Technical Support'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs text-muted-foreground italic mt-8 border-t border-border pt-4">
                  *Land and utility connection charges may vary by location.
                </p>
              </div>

              {/* Business Potential Card */}
              <div className="bg-card border border-border rounded-2xl p-8 flex flex-col justify-between shadow-xl hover:border-accent/30 transition-all">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <span className="text-muted-foreground text-xs uppercase tracking-wider block">Earnings & Returns</span>
                      <h3 className="text-3xl font-extrabold text-foreground">Business Potential</h3>
                    </div>
                  </div>

                  <hr className="border-border my-6" />

                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-background border border-border p-4 rounded-xl">
                      <span className="text-muted-foreground text-xs block mb-1">Estimated Monthly Revenue</span>
                      <span className="text-xl font-bold text-foreground">₹3.5–5 Lakhs</span>
                    </div>
                    <div className="bg-background border border-border p-4 rounded-xl">
                      <span className="text-muted-foreground text-xs block mb-1">Estimated Monthly Profit</span>
                      <span className="text-xl font-bold text-emerald-500">₹1.2–2 Lakhs</span>
                    </div>
                    <div className="bg-background border border-border p-4 rounded-xl">
                      <span className="text-muted-foreground text-xs block mb-1">Expected Annual ROI</span>
                      <span className="text-xl font-bold text-primary">20–30%</span>
                    </div>
                    <div className="bg-background border border-border p-4 rounded-xl">
                      <span className="text-muted-foreground text-xs block mb-1">Estimated Payback</span>
                      <span className="text-xl font-bold text-accent">3–5 Years</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground italic mt-8 border-t border-border pt-4">
                  *Returns depend on station utilization, location, electricity tariffs, and operating costs.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Why Partner with BREVOLT */}
        <section className="py-24 border-b border-border bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-bold uppercase tracking-wider text-sm">Value Proposition</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">
                Why Partner with BREVOLT?
              </h2>
              <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
                We supply everything required to build a highly profitable EV station with complete peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Complete Turnkey Setup', desc: 'Site layout, electrical installation, commissioning, and operations managed by our engineers.', icon: Landmark },
                { title: 'Premium Brand Recognition', desc: 'High-visibility canopy, digital signage, and premium architectural branding designed to attract drivers.', icon: Award },
                { title: 'AI-Powered Charging Platform', desc: 'Automated peak shaving, load balancing, dynamic tariff updates, and uptime management software.', icon: Zap },
                { title: '24×7 Remote Monitoring', desc: 'Real-time telemetry, remote restarts, and immediate diagnostic overrides for uninterrupted operations.', icon: Activity },
                { title: 'Marketing & Business Support', desc: 'In-app promotion, search map optimization, corporate fleet contracts, and marketing campaigns.', icon: Globe },
                { title: 'Preventive Maintenance', desc: 'Routine inspections, cleaning, and parts replacement scheduled automatically by our service crews.', icon: Settings },
                { title: 'Mobile App & Digital Payments', desc: 'Seamless user discovery, digital wallet, UPI, and net-banking payouts directly to your partner dashboard.', icon: Phone },
                { title: 'Future Expansion Ready', desc: 'Flexible modular layouts allowing easy upgrade from initial fast-chargers as demand grows.', icon: TrendingUp }
              ].map((item, idx) => (
                <div key={idx} className="bg-card border border-border rounded-xl p-6 hover:border-primary/45 transition-colors hover:shadow-lg">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <item.icon size={20} />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-base">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ideal Locations */}
        <section className="py-24 border-b border-border bg-card/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-accent font-bold uppercase tracking-wider text-sm font-semibold">Location Compatibility</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">
                Ideal Locations for EV Stations
              </h2>
              <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
                High-footfall zones and major corridors ensure rapid payback and high daily utilization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {[
                { label: 'Highways', desc: 'National & State Highways', icon: NavigationIcon },
                { label: 'Fuel Stations', desc: 'Existing Petrol Pumps', icon: Fuel },
                { label: 'Hotels', desc: 'Hotels & Restaurants', icon: Coffee },
                { label: 'Malls', desc: 'Shopping Malls & Retail Hubs', icon: ShoppingBag },
                { label: 'Corporates', desc: 'Corporate Campuses', icon: Building },
                { label: 'Residential', desc: 'Housing Societies', icon: Home },
                { label: 'Logistics', desc: 'Fleet & Logistics Depots', icon: Truck }
              ].map((loc, idx) => (
                <div key={idx} className="bg-background border border-border rounded-xl p-5 text-center flex flex-col items-center justify-between hover:border-primary transition-colors hover:scale-105 transform">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3">
                    <loc.icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm mb-1">{loc.label}</h4>
                    <p className="text-muted-foreground text-[11px] leading-snug">{loc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Journey Timeline */}
        <section className="py-24 border-b border-border bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-bold uppercase tracking-wider text-sm">Step-by-Step</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">
                Your Journey to Station Ownership
              </h2>
              <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
                We guide you through every milestone to get your station live and generating revenue.
              </p>
            </div>

            {/* Stepper Timeline */}
            <div className="relative">
              {/* Desktop connection line */}
              <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-border -translate-y-1/2 z-0" />
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
                {[
                  { step: '01', title: 'Apply', desc: 'Submit your contact information and site details.', icon: FileText },
                  { step: '02', title: 'Site Assessment', desc: 'Our team evaluates location utility and traffic potential.', icon: NavigationIcon },
                  { step: '03', title: 'Agreement', desc: 'Finalize partner contract and licensing requirements.', icon: UserCheck },
                  { step: '04', title: 'Installation', desc: 'We coordinate civil works, chargers setup, and utility clearance.', icon: Settings },
                  { step: '05', title: 'Go Live', desc: 'Launch operations, enable UPI payments, and receive drivers.', icon: Play }
                ].map((item, idx) => (
                  <div key={idx} className="bg-card border border-border rounded-xl p-6 text-center shadow-sm relative flex flex-col justify-between">
                    <div>
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-black text-xs px-3 py-1 rounded-full border-2 border-background">
                        {item.step}
                      </span>
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4 mt-2">
                        <item.icon size={22} />
                      </div>
                      <h4 className="font-bold text-foreground mb-2 text-base">{item.title}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Build the Future / Lead Form */}
        <section className="py-24 bg-card border-t border-border" id="apply">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
                Ready to Build the Future?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Invest in the rapidly growing EV charging industry with BREVOLT and create a long-term, sustainable business.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-background border border-emerald-500/20 rounded-2xl p-8 text-center shadow-2xl animate-scale-up">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Application Submitted!</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Thank you for your interest in BREVOLT. Our business expansion experts will review your details and contact you within 24-48 hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-sm text-primary hover:underline font-semibold"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <div className="bg-background border border-border rounded-2xl p-8 shadow-2xl">
                <h3 className="text-xl font-bold text-foreground mb-6 text-center">Franchise Inquiry & Expert Consultation</h3>
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
                        placeholder="Enter your name"
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
                        placeholder="you@example.com"
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
                      <label className="block text-foreground font-semibold mb-2 text-sm">Preferred Location (City, State)</label>
                      <input
                        type="text"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                        placeholder="e.g. Pune, Maharashtra"
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
                        <option>₹60 Lakhs (1 Station)</option>
                        <option>₹1.2 Crore (2 Stations)</option>
                        <option>₹1.8 Crore+ (Regional Hub)</option>
                        <option>Other / Fleet Operator</option>
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
                        <option>Commercial building owner</option>
                        <option>Highway roadside space</option>
                        <option>No property yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-foreground font-semibold mb-2 text-sm">Message / Details (Optional)</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors resize-none text-sm"
                      placeholder="Add details about your location or timeline..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-primary/20 cursor-pointer flex items-center justify-center gap-2"
                  >
                    Apply Now & Connect with Experts <ArrowRight size={18} />
                  </button>
                </form>
              </div>
            )}

            {/* Disclaimer */}
            <div className="mt-16 text-center">
              <span className="block text-[11px] text-muted-foreground uppercase font-black tracking-wider mb-2">Disclaimer</span>
              <p className="text-[11px] text-muted-foreground/80 italic leading-relaxed">
                The investment, revenue, and ROI figures shown are indicative estimates and may vary based on location, charging demand, electricity tariffs, operational efficiency, and local regulations.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
