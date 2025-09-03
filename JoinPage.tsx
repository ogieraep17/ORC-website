import { useState } from 'react'
import Navigation from '@/components/Navigation'
import NewRacerGuide from '@/components/NewRacerGuide'
import ChampionshipSystem from '@/components/ChampionshipSystem'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  UserPlus, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  Trophy,
  Clock,
  Users,
  Flag,
  Calendar,
  Settings,
  Shield,
  Star,
  Zap,
  Mail,
  User,
  GamepadIcon,
  Award,
  BookOpen,
  Calculator,
  Route,
  Car
} from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

type OnboardingStep = 'welcome' | 'personal' | 'experience' | 'rules' | 'preferences' | 'complete'

const JoinPage = () => {
  const { toast } = useToast()
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('welcome')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gamertag: '',
    experience: '',
    preferredClass: '',
    platform: '',
    timezone: ''
  })

  const steps: Record<OnboardingStep, { title: string; progress: number }> = {
    welcome: { title: 'Welcome', progress: 0 },
    personal: { title: 'Personal Info', progress: 20 },
    experience: { title: 'Racing Experience', progress: 40 },
    rules: { title: 'Rules & Guidelines', progress: 60 },
    preferences: { title: 'Preferences', progress: 80 },
    complete: { title: 'Complete', progress: 100 }
  }

  const experienceLevels = [
    { id: 'rookie', title: 'Rookie', subtitle: 'New to racing games', icon: Star },
    { id: 'amateur', title: 'Amateur', subtitle: 'Some racing experience', icon: Trophy },
    { id: 'pro', title: 'Pro', subtitle: 'Experienced racer', icon: Flag },
    { id: 'legend', title: 'Legend', subtitle: 'Racing veteran', icon: Award }
  ]

  const racingClasses = [
    { id: 'wrc', title: 'WRC Class', subtitle: 'Top-tier World Rally Cars', color: 'bg-yellow-500' },
    { id: 'r5', title: 'R5 Class', subtitle: 'Regional championship cars', color: 'bg-blue-500' },
    { id: 'historic', title: 'Historic Class', subtitle: 'Classic rally legends', color: 'bg-green-500' },
    { id: 'junior', title: 'Junior WRC', subtitle: 'Entry-level competition', color: 'bg-purple-500' }
  ]

  const handleNext = () => {
    const stepOrder: OnboardingStep[] = ['welcome', 'personal', 'experience', 'rules', 'preferences', 'complete']
    const currentIndex = stepOrder.indexOf(currentStep)
    if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1])
    }
  }

  const handlePrevious = () => {
    const stepOrder: OnboardingStep[] = ['welcome', 'personal', 'experience', 'rules', 'preferences', 'complete']
    const currentIndex = stepOrder.indexOf(currentStep)
    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1])
    }
  }

  const handleComplete = () => {
    toast({
      title: "Welcome to ORC!",
      description: "Your racing journey begins now. Check your email for next steps.",
    })
  }

  const renderStep = () => {
    switch (currentStep) {
      case 'welcome':
        return (
          <div className="text-center space-y-8">
            <div className="relative">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 bg-primary/40 rounded-full animate-pulse delay-300"></div>
                <div className="absolute inset-8 bg-primary rounded-full flex items-center justify-center">
                  <Flag className="w-12 h-12 text-primary-foreground" />
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-4">Welcome to Rally Championship</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join the ultimate rally championship where precision meets passion. Master the world's most challenging stages.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <Route className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Championship Rallies</h3>
                <p className="text-sm text-muted-foreground">Compete across diverse terrains and weather conditions</p>
              </Card>
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Rally Community</h3>
                <p className="text-sm text-muted-foreground">Connect with co-drivers and rally enthusiasts worldwide</p>
              </Card>
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <Car className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Rally Cars</h3>
                <p className="text-sm text-muted-foreground">WRC, R5, and Historic rally cars with realistic physics</p>
              </Card>
            </div>
          </div>
        )

      case 'personal':
        return (
          <div className="space-y-6 max-w-md mx-auto">
            <div className="text-center mb-8">
              <User className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold">Tell us about yourself</h2>
              <p className="text-muted-foreground">We'll use this to personalize your experience</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Your full name"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="your.email@example.com"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="gamertag">Gamertag/Username</Label>
                <Input 
                  id="gamertag" 
                  value={formData.gamertag}
                  onChange={(e) => setFormData({...formData, gamertag: e.target.value})}
                  placeholder="Your racing name"
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        )

      case 'experience':
        return (
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Car className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold">What's your rally experience?</h2>
              <p className="text-muted-foreground">This helps us match you with suitable rally events</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {experienceLevels.map((level) => {
                const IconComponent = level.icon
                return (
                  <Card 
                    key={level.id}
                    className={`p-6 cursor-pointer transition-all duration-200 hover:scale-105 ${
                      formData.experience === level.id 
                        ? 'ring-2 ring-primary bg-primary/5' 
                        : 'bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70'
                    }`}
                    onClick={() => setFormData({...formData, experience: level.id})}
                  >
                    <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-center mb-2">{level.title}</h3>
                    <p className="text-sm text-muted-foreground text-center">{level.subtitle}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        )

      case 'rules':
        return (
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold">Racing Rules & Guidelines</h2>
              <p className="text-muted-foreground">Fair play makes racing fun for everyone</p>
            </div>

            <div className="space-y-4">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Clean Racing
                </h3>
                <p className="text-sm text-muted-foreground">
                  Race with respect. No intentional contact, blocking, or unsportsmanlike behavior.
                </p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Communication
                </h3>
                <p className="text-sm text-muted-foreground">
                  Keep chat friendly and constructive. Help newcomers learn and improve.
                </p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Fair Competition
                </h3>
                <p className="text-sm text-muted-foreground">
                  No cheating, exploits, or unfair advantages. Race with integrity.
                </p>
              </Card>
            </div>
          </div>
        )

      case 'preferences':
        return (
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Settings className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold">Racing Preferences</h2>
              <p className="text-muted-foreground">Help us recommend the perfect races for you</p>
            </div>

            <div>
              <Label className="text-base font-semibold mb-4 block">Preferred Rally Class</Label>
              <div className="grid md:grid-cols-2 gap-3">
                {racingClasses.map((raceClass) => (
                  <Card 
                    key={raceClass.id}
                    className={`p-4 cursor-pointer transition-all duration-200 hover:scale-105 ${
                      formData.preferredClass === raceClass.id 
                        ? 'ring-2 ring-primary bg-primary/5' 
                        : 'bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70'
                    }`}
                    onClick={() => setFormData({...formData, preferredClass: raceClass.id})}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full ${raceClass.color}`}></div>
                      <div>
                        <h3 className="font-semibold">{raceClass.title}</h3>
                        <p className="text-sm text-muted-foreground">{raceClass.subtitle}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="platform">Platform</Label>
                <Input 
                  id="platform" 
                  value={formData.platform}
                  onChange={(e) => setFormData({...formData, platform: e.target.value})}
                  placeholder="PC, PlayStation, Xbox"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="timezone">Timezone</Label>
                <Input 
                  id="timezone" 
                  value={formData.timezone}
                  onChange={(e) => setFormData({...formData, timezone: e.target.value})}
                  placeholder="GMT, EST, PST, etc."
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        )

      case 'complete':
        return (
          <div className="text-center space-y-8">
            <div className="relative">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-green-500/20 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 bg-green-500/40 rounded-full animate-pulse delay-300"></div>
                <div className="absolute inset-8 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-4">Welcome to Rally Championship, {formData.name || 'Driver'}! 🏁</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Your rally driver profile is complete. Get ready to master the world's most challenging stages.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Check Your Email</h3>
                <p className="text-sm text-muted-foreground">Setup instructions and first race details sent</p>
              </Card>
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Next Rally</h3>
                <p className="text-sm text-muted-foreground">Sunday at 14:00 GMT - Monte Carlo Rally</p>
              </Card>
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Join Community</h3>
                <p className="text-sm text-muted-foreground">Connect with other racers in our Discord</p>
              </Card>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Flag className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Join Rally Championship</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">Start Your Rally Journey</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to become a championship rally driver. From beginner guides to advanced techniques.
            </p>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="onboarding" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="onboarding" className="flex items-center gap-2">
                <UserPlus className="w-4 h-4" />
                Join Now
              </TabsTrigger>
              <TabsTrigger value="guide" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                New Racers Guide
              </TabsTrigger>
              <TabsTrigger value="championship" className="flex items-center gap-2">
                <Calculator className="w-4 h-4" />
                Championship System
              </TabsTrigger>
            </TabsList>

            {/* Onboarding Flow */}
            <TabsContent value="onboarding">
              <div className="max-w-4xl mx-auto">
                {/* Progress Bar */}
                {currentStep !== 'welcome' && currentStep !== 'complete' && (
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-muted-foreground">
                        Step {Object.keys(steps).indexOf(currentStep)} of {Object.keys(steps).length - 2}
                      </span>
                      <span className="text-sm font-medium text-muted-foreground">
                        {steps[currentStep].progress}%
                      </span>
                    </div>
                    <Progress value={steps[currentStep].progress} className="h-2" />
                  </div>
                )}

                {/* Step Content */}
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 min-h-[500px] flex flex-col">
                  <div className="flex-1">
                    {renderStep()}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between items-center mt-8 pt-6 border-t border-border/50">
                    <Button 
                      variant="outline" 
                      onClick={handlePrevious}
                      disabled={currentStep === 'welcome'}
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Previous
                    </Button>

                    {currentStep === 'complete' ? (
                      <Button onClick={handleComplete} size="lg" className="flex items-center gap-2">
                        Start Racing
                        <Flag className="w-4 h-4" />
                      </Button>
                    ) : (
                      <Button 
                        onClick={handleNext}
                        disabled={
                          (currentStep === 'personal' && (!formData.name || !formData.email || !formData.gamertag)) ||
                          (currentStep === 'experience' && !formData.experience) ||
                          (currentStep === 'preferences' && !formData.preferredClass)
                        }
                        className="flex items-center gap-2"
                      >
                        {currentStep === 'welcome' ? 'Get Started' : 'Continue'}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* New Racers Guide */}
            <TabsContent value="guide">
              <NewRacerGuide />
            </TabsContent>

            {/* Championship System */}
            <TabsContent value="championship">
              <ChampionshipSystem />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

export default JoinPage