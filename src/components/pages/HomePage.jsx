
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { 
  Play, 
  Star, 
  Users, 
  Clock, 
  Award,
  TrendingUp,
  BookOpen,
  Target,
  Zap,
  Globe,
  ChevronRight,
  CheckCircle
} from 'lucide-react'
import dataService from '@/services/dataService'

const HomePage = () => {
  // State for dynamic data
  const [featuredCourses, setFeaturedCourses] = useState([])
  const [categories, setCategories] = useState([])
  const [stats, setStats] = useState({
    activeStudents: 0,
    expertInstructors: 0,
    availableCourses: 0,
    averageRating: 0
  })
  const [loading, setLoading] = useState(true)

  // Load data on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        const [coursesData, categoriesData, statsData] = await Promise.all([
          dataService.getFeaturedCourses(3),
          dataService.getAllCategories(),
          dataService.getStats()
        ])
        
        setFeaturedCourses(coursesData)
        setCategories(categoriesData)
        setStats(statsData)
      } catch (error) {
        console.error('Failed to load homepage data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  // Icon mapping for categories
  const iconMap = {
    'Zap': Zap,
    'TrendingUp': TrendingUp,
    'Target': Target,
    'Globe': Globe
  }

  // Color mapping for categories
  const colorMap = {
    'Technology': 'text-blue-500',
    'Business': 'text-green-500',
    'Design': 'text-purple-500',
    'Marketing': 'text-orange-500'
  }

  // Dynamic stats display
  const displayStats = [
    { 
      label: "Active Students", 
      value: loading ? "..." : `${Math.floor(stats.activeStudents / 1000) || 0}K+`, 
      icon: Users 
    },
    { 
      label: "Expert Instructors", 
      value: loading ? "..." : `${stats.expertInstructors || 0}+`, 
      icon: Award 
    },
    { 
      label: "Available Courses", 
      value: loading ? "..." : `${stats.availableCourses || 0}+`, 
      icon: Clock 
    },
    { 
      label: "Average Rating", 
      value: loading ? "..." : `${stats.averageRating || 0}/5`, 
      icon: CheckCircle 
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 geometric-pattern overflow-hidden">
        {/* Vitruvian Logo Background */}
        <div className="absolute top-10 right-10 opacity-5 hidden lg:block">
          <img 
            src="/davinciera_gold_final.png" 
            alt="DaVinciEra Background" 
            className="w-96 h-96 object-contain"
          />
        </div>
        
        {/* Academic excellence badge */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-sm font-medium shadow-lg">
            🎓 International Academic Standard • World-Class Quality
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-in">
              {/* Excellence badge */}
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-800 px-6 py-3 rounded-full text-sm font-medium border border-blue-200">
                <Award className="w-5 h-5" />
                <span>Higher Education Institution • International Recognition</span>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-7xl font-bold leading-tight text-shadow font-orbitron">
                  Where <span className="davinci-gradient-text">Renaissance</span> Meets <span className="davinci-gradient-text">Innovation</span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl font-inter leading-relaxed">
                  Develop elite knowledge through courses with international academic rigor. Structured content with the highest educational quality in the world.
                </p>
              </div>
              
              {/* Academic differentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-medium font-inter">International Certification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="font-medium font-inter">Academic Rigor</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Globe className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-medium font-inter">World-Class Standard</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-indigo-600" />
                  </div>
                  <span className="font-medium font-inter">Proven Excellence</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/marketplace">
                  <Button size="lg" className="davinci-gradient glow-effect text-lg px-10 py-7 font-inter shadow-2xl transform hover:scale-105 transition-all duration-300">
                    Explore Courses
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="text-lg px-8 py-7 font-inter border-2 hover:bg-muted/50 transition-all duration-300">
                  <BookOpen className="mr-2 w-5 h-5" />
                  Learn Methodology
                </Button>
              </div>

              {/* Academic metrics */}
              <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold davinci-gradient-text font-orbitron">98%</div>
                  <div className="text-sm text-muted-foreground font-inter">Approval Rate</div>
                  <div className="text-xs text-blue-600 font-medium">International Standard</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold davinci-gradient-text font-orbitron">15+</div>
                  <div className="text-sm text-muted-foreground font-inter">Countries Served</div>
                  <div className="text-xs text-blue-600 font-medium">Global Reach</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold davinci-gradient-text font-orbitron">100%</div>
                  <div className="text-sm text-muted-foreground font-inter">Quality Guaranteed</div>
                  <div className="text-xs text-blue-600 font-medium">Proven Excellence</div>
                </div>
              </div>
            </div>

            <div className="relative slide-up">
              <div className="relative">
                <div className="absolute inset-0 davinci-gradient rounded-3xl blur-3xl opacity-20"></div>
                <div className="relative bg-card rounded-3xl p-8 border shadow-2xl hover:shadow-3xl transition-all duration-300">
                  {/* Quality badge */}
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    🎓 WORLD-CLASS QUALITY
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold font-orbitron">Featured Course</h3>
                        <p className="text-sm text-blue-600 font-medium">📚 International Academic Standard</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium text-blue-600">Certified</span>
                      </div>
                    </div>
                    
                    <div className="relative aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <Play className="w-20 h-20 text-white drop-shadow-lg z-10 hover:scale-110 transition-transform cursor-pointer" />
                      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                        📖 Academic Content
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xl font-bold font-orbitron">Advanced Web Development</h4>
                        <p className="text-sm text-muted-foreground">Academic methodology with scientific rigor and practical application</p>
                        <p className="text-sm text-blue-600 font-medium">Curriculum developed by international specialists</p>
                      </div>
                      
                      {/* Academic characteristics */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <BookOpen className="w-4 h-4 text-blue-500" />
                          <span>120 hours of structured content</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Award className="w-4 h-4 text-blue-500" />
                          <span>Recognized international certification</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Target className="w-4 h-4 text-blue-500" />
                          <span>Research-based methodology</span>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
                        <div className="text-center space-y-2">
                          <div className="text-sm text-blue-600 font-medium">Investment in Excellence</div>
                          <div className="text-3xl font-bold davinci-gradient-text font-orbitron">$2,497</div>
                          <div className="text-sm text-muted-foreground">One-time payment • Lifetime access</div>
                        </div>
                      </div>
                      
                      <Button className="w-full davinci-gradient text-lg py-6 font-inter shadow-lg hover:shadow-xl transition-all duration-300">
                        Access Course
                      </Button>
                      
                      <p className="text-xs text-center text-muted-foreground">
                        🎓 International Certification • 📚 Academic Material • 🌍 Global Recognition
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {displayStats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <stat.icon className="w-8 h-8 text-primary mx-auto" />
                <div className="text-3xl font-bold davinci-gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Explore by Category</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover courses across diverse fields and master skills that drive innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const IconComponent = iconMap[category.icon]
              const colorClass = colorMap[category.name]
              
              return (
                <Link key={index} to={`/marketplace?category=${category.slug}`}>
                  <div className="group p-6 bg-card rounded-xl border card-hover cursor-pointer">
                    <div className="space-y-4">
                      <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <IconComponent className={`w-6 h-6 ${colorClass}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{category.name}</h3>
                        <p className="text-sm text-muted-foreground">{category.courseCount} courses</p>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl lg:text-4xl font-bold">Featured Courses</h2>
              <p className="text-xl text-muted-foreground">
                Hand-picked courses from our top-rated instructors
              </p>
            </div>
            <Link to="/marketplace">
              <Button variant="outline">
                View All Courses
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => {
              const category = dataService.getCategoryById(course.categoryId)
              
              return (
                <Link key={course.id} to={`/course/${course.id}`}>
                  <div className="group bg-card rounded-xl overflow-hidden border card-hover">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <Play className="w-12 h-12 text-white opacity-80 group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                          {category?.name || 'Course'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                          {course.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">by {course.instructor.name}</p>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span>{course.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{course.numberOfStudents.toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="text-lg font-semibold">${course.price}</div>
                        <div className="text-sm text-muted-foreground line-through">${course.originalPrice}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

