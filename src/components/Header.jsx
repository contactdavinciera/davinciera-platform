import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useAuth } from '../contexts/AuthContext'
import UserMenu from './auth/UserMenu'
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  X,
  BookOpen,
  Users,
  Award,
  TrendingUp
} from 'lucide-react'

const Header = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { user, isAuthenticated } = useAuth()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/davinciera_icon_final.png" 
              alt="DaVinciEra - Homem Vitruviano" 
              className="w-10 h-10 object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold davinci-gradient-text font-orbitron">DaVinciEra</h1>
              <p className="text-xs text-muted-foreground -mt-1 font-inter">Learning Platform</p>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search courses, instructors, topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Navigation & Actions */}
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link to="/marketplace" className="text-sm font-medium hover:text-primary transition-colors">
                Courses
              </Link>
              {isAuthenticated && user?.role === 'instructor' && (
                <Link to="/instructor-dashboard" className="text-sm font-medium hover:text-primary transition-colors">
                  Teach
                </Link>
              )}
              {isAuthenticated && user?.role === 'affiliate' && (
                <Link to="/affiliate-dashboard" className="text-sm font-medium hover:text-primary transition-colors">
                  Affiliates
                </Link>
              )}
              {!isAuthenticated && (
                <>
                  <Link to="/register?role=instructor" className="text-sm font-medium hover:text-primary transition-colors">
                    Teach
                  </Link>
                  <Link to="/register?role=affiliate" className="text-sm font-medium hover:text-primary transition-colors">
                    Affiliates
                  </Link>
                </>
              )}
            </nav>

            {/* Cart */}
            {isAuthenticated && (
              <Link to="/checkout" className="relative">
                <Button variant="ghost" size="sm" className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </Link>
            )}

            {/* User Menu */}
            {isAuthenticated ? (
              <UserMenu />
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    Log In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="sm" className="davinci-gradient">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/marketplace" 
                className="flex items-center space-x-3 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen className="w-4 h-4" />
                <span>Browse Courses</span>
              </Link>
              
              {isAuthenticated ? (
                <>
                  {user?.role === 'instructor' && (
                    <Link 
                      to="/instructor-dashboard" 
                      className="flex items-center space-x-3 text-sm font-medium hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Users className="w-4 h-4" />
                      <span>Instructor Dashboard</span>
                    </Link>
                  )}
                  {user?.role === 'affiliate' && (
                    <Link 
                      to="/affiliate-dashboard" 
                      className="flex items-center space-x-3 text-sm font-medium hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <TrendingUp className="w-4 h-4" />
                      <span>Affiliate Dashboard</span>
                    </Link>
                  )}
                </>
              ) : (
                <>
                  <Link 
                    to="/register?role=instructor" 
                    className="flex items-center space-x-3 text-sm font-medium hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Users className="w-4 h-4" />
                    <span>Become Instructor</span>
                  </Link>
                  <Link 
                    to="/register?role=affiliate" 
                    className="flex items-center space-x-3 text-sm font-medium hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <TrendingUp className="w-4 h-4" />
                    <span>Affiliate Program</span>
                  </Link>
                  <div className="pt-4 border-t">
                    <div className="flex flex-col space-y-2">
                      <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                        <Button variant="ghost" className="justify-start w-full">
                          Log In
                        </Button>
                      </Link>
                      <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                        <Button className="davinci-gradient justify-start w-full">
                          Sign Up Free
                        </Button>
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
