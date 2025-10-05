import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  DollarSign, 
  Users, 
  BookOpen, 
  TrendingUp,
  Plus,
  Edit,
  Eye,
  Star
} from 'lucide-react'

const InstructorDashboard = ({ user }) => {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { label: "Total Earnings", value: "$12,450", icon: DollarSign, change: "+15%" },
    { label: "Total Students", value: "2,847", icon: Users, change: "+8%" },
    { label: "Published Courses", value: "12", icon: BookOpen, change: "+2" },
    { label: "Average Rating", value: "4.8", icon: Star, change: "+0.1" }
  ]

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      students: 1542,
      rating: 4.9,
      earnings: "$4,850",
      status: "Published",
      lastUpdated: "2 days ago"
    },
    {
      id: 2,
      title: "Advanced React Development",
      students: 892,
      rating: 4.8,
      earnings: "$3,200",
      status: "Published",
      lastUpdated: "1 week ago"
    },
    {
      id: 3,
      title: "Node.js Backend Development",
      students: 413,
      rating: 4.9,
      earnings: "$1,890",
      status: "Published",
      lastUpdated: "3 days ago"
    }
  ]

  const recentEarnings = [
    { date: "2024-10-04", amount: "$89.99", course: "Web Development Bootcamp", student: "John Doe" },
    { date: "2024-10-04", amount: "$79.99", course: "React Development", student: "Jane Smith" },
    { date: "2024-10-03", amount: "$89.99", course: "Web Development Bootcamp", student: "Mike Johnson" },
    { date: "2024-10-03", amount: "$69.99", course: "Node.js Backend", student: "Sarah Wilson" }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold font-orbitron">Instructor Dashboard</h1>
              <p className="text-muted-foreground font-inter">Manage your courses and track your success</p>
            </div>
            <Button className="davinci-gradient font-inter">
              <Plus className="w-4 h-4 mr-2" />
              Create New Course
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card rounded-lg p-6 border">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className="w-8 h-8 text-primary" />
                <span className="text-sm text-green-600 font-inter">{stat.change}</span>
              </div>
              <div className="text-2xl font-bold davinci-gradient-text font-orbitron">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-inter">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-muted rounded-lg p-1">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 rounded-md font-medium transition-colors font-inter ${
              activeTab === 'overview' 
                ? 'bg-background text-foreground shadow-sm' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Overview
          </button>
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
            onClick={() => setActiveTab('earnings')}
            className={`px-6 py-3 rounded-md font-medium transition-colors font-inter ${
              activeTab === 'earnings' 
                ? 'bg-background text-foreground shadow-sm' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Earnings
          </button>
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Quick Actions */}
              <div className="bg-card rounded-lg border p-6">
                <h3 className="text-xl font-semibold mb-4 font-orbitron">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start font-inter">
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Course
                  </Button>
                  <Button variant="outline" className="w-full justify-start font-inter">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Existing Course
                  </Button>
                  <Button variant="outline" className="w-full justify-start font-inter">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    View Analytics
                  </Button>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-card rounded-lg border p-6">
                <h3 className="text-xl font-semibold mb-4 font-orbitron">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-inter">New student enrolled</span>
                    <span className="text-muted-foreground font-inter">2 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-inter">Course review received</span>
                    <span className="text-muted-foreground font-inter">5 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-inter">Payment received</span>
                    <span className="text-muted-foreground font-inter">1 day ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'courses' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold font-orbitron">My Courses</h2>
              <Button className="davinci-gradient font-inter">
                <Plus className="w-4 h-4 mr-2" />
                Add New Course
              </Button>
            </div>
            
            <div className="grid gap-6">
              {courses.map((course) => (
                <div key={course.id} className="bg-card rounded-lg border p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold font-orbitron">{course.title}</h3>
                      <div className="flex items-center space-x-6 text-sm text-muted-foreground font-inter">
                        <span>{course.students} students</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{course.rating}</span>
                        </div>
                        <span>Earnings: {course.earnings}</span>
                        <span>Updated {course.lastUpdated}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-inter">
                        {course.status}
                      </span>
                      <Button variant="outline" size="sm" className="font-inter">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="font-inter">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'earnings' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-orbitron">Earnings History</h2>
            
            <div className="bg-card rounded-lg border">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold font-orbitron">Recent Transactions</h3>
              </div>
              <div className="divide-y">
                {recentEarnings.map((earning, index) => (
                  <div key={index} className="p-6 flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="font-medium font-inter">{earning.course}</div>
                      <div className="text-sm text-muted-foreground font-inter">
                        Student: {earning.student}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold davinci-gradient-text font-orbitron">{earning.amount}</div>
                      <div className="text-sm text-muted-foreground font-inter">{earning.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default InstructorDashboard
