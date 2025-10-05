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

const HomePage = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Leonardo Martinez",
      rating: 4.9,
      students: 15420,
      duration: "42 hours",
      price: 89.99,
      originalPrice: 199.99,
      image: "/api/placeholder/300/200",
      category: "Technology",
      level: "Beginner to Advanced"
    },
    {
      id: 2,
      title: "Digital Marketing Mastery",
      instructor: "Isabella Chen",
      rating: 4.8,
      students: 8930,
      duration: "28 hours",
      price: 79.99,
      originalPrice: 149.99,
      image: "/api/placeholder/300/200",
      category: "Marketing",
      level: "Intermediate"
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      instructor: "Marco Rossi",
      rating: 4.9,
      students: 12340,
      duration: "35 hours",
      price: 94.99,
      originalPrice: 179.99,
      image: "/api/placeholder/300/200",
      category: "Design",
      level: "Beginner"
    }
  ]

  const categories = [
    { name: "Technology", icon: Zap, courses: 1250, color: "text-blue-500" },
    { name: "Business", icon: TrendingUp, courses: 890, color: "text-green-500" },
    { name: "Design", icon: Target, courses: 720, color: "text-purple-500" },
    { name: "Marketing", icon: Globe, courses: 650, color: "text-orange-500" }
  ]

  const stats = [
    { label: "Active Students", value: "50,000+", icon: Users },
    { label: "Expert Instructors", value: "2,500+", icon: Award },
    { label: "Course Hours", value: "100,000+", icon: Clock },
    { label: "Course Completion", value: "95%", icon: CheckCircle }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 geometric-pattern">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-shadow">
                  Where <span className="davinci-gradient-text">Renaissance</span> Meets <span className="davinci-gradient-text">Innovation</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Transform your learning journey with cutting-edge courses taught by world-class instructors. Master skills that matter in today's digital world.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/marketplace">
                  <Button size="lg" className="davinci-gradient glow-effect text-lg px-8 py-6">
                    Explore Courses
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold davinci-gradient-text">4.9★</div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold davinci-gradient-text">50K+</div>
                  <div className="text-sm text-muted-foreground">Happy Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold davinci-gradient-text">2.5K+</div>
                  <div className="text-sm text-muted-foreground">Expert Instructors</div>
                </div>
              </div>
            </div>

            <div className="relative slide-up">
              <div className="relative">
                <div className="absolute inset-0 davinci-gradient rounded-3xl blur-3xl opacity-20"></div>
                <div className="relative bg-card rounded-3xl p-8 border shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">Featured Course</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">4.9</span>
                      </div>
                    </div>
                    
                    <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
                      <Play className="w-16 h-16 text-primary" />
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold">Complete Web Development Bootcamp</h4>
                      <p className="text-sm text-muted-foreground">Master modern web development from zero to hero</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold davinci-gradient-text">$89.99</span>
                        <span className="text-sm text-muted-foreground line-through">$199.99</span>
                      </div>
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
            {stats.map((stat, index) => (
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
            {categories.map((category, index) => (
              <Link key={index} to={`/marketplace?category=${category.name.toLowerCase()}`}>
                <div className="group p-6 bg-card rounded-xl border card-hover cursor-pointer">
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.courses} courses</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
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
            {featuredCourses.map((course) => (
              <Link key={course.id} to={`/course/${course.id}`}>
                <div className="group bg-card rounded-xl overflow-hidden border card-hover">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Play className="w-12 h-12 text-white opacity-80 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                        {course.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                        {course.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-x-2">
                        <span className="text-xl font-bold davinci-gradient-text">
                          ${course.price}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          ${course.originalPrice}
                        </span>
                      </div>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 davinci-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl opacity-90">
              Join thousands of learners who have already advanced their careers with DaVinciEra. 
              Start your journey today with our comprehensive courses and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/marketplace">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  Start Learning Now
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/instructor-dashboard">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                  Become an Instructor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
