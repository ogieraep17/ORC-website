import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Users, 
  Star, 
  Trophy, 
  Clock,
  ArrowRight,
  Quote
} from 'lucide-react'

const CommunityShowcase = () => {
  const featuredRacers = [
    {
      name: 'Alex Chen',
      position: '1st',
      points: 187,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      specialty: 'Street Circuits',
      quote: 'The competition here pushed me to become a better driver.',
      wins: 8,
      podiums: 12
    },
    {
      name: 'Maria Santos',
      position: '2nd',
      points: 164,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b05b?w=400&h=400&fit=crop&crop=face',
      specialty: 'Oval Racing',
      quote: 'Found my racing family here. Every race is pure adrenaline!',
      wins: 6,
      podiums: 11
    },
    {
      name: 'James Wright',
      position: '3rd',
      points: 142,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      specialty: 'Road Course',
      quote: 'Clean racing and respect - that\'s what makes this league special.',
      wins: 4,
      podiums: 9
    }
  ]

  const communityStats = [
    { label: 'Active Members', value: '156', icon: Users },
    { label: 'Races This Season', value: '24', icon: Trophy },
    { label: 'Average Rating', value: '4.9', icon: Star },
    { label: 'Years Running', value: '3', icon: Clock }
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet the <span className="text-primary">Drivers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real racers, real stories. Get to know the champions and rising stars 
            who make our community extraordinary.
          </p>
        </div>

        {/* Featured Racers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {featuredRacers.map((racer, index) => (
            <Card key={index} className="group hover:scale-105 transition-all duration-300 overflow-hidden bg-card/50 backdrop-blur-sm border-border/50">
              {/* Racer Image */}
              <div className="relative h-48 bg-muted overflow-hidden">
                <img 
                  src={racer.image} 
                  alt={racer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge 
                    variant="secondary" 
                    className={`font-bold ${
                      index === 0 ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50' :
                      index === 1 ? 'bg-gray-400/20 text-gray-300 border-gray-400/50' :
                      'bg-orange-500/20 text-orange-400 border-orange-500/50'
                    }`}
                  >
                    {racer.position} PLACE
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                    {racer.points} pts
                  </Badge>
                </div>
              </div>

              {/* Racer Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{racer.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{racer.specialty}</p>
                
                {/* Stats */}
                <div className="flex justify-between text-sm mb-4">
                  <div>
                    <span className="text-muted-foreground">Wins: </span>
                    <span className="font-semibold text-primary">{racer.wins}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Podiums: </span>
                    <span className="font-semibold text-accent">{racer.podiums}</span>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="w-4 h-4 text-muted-foreground mb-2" />
                  <p className="text-sm italic text-muted-foreground leading-relaxed">
                    "{racer.quote}"
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {communityStats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/5 via-card/50 to-accent/5 border-border/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Ready to Join the Pack?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you're a seasoned pro or just starting out, our community welcomes 
              all skill levels. Find your place on the grid.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Start Your Journey
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Meet More Drivers
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default CommunityShowcase