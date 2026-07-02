import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroCarousel from '@/components/HeroCarousel'
import HomePageContent from '@/components/HomePageContent'

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroCarousel />
      <HomePageContent />
      <Footer />
    </>
  )
}
