import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Home, 
  Calendar, 
  Trophy, 
  Users, 
  UserPlus, 
  Sun, 
  Moon,
  Flag,
  Zap
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Initialize dark mode
    document.documentElement.classList.add('dark')
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/schedule', icon: Calendar, label: 'Schedule' },
    { path: '/standings', icon: Trophy, label: 'Standings' },
    { path: '/community', icon: Users, label: 'Community' },
    { path: '/join', icon: UserPlus, label: 'Join' },
  ]

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg' 
        : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                src="https://static.devv.ai/ewx42obfftvk.png" 
                alt="Online Racing Championship" 
                className="w-10 h-10 transition-all duration-300 group-hover:scale-110"
              />
            </div>
            <span className="text-xl font-bold tracking-tight hidden sm:block">
              Rally Championship
            </span>
          </Link>

          {/* Navigation Icons */}
          <div className="flex items-center gap-1">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={cn(
                  'relative p-3 rounded-lg transition-all duration-200 group',
                  'hover:bg-muted hover:scale-105',
                  location.pathname === path
                    ? 'text-primary bg-muted'
                    : 'text-muted-foreground hover:text-foreground'
                )}
                title={label}
              >
                <Icon className="w-5 h-5" />
                {location.pathname === path && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-2 hover:scale-105 transition-transform"
              title="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-400" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation