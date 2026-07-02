import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Globe, Navigation2, TrendingUp, Clock } from 'lucide-react'

export const metadata = {
  title: 'BREVOLT Global Charging Network',
  description: 'Access thousands of charging stations worldwide',
}

export default function ChargingNetworkPage() {
  return (
    <>
      <Navigation />
      <main className="bg-background">
        {/* Hero */}
        <section className="py-20 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Global Charging Network
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access thousands of charging stations across the world with seamless connectivity.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: Globe, label: 'Countries', value: '45+', color: 'primary' },
                { icon: TrendingUp, label: 'Stations', value: '5,000+', color: 'accent' },
                { icon: Clock, label: 'Avg Wait Time', value: '2 min', color: 'primary' },
                { icon: Navigation2, label: 'Coverage', value: '98%', color: 'accent' },
              ].map((stat, index) => (
                <div key={index} className={`bg-card border-2 rounded-lg p-8 text-center hover:shadow-lg transition-all ${stat.color === 'primary' ? 'border-primary/50 hover:border-primary' : 'border-accent/50 hover:border-accent'}`}>
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 ${stat.color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'}`}>
                    <stat.icon className={`w-8 h-8 ${stat.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                  <p className={`text-4xl font-bold ${stat.color === 'primary' ? 'text-primary' : 'text-accent'}`}>{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage by Region with Global Map */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-background to-accent/10 border-t-2 border-primary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 rounded-lg overflow-hidden border-2 border-primary/40 shadow-xl">
                <Image
                  src="/images/network-global.png"
                  alt="Global Network Coverage"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-8">Coverage by Region</h2>
                <div className="space-y-4">
                  {[
                    { region: 'Europe', stations: '2,500+', countries: '20+', color: 'primary' },
                    { region: 'Asia Pacific', stations: '1,500+', countries: '15+', color: 'accent' },
                    { region: 'North America', stations: '1,000+', countries: '3', color: 'primary' },
                  ].map((item, index) => (
                    <div key={index} className={`bg-card border-2 rounded-lg p-6 ${item.color === 'primary' ? 'border-primary/50 hover:border-primary' : 'border-accent/50 hover:border-accent'} hover:shadow-md transition-all`}>
                      <h3 className="text-lg font-bold text-foreground mb-2">{item.region}</h3>
                      <p className={`text-2xl font-bold mb-1 ${item.color === 'primary' ? 'text-primary' : 'text-accent'}`}>{item.stations}</p>
                      <p className="text-muted-foreground text-sm">{item.countries} countries operational</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Major Cities */}
        <section className="py-20 bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Largest Coverage in Major Cities</h2>
              <p className="text-center text-muted-foreground">200+ charging stations in each of these urban hubs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { city: 'London', country: 'UK' },
                { city: 'Paris', country: 'France' },
                { city: 'Berlin', country: 'Germany' },
                { city: 'Amsterdam', country: 'Netherlands' },
                { city: 'Tokyo', country: 'Japan' },
                { city: 'Singapore', country: 'Singapore' },
                { city: 'New York', country: 'USA' },
                { city: 'Los Angeles', country: 'USA' },
                { city: 'Toronto', country: 'Canada' },
                { city: 'Sydney', country: 'Australia' },
                { city: 'Dubai', country: 'UAE' },
                { city: 'Mumbai', country: 'India' },
              ].map((item, index) => (
                <div key={index} className={`bg-card border-2 rounded-lg p-6 text-center hover:shadow-md transition-all cursor-pointer ${index % 2 === 0 ? 'border-primary/50 hover:border-primary' : 'border-accent/50 hover:border-accent'}`}>
                  <p className="text-lg font-semibold text-foreground">{item.city}</p>
                  <p className={`text-xs font-medium mb-2 ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`}>{item.country}</p>
                  <p className="text-sm text-muted-foreground">200+ stations</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Network Features */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5 border-t-2 border-primary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Network Features</h2>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto">Advanced infrastructure designed for reliability, speed, and user convenience</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Real-Time Availability',
                  description: 'Check station status and charger availability in real-time through our mobile app or website.',
                  icon: '⚡',
                },
                {
                  title: 'Reservation System',
                  description: 'Reserve a charger up to 2 hours in advance to ensure it\'s available when you arrive.',
                  icon: '📱',
                },
                {
                  title: 'Smart Routing',
                  description: 'Our algorithm finds the fastest route to available charging stations based on real-time data.',
                  icon: '🗺️',
                },
                {
                  title: 'Maintenance Tracking',
                  description: 'All stations are monitored 24/7 with predictive maintenance to ensure optimal performance.',
                  icon: '🔧',
                },
                {
                  title: 'Weather-Resistant',
                  description: 'All outdoor chargers are fully weather-resistant and rated for extreme conditions.',
                  icon: '🛡️',
                },
                {
                  title: 'Accessibility First',
                  description: 'Wheelchair accessible, well-lit, and safe charging locations in all our stations.',
                  icon: '♿',
                },
              ].map((feature, index) => (
                <div key={index} className={`bg-card border-2 rounded-lg p-6 hover:shadow-md transition-all ${index % 2 === 0 ? 'border-primary/50 hover:border-primary' : 'border-accent/50 hover:border-accent'}`}>
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expansion Plans */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">2024-2025 Expansion Plans</h2>
            <div className="space-y-6">
              {[
                { year: '2024 Q2', goal: 'Expand to 6,000 stations', status: '85% complete' },
                { year: '2024 Q3', goal: 'Launch in 10 new countries', status: 'In progress' },
                { year: '2024 Q4', goal: 'Deploy 350kW ultra-fast chargers in 50 cities', status: 'Planned' },
                { year: '2025 Q1', goal: 'Reach 8,000 stations globally', status: 'Planned' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
                  <div>
                    <p className="text-accent font-semibold">{item.year}</p>
                    <p className="text-lg font-semibold text-foreground">{item.goal}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{item.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
