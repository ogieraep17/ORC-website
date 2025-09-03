import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { 
  Trophy, 
  Crown, 
  Star, 
  Calculator,
  TrendingUp,
  Target,
  Award,
  Zap,
  Flag,
  Users,
  Car,
  Calendar,
  BarChart3
} from 'lucide-react'

const ChampionshipSystem = () => {
  const [selectedRally, setSelectedRally] = useState(0)
  const [simulationResults, setSimulationResults] = useState<any[]>([])

  // Championship point systems for different classes
  const pointSystems = {
    WRC: [25, 18, 15, 12, 10, 8, 6, 4, 2, 1],
    R5: [20, 15, 12, 10, 8, 6, 4, 3, 2, 1],
    Historic: [15, 12, 10, 8, 6, 5, 4, 3, 2, 1]
  }

  // Rally calendar with different rally types and multipliers
  const rallyCalendar = [
    { 
      name: "Monte Carlo Rally", 
      type: "Championship", 
      multiplier: 1.5, 
      terrain: "Snow/Ice",
      status: "completed",
      powerStage: true
    },
    { 
      name: "Rally Sweden", 
      type: "Championship", 
      multiplier: 1.5, 
      terrain: "Snow/Ice",
      status: "completed",
      powerStage: true
    },
    { 
      name: "Rally Portugal", 
      type: "Regular", 
      multiplier: 1.0, 
      terrain: "Gravel",
      status: "active",
      powerStage: true
    },
    { 
      name: "Rally Italy", 
      type: "Regular", 
      multiplier: 1.0, 
      terrain: "Gravel",
      status: "upcoming",
      powerStage: true
    },
    { 
      name: "Rally Finland", 
      type: "Championship", 
      multiplier: 1.5, 
      terrain: "Gravel",
      status: "upcoming",
      powerStage: true
    },
    { 
      name: "Rally Germany", 
      type: "Regular", 
      multiplier: 1.0, 
      terrain: "Tarmac",
      status: "upcoming",
      powerStage: true
    }
  ]

  // Driver championship simulation
  const driversStandings = [
    { 
      name: "Alex Chen", 
      points: 187, 
      ralliesCompleted: 3,
      wins: 2,
      podiums: 3,
      stageWins: 12,
      powerStageWins: 2,
      trend: "up"
    },
    { 
      name: "Maria Santos", 
      points: 164, 
      ralliesCompleted: 3,
      wins: 1,
      podiums: 2,
      stageWins: 8,
      powerStageWins: 1,
      trend: "stable"
    },
    { 
      name: "Tommi Virtanen", 
      points: 142, 
      ralliesCompleted: 3,
      wins: 0,
      podiums: 2,
      stageWins: 6,
      powerStageWins: 3,
      trend: "up"
    },
    { 
      name: "James Wilson", 
      points: 128, 
      ralliesCompleted: 3,
      wins: 0,
      podiums: 1,
      stageWins: 4,
      powerStageWins: 0,
      trend: "down"
    },
    { 
      name: "Sophie Laurent", 
      points: 115, 
      ralliesCompleted: 3,
      wins: 0,
      podiums: 1,
      stageWins: 5,
      powerStageWins: 1,
      trend: "up"
    }
  ]

  // Manufacturers championship
  const manufacturersStandings = [
    { 
      name: "Hyundai Motorsport", 
      points: 298, 
      wins: 2,
      podiums: 6,
      colors: "text-blue-400"
    },
    { 
      name: "Toyota Gazoo Racing", 
      points: 276, 
      wins: 1,
      podiums: 5,
      colors: "text-red-400"
    },
    { 
      name: "M-Sport Ford", 
      points: 245, 
      wins: 0,
      podiums: 4,
      colors: "text-green-400"
    }
  ]

  // Calculate points for a position and rally type
  const calculatePoints = (position: number, rallyType: string, carClass: string, powerStageBonus: number = 0) => {
    const basePoints = pointSystems[carClass as keyof typeof pointSystems]?.[position - 1] || 0
    const multiplier = rallyType === "Championship" ? 1.5 : 1.0
    const stageBonus = powerStageBonus
    
    return Math.round((basePoints * multiplier) + stageBonus)
  }

  // Season progression calculation
  const calculateSeasonProgression = () => {
    const completedRallies = rallyCalendar.filter(r => r.status === "completed").length
    const totalRallies = rallyCalendar.length
    return (completedRallies / totalRallies) * 100
  }

  const seasonProgress = calculateSeasonProgression()

  return (
    <div className="space-y-8">
      {/* Championship Overview */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Crown className="w-5 h-5 text-yellow-400" />
              Season Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Progress value={seasonProgress} className="h-2" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{rallyCalendar.filter(r => r.status === "completed").length} completed</span>
                <span>{rallyCalendar.length} total rallies</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Trophy className="w-5 h-5 text-primary" />
              Championship Leader
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="font-bold text-xl">{driversStandings[0].name}</p>
              <p className="text-2xl font-bold text-primary">{driversStandings[0].points} pts</p>
              <p className="text-sm text-muted-foreground">
                +{driversStandings[0].points - driversStandings[1].points} ahead
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Flag className="w-5 h-5 text-accent" />
              Next Rally
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="font-bold">{rallyCalendar.find(r => r.status === "active")?.name}</p>
              <Badge variant={rallyCalendar.find(r => r.status === "active")?.type === "Championship" ? "default" : "secondary"}>
                {rallyCalendar.find(r => r.status === "active")?.type}
              </Badge>
              <p className="text-sm text-muted-foreground">
                {rallyCalendar.find(r => r.status === "active")?.terrain} stages
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Championship System */}
      <Tabs defaultValue="points" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="points">Point System</TabsTrigger>
          <TabsTrigger value="drivers">Drivers</TabsTrigger>
          <TabsTrigger value="manufacturers">Manufacturers</TabsTrigger>
          <TabsTrigger value="calculator">Calculator</TabsTrigger>
        </TabsList>

        <TabsContent value="points" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Point System Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Championship Points
                </CardTitle>
                <CardDescription>
                  Points awarded based on final rally position and class
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(pointSystems).map(([carClass, points]) => (
                    <div key={carClass} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant={
                          carClass === 'WRC' ? 'default' :
                          carClass === 'R5' ? 'secondary' : 'outline'
                        }>
                          {carClass}
                        </Badge>
                        <span className="text-sm font-medium">{carClass} Class</span>
                      </div>
                      <div className="grid grid-cols-10 gap-1 text-xs">
                        {points.map((point, index) => (
                          <div 
                            key={index}
                            className="text-center p-1 bg-muted rounded font-mono"
                          >
                            {point}
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Positions 1st through 10th
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Bonus Points */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  Bonus Points
                </CardTitle>
                <CardDescription>
                  Additional points for exceptional performance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">Stage Win</p>
                      <p className="text-sm text-muted-foreground">Fastest on individual stage</p>
                    </div>
                    <Badge>+1 pt</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">Power Stage (1st-5th)</p>
                      <p className="text-sm text-muted-foreground">Final stage bonus points</p>
                    </div>
                    <Badge>+5 to +1</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                    <div>
                      <p className="font-medium">Championship Rally</p>
                      <p className="text-sm text-muted-foreground">1.5x multiplier on all points</p>
                    </div>
                    <Badge variant="secondary">1.5x</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Rally Calendar */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                2024 Rally Calendar
              </CardTitle>
              <CardDescription>
                Championship and regular rallies with point multipliers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {rallyCalendar.map((rally, index) => (
                  <div 
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-lg border ${
                      rally.status === 'active' ? 'border-primary bg-primary/5' :
                      rally.status === 'completed' ? 'border-green-500/50 bg-green-500/5' :
                      'border-border'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${
                        rally.status === 'completed' ? 'bg-green-500' :
                        rally.status === 'active' ? 'bg-primary' : 'bg-muted-foreground'
                      }`} />
                      <div>
                        <p className="font-medium">{rally.name}</p>
                        <p className="text-sm text-muted-foreground">{rally.terrain}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Badge variant={rally.type === "Championship" ? "default" : "secondary"}>
                        {rally.type}
                      </Badge>
                      {rally.multiplier > 1 && (
                        <Badge variant="outline">
                          {rally.multiplier}x
                        </Badge>
                      )}
                      {rally.powerStage && (
                        <Badge variant="outline" className="text-yellow-600">
                          <Star className="w-3 h-3 mr-1" />
                          Power
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="drivers" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-primary" />
                Drivers Championship Standings
              </CardTitle>
              <CardDescription>
                Current season standings with detailed statistics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {driversStandings.map((driver, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        index === 0 ? 'bg-yellow-400 text-black' :
                        index === 1 ? 'bg-gray-300 text-black' :
                        index === 2 ? 'bg-amber-600 text-white' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-bold">{driver.name}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{driver.ralliesCompleted} rallies</span>
                          <span>•</span>
                          <span>{driver.wins}W</span>
                          <span>•</span>
                          <span>{driver.podiums}P</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1" />
                    
                    <div className="text-right space-y-1">
                      <p className="text-2xl font-bold">{driver.points}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <TrendingUp className={`w-3 h-3 ${
                          driver.trend === 'up' ? 'text-green-500' :
                          driver.trend === 'down' ? 'text-red-500' : 'text-yellow-500'
                        }`} />
                        <span>{driver.stageWins} stage wins</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="manufacturers" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="w-5 h-5 text-primary" />
                Manufacturers Championship
              </CardTitle>
              <CardDescription>
                Team standings based on best two drivers per manufacturer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {manufacturersStandings.map((manufacturer, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        index === 0 ? 'bg-yellow-400 text-black' :
                        index === 1 ? 'bg-gray-300 text-black' :
                        index === 2 ? 'bg-amber-600 text-white' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-bold">{manufacturer.name}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{manufacturer.wins} wins</span>
                          <span>•</span>
                          <span>{manufacturer.podiums} podiums</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1" />
                    
                    <div className="text-right">
                      <p className="text-2xl font-bold">{manufacturer.points}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calculator" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-primary" />
                Points Calculator
              </CardTitle>
              <CardDescription>
                Calculate championship points for different scenarios
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Rally Position</label>
                    <select className="w-full p-2 border rounded-lg bg-background">
                      {Array.from({length: 10}, (_, i) => (
                        <option key={i} value={i + 1}>{i + 1}st</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Car Class</label>
                    <select className="w-full p-2 border rounded-lg bg-background">
                      <option value="WRC">WRC</option>
                      <option value="R5">R5</option>
                      <option value="Historic">Historic</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Rally Type</label>
                    <select className="w-full p-2 border rounded-lg bg-background">
                      <option value="Regular">Regular</option>
                      <option value="Championship">Championship</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Stage Wins</label>
                    <input 
                      type="number" 
                      min="0" 
                      max="20" 
                      className="w-full p-2 border rounded-lg bg-background"
                      placeholder="0"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Power Stage Position (1-5)</label>
                    <input 
                      type="number" 
                      min="0" 
                      max="5" 
                      className="w-full p-2 border rounded-lg bg-background"
                      placeholder="0 (no bonus)"
                    />
                  </div>
                </div>
                
                <div className="p-4 bg-primary/10 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Total Championship Points</p>
                      <p className="text-sm text-muted-foreground">Based on selected criteria</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-primary">42</p>
                      <p className="text-sm text-muted-foreground">points</p>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Calculate Points
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ChampionshipSystem