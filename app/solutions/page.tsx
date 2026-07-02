import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SolutionsContent from '@/components/SolutionsContent'

export const metadata = {
  title: 'BREVOLT Solutions - EV Charging for Everyone',
  description: 'Explore our comprehensive electric vehicle charging solutions',
}

export default function SolutionsPage() {
  return (
    <>
      <Navigation />
      <SolutionsContent />
      <Footer />
    </>
  )
}
