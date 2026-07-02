import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SustainabilityContent from '@/components/SustainabilityContent'
import { Leaf, Droplet, Wind } from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'BREVOLT Sustainability - Green EV Charging',
  description: 'Our commitment to environmental sustainability and clean energy',
}

export default function SustainabilityPage() {
  return (
    <>
      <Navigation />
      <main className="bg-background">
        {/* Hero */}
        <section className="py-24 border-b border-border bg-gradient-to-b from-background to-card/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 text-center lg:text-left">
                <span className="text-emerald-500 font-bold uppercase tracking-wider text-sm">Eco Infrastructure</span>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground mt-2 mb-6 leading-tight">
                  Our Sustainability Commitment
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  100% of BREVOLT charging stations are powered by renewable energy sources, driving the transition to zero-emission travel.
                </p>
              </div>
              <div className="lg:col-span-5 relative h-80 rounded-xl overflow-hidden border-2 border-emerald-500/20 shadow-2xl">
                <Image
                  src="/images/sustainability-hero.png"
                  alt="Sustainable Charging Plaza"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Environmental Impact */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 relative h-96 rounded-xl overflow-hidden border border-border shadow-lg">
                <Image
                  src="/images/sustainability-impact.png"
                  alt="Clean Forest EV Charging"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="lg:col-span-7">
                <h2 className="text-4xl font-bold text-foreground mb-8">Environmental Impact</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { icon: Droplet, label: 'Water Saved', value: '50B gal', desc: 'vs. gasoline refinement' },
                    { icon: Wind, label: 'CO2 Prevented', value: '50M tons', desc: 'greenhouse gas reduction' },
                    { icon: Leaf, label: 'Clean Energy', value: '100%', desc: 'renewable source supply' },
                  ].map((item, index) => (
                    <div key={index} className="bg-card border border-border rounded-xl p-6 text-center hover:border-emerald-500 transition-colors">
                      <item.icon className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
                      <p className="text-3xl font-bold text-foreground mb-1">{item.value}</p>
                      <p className="text-sm font-semibold text-foreground mb-0.5">{item.label}</p>
                      <p className="text-muted-foreground text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Renewable Energy */}
        <section className="py-20 bg-card border-t border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Energy Sources</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { name: 'Solar', percentage: '40%' },
                { name: 'Wind', percentage: '35%' },
                { name: 'Hydro', percentage: '20%' },
                { name: 'Geothermal', percentage: '5%' },
              ].map((source, index) => (
                <div key={index} className="bg-background border border-border rounded-lg p-6 text-center">
                  <p className="text-3xl font-bold text-accent mb-2">{source.percentage}</p>
                  <p className="text-lg font-semibold text-foreground">{source.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Initiatives */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Sustainability Initiatives</h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Carbon-Neutral Operations',
                  description: 'BREVOLT is committed to achieving carbon neutrality across all operations by 2025.',
                },
                {
                  title: 'Renewable Energy Transition',
                  description: 'All new charging stations will be powered exclusively by renewable sources.',
                },
                {
                  title: 'Circular Economy',
                  description: 'Old batteries and equipment are recycled through certified programs.',
                },
                {
                  title: 'Community Programs',
                  description: 'Free charging for public transportation and community electric vehicles.',
                },
                {
                  title: 'Environmental Education',
                  description: 'Supporting research and education in sustainable transportation.',
                },
                {
                  title: 'Ocean Cleanup',
                  description: 'BREVOLT donates 1% of profits to marine conservation efforts.',
                },
              ].map((initiative, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 hover:bg-background transition-colors">
                  <h3 className="text-lg font-bold text-foreground mb-2">{initiative.title}</h3>
                  <p className="text-muted-foreground">{initiative.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Carbon Calculator Client Component */}
        <SustainabilityContent />

        {/* Certifications */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Certifications & Awards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                'ISO 14001 - Environmental Management',
                'Carbon Trust Standard',
                'Best EV Infrastructure Award 2023',
                'Green Business Bureau Certified',
                'UN Sustainable Development',
                'EV100 Member',
              ].map((cert, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
                  <Leaf className="w-8 h-8 text-accent mx-auto mb-3" />
                  <p className="text-foreground font-semibold">{cert}</p>
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
