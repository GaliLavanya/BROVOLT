'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Zap, Building2, Home, TrendingUp, X, 
  Check, ShieldCheck, Cpu, BatteryCharging, 
  MapPin, Settings, Server, Activity
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface SpecItem {
  label: string;
  val: string;
}

interface SolutionDetails {
  title: string;
  description: string;
  icon: any;
  color: string;
  specs: SpecItem[];
  features: string[];
}

const solutionsData: Record<
  'public' | 'fleet' | 'commercial' | 'home' | 'highway' | 'caas' | 'energy' | 'battery', 
  SolutionDetails
> = {
  public: {
    title: 'Public EV Charging',
    description: 'City-center hubs designed for fast, convenient charging on-the-go. These stations serve urban EV owners and daily commuters with high safety and modern amenities.',
    icon: BatteryCharging,
    color: 'text-primary bg-primary/10 border-primary/20',
    specs: [
      { label: 'Power Output', val: '50kW - 150kW DC' },
      { label: 'Efficiency', val: '95.5% peak' },
      { label: 'Authentication', val: 'RFID, QR Scan, Auto-Charge' },
      { label: 'Accessibility', val: '24/7 public access' },
    ],
    features: [
      'Multi-protocol compatibility (CCS2, NACS)',
      'Integrated touch-screen interactive GUI',
      'Dual active cooling for stable power output',
      'LED status and occupancy indicator lights',
    ],
  },
  fleet: {
    title: 'Fleet Charging Solutions',
    description: 'Custom-built logistics charging systems designed for commercial fleets, delivery vans, and ride-sharing operations. Optimizes dispatch schedules and fleet energy use.',
    icon: Building2,
    color: 'text-accent bg-accent/10 border-accent/20',
    specs: [
      { label: 'Station Options', val: 'AC 22kW, DC 60kW - 180kW' },
      { label: 'Software Integration', val: 'Fleet API, OCPP 2.0.1' },
      { label: 'Management', val: 'Real-time battery telemetry' },
      { label: 'Uptime SLA', val: '99.9% guaranteed' },
    ],
    features: [
      'Automated dispatch and charge queuing',
      'Custom API for vehicle-to-cloud telemetry sync',
      'Sequential charger power sharing for energy conservation',
      'Anti-theft secure locked-cable mechanisms',
    ],
  },
  commercial: {
    title: 'Commercial Charging',
    description: 'Turnkey charging infrastructure tailored for malls, hospitality venues, offices, and retail parking. Attracts premium customers and yields retail stay longevity.',
    icon: TrendingUp,
    color: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
    specs: [
      { label: 'Charger Config', val: 'Wallbox or dual Pedestal' },
      { label: 'Billing Tools', val: 'Multi-tariff payment gate' },
      { label: 'Power Config', val: 'Dynamic load balancing' },
      { label: 'Hardware Class', val: 'Rugged NEMA 4 rating' },
    ],
    features: [
      'Customizable retail promotion screen options',
      'Split-billing and tenant utility reporting',
      'Integration with building management software (BMS)',
      'Weather-resistant casing for driveways or garages',
    ],
  },
  home: {
    title: 'Home Charging Systems',
    description: 'Intelligent residential chargers designed for modern garages and driveway ports. Integrates with solar setups to charge your car using zero-emissions green power.',
    icon: Home,
    color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    specs: [
      { label: 'Charging Capacity', val: '7.4kW - 22kW AC' },
      { label: 'Cable Length', val: '5 meters standard (7m option)' },
      { label: 'Smart Features', val: 'Solar sync, peak-shaving scheduling' },
      { label: 'Safety Protections', val: 'Residual current detection (RCD)' },
    ],
    features: [
      'Mobile app control with schedule automation',
      'Solar eco-charge mode to charge solely from excess PV',
      'Sleek wall-mounting design with minimal footprint',
      'OTA (Over-The-Air) firmware updates via home Wi-Fi',
    ],
  },
  highway: {
    title: 'Highway Fast Plazas',
    description: 'High-power charging corridors designed to support rapid inter-city travel. Built with liquid-cooled systems for continuous maximum power output during back-to-back charges.',
    icon: Zap,
    color: 'text-rose-500 bg-rose-500/10 border-rose-500/20',
    specs: [
      { label: 'Max Output', val: '240kW - 350kW DC' },
      { label: 'Liquid Cooling', val: 'Integrated active chiller' },
      { label: 'Plug Standard', val: 'CCS2 / NACS dual-connectors' },
      { label: 'Solar Canopy', val: 'Available optional canopy sync' },
    ],
    features: [
      '0-80% charging in under 20 minutes',
      'Heavy-duty industrial steel enclosures',
      'Liquid-cooled high-performance cables',
      'Integrated security cameras and emergency cutoff',
    ],
  },
  caas: {
    title: 'Charging as a Service',
    description: 'Zero upfront capital subscription models for fleet operators. BREVOLT handles installation, site licensing, energy procurement, maintenance, and grid connections.',
    icon: Server,
    color: 'text-violet-500 bg-violet-500/10 border-violet-500/20',
    specs: [
      { label: 'Capital Expense', val: '$0 upfront Capex' },
      { label: 'Opex Model', val: 'Monthly predictable billing' },
      { label: 'Service Level', val: 'Priority hardware swap' },
      { label: 'Network Support', val: 'Dedicated customer account manager' },
    ],
    features: [
      'Complete turnkey installation and design',
      'Full preventative and predictive maintenance',
      'Guaranteed SLA on charger network availability',
      'Software platform licenses included',
    ],
  },
  energy: {
    title: 'Smart Energy Management',
    description: 'AI-driven cloud software that optimizes power grids, reduces high energy demand fees, and handles peak-load shaving dynamically.',
    icon: Settings,
    color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    specs: [
      { label: 'Algorithm Class', val: 'AI prediction neural net' },
      { label: 'Grid Feed', val: 'V2G (Vehicle-to-grid) ready' },
      { label: 'Protocols', val: 'OpenADR 2.0b, OCPP 2.0.1' },
      { label: 'Savings Margin', val: '20% to 35% on peak rates' },
    ],
    features: [
      'Real-time building and grid load telemetry',
      'Peak tariff detection and automated power restriction',
      'Coordinated dispatch cycles for multi-unit systems',
      'Micro-grid and battery storage syncing',
    ],
  },
  battery: {
    title: 'Battery Analytics',
    description: 'Advanced cloud diagnostics monitoring the state-of-health (SoH) of electric vehicle batteries during fast charging cycles to ensure battery cell longevity.',
    icon: Activity,
    color: 'text-teal-500 bg-teal-500/10 border-teal-500/20',
    specs: [
      { label: 'Analysis Class', val: 'Electrochemical model sync' },
      { label: 'Risk Protection', val: 'Thermal runaway prediction' },
      { label: 'Telemetry Rate', val: 'Every 5 seconds active scan' },
      { label: 'Health Report', val: 'Detailed cell degradation charts' },
    ],
    features: [
      'Predictive thermal alert triggers during charging',
      'Cell balancing status estimation',
      'Historical cell degradation trajectory mapping',
      'Dynamic power tailoring based on real-time cell state',
    ],
  },
}

