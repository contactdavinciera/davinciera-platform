import coursesData from '../data/courses.json'
import categoriesData from '../data/categories.json'
import usersData from '../data/users.json'
import enrollmentsData from '../data/enrollments.json'

class DataService {
  constructor() {
    this.courses = coursesData
    this.categories = categoriesData
    this.users = usersData
    this.enrollments = enrollmentsData
    this.updateCategoryCounts()
    this.linkInstructorsToCourses()
  }

  // Update category course counts based on actual courses
  updateCategoryCounts() {
    this.categories = this.categories.map(category => ({
      ...category,
      courseCount: this.courses.filter(course => course.categoryId === category.id).length
    }))
  }

  // Link instructor data from users.json to courses
  linkInstructorsToCourses() {
    this.courses = this.courses.map(course => {
      const instructor = this.users.find(user => user.name === course.instructor.name && user.role === 'instructor')
      return {
        ...course,
        instructor: instructor ? { ...course.instructor, ...instructor } : course.instructor
      }
    })
  }

  // Get all courses
  getAllCourses() {
    return this.courses
  }

  // Get all categories
  getAllCategories() {
    return this.categories
  }

  // Get all users
  getAllUsers() {
    return this.users
  }

  // Get all enrollments
  getAllEnrollments() {
    return this.enrollments
  }

  // Get course by ID
  getCourseById(id) {
    return this.courses.find(course => course.id === id)
  }

  // Get category by ID
  getCategoryById(id) {
    return this.categories.find(category => category.id === id)
  }

  // Get user by ID
  getUserById(id) {
    return this.users.find(user => user.id === id)
  }

  // Get enrollments by user ID
  getEnrollmentsByUserId(userId) {
    return this.enrollments.filter(enrollment => enrollment.userId === userId)
  }

  // Get courses by category
  getCoursesByCategory(categoryId) {
    return this.courses.filter(course => course.categoryId === categoryId)
  }

  // Get featured courses (top rated)
  getFeaturedCourses(limit = 3) {
    return this.courses
      .sort((a, b) => b.rating - a.rating)
      .slice(0, limit)
  }

  // Search courses by title or tags
  searchCourses(query) {
    const searchTerm = query.toLowerCase()
    return this.courses.filter(course => 
      course.title.toLowerCase().includes(searchTerm) ||
      course.description.toLowerCase().includes(searchTerm) ||
      course.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    )
  }

  // Get course statistics
  getStats() {
    const totalStudents = new Set(this.enrollments.map(e => e.userId)).size
    const totalCourses = this.courses.length
    const averageRating = this.courses.reduce((sum, course) => sum + course.rating, 0) / totalCourses
    const totalInstructors = new Set(this.users.filter(user => user.role === 'instructor').map(user => user.id)).size

    return {
      totalStudents,
      totalCourses,
      averageRating: Math.round(averageRating * 10) / 10,
      totalInstructors
    }
  }
}

// Create and export a singleton instance
const dataService = new DataService()
export default dataService
