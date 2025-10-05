import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  DollarSign, 
  Users, 
  BookOpen, 
  TrendingUp,
  Plus,
  Eye,
  Edit,
  BarChart3,
  Calendar,
  MessageSquare,
  Star,
  Download,
  Settings
} from 'lucide-react'

const InstructorDashboard = ({ user }) => {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { label: "Total Earnings", value: "$12,450", change: "+15%", icon: DollarSign, color: "text-green-500" },
    { label: "Total Students", value: "3,247", change: "+8%", icon: Users, color: "text-blue-500" },
    { label: "Active Courses", value: "8", change: "+2", icon: BookOpen, color: "text-purple-500" },
    { label: "Avg. Rating", value: "4.8", change: "+0.2", icon: Star, color: "text-yellow-500" }
  ]

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      students: 1542,
      rating: 4.9,
      reviews: 234,
      earnings: 4850,
      status: "Published",
      lastUpdated: "2 days ago",
      image: "/api/placeholder/200/120"
    },
    {
      id: 2,
      title: "Advanced React Development",
      students: 892,
      rating: 4.8,
      reviews: 156,
      earnings: 2680,
      status: "Published",
      lastUpdated: "1 week ago",
      image: "/api/placeholder/200/120"
    },
    {
      id: 3,
      title: "Node.js Backend Mastery",
      students: 634,
      rating: 4.7,
      reviews: 89,
      earnings: 1905,
      status: "Published",
      lastUpdated: "3 days ago",
      image: "/api/placeholder/200/120"
    },
    {
      id: 4,
      title: "JavaScript Fundamentals",
      students: 0,
      rating: 0,
      reviews: 0,
      earnings: 0,
      status: "Draft",
      lastUpdated: "5 days ago",
      image: "/api/placeholder/200/120"
    }
  ]

  const recentActivity = [
    {
      type: "enrollment",
      message: "Sarah Johnson enrolled in Complete Web Development Bootcamp",
      time: "2 hours ago"
    },
    {
      type: "review",
      message: "New 5-star review on Advanced React Development",
      time: "4 hours ago"
    },
    {
      type: "question",
      message: "Mike Chen asked a question in Node.js Backend Mastery",
      time: "6 hours ago"
    },
    {
      type: "earning",
      message: "Earned $89.99 from course sale",
      time: "1 day ago"
    }
  ]

  const monthlyEarnings = [
    { month: "Jan", amount: 8500 },
    { month: "Feb", amount: 9200 },
    { month: "Mar", amount: 10100 },
    { month: "Apr", amount: 11300 },
    { month: "May", amount: 12450 }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Instructor Dashboard</h1>
              <p className="text-muted-foreground">Manage your courses and track your success</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button className="davinci-gradient">
                <Plus className="w-4 h-4 mr-2" />
                Create Course
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card border rounded-xl p-6">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="flex items-center space-x-1 text-sm">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-green-500">{stat.change}</span>
                <span className="text-muted-foreground">from last month</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="border-b mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'courses', label: 'My Courses' },
              { id: 'analytics', label: 'Analytics' },
              { id: 'earnings', label: 'Earnings' }
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
        {activeTab === 'overview' && (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Recent Activity */}
              <div className="bg-card border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.type === 'enrollment' ? 'bg-blue-500' :
                        activity.type === 'review' ? 'bg-yellow-500' :
                        activity.type === 'question' ? 'bg-purple-500' :
                        'bg-green-500'
                      }`}></div>
                      <div className="flex-1">
                        <p className="text-sm">{activity.message}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Performing Courses */}
              <div className="bg-card border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Top Performing Courses</h3>
                <div className="space-y-4">
                  {courses.filter(c => c.status === 'Published').slice(0, 3).map(course => (
                    <div key={course.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-8 bg-muted rounded"></div>
                        <div>
                          <h4 className="font-medium">{course.title}</h4>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>{course.students} students</span>
                            <span>{course.rating}★</span>
                            <span>${course.earnings}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-card border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button className="w-full justify-start davinci-gradient">
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Course
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Answer Questions
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    View Analytics
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="w-4 h-4 mr-2" />
                    Download Reports
                  </Button>
                </div>
              </div>

              {/* This Month */}
              <div className="bg-card border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">This Month</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">New Students</span>
                    <span className="font-semibold">247</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Course Sales</span>
                    <span className="font-semibold">89</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Revenue</span>
                    <span className="font-semibold davinci-gradient-text">$3,247</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">New Reviews</span>
                    <span className="font-semibold">23</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'courses' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">My Courses</h2>
              <Button className="davinci-gradient">
                <Plus className="w-4 h-4 mr-2" />
                Create New Course
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map(course => (
                <div key={course.id} className="bg-card border rounded-xl overflow-hidden">
                  <div className="aspect-video bg-muted relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                    <div className="absolute top-4 left-4">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        course.status === 'Published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {course.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-semibold line-clamp-2">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">Updated {course.lastUpdated}</p>
                    </div>
                    
                    {course.status === 'Published' ? (
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="font-semibold">{course.students}</div>
                          <div className="text-muted-foreground">Students</div>
                        </div>
                        <div>
                          <div className="font-semibold">{course.rating}★</div>
                          <div className="text-muted-foreground">{course.reviews} reviews</div>
                        </div>
                        <div>
                          <div className="font-semibold davinci-gradient-text">${course.earnings}</div>
                          <div className="text-muted-foreground">Earnings</div>
                        </div>
                        <div>
                          <div className="font-semibold">Active</div>
                          <div className="text-muted-foreground">Status</div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-4">
                        <p className="text-sm text-muted-foreground mb-2">Course in draft</p>
                        <Button size="sm" variant="outline">
                          Continue Editing
                        </Button>
                      </div>
                    )}
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
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

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Course Analytics</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-card border rounded-xl p-6">
                <h3 className="font-semibold mb-4">Student Enrollment Trends</h3>
                <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-16 h-16 text-muted-foreground" />
                </div>
              </div>
              
              <div className="bg-card border rounded-xl p-6">
                <h3 className="font-semibold mb-4">Course Completion Rates</h3>
                <div className="space-y-4">
                  {courses.filter(c => c.status === 'Published').map(course => (
                    <div key={course.id} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="truncate">{course.title}</span>
                        <span className="font-medium">78%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="davinci-gradient h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'earnings' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Earnings Overview</h2>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Download Report
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-card border rounded-xl p-6">
                <h3 className="font-semibold mb-4">Monthly Earnings</h3>
                <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-16 h-16 text-muted-foreground" />
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-card border rounded-xl p-6">
                  <h3 className="font-semibold mb-4">Payout Summary</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Available</span>
                      <span className="font-semibold davinci-gradient-text">$2,450</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Pending</span>
                      <span className="font-semibold">$890</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Total Paid</span>
                      <span className="font-semibold">$9,110</span>
                    </div>
                    <Button className="w-full mt-4 davinci-gradient">
                      Request Payout
                    </Button>
                  </div>
                </div>
                
                <div className="bg-card border rounded-xl p-6">
                  <h3 className="font-semibold mb-4">Top Earning Courses</h3>
                  <div className="space-y-3">
                    {courses.filter(c => c.status === 'Published')
                      .sort((a, b) => b.earnings - a.earnings)
                      .slice(0, 3)
                      .map(course => (
                        <div key={course.id} className="flex items-center justify-between">
                          <span className="text-sm truncate">{course.title}</span>
                          <span className="font-semibold davinci-gradient-text">${course.earnings}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default InstructorDashboard
