## Project Description
Rally Championship - A comprehensive rally championship platform combining competitive rally sport with community engagement. Features multi-class rally championship structure, comprehensive onboarding tutorials, championship points calculation system, and modern rally-themed UI design.

## Key Features
- Rally championship platform with WRC, R5, and Historic car classes
- Comprehensive "New Racers Start Here" guide with interactive tutorials and progress tracking
- Championship points calculation system with rally-specific multipliers and bonus points
- Sub-championship system with separate Drivers and Manufacturers competitions
- Expandable race detail modals with comprehensive track information and weather conditions
- Rally calendar with Championship and Regular rallies featuring terrain-specific challenges
- Interactive weather forecasts with rain probability and wind conditions for rally stages
- Power Stage bonus points system and stage win tracking
- Season progression tracking with completed/upcoming rally status
- Detailed rally specifications with stage characteristics and difficulty ratings
- Hero section with rally countdown and next rally information
- Icon-based navigation with sticky behavior and dark mode toggle
- Community showcase with rally driver profiles and achievements
- Real-time community activity feed and rally community statistics
- Championship standings with animated leaderboard and driver statistics
- Mobile-first responsive design optimized for performance (removed transitions)
- Rally-themed design system with terrain-appropriate styling

## Data Storage
**Local Only:** (No backend features implemented yet)
- Theme preference: localStorage via document.classList
- Navigation state: Component state only
- Rally data: Static mock data in components
- Championship calculations: Client-side computations
- Onboarding progress: Component state tracking

## SDK & External Services
**Devv SDK:** None currently used
**External APIs:** None currently used
**Environment Variables:** None required

/src
├── components/
│   ├── Navigation.tsx # Sticky navigation with rally championship branding
│   ├── HeroSection.tsx # Hero with rally background and countdown to next rally
│   ├── CommunityShowcase.tsx # Featured rally drivers and community stats
│   ├── RaceDetailModal.tsx # Comprehensive rally detail modal with track info and weather
│   ├── NewRacerGuide.tsx # Interactive guide with onboarding tutorials and progress tracking
│   ├── ChampionshipSystem.tsx # Points calculation system with rally-specific bonuses and multipliers
│   └── ui/ # Pre-built shadcn/ui components
│
├── pages/
│   ├── HomePage.tsx # Landing page with rally hero and community sections
│   ├── SchedulePage.tsx # Multi-championship rally schedule with WRC/R5/Historic classes and modals
│   ├── StandingsPage.tsx # Championship standings with animated leaderboard and driver stats
│   ├── CommunityPage.tsx # Comprehensive rally community hub with driver profiles and activity feed
│   ├── JoinPage.tsx # Comprehensive join experience with onboarding, guide, and championship system tabs
│   └── NotFoundPage.tsx # 404 error page
│
├── hooks/
│   ├── use-mobile.ts # Mobile detection hook
│   └── use-toast.ts # Toast notifications
│
├── lib/
│   └── utils.ts # Utility functions
│
├── index.css # Rally-themed design system (removed transitions for performance)
├── App.tsx # Simple router without transitions (performance optimized)
└── main.tsx # Application entry point