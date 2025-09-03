import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  BookOpen, 
  Trophy, 
  Users, 
  Settings,
  CheckCircle,
  Circle,
  ArrowRight,
  Car,
  Route,
  Clock,
  Target,
  Zap,
  Shield,
  Star,
  Award,
  MapPin,
  Flag
} from 'lucide-react'

const NewRacerGuide = () => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [currentTab, setCurrentTab] = useState("basics")

  const toggleStep = (stepId: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepId) 
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    )
  }

  const onboardingSteps = [
    {
      id: 1,
      title: "Create Your Driver Profile",
      description: "Set up your racing identity with custom name, nationality, and preferred driving style",
      icon: Users,
      category: "Setup"
    },
    {
      id: 2,
      title: "Choose Your Rally Car",
      description: "Pick from WRC, R5, or Historic classes based on your skill level",
      icon: Car,
      category: "Setup"
    },
    {
      id: 3,
      title: "Complete Tutorial Stages",
      description: "Master the basics on 3 practice stages with co-driver notes",
      icon: BookOpen,
      category: "Training"
    },
    {
      id: 4,
      title: "Join Your First Rally",
      description: "Enter a beginner-friendly rally to earn your first championship points",
      icon: Flag,
      category: "Competition"
    },
    {
      id: 5,
      title: "Connect with Community",
      description: "Join team discussions and find rally partners in your region",
      icon: Users,
      category: "Social"
    }
  ]

  const progressPercentage = (completedSteps.length / onboardingSteps.length) * 100

  const rallyBasics = [
    {
      title: "Stage Racing",
      description: "Rally is about conquering stages against the clock, not wheel-to-wheel racing",
      icon: Clock,
      tips: [
        "Each stage is a point-to-point time trial",
        "Fastest cumulative time wins the rally",
        "Consistency beats raw speed"
      ]
    },
    {
      title: "Co-Driver Notes",
      description: "Your co-driver calls out turns and hazards using pacenotes",
      icon: Route,
      tips: [
        "Listen carefully to pace note calls",
        "Notes describe corner severity (1-6)",
        "Trust your co-driver's instructions"
      ]
    },
    {
      title: "Surface Types",
      description: "Different surfaces require different driving techniques and car setups",
      icon: Target,
      tips: [
        "Tarmac: Focus on racing lines",
        "Gravel: Manage sliding and traction",
        "Snow/Ice: Gentle inputs and patience"
      ]
    },
    {
      title: "Car Setup",
      description: "Adjust suspension, diff, and aero for optimal stage performance",
      icon: Settings,
      tips: [
        "Softer setup for rough stages",
        "Stiffer setup for smooth tarmac",
        "Test different configurations"
      ]
    }
  ]

  const championshipInfo = [
    {
      category: "WRC Class",
      description: "Top-tier World Rally Cars with full aerodynamics and advanced technology",
      difficulty: "Expert",
      points: "25-18-15-12-10-8-6-4-2-1",
      icon: Trophy,
      color: "text-yellow-400"
    },
    {
      category: "R5 Class", 
      description: "Regional championship cars offering great performance and handling",
      difficulty: "Intermediate",
      points: "20-15-12-10-8-6-4-3-2-1",
      icon: Award,
      color: "text-blue-400"
    },
    {
      category: "Historic Class",
      description: "Classic rally cars from the golden era of rallying",
      difficulty: "Beginner",
      points: "15-12-10-8-6-5-4-3-2-1",
      icon: Star,
      color: "text-green-400"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
          <Flag className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">New Racers Start Here</span>
        </div>
        <h2 className="text-3xl font-bold">Welcome to Rally Championship</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Your complete guide to getting started in the world's most exciting rally championship. 
          Follow these steps to go from rookie to rally champion.
        </p>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Your Rally Journey
              </CardTitle>
              <CardDescription>
                Complete these steps to unlock your full potential
              </CardDescription>
            </div>
            <Badge variant="secondary" className="text-lg px-3 py-1">
              {completedSteps.length}/{onboardingSteps.length}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Progress value={progressPercentage} className="h-2" />
          
          <div className="grid gap-4">
            {onboardingSteps.map((step) => (
              <div 
                key={step.id}
                className="flex items-center gap-4 p-4 rounded-lg border transition-all duration-200 hover:bg-muted/50 cursor-pointer"
                onClick={() => toggleStep(step.id)}
              >
                <div className="flex-shrink-0">
                  {completedSteps.includes(step.id) ? (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  ) : (
                    <Circle className="w-6 h-6 text-muted-foreground" />
                  )}
                </div>
                
                <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium">{step.title}</h4>
                    <Badge variant="outline" className="text-xs">
                      {step.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                
                <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Detailed Guide Tabs */}
      <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="basics">Rally Basics</TabsTrigger>
          <TabsTrigger value="championship">Championship</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>

        <TabsContent value="basics" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {rallyBasics.map((topic, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <topic.icon className="w-5 h-5 text-primary" />
                    {topic.title}
                  </CardTitle>
                  <CardDescription>{topic.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {topic.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="championship" className="space-y-6">
          <div className="grid gap-6">
            {championshipInfo.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <category.icon className={`w-5 h-5 ${category.color}`} />
                      {category.category}
                    </CardTitle>
                    <Badge variant={
                      category.difficulty === 'Expert' ? 'destructive' :
                      category.difficulty === 'Intermediate' ? 'default' : 'secondary'
                    }>
                      {category.difficulty}
                    </Badge>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Points:</span>
                      <code className="text-sm bg-muted px-2 py-1 rounded">
                        {category.points}
                      </code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Championship Points System
              </CardTitle>
              <CardDescription>
                How points are calculated and distributed across rally events
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2">Regular Rallies</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Points awarded for overall position</li>
                    <li>• Bonus points for stage wins</li>
                    <li>• Power Stage bonus (top 5)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Championship Rallies</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• 1.5x points multiplier</li>
                    <li>• Double Power Stage bonus</li>
                    <li>• Manufacturers points awarded</li>
                  </ul>
                </div>
              </div>
              
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Season Format:</strong> 12 rallies across diverse terrains and conditions. 
                  Championships decided by both Drivers and Manufacturers standings with separate point systems.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="community" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Find Your Team
                </CardTitle>
                <CardDescription>
                  Connect with other drivers and build lasting partnerships
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <MapPin className="w-4 h-4 text-primary" />
                    <div>
                      <p className="font-medium">Regional Teams</p>
                      <p className="text-sm text-muted-foreground">Join drivers in your area</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Shield className="w-4 h-4 text-primary" />
                    <div>
                      <p className="font-medium">Skill-Based Groups</p>
                      <p className="text-sm text-muted-foreground">Match with similar experience</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Zap className="w-4 h-4 text-primary" />
                    <div>
                      <p className="font-medium">Practice Sessions</p>
                      <p className="text-sm text-muted-foreground">Regular training opportunities</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Learning Resources
                </CardTitle>
                <CardDescription>
                  Master rallying with our comprehensive guides
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Car className="w-4 h-4 mr-2" />
                    Car Setup Guides
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start">
                    <Route className="w-4 h-4 mr-2" />
                    Stage Analysis Videos
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start">
                    <Target className="w-4 h-4 mr-2" />
                    Driving Technique Tips
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start">
                    <Trophy className="w-4 h-4 mr-2" />
                    Championship Strategies
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Rally Journey?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of drivers already competing in the most comprehensive rally championship. 
            Your first rally is just a few clicks away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Create Driver Profile
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Browse Upcoming Rallies
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default NewRacerGuide