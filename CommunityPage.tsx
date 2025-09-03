import Navigation from '@/components/Navigation'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Users, 
  MessageSquare, 
  Heart, 
  Trophy, 
  Clock, 
  MapPin,
  Star,
  TrendingUp,
  Calendar,
  Award,
  Flag,
  Target
} from 'lucide-react'

const CommunityPage = () => {
  // Mock community data
  const communityStats = {
    totalMembers: 2847,
    activeRacers: 156,
    onlineNow: 42,
    totalRaces: 1203
  }

  const featuredRacers = [
    {
      id: 1,
      name: "Alex Rodriguez",
      username: "SpeedDemon47",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      country: "🇺🇸 USA",
      specialties: ["Street Racing", "Time Attack"],
      stats: {
        wins: 34,
        podiums: 67,
        totalRaces: 128,
        bestLap: "1:42.156"
      },
      currentRank: 2,
      status: "Champion",
      joinedDate: "2022",
      bio: "Professional racer turned community leader. Always ready to help newcomers find their racing line.",
      achievements: ["Season 3 Champion", "Most Improved 2023", "Community Helper"]
    },
    {
      id: 2,
      name: "Maya Chen",
      username: "NightRider",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=400&h=400&fit=crop",
      country: "🇨🇦 Canada",
      specialties: ["Drift", "Circuit Racing"],
      stats: {
        wins: 28,
        podiums: 59,
        totalRaces: 104,
        bestLap: "1:43.892"
      },
      currentRank: 4,
      status: "Rising Star",
      joinedDate: "2023",
      bio: "Drift specialist with a passion for precision. Known for incredible car control and sportsmanship.",
      achievements: ["Drift Master 2024", "Fair Play Award", "Rookie of the Year"]
    },
    {
      id: 3,
      name: "Marcus Johnson",
      username: "ThunderBolt",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      country: "🇬🇧 UK",
      specialties: ["Endurance", "Rally"],
      stats: {
        wins: 22,
        podiums: 45,
        totalRaces: 89,
        bestLap: "1:44.321"
      },
      currentRank: 7,
      status: "Veteran",
      joinedDate: "2021",
      bio: "Endurance racing specialist who never gives up. Master of tire management and race strategy.",
      achievements: ["Endurance King", "Never DNF Award", "Strategy Master"]
    }
  ]

  const recentActivity = [
    {
      type: "race_win",
      user: "SpeedDemon47",
      action: "won the Sunset Valley GP",
      time: "2 hours ago",
      icon: Trophy
    },
    {
      type: "new_member",
      user: "RacingNewbie23",
      action: "joined Online Racing Championship",
      time: "4 hours ago",
      icon: Users
    },
    {
      type: "achievement",
      user: "NightRider",
      action: "earned the 'Perfect Drift' achievement",
      time: "6 hours ago",
      icon: Award
    },
    {
      type: "record",
      user: "ThunderBolt",
      action: "set a new track record at Mountain Pass",
      time: "8 hours ago",
      icon: Target
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Online Racing <span className="text-primary">Championship</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with fellow racers, share your passion for speed, and be part of something bigger
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-4 text-center">
                <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">{communityStats.totalMembers.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Total Members</div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-4 text-center">
                <Flag className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">{communityStats.activeRacers}</div>
                <div className="text-sm text-muted-foreground">Active Racers</div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-4 text-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2 animate-pulse"></div>
                <div className="text-2xl font-bold">{communityStats.onlineNow}</div>
                <div className="text-sm text-muted-foreground">Online Now</div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-4 text-center">
                <Trophy className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">{communityStats.totalRaces.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Races Completed</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Featured Racers */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Star className="w-6 h-6 text-primary" />
                Featured Racers
              </h2>
              
              <div className="space-y-6">
                {featuredRacers.map((racer) => (
                  <Card key={racer.id} className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Avatar and Basic Info */}
                        <div className="flex flex-col items-center md:items-start">
                          <div className="relative">
                            <img 
                              src={racer.avatar} 
                              alt={racer.name}
                              className="w-24 h-24 rounded-full object-cover border-2 border-primary/20"
                            />
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background"></div>
                          </div>
                          <div className="mt-3 text-center md:text-left">
                            <h3 className="font-bold text-lg">{racer.name}</h3>
                            <p className="text-sm text-muted-foreground">@{racer.username}</p>
                            <p className="text-sm text-muted-foreground">{racer.country}</p>
                            <Badge variant="secondary" className="mt-1">
                              #{racer.currentRank} • {racer.status}
                            </Badge>
                          </div>
                        </div>

                        {/* Details */}
                        <div className="flex-1">
                          <p className="text-muted-foreground mb-4">{racer.bio}</p>
                          
                          {/* Specialties */}
                          <div className="mb-4">
                            <div className="text-sm font-medium mb-2">Specialties</div>
                            <div className="flex flex-wrap gap-2">
                              {racer.specialties.map((specialty) => (
                                <Badge key={specialty} variant="outline">
                                  {specialty}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Stats */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <div className="text-center">
                              <div className="font-bold text-primary">{racer.stats.wins}</div>
                              <div className="text-xs text-muted-foreground">Wins</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-primary">{racer.stats.podiums}</div>
                              <div className="text-xs text-muted-foreground">Podiums</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-primary">{racer.stats.totalRaces}</div>
                              <div className="text-xs text-muted-foreground">Races</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-primary">{racer.stats.bestLap}</div>
                              <div className="text-xs text-muted-foreground">Best Lap</div>
                            </div>
                          </div>

                          {/* Achievements */}
                          <div className="mb-4">
                            <div className="text-sm font-medium mb-2">Recent Achievements</div>
                            <div className="flex flex-wrap gap-1">
                              {racer.achievements.map((achievement) => (
                                <Badge key={achievement} variant="secondary" className="text-xs">
                                  {achievement}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              Joined {racer.joinedDate}
                            </div>
                            <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                              View Profile
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                Recent Activity
              </h2>
              
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Community Feed</h3>
                    <Badge variant="secondary">{communityStats.onlineNow} online</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivity.map((activity, index) => {
                    const IconComponent = activity.icon
                    return (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm">
                            <span className="font-medium">{activity.user}</span>{' '}
                            <span className="text-muted-foreground">{activity.action}</span>
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>

              {/* Community Actions */}
              <div className="mt-8 space-y-4">
                <Button className="w-full" variant="default">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Join Community Chat
                </Button>
                <Button className="w-full" variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Find Racing Partners
                </Button>
                <Button className="w-full" variant="outline">
                  <Heart className="w-4 h-4 mr-2" />
                  Support the Community
                </Button>
              </div>

              {/* Quick Links */}
              <Card className="mt-8 bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <h3 className="font-semibold">Quick Links</h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm">
                    <div className="font-medium mb-1">Community Guidelines</div>
                    <p className="text-muted-foreground text-xs">Racing etiquette and rules</p>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium mb-1">Racing Tips & Tricks</div>
                    <p className="text-muted-foreground text-xs">Improve your lap times</p>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium mb-1">Technical Support</div>
                    <p className="text-muted-foreground text-xs">Get help with setup</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CommunityPage