import Navigation from '@/components/Navigation'
import RaceDetailModal from '@/components/RaceDetailModal'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Calendar, MapPin, Clock, Users, Thermometer, Wind, Eye, Trophy, Flag, Car, Award } from 'lucide-react'
import { useState } from 'react'

interface Race {
  id: string
  name: string
  track: string
  location: string
  date: string
  time: string
  timezone: string
  status: 'upcoming' | 'live' | 'completed'
  weather: {
    temp: string
    condition: string
    wind: string
    humidity: string
    chanceOfRain: number
  }
  participants: number
  maxParticipants: number
  trackLength: string
  lapRecord: string
  surfaceType: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
  description: string
  championship: 'drivers' | 'manufacturers'
  class: 'touring' | 'formula'
  category: string
}

const races: Race[] = [
  {
    id: '1',
    name: 'Season Opener Grand Prix',
    track: 'Silverstone Circuit',
    location: 'Northamptonshire, UK',
    date: '2024-03-15',
    time: '14:00',
    timezone: 'GMT',
    status: 'upcoming',
    weather: { temp: '18°C', condition: 'Partly Cloudy', wind: '12 km/h', humidity: '65%', chanceOfRain: 20 },
    participants: 24,
    maxParticipants: 28,
    trackLength: '5.891 km',
    lapRecord: '1:27.097',
    surfaceType: 'Asphalt',
    difficulty: 'Advanced',
    description: 'The traditional season opener at the legendary Silverstone Circuit. Fast corners and long straights make this a true test of speed and skill.',
    championship: 'drivers',
    class: 'formula',
    category: 'Formula Championship - Drivers'
  },
  {
    id: '2',
    name: 'Monaco Street Challenge',
    track: 'Monaco Street Circuit',
    location: 'Monte Carlo, Monaco',
    date: '2024-03-22',
    time: '15:00',
    timezone: 'CET',
    status: 'upcoming',
    weather: { temp: '22°C', condition: 'Sunny', wind: '8 km/h', humidity: '58%', chanceOfRain: 5 },
    participants: 20,
    maxParticipants: 22,
    trackLength: '3.337 km',
    lapRecord: '1:14.260',
    surfaceType: 'Asphalt',
    difficulty: 'Expert',
    description: 'Navigate the tight streets of Monaco in this prestigious race. Precision and patience are key on this narrow, unforgiving circuit.',
    championship: 'drivers',
    class: 'formula',
    category: 'Formula Championship - Drivers'
  },
  {
    id: '3',
    name: 'Desert Storm Rally',
    track: 'Bahrain International Circuit',
    location: 'Sakhir, Bahrain',
    date: '2024-03-29',
    time: '16:00',
    timezone: 'AST',
    status: 'upcoming',
    weather: { temp: '28°C', condition: 'Clear', wind: '15 km/h', humidity: '42%', chanceOfRain: 0 },
    participants: 26,
    maxParticipants: 30,
    trackLength: '5.412 km',
    lapRecord: '1:31.447',
    surfaceType: 'Asphalt',
    difficulty: 'Intermediate',
    description: 'Race under the desert sun on this technical circuit. Wide runoff areas provide room for overtaking, but desert winds add an extra challenge.',
    championship: 'manufacturers',
    class: 'touring',
    category: 'Touring Car Championship - Manufacturers'
  },
  {
    id: '4',
    name: 'Mountain Pass Sprint',
    track: 'Suzuka Circuit',
    location: 'Suzuka, Japan',
    date: '2024-04-05',
    time: '13:00',
    timezone: 'JST',
    status: 'upcoming',
    weather: { temp: '16°C', condition: 'Light Rain', wind: '20 km/h', humidity: '82%', chanceOfRain: 75 },
    participants: 22,
    maxParticipants: 26,
    trackLength: '5.807 km',
    lapRecord: '1:30.983',
    surfaceType: 'Asphalt',
    difficulty: 'Advanced',
    description: 'The iconic figure-8 layout of Suzuka offers a perfect blend of high-speed sections and technical corners. Weather conditions may vary.',
    championship: 'drivers',
    class: 'touring',
    category: 'Touring Car Championship - Drivers'
  },
  {
    id: '5',
    name: 'Night City Circuit',
    track: 'Singapore Street Circuit',
    location: 'Marina Bay, Singapore',
    date: '2024-04-12',
    time: '20:00',
    timezone: 'SGT',
    status: 'upcoming',
    weather: { temp: '30°C', condition: 'Humid', wind: '10 km/h', humidity: '88%', chanceOfRain: 40 },
    participants: 18,
    maxParticipants: 24,
    trackLength: '5.063 km',
    lapRecord: '1:41.905',
    surfaceType: 'Asphalt',
    difficulty: 'Expert',
    description: 'Race under the lights in this spectacular night race. The humid conditions and challenging street circuit make this one of the most demanding races.',
    championship: 'manufacturers',
    class: 'formula',
    category: 'Formula Championship - Manufacturers'
  },
  {
    id: '6',
    name: 'Alpine Circuit Championship',
    track: 'Red Bull Ring',
    location: 'Spielberg, Austria',
    date: '2024-04-19',
    time: '14:30',
    timezone: 'CET',
    status: 'upcoming',
    weather: { temp: '19°C', condition: 'Partly Cloudy', wind: '14 km/h', humidity: '70%', chanceOfRain: 25 },
    participants: 28,
    maxParticipants: 30,
    trackLength: '4.318 km',
    lapRecord: '1:05.619',
    surfaceType: 'Asphalt',
    difficulty: 'Intermediate',
    description: 'High-altitude racing in the Austrian Alps. Short but technical track with elevation changes and stunning mountain views.',
    championship: 'drivers',
    class: 'touring',
    category: 'Touring Car Championship - Drivers'
  },
  {
    id: '7',
    name: 'Mediterranean Grand Prix',
    track: 'Circuit de Barcelona-Catalunya',
    location: 'Barcelona, Spain',
    date: '2024-04-26',
    time: '15:00',
    timezone: 'CET',
    status: 'upcoming',
    weather: { temp: '24°C', condition: 'Sunny', wind: '11 km/h', humidity: '55%', chanceOfRain: 10 },
    participants: 26,
    maxParticipants: 28,
    trackLength: '4.675 km',
    lapRecord: '1:18.441',
    surfaceType: 'Asphalt',
    difficulty: 'Advanced',
    description: 'A challenging mix of high-speed straights and technical sections. This track demands both speed and precision from drivers.',
    championship: 'manufacturers',
    class: 'formula',
    category: 'Formula Championship - Manufacturers'
  }
]

