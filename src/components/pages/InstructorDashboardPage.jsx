import React from 'react'
import { Link } from 'react-router-dom'
import {
  BookOpen, 
  Users, 
  DollarSign, 
  PlusCircle, 
  MessageSquare, 
  BarChart2, 
  Settings, 
  ChevronRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import dataService from '@/services/dataService'
import revenueService from '@/services/revenueService'

const InstructorDashboardPage = () => {
  // Mock authenticated user for now
  const currentUser = dataService.getUserById('usr-005') // Leonardo Martinez

  if (!currentUser || currentUser.role !== 'instructor') {
    return <div className="container mx-auto py-10 text-center">Please log in as an instructor to view this dashboard.</div>
  }

  const instructorCourses = dataService.getAllCourses().filter(course => course.instructor.id === currentUser.id)
  const totalStudents = instructorCourses.reduce((sum, course) => sum + course.numberOfStudents, 0)
  
  // Use revenueService for accurate earnings calculation
  const earningsData = revenueService.calculateInstructorEarnings(instructorCourses)
  const totalEarnings = earningsData.totalEarnings

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8">Welcome, Instructor {currentUser.name}!</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        {/* Overview Card */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><BarChart2 className="w-5 h-5" /> Your Performance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-4xl font-bold davinci-gradient-text">{instructorCourses.length}</p>
                <p className="text-muted-foreground">Total Courses</p>
              </div>
              <div>
                <p className="text-4xl font-bold davinci-gradient-text">{totalStudents}</p>
                <p className="text-muted-foreground">Total Students</p>
              </div>
              <div>
                <p className="text-4xl font-bold davinci-gradient-text">${totalEarnings.toFixed(2)}</p>
                <p className="text-muted-foreground">Estimated Earnings</p>
              </div>
              <div>
                <p className="text-4xl font-bold davinci-gradient-text">{dataService.getAllEnrollments().filter(e => instructorCourses.some(c => c.id === e.courseId)).length}</p>
                <p className="text-muted-foreground">Total Enrollments</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions / Profile Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Settings className="w-5 h-5" /> Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link to="/instructor/new-course" className="flex items-center justify-between text-primary hover:underline">
              <span><PlusCircle className="inline-block w-4 h-4 mr-2" /> Create New Course</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link to="/instructor/messages" className="flex items-center justify-between text-primary hover:underline">
              <span><MessageSquare className="inline-block w-4 h-4 mr-2" /> Student Q&A</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link to="/instructor/settings" className="flex items-center justify-between text-primary hover:underline">
              <span><Settings className="inline-block w-4 h-4 mr-2" /> Payout Settings</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Button className="w-full mt-4">View All My Courses</Button>
          </CardContent>
        </Card>
      </div>

      {/* My Courses */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-6">My Courses</h2>
        {instructorCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instructorCourses.map(course => (
              <Card key={course.id}>
                <CardContent className="p-4">
                  <img src={course.thumbnailUrl} alt={course.title} className="w-full h-40 object-cover rounded-md mb-4" />
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">Total Students: {course.numberOfStudents}</p>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-medium">{course.numberOfStudents} Students</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm font-medium">${earningsData.courseEarnings[course.id]?.totalEarnings.toFixed(2) || '0.00'} Earned</span>
                  </div>
                  <Link to={`/instructor/course/${course.id}/edit`}>
                    <Button variant="outline" className="w-full mt-3">Manage Course</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">You haven't created any courses yet. Start by creating a new one!</p>
        )}
      </section>
    </div>
  )
}

export default InstructorDashboardPage
