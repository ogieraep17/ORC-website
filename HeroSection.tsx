import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { 
  Timer, 
  Trophy, 
  Users, 
  Calendar,
  ArrowRight,
  Zap
} from 'lucide-react'

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 14,
    minutes: 32,
    seconds: 45
  })

  // Countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const quickStats = [
    {
      icon: Calendar,
      label: 'Next Rally',
      value: 'Monte Carlo',
      subtitle: 'Sunday 14:00 GMT',
      color: 'text-primary'
    },
    {
      icon: Trophy,
      label: 'Season Leader',
      value: 'Alex Chen',
      subtitle: '187 points',
      color: 'text-accent'
    },
    {
      icon: Users,
      label: 'Active Racers',
      value: '156',
      subtitle: 'This season',
      color: 'text-green-400'
    }
  ]

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Motion Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Static background elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-30" />
        <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/10 to-transparent opacity-20" />
        <div className="absolute top-2/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Race.
            </span>
            <br />
            <span className="text-foreground">Compete.</span>
            <br />
            <span className="text-muted-foreground">Belong.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join the ultimate rally championship - where precision meets passion on the world's most challenging stages. 
            Every corner counts, every driver matters.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 group hover:scale-105 transition-all duration-200">
              Join Rally Championship
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-all duration-200">
              Watch Live
              <Zap className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          {quickStats.map((stat, index) => (
            <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 group hover:scale-105">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg bg-muted/50 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.subtitle}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Next Race Countdown */}
        <Card className="mt-8 p-6 bg-card/50 backdrop-blur-sm border-border/50 max-w-md mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Timer className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">NEXT RALLY IN</span>
          </div>
          
          <div className="grid grid-cols-4 gap-4 text-center">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="space-y-1">
                <div className="text-2xl font-bold text-primary racing-pulse">
                  {value.toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  {unit}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default HeroSection