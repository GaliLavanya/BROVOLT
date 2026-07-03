import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { BarChart3, Users, Zap, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'BREVOLT for Business - Fleet & Enterprise Solutions',
  description: 'Enterprise EV charging solutions for businesses and fleet operators',
}

export default function BusinessPage() {
  return (
    <>
      <Navigation />
      <main className="bg-background">
        {/* Hero */}
        <section className="py-20 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Business Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive EV charging management for corporations, fleet operators, and municipalities.
            </p>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gradient-to-b from-background to-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold text-foreground mb-4">Perfect For</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Whether you run a delivery fleet or public transit, BREVOLT adapts to your business needs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Users,
                  title: 'Corporate Fleet',
                  description: 'Manage charging for company vehicles with centralized billing and reporting.',
                  benefits: ['Reduced operating costs', 'Simplified billing', 'Carbon tracking'],
                  image: '/images/corporate-fleet.png',
                },
                {
                  icon: Zap,
                  title: 'Taxi & Ride-Sharing',
                  description: 'Optimize charging for high-utilization vehicles with fast turnaround times.',
                  benefits: ['Maximize uptime', 'Quick charges', 'Priority support'],
                  image: '/images/taxi-sharing.png',
                },
                {
                  icon: BarChart3,
                  title: 'Delivery Services',
                  description: 'Keep your last-mile delivery fleet charged and ready for daily operations.',
                  benefits: ['Route optimization', 'Fleet analytics', 'Predictive maintenance'],
                  image: '/images/delivery-services.png',
                },
                {
                  icon: TrendingUp,
                  title: 'Public Transit',
                  description: 'Infrastructure solutions for buses, trucks, and public EV fleets.',
                  benefits: ['Depot charging', 'Quick charge hubs', 'Grid integration'],
                  image: '/images/public-transit.png',
                },
              ].map((useCase, index) => (
                <div key={index} className={`bg-card border-2 rounded-lg hover:shadow-lg transition-all overflow-hidden flex flex-col justify-between ${index % 2 === 0 ? 'border-primary/50 hover:border-primary' : 'border-accent/50 hover:border-accent'}`}>
                  <div>
                    <div className="relative h-60 w-full">
                      <Image
                        src={useCase.image}
                        alt={useCase.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${index % 2 === 0 ? 'bg-primary/20' : 'bg-accent/20'}`}>
                          <useCase.icon className={`w-6 h-6 ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`} />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">{useCase.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{useCase.description}</p>
                      <ul className="space-y-2">
                        {useCase.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${index % 2 === 0 ? 'bg-primary' : 'bg-accent'}`} />
                            <span className="text-foreground text-sm font-medium">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet Image Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 border-t-2 border-primary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 rounded-lg overflow-hidden border-2 border-primary/40 shadow-xl">
                <Image
                  src="/images/business-fleet.png"
                  alt="Fleet Management"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Smart Fleet Management</h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  Monitor all your electric vehicles in real-time with our advanced fleet management platform. Track charging status, optimize routes, and reduce operational costs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">Real-time vehicle location and battery status</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">Predictive charging recommendations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">Automated maintenance alerts</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">ROI calculator and savings reports</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20 bg-card border-t border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Platform Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Fleet Management Dashboard',
                  features: [
                    'Real-time vehicle tracking',
                    'Charging status monitoring',
                    'Usage analytics and reporting',
                    'Cost allocation by vehicle/driver',
                  ],
                },
                {
                  title: 'Billing & Payment',
                  features: [
                    'Automated invoicing',
                    'Multiple payment methods',
                    'Chargeback management',
                    'Custom billing cycles',
                  ],
                },
                {
                  title: 'Integration & API',
                  features: [
                    'REST API for developers',
                    'Telematics system integration',
                    'Third-party tools compatibility',
                    'Custom workflows',
                  ],
                },
                {
                  title: 'Support & Operations',
                  features: [
                    '24/7 dedicated support',
                    'Maintenance scheduling',
                    'Incident management',
                    'Training & onboarding',
                  ],
                },
              ].map((feature, index) => (
                <div key={index} className="bg-background border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">{feature.title}</h3>
                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="w-1 h-1 bg-accent rounded-full" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Financial Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  metric: '40%',
                  description: 'Lower fuel costs vs. gasoline',
                },
                {
                  metric: '30%',
                  description: 'Maintenance cost reduction',
                },
                {
                  metric: '25%',
                  description: 'Tax incentives available',
                },
              ].map((item, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-8 text-center hover:bg-background transition-colors">
                  <p className="text-5xl font-bold text-accent mb-4">{item.metric}</p>
                  <p className="text-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-card border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  company: 'Global Logistics Inc.',
                  industry: 'Last-Mile Delivery',
                  result: '200 vehicles', 
                  quote: 'BREVOLT helped us transition our entire fleet to electric and save millions in fuel costs.',
                },
                {
                  company: 'Metro Transit Authority',
                  industry: 'Public Transportation',
                  result: '500 buses',
                  quote: 'The infrastructure and support from BREVOLT made our transition seamless.',
                },
                {
                  company: 'Urban Mobility Corp',
                  industry: 'Ride-Sharing',
                  result: '5,000 vehicles',
                  quote: 'BREVOLT\'s platform keeps our fleet charged and our drivers happy.',
                },
              ].map((item, index) => (
                <div key={index} className="bg-background border border-border rounded-lg p-8 hover:border-primary transition-colors">
                  <p className="text-accent font-semibold mb-2">{item.industry}</p>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.company}</h3>
                  <p className="text-2xl font-bold text-accent mb-4">{item.result}</p>
                  <p className="text-muted-foreground italic mb-4">&quot;{item.quote}&quot;</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary to-blue-700 rounded-lg p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Fleet?</h2>
              <p className="text-xl text-blue-100 mb-8">Let\'s discuss how BREVOLT can optimize your operations.</p>
              <Link href="/contact?subject=Demo" className="inline-block px-8 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center">
                Schedule a Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
