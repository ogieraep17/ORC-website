import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { 
  MapPin, 
  Clock, 
  Users, 
  Thermometer, 
  Wind, 
  Droplets,
  Trophy,
  Flag,
  Timer,
  Calendar,
  Car,
  Target,
  TrendingUp,
  CloudRain,
  Sun,
  Cloud,
  UserPlus
} from 'lucide-react'

interface RaceData {
  id: number
  title: string
  date: string
  time: string
  track: {
    name: string
    location: string
    length: string
    corners: number
    lapRecord: string
    difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert'
    description: string
    trackMap?: string
  }
  weather: {
    condition: string
    temperature: string
    windSpeed: string
    humidity: string
    chanceOfRain: number
  }
  participants: {
    registered: number
    maxCapacity: number
    topDrivers: string[]
  }
  championship: {
    pointsMultiplier: number
    category: string
  }
  session: {
    practice: string
    qualifying: string
    race: string
  }
}

interface RaceDetailModalProps {
  race: RaceData | null
  isOpen: boolean
  onClose: () => void
}

const RaceDetailModal = ({ race, isOpen, onClose }: RaceDetailModalProps) => {
  if (!race) return null

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return <Sun className="w-5 h-5 text-yellow-500" />
      case 'cloudy':
        return <Cloud className="w-5 h-5 text-gray-400" />
      case 'rainy':
        return <CloudRain className="w-5 h-5 text-blue-500" />
      default:
        return <Sun className="w-5 h-5 text-yellow-500" />
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500'
      case 'Medium': return 'bg-yellow-500'
      case 'Hard': return 'bg-orange-500'
      case 'Expert': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const participationRate = (race.participants.registered / race.participants.maxCapacity) * 100

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-3">
            <Flag className="w-6 h-6 text-primary" />
            {race.title}
          </DialogTitle>
        </DialogHeader>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Race Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Track Information */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Track Details
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Track Name</div>
                    <div className="font-semibold">{race.track.name}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="font-semibold">{race.track.location}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Track Length</div>
                    <div className="font-semibold">{race.track.length}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Corners</div>
                    <div className="font-semibold">{race.track.corners}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Lap Record</div>
                    <div className="font-semibold text-primary">{race.track.lapRecord}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Difficulty</div>
                    <Badge className={`${getDifficultyColor(race.track.difficulty)} text-white`}>
                      {race.track.difficulty}
                    </Badge>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-muted-foreground mb-2">Track Description</div>
                  <p className="text-sm">{race.track.description}</p>
                </div>

                {/* Track Map Placeholder */}
                <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center border-2 border-dashed border-border/50">
                  <div className="text-center">
                    <Car className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Track Map</p>
                    <p className="text-xs text-muted-foreground">{race.track.name}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Session Schedule */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Timer className="w-5 h-5 text-primary" />
                  Session Schedule
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                    <div className="flex items-center gap-3">
                      <Target className="w-5 h-5 text-blue-500" />
                      <span className="font-medium">Practice Session</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{race.session.practice}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                    <div className="flex items-center gap-3">
                      <Flag className="w-5 h-5 text-yellow-500" />
                      <span className="font-medium">Qualifying</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{race.session.qualifying}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <div className="flex items-center gap-3">
                      <Trophy className="w-5 h-5 text-primary" />
                      <span className="font-medium text-primary">Main Race</span>
                    </div>
                    <span className="text-sm text-primary font-medium">{race.session.race}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Race Date & Time */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="text-center">
                  <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold">{race.date}</div>
                  <div className="text-lg text-muted-foreground">{race.time}</div>
                </div>
              </CardContent>
            </Card>

            {/* Weather Forecast */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <h3 className="font-semibold flex items-center gap-2">
                  {getWeatherIcon(race.weather.condition)}
                  Weather Forecast
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-lg font-semibold capitalize">{race.weather.condition}</div>
                  <div className="text-2xl font-bold text-primary">{race.weather.temperature}</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Wind className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Wind</span>
                    </div>
                    <span className="text-sm font-medium">{race.weather.windSpeed}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Humidity</span>
                    </div>
                    <span className="text-sm font-medium">{race.weather.humidity}</span>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Rain Chance</span>
                      <span className="text-sm font-medium">{race.weather.chanceOfRain}%</span>
                    </div>
                    <Progress value={race.weather.chanceOfRain} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Participants */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <h3 className="font-semibold flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Participants
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Registration</span>
                    <span className="text-sm font-medium">
                      {race.participants.registered}/{race.participants.maxCapacity}
                    </span>
                  </div>
                  <Progress value={participationRate} className="h-2" />
                  <div className="text-xs text-muted-foreground mt-1">
                    {participationRate.toFixed(0)}% capacity
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-2">Top Drivers Registered</div>
                  <div className="space-y-2">
                    {race.participants.topDrivers.map((driver, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{driver}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Championship Points */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <h3 className="font-semibold flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  Championship
                </h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Category</div>
                  <div className="font-semibold">{race.championship.category}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Points Multiplier</div>
                  <div className="text-2xl font-bold text-primary">
                    {race.championship.pointsMultiplier}x
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full" size="lg">
                <UserPlus className="w-4 h-4 mr-2" />
                Register for Race
              </Button>
              <Button variant="outline" className="w-full">
                <Calendar className="w-4 h-4 mr-2" />
                Add to Calendar
              </Button>
              <Button variant="outline" className="w-full">
                <TrendingUp className="w-4 h-4 mr-2" />
                View Statistics
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default RaceDetailModal