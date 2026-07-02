'use client'

import { useState } from 'react'
import { Calendar, User, X, Clock, BookOpen } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Post {
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  readTime: string
  content: string
}

const posts: Post[] = [
  {
    title: 'The Future of EV Charging Infrastructure',
    excerpt: 'Exploring the latest innovations in charging technology and network expansion.',
    date: 'December 15, 2024',
    author: 'Sarah Johnson',
    category: 'Technology',
    readTime: '5 min read',
    content: `As electric vehicle (EV) adoption accelerates globally, the demand for reliable, fast, and accessible charging infrastructure has never been higher. At BREVOLT, we are at the forefront of this transition, deploying next-generation 350kW DC fast chargers along major highways and key urban corridors.

Our focus is not just on speed, but also on reliability and smart energy integration. By utilizing local energy storage systems and smart grid capabilities, we can reduce peak load demands while ensuring that every vehicle charges at its maximum potential rate. 

In the coming years, we plan to implement automated plug-and-charge capabilities, allowing drivers to simply connect their vehicle and start charging without needing to swipe a card or open an app. The future of EV charging is seamless, automated, and deeply integrated into our smart energy grids.`,
  },
  {
    title: 'How to Maximize Your EV Battery Life',
    excerpt: 'Best practices for charging habits that extend your electric vehicle battery lifespan.',
    date: 'December 10, 2024',
    author: 'Michael Chen',
    category: 'Tips & Tricks',
    readTime: '4 min read',
    content: `Lithium-ion batteries power the majority of modern electric vehicles. While these batteries are highly sophisticated and designed to last for hundreds of thousands of miles, your daily charging habits play a crucial role in maintaining their health over time.

Here are three simple tips to maximize battery longevity:

1. Keep it between 20% and 80%: Charging to 100% or letting the battery drop to 0% frequently stresses the battery cells. For daily driving, set your vehicle's charge limit to 80%.
2. Limit DC fast charging: While DC fast chargers are convenient for road trips, regular exposure to high currents and heat can accelerate degradation. Use AC Level 2 charging for your daily overnight needs.
3. Avoid extreme temperatures: Whenever possible, park in shaded areas or garages during hot summer days and plug in during cold winter nights to allow the battery thermal management system to regulate temperature.`,
  },
  {
    title: 'BREVOLT Reaches 5,000 Charging Stations Milestone',
    excerpt: 'Celebrating our expansion to over 5,000 stations globally with 1 million vehicles charged.',
    date: 'December 5, 2024',
    author: 'Emma Rodriguez',
    category: 'News',
    readTime: '3 min read',
    content: `We are thrilled to announce that BREVOLT has officially deployed its 5,000th charging station! This milestone represents a monumental step forward in our mission to build a reliable, green, and global charging network.

Over the past year, we have expanded operational coverage in key markets across Europe, Asia Pacific, and North America. This expansion has enabled over 1 million unique charging sessions and saved an estimated 50,000 tons of CO2 emissions compared to gasoline vehicles. 

We want to thank our loyal drivers, hosting partners, and team members for making this achievement possible. We are already looking ahead to our next goal of 10,000 stations by the end of next year.`,
  },
  {
    title: 'Environmental Impact of Switching to Electric',
    excerpt: 'Understanding the real environmental benefits of transitioning to EV charging.',
    date: 'November 28, 2024',
    author: 'Sarah Johnson',
    category: 'Sustainability',
    readTime: '6 min read',
    content: `A common question among skeptics is: Are electric vehicles actually cleaner than gasoline cars, especially if the electricity grid is powered by coal or natural gas?

The answer is a resounding yes, and the benefits grow even larger when you charge with BREVOLT. Our entire global network is powered by 100% certified renewable energy, including wind, solar, and hydro-electric plants. This means that every mile you drive powered by a BREVOLT station is completely carbon-free.

Even on a traditional grid powered partly by fossil fuels, EVs are significantly more efficient than internal combustion engines. A typical EV converts over 77% of the electrical energy from the grid to power at the wheels, whereas conventional gasoline vehicles only convert about 12% to 30% of the energy stored in gasoline. By transitioning to electric mobility, we can drastically reduce urban air pollution and combat global climate change.`,
  },
  {
    title: 'Business Guide: Setting Up Fleet Charging',
    excerpt: 'Complete guide for businesses planning to transition their fleet to electric vehicles.',
    date: 'November 20, 2024',
    author: 'Michael Chen',
    category: 'Business',
    readTime: '8 min read',
    content: `For businesses operating a fleet of vehicles, transitioning to electric is no longer just a sustainability goal—it's a financial and operational advantage. Lower maintenance costs, reduced fuel expenses, and government tax incentives make fleet electrification highly lucrative.

However, setting up fleet charging infrastructure requires careful planning. Business managers must consider utility power capacity, charger types (AC vs. DC), scheduling, and software integrations. 

BREVOLT provides an end-to-end suite of enterprise solutions, starting from site assessment and hardware installation to real-time analytics dashboards. Our management platform allows you to optimize charging schedules, track carbon offsets, and control energy costs dynamically based on peak grid pricing.`,
  },
  {
    title: 'New 350kW Ultra-Fast Charging Now Available',
    excerpt: 'BREVOLT launches next-generation charging technology for faster highway charging.',
    date: 'November 15, 2024',
    author: 'Emma Rodriguez',
    category: 'Technology',
    readTime: '4 min read',
    content: `Speed is one of the most critical factors for EV drivers on long-distance journeys. Today, BREVOLT is proud to launch our next-generation 350kW ultra-fast DC chargers, now rolling out across major highway corridors.

Equipped with liquid-cooled cables and advanced power-sharing technology, these chargers can deliver up to 200 miles of range in just 10 to 15 minutes of charging, depending on the vehicle's capability. They are fully compatible with 800-volt battery architectures found in the latest high-performance EVs. 

With this deployment, we aim to eliminate charging anxiety and make long-distance electric travel as fast and seamless as refueling at traditional gas stations.`,
  },
]

export default function BlogContent() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)
  const [subscribed, setSubscribed] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail('')
    alert('Thank you for subscribing to our newsletter!')
  }

  return (
    <>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {posts.map((post, index) => (
              <article
                key={index}
                onClick={() => setSelectedPost(post)}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-colors group cursor-pointer relative overflow-hidden"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedPost(post)
                  }}
                  className="text-accent hover:text-orange-400 font-semibold mt-4 inline-block flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  Read More <BookOpen size={16} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-card border border-border rounded-lg max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-card/90 backdrop-blur-md px-8 py-6 border-b border-border flex items-center justify-between z-10">
                <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  {selectedPost.category}
                </span>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="p-1 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                  {selectedPost.title}
                </h2>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pb-6 mb-6 border-b border-border/50">
                  <div className="flex items-center space-x-1">
                    <User size={16} className="text-primary" />
                    <span className="font-semibold text-foreground">{selectedPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{selectedPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{selectedPost.readTime}</span>
                  </div>
                </div>

                <div className="text-muted-foreground text-lg leading-relaxed space-y-6 whitespace-pre-line">
                  {selectedPost.content}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="bg-muted/30 px-8 py-6 border-t border-border flex justify-end">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-blue-600 transition-colors cursor-pointer shadow-md"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Newsletter */}
      <section className="py-20 bg-card border-t border-border">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8">Subscribe to our newsletter for the latest EV charging news and updates.</p>
          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 bg-primary/10 border border-primary/20 text-primary font-semibold rounded-lg"
            >
              ✓ Thank you! You have successfully subscribed.
            </motion.div>
          ) : (
            <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-blue-600 transition-colors font-semibold cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
