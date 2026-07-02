import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BlogContent from '@/components/BlogContent'

export const metadata = {
  title: 'BREVOLT Blog - EV Charging News & Updates',
  description: 'Latest news, insights, and tips about electric vehicle charging',
}

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="bg-background">
        {/* Hero */}
        <section className="py-20 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              BREVOLT Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              News, insights, and updates from the electric vehicle charging revolution.
            </p>
          </div>
        </section>

        {/* Interactive Blog Posts */}
        <BlogContent />


      </main>
      <Footer />
    </>
  )
}
