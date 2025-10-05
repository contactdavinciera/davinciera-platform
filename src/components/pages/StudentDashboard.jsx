import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  BookOpen, 
  Clock, 
  Award, 
  TrendingUp,
  Play,
  CheckCircle,
  Star,
  Calendar,
  Download,
  Settings,
  User,
  Heart,
  BarChart3
} from 'lucide-react'

const StudentDashboard = ({ user }) => {
  const [activeTab, setActiveTab] = useState('courses')

  const enrolledCourses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Leonardo Martinez",
      progress: 65,
      totalLessons: 156,
      completedLessons: 101,
      lastAccessed: "2 hours ago",
      image: "/api/placeholder/200/120",
      rating: 4.9,
      certificate: false
    },
    {
      id: 2,
      title: "Digital Marketing Mastery",
      instructor: "Isabella Chen",
      progress: 30,
      totalLessons: 89,
      completedLessons: 27,
      lastAccessed: "1 day ago",
      image: "/api/placeholder/200/120",
      rating: 4.8,
      certificate: false
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      instructor: "Marco Rossi",
      progress: 100,
      totalLessons: 124,
      completedLessons: 124,
      lastAccessed: "3 days ago",
      image: "/api/placeholder/200/120",
      rating: 4.9,
      certificate: true
    }
  ]

  const certificates = [
    {
      id: 1,
      course: "UI/UX Design Fundamentals",
      instructor: "Marco Rossi",
      completedDate: "October 15, 2024",
      certificateId: "DV-2024-UX-001",
      image: "/api/placeholder/300/200"
    }
  ]

  const wishlist = [
    {
      id: 4,
      title: "Python for Data Science",
      instructor: "Dr. Sarah Johnson",
      price: 99.99,
      originalPrice: 189.99,
      rating: 4.7,
      image: "/api/placeholder/200/120"
    },
    {
      id: 5,
      title: "Mobile App Development",
      instructor: "Alex Rodriguez",
      price: 84.99,
      originalPrice: 159.99,
      rating: 4.8,
      image: "/api/placeholder/200/120"
    }
  ]

  const stats = [
    { label: "Courses Enrolled", value: "3", icon: BookOpen, color: "text-blue-500" },
    { label: "Hours Learned", value: "127", icon: Clock, color: "text-green-500" },
    { label: "Certificates", value: "1", icon: Award, color: "text-yellow-500" },
    { label: "Average Progress", value: "65%", icon: TrendingUp, color: "text-purple-500" }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-muted-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Welcome back, John!</h1>
                <p className="text-muted-foreground">Continue your learning journey</p>
              </div>
            </div>
            <Button variant="outline">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card border rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="border-b mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'courses', label: 'My Courses' },
              { id: 'certificates', label: 'Certificates' },
              { id: 'wishlist', label: 'Wishlist' },
              { id: 'progress', label: 'Progress' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'courses' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">My Courses</h2>
              <div className="text-sm text-muted-foreground">
                {enrolledCourses.length} courses enrolled
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledCourses.map(course => (
                <div key={course.id} className="bg-card border rounded-xl overflow-hidden card-hover">
                  <div className="aspect-video bg-muted relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                    {course.certificate && (
                      <div className="absolute top-4 right-4">
                        <Award className="w-6 h-6 text-yellow-500" />
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-semibold line-clamp-2">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="davinci-gradient h-2 rounded-full transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                        <span>Last accessed {course.lastAccessed}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{course.rating}</span>
                      </div>
                      <Button size="sm" className="davinci-gradient">
                        Continue Learning
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'certificates' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">My Certificates</h2>
              <div className="text-sm text-muted-foreground">
                {certificates.length} certificate{certificates.length !== 1 ? 's' : ''} earned
              </div>
            </div>

            {certificates.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map(cert => (
                  <div key={cert.id} className="bg-card border rounded-xl overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                      <Award className="w-16 h-16 text-yellow-600" />
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="font-semibold">{cert.course}</h3>
                        <p className="text-sm text-muted-foreground">by {cert.instructor}</p>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Completed:</span>
                          <span>{cert.completedDate}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Certificate ID:</span>
                          <span className="font-mono text-xs">{cert.certificateId}</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Award className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No certificates yet</h3>
                <p className="text-muted-foreground mb-4">Complete courses to earn certificates</p>
                <Button>Browse Courses</Button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'wishlist' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">My Wishlist</h2>
              <div className="text-sm text-muted-foreground">
                {wishlist.length} course{wishlist.length !== 1 ? 's' : ''} saved
              </div>
            </div>

            {wishlist.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlist.map(course => (
                  <div key={course.id} className="bg-card border rounded-xl overflow-hidden card-hover">
                    <div className="aspect-video bg-muted relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute top-4 right-4">
                        <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                          <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="font-semibold line-clamp-2">{course.title}</h3>
                        <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{course.rating}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-x-2">
                          <span className="text-lg font-bold davinci-gradient-text">
                            ${course.price}
                          </span>
                          <span className="text-sm text-muted-foreground line-through">
                            ${course.originalPrice}
                          </span>
                        </div>
                        <Button size="sm" className="davinci-gradient">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Your wishlist is empty</h3>
                <p className="text-muted-foreground mb-4">Save courses you're interested in</p>
                <Button>Browse Courses</Button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'progress' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Learning Progress</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-card border rounded-xl p-6">
                <h3 className="font-semibold mb-4">Weekly Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">This week</span>
                    <span className="font-semibold">12 hours</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="davinci-gradient h-2 rounded-full w-3/4"></div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Goal: 15 hours per week
                  </div>
                </div>
              </div>
              
              <div className="bg-card border rounded-xl p-6">
                <h3 className="font-semibold mb-4">Course Completion</h3>
                <div className="space-y-3">
                  {enrolledCourses.map(course => (
                    <div key={course.id} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="truncate">{course.title}</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5">
                        <div 
                          className="davinci-gradient h-1.5 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default StudentDashboard
