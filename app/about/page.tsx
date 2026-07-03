import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const metadata = {
  title: 'About BREVOLT - Our Mission & Vision',
  description: 'Learn about BREVOLT\'s mission to revolutionize electric vehicle charging infrastructure',
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="py-20 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              About BREVOLT
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pioneering the future of sustainable electric vehicle charging with innovation and reliability.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/mission-vision.png"
                  alt="Our Mission & Vision"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-12">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-lg p-8 animate-fade-in">
                  <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
                  <p className="text-lg text-foreground leading-relaxed">
                    Deliver reliable, fast, and accessible charging infrastructure through innovation, AI, and customer-first experiences.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-accent/10 to-blue-700/10 border border-accent/30 rounded-lg p-8 animate-fade-in">
                  <h2 className="text-3xl font-bold text-accent mb-4">Our Vision</h2>
                  <p className="text-lg text-foreground leading-relaxed">
                    To become India&apos;s most trusted intelligent EV charging network and accelerate the global transition to sustainable mobility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-card border-t border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Innovation',
                  description: 'Continuously advancing technology to provide cutting-edge charging solutions.',
                },
                {
                  title: 'Reliability',
                  description: 'Ensuring 99.9% uptime and round-the-clock customer support.',
                },
                {
                  title: 'Sustainability',
                  description: 'Accelerating carbon reduction and green mobility with renewable energy.',
                },
                {
                  title: 'Customer Success',
                  description: 'Prioritizing driver comfort and partner ROI in every station setup.',
                },
                {
                  title: 'Safety',
                  description: 'Upholding strict international safety standards to protect users and grids.',
                },
                {
                  title: 'Integrity',
                  description: 'Operating with transparency, security, and trust for all stakeholders.',
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="p-6 bg-background border border-border rounded-lg text-center hover:border-primary transition-colors"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-b from-background to-card/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Leadership Team</h2>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto">Meet the visionary leaders driving the EV charging revolution</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Sarah Johnson',
                  role: 'CEO & Co-Founder',
                  bio: '15+ years in renewable energy and electric mobility',
                },
                {
                  name: 'Michael Chen',
                  role: 'CTO & Co-Founder',
                  bio: 'Former lead engineer at major EV manufacturer',
                },
                {
                  name: 'Emma Rodriguez',
                  role: 'Chief Sustainability Officer',
                  bio: 'Environmental scientist with global impact initiatives',
                },
              ].map((member, index) => (
                <div key={index} className="bg-card border-2 border-primary/40 rounded-lg p-8 text-center hover:border-primary transition-colors hover:shadow-lg hover:shadow-primary/20">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 border-4 border-primary/20" />
                  <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-accent text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Journey</h2>
            <div className="space-y-8">
              {[
                { year: '2019', title: 'Founded', description: 'BREVOLT is established with a vision to revolutionize EV charging' },
                { year: '2020', title: 'First Stations', description: 'Opened 500 charging stations across major cities' },
                { year: '2021', title: 'Global Expansion', description: 'Launched operations in 15 countries' },
                { year: '2022', title: 'App Launch', description: 'Released BREVOLT mobile app with 100K+ downloads' },
                { year: '2023', title: 'Milestone', description: 'Reached 5,000 stations and 1M+ EVs charged' },
                { year: '2024', title: 'Innovation', description: 'Introduced ultra-fast 350kW charging technology' },
              ].map((event, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                    {index < 5 && <div className="w-1 h-12 bg-border mt-2" />}
                  </div>
                  <div className="pb-8">
                    <p className="text-accent font-bold">{event.year}</p>
                    <h3 className="text-xl font-semibold text-foreground">{event.title}</h3>
                    <p className="text-muted-foreground mt-1">{event.description}</p>
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
