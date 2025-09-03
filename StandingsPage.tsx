import Navigation from '@/components/Navigation'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Trophy, TrendingUp, TrendingDown, Minus, Award, Target, Zap } from 'lucide-react'
import { useState } from 'react'

interface Driver {
  id: number
  position: number
  name: string
  team: string
  points: number
  wins: number
  podiums: number
  bestFinish: number
  lastRace: {
    position: number
    change: number
  }
  color: string
  nationality: string
}

const drivers: Driver[] = [
  {
    id: 1,
    position: 1,
    name: "Marcus Chen",
    team: "Velocity Racing",
    points: 487,
    wins: 8,
    podiums: 12,
    bestFinish: 1,
    lastRace: { position: 1, change: 0 },
    color: "bg-gradient-to-r from-yellow-400 to-orange-500",
    nationality: "🇺🇸"
  },
  {
    id: 2,
    position: 2,
    name: "Isabella Rodriguez",
    team: "Thunder Motorsports",
    points: 432,
    wins: 6,
    podiums: 11,
    bestFinish: 1,
    lastRace: { position: 3, change: 1 },
    color: "bg-gradient-to-r from-gray-300 to-gray-400",
    nationality: "🇲🇽"
  },
  {
    id: 3,
    position: 3,
    name: "Kai Nakamura",
    team: "Apex Performance",
    points: 389,
    wins: 4,
    podiums: 9,
    bestFinish: 1,
    lastRace: { position: 2, change: -1 },
    color: "bg-gradient-to-r from-amber-600 to-yellow-700",
    nationality: "🇯🇵"
  },
  {
    id: 4,
    position: 4,
    name: "Emma Laurent",
    team: "Phoenix Racing",
    points: 341,
    wins: 3,
    podiums: 8,
    bestFinish: 1,
    lastRace: { position: 4, change: 0 },
    color: "bg-gradient-to-r from-blue-500 to-blue-600",
    nationality: "🇫🇷"
  },
  {
    id: 5,
    position: 5,
    name: "Alex Thompson",
    team: "Storm Racing",
    points: 298,
    wins: 2,
    podiums: 6,
    bestFinish: 2,
    lastRace: { position: 6, change: 1 },
    color: "bg-gradient-to-r from-green-500 to-green-600",
    nationality: "🇬🇧"
  },
  {
    id: 6,
    position: 6,
    name: "Sofia Petrov",
    team: "Crimson Speed",
    points: 267,
    wins: 1,
    podiums: 5,
    bestFinish: 2,
    lastRace: { position: 5, change: -1 },
    color: "bg-gradient-to-r from-red-500 to-red-600",
    nationality: "🇷🇺"
  },
  {
    id: 7,
    position: 7,
    name: "Diego Santos",
    team: "Midnight Racing",
    points: 234,
    wins: 1,
    podiums: 4,
    bestFinish: 2,
    lastRace: { position: 7, change: 0 },
    color: "bg-gradient-to-r from-purple-500 to-purple-600",
    nationality: "🇧🇷"
  },
  {
    id: 8,
    position: 8,
    name: "Liam O'Connor",
    team: "Velocity Racing",
    points: 189,
    wins: 0,
    podiums: 3,
    bestFinish: 3,
    lastRace: { position: 8, change: 0 },
    color: "bg-gradient-to-r from-indigo-500 to-indigo-600",
    nationality: "🇮🇪"
  }
]

const StandingsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<'drivers' | 'teams'>('drivers')
  const maxPoints = Math.max(...drivers.map(d => d.points))

  const getTrendIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="w-4 h-4 text-green-500" />
    if (change < 0) return <TrendingDown className="w-4 h-4 text-red-500" />
    return <Minus className="w-4 h-4 text-muted-foreground" />
  }

  const getPositionBadge = (position: number) => {
    if (position === 1) return <Trophy className="w-5 h-5 text-yellow-500" />
    if (position === 2) return <Award className="w-5 h-5 text-gray-400" />
    if (position === 3) return <Award className="w-5 h-5 text-amber-600" />
    return <span className="text-2xl font-bold text-muted-foreground">{position}</span>
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Championship <span className="text-primary">Standings</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Season 2024 • 14 of 18 races completed
            </p>
            
            {/* Category Selector */}
            <div className="flex justify-center mb-8">
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-1 border border-border/50">
                <button
                  onClick={() => setSelectedCategory('drivers')}
                  className={`px-6 py-2 rounded-md transition-all ${
                    selectedCategory === 'drivers'
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Drivers Championship
                </button>
                <button
                  onClick={() => setSelectedCategory('teams')}
                  className={`px-6 py-2 rounded-md transition-all ${
                    selectedCategory === 'teams'
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Teams Championship
                </button>
              </div>
            </div>
          </div>

          {/* Season Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Championship Leader</p>
                  <p className="text-2xl font-bold">{drivers[0].name}</p>
                  <p className="text-primary font-semibold">{drivers[0].points} points</p>
                </div>
                <Trophy className="w-8 h-8 text-yellow-500" />
              </div>
            </Card>
            
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Most Wins</p>
                  <p className="text-2xl font-bold">{drivers[0].name}</p>
                  <p className="text-primary font-semibold">{drivers[0].wins} victories</p>
                </div>
                <Target className="w-8 h-8 text-green-500" />
              </div>
            </Card>
            
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Next Race</p>
                  <p className="text-2xl font-bold">Silverstone GP</p>
                  <p className="text-primary font-semibold">Dec 15, 2024</p>
                </div>
                <Zap className="w-8 h-8 text-blue-500" />
              </div>
            </Card>
          </div>

          {/* Drivers Championship */}
          {selectedCategory === 'drivers' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-6">Drivers Championship</h2>
              
              {drivers.map((driver, index) => (
                <Card 
                  key={driver.id} 
                  className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-6">
                    {/* Position */}
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted/20">
                      {getPositionBadge(driver.position)}
                    </div>

                    {/* Driver Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-lg">{driver.nationality}</span>
                        <h3 className="text-xl font-bold truncate">{driver.name}</h3>
                        <Badge variant="secondary" className="hidden sm:inline-flex">
                          {driver.team}
                        </Badge>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="relative bg-muted/20 rounded-full h-2 mb-2 overflow-hidden">
                        <div 
                          className={`absolute left-0 top-0 h-full ${driver.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${(driver.points / maxPoints) * 100}%` }}
                        />
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="font-medium">{driver.points} pts</span>
                        <span>Wins: {driver.wins}</span>
                        <span>Podiums: {driver.podiums}</span>
                        <span className="hidden md:inline">Best: P{driver.bestFinish}</span>
                      </div>
                    </div>

                    {/* Last Race Performance */}
                    <div className="text-right">
                      <div className="flex items-center gap-2 justify-end mb-1">
                        <span className="text-sm text-muted-foreground">Last Race:</span>
                        <Badge variant="outline" className="text-xs">
                          P{driver.lastRace.position}
                        </Badge>
                        {getTrendIcon(driver.lastRace.change)}
                      </div>
                      {driver.lastRace.change !== 0 && (
                        <span className={`text-xs ${
                          driver.lastRace.change > 0 ? 'text-green-500' : 'text-red-500'
                        }`}>
                          {driver.lastRace.change > 0 ? '+' : ''}{driver.lastRace.change}
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Teams Championship Placeholder */}
          {selectedCategory === 'teams' && (
            <Card className="p-8 text-center bg-card/50 backdrop-blur-sm border-border/50">
              <Trophy className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-2xl font-semibold mb-4">Teams Championship</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Team standings with constructor points will be available in a later phase.
              </p>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}

export default StandingsPage