const SchedulePage = () => {
  const [modalRace, setModalRace] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const getDifficultyColor = (difficulty: Race['difficulty']) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-400 border-green-500/50'
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50'
      case 'Advanced': return 'bg-orange-500/20 text-orange-400 border-orange-500/50'
      case 'Expert': return 'bg-red-500/20 text-red-400 border-red-500/50'
    }
  }

  const getStatusColor = (status: Race['status']) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-500/20 text-blue-400 border-blue-500/50'
      case 'live': return 'bg-green-500/20 text-green-400 border-green-500/50'
      case 'completed': return 'bg-gray-500/20 text-gray-400 border-gray-500/50'
    }
  }

  const getChampionshipIcon = (championship: string) => {
    return championship === 'drivers' ? Trophy : Car
  }

  const convertRaceToModalFormat = (race: Race) => {
    return {
      id: parseInt(race.id),
      title: race.name,
      date: formatDate(race.date),
      time: `${race.time} ${race.timezone}`,
      track: {
        name: race.track,
        location: race.location,
        length: race.trackLength,
        corners: 12, // Mock data
        lapRecord: race.lapRecord,
        difficulty: race.difficulty === 'Beginner' ? 'Easy' : 
                   race.difficulty === 'Intermediate' ? 'Medium' :
                   race.difficulty === 'Advanced' ? 'Hard' : 'Expert',
        description: race.description
      },
      weather: {
        condition: race.weather.condition,
        temperature: race.weather.temp,
        windSpeed: race.weather.wind,
        humidity: race.weather.humidity,
        chanceOfRain: race.weather.chanceOfRain
      },
      participants: {
        registered: race.participants,
        maxCapacity: race.maxParticipants,
        topDrivers: ['SpeedDemon47', 'NightRider', 'ThunderBolt']
      },
      championship: {
        pointsMultiplier: race.difficulty === 'Expert' ? 2 : 1.5,
        category: race.category
      },
      session: {
        practice: '30 minutes',
        qualifying: '20 minutes',
        race: '45 minutes'
      }
    }
  }

  const handleRaceDetails = (race: Race) => {
    const modalData = convertRaceToModalFormat(race)
    setModalRace(modalData)
    setIsModalOpen(true)
  }

  const filterRacesByChampionship = (championship: string, raceClass?: string) => {
    return races.filter(race => {
      if (championship === 'all') return true
      if (raceClass) {
        return race.championship === championship && race.class === raceClass
      }
      return race.championship === championship
    })
  }

  // Race List Component
  function RaceList({ races }: { races: Race[] }) {
    return (
      <div className="grid gap-6">
        {races.map((race, index) => {
          const ChampionshipIcon = getChampionshipIcon(race.championship)
          return (
            <Card 
              key={race.id} 
              className="group hover:bg-card/80 transition-all duration-300 border-border/50 backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  {/* Date Column */}
                  <div className="lg:w-48 bg-muted/30 p-6 flex flex-col justify-center border-r border-border/50">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">
                        {new Date(race.date).getDate()}
                      </div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wide">
                        {new Date(race.date).toLocaleDateString('en-US', { month: 'short' })}
                      </div>
                      <div className="text-xs text-muted-foreground mt-2">
                        {race.time} {race.timezone}
                      </div>
                    </div>
                  </div>

                  {/* Race Details */}
                  <div className="flex-1 p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                              {race.name}
                            </h3>
                            <div className="flex items-center gap-2 text-muted-foreground mt-1">
                              <MapPin className="w-4 h-4" />
                              <span>{race.track}</span>
                              <span className="text-xs">•</span>
                              <span>{race.location}</span>
                            </div>
                          </div>
                          <div className="flex gap-2 flex-col">
                            <div className="flex gap-2">
                              <Badge className={getStatusColor(race.status)} variant="outline">
                                {race.status.charAt(0).toUpperCase() + race.status.slice(1)}
                              </Badge>
                              <Badge className={getDifficultyColor(race.difficulty)} variant="outline">
                                {race.difficulty}
                              </Badge>
                            </div>
                            <Badge variant="secondary" className="text-xs">
                              <ChampionshipIcon className="w-3 h-3 mr-1" />
                              {race.championship === 'drivers' ? 'Drivers' : 'Teams'} • {race.class === 'formula' ? 'Formula' : 'Touring'}
                            </Badge>
                          </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm">
                              {race.participants}/{race.maxParticipants}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Flag className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm">{race.trackLength}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Trophy className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm">{race.lapRecord}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Thermometer className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm">{race.weather.temp}</span>
                          </div>
                        </div>

                        {/* Weather Info */}
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <span>☀️</span>
                            <span>{race.weather.condition}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Wind className="w-3 h-3" />
                            <span>{race.weather.wind}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span>💧</span>
                            <span>{race.weather.chanceOfRain}% rain</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {race.description}
                        </p>
                      </div>

                      <div className="flex flex-col gap-2 min-w-[120px]">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleRaceDetails(race)}
                          className="w-full"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Full Details
                        </Button>
                        {race.status === 'upcoming' && (
                          <Button size="sm" className="w-full">
                            Join Race
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Race <span className="text-primary">Schedule</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Plan your racing calendar with championship races, track details, and weather forecasts
            </p>
          </div>

          {/* Championship Tabs */}
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-8">
                <TabsTrigger value="all" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  All Races
                </TabsTrigger>
                <TabsTrigger value="drivers-formula" className="flex items-center gap-2">
                  <Trophy className="w-4 h-4" />
                  Formula Drivers
                </TabsTrigger>
                <TabsTrigger value="drivers-touring" className="flex items-center gap-2">
                  <Trophy className="w-4 h-4" />
                  Touring Drivers
                </TabsTrigger>
                <TabsTrigger value="manufacturers-formula" className="flex items-center gap-2">
                  <Car className="w-4 h-4" />
                  Formula Teams
                </TabsTrigger>
                <TabsTrigger value="manufacturers-touring" className="flex items-center gap-2">
                  <Car className="w-4 h-4" />
                  Touring Teams
                </TabsTrigger>
              </TabsList>

              {/* All Races */}
              <TabsContent value="all">
                <RaceList races={races} />
              </TabsContent>

              {/* Formula Drivers Championship */}
              <TabsContent value="drivers-formula">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <Trophy className="w-6 h-6 text-red-400" />
                    Formula Championship - Drivers
                  </h3>
                  <p className="text-muted-foreground">Individual driver standings in open-wheel formula racing</p>
                </div>
                <RaceList races={filterRacesByChampionship('drivers', 'formula')} />
              </TabsContent>

              {/* Touring Drivers Championship */}
              <TabsContent value="drivers-touring">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <Trophy className="w-6 h-6 text-blue-400" />
                    Touring Car Championship - Drivers
                  </h3>
                  <p className="text-muted-foreground">Individual driver standings in touring car racing</p>
                </div>
                <RaceList races={filterRacesByChampionship('drivers', 'touring')} />
              </TabsContent>

              {/* Formula Manufacturers Championship */}
              <TabsContent value="manufacturers-formula">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <Car className="w-6 h-6 text-red-400" />
                    Formula Championship - Manufacturers
                  </h3>
                  <p className="text-muted-foreground">Team and manufacturer standings in formula racing</p>
                </div>
                <RaceList races={filterRacesByChampionship('manufacturers', 'formula')} />
              </TabsContent>

              {/* Touring Manufacturers Championship */}
              <TabsContent value="manufacturers-touring">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <Car className="w-6 h-6 text-blue-400" />
                    Touring Car Championship - Manufacturers
                  </h3>
                  <p className="text-muted-foreground">Team and manufacturer standings in touring car racing</p>
                </div>
                <RaceList races={filterRacesByChampionship('manufacturers', 'touring')} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      {/* Race Detail Modal */}
      <RaceDetailModal 
        race={modalRace}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default SchedulePage