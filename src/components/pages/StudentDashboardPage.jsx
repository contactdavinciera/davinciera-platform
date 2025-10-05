import React from 'react'
import { Link } from 'react-router-dom'
import { 
  BookOpen, 
  CheckCircle, 
  Clock, 
  Award, 
  ChevronRight, 
  BarChart2, 
  User, 
  Mail, 
  Settings 
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import dataService from '@/services/dataService'

const StudentDashboardPage = () => {
  // Mock authenticated user for now
  const currentUser = dataService.getUserById('usr-001') // Alice Smith

  if (!currentUser || currentUser.role !== 'student') {
    return <div className="container mx-auto py-10 text-center">Please log in as a student to view this dashboard.</div>
  }

  const userEnrollments = dataService.getEnrollmentsByUserId(currentUser.id)
  const enrolledCourses = userEnrollments.map(enrollment => ({
    ...dataService.getCourseById(enrollment.courseId),
    progress: enrollment.progress,
    status: enrollment.status
  }))

  const completedCourses = enrolledCourses.filter(course => course.status === 'completed')
  const inProgressCourses = enrolledCourses.filter(course => course.status === 'in-progress')

  const totalProgress = enrolledCourses.length > 0 
    ? enrolledCourses.reduce((sum, course) => sum + course.progress, 0) / enrolledCourses.length
    : 0

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8">Welcome, {currentUser.name}!</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        {/* Overall Progress Card */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><BarChart2 className="w-5 h-5" /> Your Learning Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 mb-4">
              <Progress value={totalProgress} className="w-full" />
              <span className="text-lg font-semibold">{Math.round(totalProgress)}%</span>
            </div>
            <p className="text-muted-foreground">You are making great progress across your enrolled courses.</p>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium">Courses Enrolled:</p>
                <p className="text-muted-foreground">{enrolledCourses.length}</p>
              </div>
              <div>
                <p className="font-medium">Courses Completed:</p>
                <p className="text-muted-foreground">{completedCourses.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Links / Profile Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><User className="w-5 h-5" /> Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link to="/profile" className="flex items-center justify-between text-primary hover:underline">
              <span><User className="inline-block w-4 h-4 mr-2" /> Edit Profile</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link to="/messages" className="flex items-center justify-between text-primary hover:underline">
              <span><Mail className="inline-block w-4 h-4 mr-2" /> Messages</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link to="/settings" className="flex items-center justify-between text-primary hover:underline">
              <span><Settings className="inline-block w-4 h-4 mr-2" /> Settings</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Button className="w-full mt-4">Explore More Courses</Button>
          </CardContent>
        </Card>
      </div>

      {/* In Progress Courses */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Courses In Progress</h2>
        {inProgressCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inProgressCourses.map(course => (
              <Card key={course.id}>
                <CardContent className="p-4">
                  <img src={course.thumbnailUrl} alt={course.title} className="w-full h-40 object-cover rounded-md mb-4" />
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">by {course.instructor.name}</p>
                  <div className="flex items-center gap-2 mb-2">
                    <Progress value={course.progress} className="w-full" />
                    <span className="text-sm font-medium">{course.progress}%</span>
                  </div>
                  <Link to={`/course/${course.id}`}>
                    <Button variant="outline" className="w-full mt-3">Continue Learning</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">You don't have any courses in progress. Start a new learning journey!</p>
        )}
      </section>

      {/* Completed Courses */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Completed Courses</h2>
        {completedCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedCourses.map(course => (
              <Card key={course.id}>
                <CardContent className="p-4">
                  <img src={course.thumbnailUrl} alt={course.title} className="w-full h-40 object-cover rounded-md mb-4" />
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">by {course.instructor.name}</p>
                  <div className="flex items-center gap-2 mb-2 text-green-500">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Completed!</span>
                  </div>
                  <Button variant="secondary" className="w-full mt-3">View Certificate</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No completed courses yet. Keep learning!</p>
        )}
      </section>
    </div>
  )
}

export default StudentDashboardPage