export default function SolutionsContent() {
  const [activeSpec, setActiveSpec] = useState<keyof typeof solutionsData | null>(null)

  const activeData = activeSpec ? solutionsData[activeSpec] : null

  return (
    <>
      <main className="bg-background">
        {/* Hero */}
        <section className="py-20 border-b border-border bg-gradient-to-b from-background to-card/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-primary font-bold uppercase tracking-wider text-sm">Our Portfolio</span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mt-2 mb-6">
              Solutions for Every Use Case
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From personal vehicles to enterprise public corridors, BREVOLT provides premium EV charging infrastructure.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { key: 'public', img: '/images/dc-fast-charging.png', title: 'Public Charging', desc: 'Fast charging hubs in cities and transit corridors.' },
                { key: 'fleet', img: '/images/corporate-fleet.png', title: 'Fleet Charging', desc: 'Centralized depot charging for logistics and taxis.' },
                { key: 'commercial', img: '/images/business-fleet.png', title: 'Commercial Charging', desc: 'EV charging points for workspaces, hotels, and retail malls.' },
                { key: 'home', img: '/images/home-charging.png', title: 'Home Charging', desc: 'Convenient and smart charging units for private driveways.' },
                { key: 'highway', img: '/images/city-network.png', title: 'Highway Charging', desc: 'High-power 350kW liquid-cooled charger plazas.' },
                { key: 'caas', img: '/images/solution-home.png', title: 'Charging as a Service', desc: 'Predictive subscription model with zero setup capital.' },
                { key: 'energy', img: '/images/business-analytics.png', title: 'Energy Management', desc: 'AI-driven load balancing and solar canopy sync.' },
                { key: 'battery', img: '/images/team-about.png', title: 'Battery Analytics', desc: 'State-of-health diagnostics and cell monitoring.' },
              ].map((item) => {
                const data = solutionsData[item.key as keyof typeof solutionsData]
                return (
                  <div key={item.key} className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all flex flex-col justify-between hover:shadow-lg">
                    <div>
                      <div className="relative h-48 w-full">
                        <Image
                          src={item.img}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center space-x-2.5 mb-3">
                          <div className={`p-1.5 rounded-lg border ${data.color}`}>
                            <data.icon size={20} />
                          </div>
                          <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <div className="px-6 pb-6">
                      <button
                        onClick={() => setActiveSpec(item.key as keyof typeof solutionsData)}
                        className="text-accent hover:text-orange-400 font-semibold text-sm flex items-center gap-1.5 cursor-pointer"
                      >
                        Learn more →
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Enterprise Callout */}
        <section className="py-20 bg-card border-t border-border">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Need a Custom Fleet Configuration?</h2>
            <p className="text-muted-foreground mb-8">Speak to our EV infrastructure planning team to design a depot for your business.</p>
            <Link href="/contact?subject=Enterprise" className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-blue-600 transition-colors font-semibold shadow-lg shadow-primary/30">
              Get in Touch
            </Link>
          </div>
        </section>
      </main>

      {/* Specifications Details Modal */}
      <AnimatePresence>
        {activeData && (
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
                <div className="flex items-center space-x-2">
                  <div className={`p-1.5 rounded-lg border flex items-center justify-center ${activeData.color}`}>
                    <activeData.icon className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-lg text-foreground">{activeData.title}</span>
                </div>
                <button
                  onClick={() => setActiveSpec(null)}
                  className="p-1 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-2">System Overview</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {activeData.description}
                  </p>
                </div>

                {/* Technical Specifications */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-1.5">
                    <Cpu size={16} /> Technical Specifications
                  </h4>
                  <div className="bg-muted/30 border border-border rounded-lg overflow-hidden">
                    <table className="w-full text-left border-collapse">
                      <tbody>
                        {activeData.specs.map((spec, i) => (
                          <tr key={i} className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">
                            <td className="p-3 font-semibold text-foreground text-xs md:text-sm w-1/3 border-r border-border/50 bg-muted/10">{spec.label}</td>
                            <td className="p-3 text-muted-foreground text-xs md:text-sm">{spec.val}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-500 mb-3 flex items-center gap-1.5">
                    <ShieldCheck size={16} /> Key Features & Safe Guards
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs md:text-sm">
                    {activeData.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Check size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="bg-muted/30 px-6 py-4 border-t border-border flex justify-end space-x-2">
                <Link
                  href="/contact"
                  onClick={() => setActiveSpec(null)}
                  className="px-4 py-2 border border-border text-foreground hover:bg-muted font-semibold rounded-lg transition-colors text-sm"
                >
                  Inquire Installation
                </Link>
                <button
                  onClick={() => setActiveSpec(null)}
                  className="px-5 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-blue-600 transition-colors cursor-pointer text-sm shadow-md"
                >
                  Got It
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
