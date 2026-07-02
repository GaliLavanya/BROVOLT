'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

function ContactPageInner() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const searchParams = useSearchParams()

  useEffect(() => {
    const plan = searchParams.get('plan')
    const subject = searchParams.get('subject')

    let prefilledMessage = ''
    if (plan) {
      prefilledMessage = `Hi BREVOLT Team,\n\nI would like to request more information about the "${plan}" charging subscription plan. Please let me know the next steps to get started.\n\nThank you!`
    } else if (subject === 'Enterprise') {
      prefilledMessage = `Hi BREVOLT Team,\n\nI am reaching out regarding your Enterprise & Fleet Charging Solutions. We would like to discuss a customized deployment for our corporate fleet. Please have a sales manager contact us.\n\nThank you!`
    } else if (subject === 'Demo') {
      prefilledMessage = `Hi BREVOLT Team,\n\nI would like to schedule a personalized demo of the BREVOLT Fleet Management dashboard and analytics platform.\n\nThank you!`
    }

    if (prefilledMessage) {
      setFormData((prev) => ({
        ...prev,
        message: prefilledMessage,
      }))
    }
  }, [searchParams])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', phone: '', company: '', message: '' })
    alert('Thank you! We have received your inquiry and will get back to you shortly.')
  }

  return (
    <>
      <Navigation />
      <main className="bg-background">
        {/* Hero */}
        <section className="py-12 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? Our team is here to help you find the perfect charging solution.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="pt-8 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'hello@brevolt.com',
                  description: 'We reply within 24 hours',
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  content: '+1 (234) 567-890',
                  description: 'Available 24/7',
                },
                {
                  icon: MapPin,
                  title: 'Address',
                  content: '123 Electric Way',
                  description: 'Tesla City, TC 10001',
                },
              ].map((info, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-4 text-center">
                  <info.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                  <h3 className="text-base font-bold text-foreground mb-1">{info.title}</h3>
                  <p className="text-foreground font-semibold text-sm mb-0.5">{info.content}</p>
                  <p className="text-muted-foreground text-xs">{info.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in">
              {/* Info (Left Side) */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Contact Options</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Sales Inquiry</p>
                        <p className="text-muted-foreground text-sm">sales@brevolt.com</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Technical Support</p>
                        <p className="text-muted-foreground text-sm">support@brevolt.com</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Partnership</p>
                        <p className="text-muted-foreground text-sm">partners@brevolt.com</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 shadow-md shadow-black/5">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-5 h-5 text-accent" />
                    <h4 className="font-semibold text-foreground">Business Hours</h4>
                  </div>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM CET</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM CET</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                    <li className="pt-2 border-t border-border mt-2">
                      24/7 Emergency Support Available
                    </li>
                  </ul>
                </div>
              </div>

              {/* Form (Right Side - Card Style) */}
              <div className="bg-card border border-border rounded-lg p-6 shadow-xl shadow-black/5">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-foreground font-semibold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-foreground font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-foreground font-semibold mb-2">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-foreground font-semibold mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-foreground font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-blue-600 transition-colors font-semibold shadow-md cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ CTA */}
        <section className="py-20 bg-card border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mb-8">Find quick answers to common questions about BREVOLT services.</p>
            <Link
              href="/faq"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-blue-600 transition-colors font-semibold shadow-md text-center"
            >
              View FAQ
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex flex-col items-center justify-center text-foreground">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
        <span className="font-semibold text-lg">Loading contact page...</span>
      </div>
    }>
      <ContactPageInner />
    </Suspense>
  )
}
