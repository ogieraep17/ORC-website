import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import CommunityShowcase from '@/components/CommunityShowcase'

function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CommunityShowcase />
    </div>
  )
}

export default HomePage 