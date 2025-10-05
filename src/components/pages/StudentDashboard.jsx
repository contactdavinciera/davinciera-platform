import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  BookOpen, 
  Clock, 
  Award, 
  Play,
  CheckCircle,
  Star,
  Download,
  User
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
      thumbnail: "/api/placeholder/300/200",
      rating: 4.9
    },
    {
      id: 2,
      title: "Digital Marketing Mastery",
      instructor: "Isabella Chen",
      progress: 40,
      totalLessons: 89,
      completedLessons: 36,
      lastAccessed: "1 day ago",
      thumbnail: "/api/placeholder/300/200",
      rating: 4.8
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      instructor: "Marco Rossi",
      progress: 85,
      totalLessons: 124,
      completedLessons: 105,
      lastAccessed: "3 hours ago",
      thumbnail: "/api/placeholder/300/200",
      rating: 4.9
    }
  ]

  const completedCourses = [
    {
      id: 4,
      title: "Python for Data Science",
      instructor: "Dr. Sarah Johnson",
      completedDate: "2024-09-15",
      certificateId: "DV-2024-001",
      rating: 4.7
    }
  ]

  const stats = [
    { label: "Courses Enrolled", value: "3", icon: BookOpen },
    { label: "Hours Learned", value: "127", icon: Clock },
    { label: "Certificates", value: "1", icon: Award },
    { label: "Average Rating", value: "4.8", icon: Star }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold font-orbitron">Welcome back, {user?.name || 'Student'}!</h1>
              <p className="text-muted-foreground font-inter">Continue your learning journey</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card rounded-lg p-6 border">
              <div className="flex items-center space-x-3">
                <stat.icon className="w-8 h-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold davinci-gradient-text font-orbitron">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-inter">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-muted rounded-lg p-1">
          <button
            onClick={() => setActiveTab('courses')}
            className={`px-6 py-3 rounded-md font-medium transition-colors font-inter ${
              activeTab === 'courses' 
                ? 'bg-background text-foreground shadow-sm' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            My Courses
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-6 py-3 rounded-md font-medium transition-colors font-inter ${
              activeTab === 'completed' 
                ? 'bg-background text-foreground shadow-sm' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Completed
          </button>
        </div>

        {/* Content */}
        {activeTab === 'courses' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-orbitron">Continue Learning</h2>
            <div className="grid gap-6">
              {enrolledCourses.map((course) => (
                <div key={course.id} className="bg-card rounded-lg border p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="w-full lg:w-48 h-32 bg-muted rounded-lg flex items-center justify-center">
                      <Play className="w-12 h-12 text-primary" />
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold font-orbitron">{course.title}</h3>
                        <p className="text-muted-foreground font-inter">by {course.instructor}</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm font-inter">
                          <span>Progress: {course.completedLessons}/{course.totalLessons} lessons</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="davinci-gradient h-2 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground font-inter">
                          <span>Last accessed: {course.lastAccessed}</span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span>{course.rating}</span>
                          </div>
                        </div>
                        <Button className="davinci-gradient font-inter">
                          Continue Learning
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'completed' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-orbitron">Completed Courses</h2>
            <div className="grid gap-6">
              {completedCourses.map((course) => (
                <div key={course.id} className="bg-card rounded-lg border p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold font-orbitron">{course.title}</h3>
                      <p className="text-muted-foreground font-inter">by {course.instructor}</p>
                      <p className="text-sm text-muted-foreground font-inter">
                        Completed on {new Date(course.completedDate).toLocaleDateString()}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-1" />
                        <span className="text-sm text-muted-foreground font-inter">Completed</span>
                      </div>
                      <Button variant="outline" className="font-inter">
                        <Download className="w-4 h-4 mr-2" />
                        Certificate
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default StudentDashboard
