import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Check } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'BREVOLT Pricing - Affordable EV Charging',
  description: 'Transparent and competitive pricing for all BREVOLT services',
}

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <main className="bg-background">
        {/* Hero */}
        <section className="py-20 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              No hidden fees. Pay only for what you use.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Pay Per Charge',
                  price: 'From $2.50',
                  desc: 'For occasional users',
                  features: [
                    'No subscription required',
                    'Use any public charger',
                    'In-app payment',
                    'Access to 5,000+ stations',
                  ],
                },
                {
                  name: 'Monthly Pass',
                  price: '$29.99',
                  desc: 'Most popular',
                  features: [
                    '20% discount on all charges',
                    'Priority access to chargers',
                    'Free reservations',
                    'Priority support',
                    'Monthly analytics report',
                    'Exclusive partner offers',
                  ],
                  highlight: true,
                },
                {
                  name: 'Annual Pass',
                  price: '$299',
                  desc: 'Best value',
                  features: [
                    '30% discount on all charges',
                    'VIP priority access',
                    'Free reservations',
                    '24/7 dedicated support',
                    'Monthly analytics report',
                    'Exclusive partner offers',
                  ],
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-lg p-8 flex flex-col border transition-all ${
                    plan.highlight
                      ? 'bg-card border-primary scale-105 md:scale-100'
                      : 'bg-card border-border hover:border-primary'
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        Recommended
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-accent mb-4">{plan.desc}</p>
                  <p className="text-4xl font-bold text-foreground mb-6">
                    {plan.price}
                    <span className="text-lg text-muted-foreground">/month</span>
                  </p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Check size={18} className="text-accent flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/contact?plan=${encodeURIComponent(plan.name)}`}
                    className={`px-6 py-3 rounded-lg font-semibold transition-colors w-full text-center block ${
                      plan.highlight
                        ? 'bg-primary text-primary-foreground hover:bg-blue-600'
                        : 'bg-card border-2 border-primary text-primary hover:bg-primary/10'
                    }`}
                  >
                    Choose Plan
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rates */}
        <section className="py-20 bg-card border-t border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Charging Rates</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { type: 'DC Fast Charging', rate: '$0.35/kWh', desc: '350kW stations' },
                { type: 'AC Level 2', rate: '$0.20/kWh', desc: '7-50kW stations' },
                { type: 'Home Charging', rate: '$0.12/kWh', desc: 'Home installation' },
              ].map((rate, index) => (
                <div key={index} className="bg-background border border-border rounded-lg p-6 text-center">
                  <p className="font-semibold text-foreground mb-2">{rate.type}</p>
                  <p className="text-3xl font-bold text-accent mb-2">{rate.rate}</p>
                  <p className="text-muted-foreground text-sm">{rate.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Pricing FAQs</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Can I cancel my subscription anytime?',
                  a: 'Yes, you can cancel your subscription at any time without penalties.',
                },
                {
                  q: 'Are there any additional fees?',
                  a: 'No hidden fees. The only charges are for the actual electricity used and any applicable network fees.',
                },
                {
                  q: 'What is included in the pass?',
                  a: 'Passes include discounts on charging, priority access, and customer support. Electricity and network fees apply.',
                },
              ].map((faq, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <p className="font-bold text-foreground mb-2">{faq.q}</p>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Ready to get started?</h2>
            <Link href="/contact" className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-blue-600 transition-colors font-semibold">
              Contact Our Team
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
