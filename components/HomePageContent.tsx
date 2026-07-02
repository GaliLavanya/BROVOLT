'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Zap, Globe, Shield, Leaf, Award, 
  MapPin, CreditCard, BatteryCharging, 
  Star, ArrowRight, Building, CheckCircle2, 
  Settings, Server, ClipboardList, Info, HelpCircle
} from 'lucide-react'

export default function HomePageContent() {
  const [chargerTab, setChargerTab] = useState<'ac' | 'dc'>('dc')

  return (
    <main className="bg-background">
      {/* Why BREVOLT Section */}
      <section className="py-24 border-b border-border bg-gradient-to-b from-background to-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why BREVOLT?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We build robust, intelligent charging networks to power the modern electric vehicle ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                icon: Zap,
                title: 'Fast Charging',
                desc: 'Ultra Fast DC Charging speeds designed to get you back on the road in minutes.',
                color: 'text-accent bg-accent/10'
              },
              {
                icon: Globe,
                title: 'Smart Network',
                desc: 'AI-powered real-time monitoring and dynamic load distribution.',
                color: 'text-primary bg-primary/10'
              },
              {
                icon: Award,
                title: 'Reliable',
                desc: '99.9% network uptime for reliable charging when you need it.',
                color: 'text-emerald-500 bg-emerald-500/10'
              },
              {
                icon: Shield,
                title: 'Safe',
                desc: 'Compliant with international safety, ground fault protection, and surge protection standards.',
                color: 'text-rose-500 bg-rose-500/10'
              },
              {
                icon: Leaf,
                title: 'Sustainable',
                desc: '100% renewable energy integration powering clean mobility.',
                color: 'text-teal-500 bg-teal-500/10'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/40 transition-all flex flex-col items-center text-center justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Integrated EV infrastructure customized for diverse applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Public EV Charging',
                desc: 'Highway charging stations and urban fast charging hubs for travelers.',
                image: '/images/dc-fast-charging.png',
                link: '/solutions'
              },
              {
                title: 'Fleet Charging',
                desc: 'Commercial fleet depot management with centralized controls.',
                image: '/images/corporate-fleet.png',
                link: '/solutions'
              },
              {
                title: 'Home Charging',
                desc: 'Residential smart charging setups with app control and solar sync.',
                image: '/images/home-charging.png',
                link: '/solutions'
              },
              {
                title: 'Business Charging',
                desc: 'Turnkey charging solutions for hotels, shopping malls, and corporate offices.',
                image: '/images/business-fleet.png',
                link: '/solutions'
              },
              {
                title: 'Charging as a Service',
                desc: 'Subscription-based models offering hassle-free charging access for fleets.',
                image: '/images/solution-home.png',
                link: '/solutions'
              },
              {
                title: 'Smart Energy Management',
                desc: 'AI-driven energy optimization, peak shaving, and grid balancing.',
                image: '/images/business-analytics.png',
                link: '/solutions'
              }
            ].map((sol, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all flex flex-col justify-between"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={sol.image}
                    alt={sol.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{sol.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{sol.desc}</p>
                  <Link href={sol.link} className="text-accent hover:underline inline-flex items-center text-sm font-semibold gap-1">
                    Details <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Chargers Specifications Section */}
      <section className="py-24 bg-card border-t border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Chargers</h2>
            <p className="text-muted-foreground">High-performance charging stations built for longevity and speed.</p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-background border border-border p-1.5 rounded-lg flex space-x-2">
              <button
                onClick={() => setChargerTab('dc')}
                className={`px-6 py-2 rounded-md font-semibold text-sm transition-all cursor-pointer ${chargerTab === 'dc' ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground'}`}
              >
                DC Fast Chargers
              </button>
              <button
                onClick={() => setChargerTab('ac')}
                className={`px-6 py-2 rounded-md font-semibold text-sm transition-all cursor-pointer ${chargerTab === 'ac' ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground'}`}
              >
                AC Smart Chargers
              </button>
            </div>
          </div>

          <motion.div
            layout
            className="bg-background border border-border rounded-xl p-8"
          >
            {chargerTab === 'dc' ? (
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Zap className="text-accent" /> High-Power DC Chargers
                </h3>
                <p className="text-muted-foreground mb-6">Designed for highway transit and high-utilization commercial fleets.</p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {['30 kW', '60 kW', '120 kW', '180 kW', '240 kW'].map((power, idx) => (
                    <div key={idx} className="bg-card border border-border p-4 rounded-lg text-center hover:border-accent/40 transition-colors">
                      <span className="block text-xl font-bold text-accent">{power}</span>
                      <span className="text-xs text-muted-foreground mt-1 block">Ultra Fast DC</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <BatteryCharging className="text-primary" /> AC Intelligent Chargers
                </h3>
                <p className="text-muted-foreground mb-6">Optimized for residential spaces, commercial workplaces, and overnight charging.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {['7.5 kW', '11 kW', '22 kW'].map((power, idx) => (
                    <div key={idx} className="bg-card border border-border p-4 rounded-lg text-center hover:border-primary/40 transition-colors">
                      <span className="block text-xl font-bold text-primary">{power}</span>
                      <span className="text-xs text-muted-foreground mt-1 block">Smart AC Charging</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Charging Process Flow */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">How it Works</h2>
            <p className="text-muted-foreground">Five easy steps to recharge your vehicle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { num: '1', title: 'Locate Station', desc: 'Find live chargers nearby via app or web map.', image: '/images/step-locate.png' },
              { num: '2', title: 'Plug In', desc: 'Connect the smart charger cable to your EV.', image: '/images/step-plug.png' },
              { num: '3', title: 'Pay', desc: 'Scan QR and pay instantly via UPI, card, or wallet.', image: '/images/step-pay.png' },
              { num: '4', title: 'Charge', desc: 'Monitor energy flow and real-time charging status.', image: '/images/step-charge.png' },
              { num: '5', title: 'Continue', desc: 'Unplug and carry on with your sustainable journey.', image: '/images/step-drive.png' }
            ].map((step, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/45 transition-colors hover:shadow-md flex flex-col justify-between"
              >
                <div className="relative h-36 w-full bg-muted">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-md">
                    {step.num}
                  </div>
                </div>
                <div className="p-4 text-center flex-grow flex flex-col justify-center">
                  <h3 className="font-bold text-base text-foreground mb-1.5">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Businesses Choose BREVOLT Section */}
      <section className="py-24 bg-card border-t border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Businesses Choose BREVOLT</h2>
            <p className="text-muted-foreground">Unlock revenue, attract customers, and meet green goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left Side: Suitable industries */}
            <div className="bg-background border border-border rounded-xl p-8 md:col-span-1">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Building className="text-primary" /> Suitable For
              </h3>
              <ul className="space-y-3">
                {[
                  'Hotels & Resorts', 'Restaurants & Cafes',
                  'Hospitals & Clinics', 'Shopping Malls & Retail Plaza',
                  'Residential Apartments', 'Corporate Offices',
                  'Fuel Stations', 'Highways & Expressways',
                  'Government Institutions'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side: Benefits */}
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Additional Revenue', desc: 'Earn passive income from public charging fees.' },
                { title: 'Increased Footfall', desc: 'Attract premium EV owners to visit your retail space.' },
                { title: 'Green Branding', desc: 'Demonstrate active corporate sustainability commitments.' },
                { title: 'Easy Installation', desc: 'Turnkey installation, setup, and permission handled by BREVOLT.' },
                { title: '24×7 Monitoring', desc: 'Centralized network center monitoring for uninterrupted uptime.' }
              ].map((item, i) => (
                <div key={i} className="bg-background border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <CheckCircle2 className="text-emerald-500 w-5 h-5 flex-shrink-0" />
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Opportunity Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-bold uppercase tracking-wider text-sm">Partner Program</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                Become a BREVOLT Franchise Partner
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Invest in the green mobility revolution. Set up charging hubs with BREVOLT's trusted branding, cutting-edge hardware, and automated software ecosystem.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  'Complete Setup Support', 'Robust Software Platform',
                  'Marketing & Branding', 'Ongoing Maintenance',
                  'Operations & Training', 'High ROI Potential'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2 text-sm text-foreground">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/franchise" className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-blue-600 transition-colors font-semibold shadow-lg shadow-primary/20 gap-2">
                Apply Now <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden border-2 border-primary/20 shadow-2xl">
              <Image
                src="/images/city-network.png"
                alt="City Charging Network"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-24 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <span className="text-emerald-500 font-bold uppercase tracking-wider text-sm">Sustainability</span>
            <h2 className="text-4xl font-bold text-foreground mt-2 mb-4">Our Green Commitment</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We are focused on minimizing the carbon footprint of transportation through smart engineering.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
            {[
              { title: 'Renewable Energy', desc: 'Solar and wind grid integration.' },
              { title: 'Carbon Reduction', desc: 'Direct reduction of transit emissions.' },
              { title: 'Smart Distribution', desc: 'Grid balancing to protect load.' },
              { title: 'Green Mobility', desc: 'Accelerating mass EV adoption.' },
              { title: 'Future-ready Info', desc: 'Grid infrastructure ready for growth.' }
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border p-6 rounded-lg">
                <Leaf className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
                <h4 className="font-bold text-foreground text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/sustainability" className="text-emerald-500 hover:text-emerald-400 font-semibold inline-flex items-center gap-1.5">
            Carbon Offset Calculator <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Users Say</h2>
            <p className="text-muted-foreground">Trusted by drivers, fleet operators, and business owners.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'BREVOLT has cut down our fleet charging idle times by 40%. The fleet reporting dashboard is a game-changer.',
                author: 'Fleet Operator, logistics company',
                role: 'Logistics Manager'
              },
              {
                quote: 'Installing chargers at our hotel has attracted a steady stream of premium travelers. Installation was smooth.',
                author: 'Business Owner, Grand Plaza Hotel',
                role: 'Hotel GM'
              },
              {
                quote: 'The payment process is incredibly fast. Scan, UPI authorize, and charging begins instantly. Highly recommend!',
                author: 'EV Driver, Daily Commuter',
                role: 'Tesla Model 3 Owner'
              }
            ].map((t, i) => (
              <div key={i} className="bg-background border border-border rounded-xl p-8 flex flex-col justify-between">
                <div>
                  <div className="flex space-x-1 mb-4 text-amber-500">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic text-sm md:text-base leading-relaxed">"{t.quote}"</p>
                </div>
                <div className="mt-6">
                  <h4 className="font-bold text-foreground text-sm">{t.author}</h4>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-2">Latest News</h2>
              <p className="text-muted-foreground">Stay updated on EV charging launches and technology.</p>
            </div>
            <Link href="/blog" className="text-accent hover:underline font-semibold text-sm flex items-center gap-1 mt-4 md:mt-0">
              Read Blog <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'BREVOLT Launches 50 New DC Fast Stations',
                date: 'June 28, 2026',
                category: 'New Launch',
                excerpt: 'Expansion of our charging network across regional highways in the country.'
              },
              {
                title: 'AI Smart Load Balancing Firmware Update',
                date: 'June 15, 2026',
                category: 'Tech Updates',
                excerpt: 'New algorithms dynamically share grid power without risking overload.'
              },
              {
                title: 'EV Policy & Charging Subsidies Outlook',
                date: 'June 02, 2026',
                category: 'Industry News',
                excerpt: 'What the new green transit infrastructure policies mean for businesses.'
              }
            ].map((post, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <span className="text-xs text-accent font-bold uppercase tracking-wider">{post.category}</span>
                  <h3 className="font-bold text-lg text-foreground mt-2 mb-3 leading-snug">{post.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                </div>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
