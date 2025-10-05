import apiService from './apiService.js'
import coursesData from '../data/courses.json'
import categoriesData from '../data/categories.json'

class DataService {
  constructor() {
    // Fallback data for when API is not available
    this.fallbackCourses = coursesData
    this.fallbackCategories = categoriesData
    this.cache = {
      courses: null,
      categories: null,
      users: null,
      enrollments: null,
      lastFetch: null
    }
    this.cacheTimeout = 5 * 60 * 1000 // 5 minutes
  }

  // Check if cache is valid
  isCacheValid() {
    return this.cache.lastFetch && (Date.now() - this.cache.lastFetch) < this.cacheTimeout
  }

  // Fetch data from API with fallback to static data
  async fetchWithFallback(apiMethod, fallbackData = null) {
    try {
      return await apiMethod()
    } catch (error) {
      console.warn('API request failed, using fallback data:', error.message)
      return fallbackData || []
    }
  }

  // Get all courses
  async getAllCourses() {
    if (this.cache.courses && this.isCacheValid()) {
      return this.cache.courses
    }

    const courses = await this.fetchWithFallback(
      () => apiService.getCourses(),
      this.fallbackCourses
    )
    
    this.cache.courses = courses
    this.cache.lastFetch = Date.now()
    return courses
  }

  // Get all categories
  async getAllCategories() {
    if (this.cache.categories && this.isCacheValid()) {
      return this.cache.categories
    }

    // For categories, we'll use static data and update counts dynamically
    const courses = await this.getAllCourses()
    const categories = this.fallbackCategories.map(category => ({
      ...category,
      courseCount: courses.filter(course => course.categoryId === category.id).length
    }))
    
    this.cache.categories = categories
    return categories
  }

  // Get all users
  async getAllUsers() {
    if (this.cache.users && this.isCacheValid()) {
      return this.cache.users
    }

    const users = await this.fetchWithFallback(() => apiService.getUsers())
    this.cache.users = users
    return users
  }

  // Get all enrollments
  async getAllEnrollments() {
    if (this.cache.enrollments && this.isCacheValid()) {
      return this.cache.enrollments
    }

    const enrollments = await this.fetchWithFallback(() => apiService.getEnrollments())
    this.cache.enrollments = enrollments
    return enrollments
  }

  // Get course by ID
  async getCourseById(id) {
    try {
      return await apiService.getCourse(id)
    } catch (error) {
      console.warn('API request failed, searching in fallback data:', error.message)
      return this.fallbackCourses.find(course => course.id === id)
    }
  }

  // Get category by ID
  getCategoryById(id) {
    return this.fallbackCategories.find(category => category.id === id)
  }

  // Get user by ID
  async getUserById(id) {
    try {
      return await apiService.getUser(id)
    } catch (error) {
      console.warn('API request failed for user:', error.message)
      const users = await this.getAllUsers()
      return users.find(user => user.id === id)
    }
  }

  // Get enrollments by user ID
  async getEnrollmentsByUserId(userId) {
    try {
      return await apiService.getUserEnrollments(userId)
    } catch (error) {
      console.warn('API request failed, using fallback:', error.message)
      const enrollments = await this.getAllEnrollments()
      return enrollments.filter(enrollment => enrollment.userId === userId)
    }
  }

  // Get courses by category
  async getCoursesByCategory(categoryId) {
    const courses = await this.getAllCourses()
    return courses.filter(course => course.categoryId === categoryId)
  }

  // Get featured courses (top rated)
  async getFeaturedCourses(limit = 3) {
    const courses = await this.getAllCourses()
    return courses
      .sort((a, b) => (b.rating || 0) - (a.rating || 0))
      .slice(0, limit)
  }

  // Search courses by title or tags
  async searchCourses(query) {
    const courses = await this.getAllCourses()
    const searchTerm = query.toLowerCase()
    return courses.filter(course => 
      course.title.toLowerCase().includes(searchTerm) ||
      course.description.toLowerCase().includes(searchTerm) ||
      (course.tags && course.tags.some(tag => tag.toLowerCase().includes(searchTerm)))
    )
  }

  // Get course statistics
  async getStats() {
    try {
      return await apiService.getStats()
    } catch (error) {
      console.warn('API stats failed, calculating from available data:', error.message)
      
      const [courses, users, enrollments] = await Promise.all([
        this.getAllCourses(),
        this.getAllUsers(),
        this.getAllEnrollments()
      ])

      const students = users.filter(user => user.role === 'student')
      const instructors = users.filter(user => user.role === 'instructor')
      const totalRating = courses.reduce((sum, course) => sum + (course.rating || 0), 0)
      const averageRating = courses.length > 0 ? totalRating / courses.length : 0

      return {
        activeStudents: students.length,
        expertInstructors: instructors.length,
        availableCourses: courses.length,
        averageRating: Math.round(averageRating * 10) / 10,
        completedCourses: enrollments.filter(e => e.status === 'completed').length
      }
    }
  }

  // Clear cache (useful for forcing refresh)
  clearCache() {
    this.cache = {
      courses: null,
      categories: null,
      users: null,
      enrollments: null,
      lastFetch: null
    }
  }

  // API methods for creating/updating data
  async createCourse(courseData) {
    const course = await apiService.createCourse(courseData)
    this.clearCache() // Clear cache to force refresh
    return course
  }

  async updateCourse(id, courseData) {
    const course = await apiService.updateCourse(id, courseData)
    this.clearCache()
    return course
  }

  async createUser(userData) {
    const user = await apiService.createUser(userData)
    this.clearCache()
    return user
  }

  async updateUser(id, userData) {
    const user = await apiService.updateUser(id, userData)
    this.clearCache()
    return user
  }

  async createEnrollment(enrollmentData) {
    const enrollment = await apiService.createEnrollment(enrollmentData)
    this.clearCache()
    return enrollment
  }

  async updateEnrollment(id, enrollmentData) {
    const enrollment = await apiService.updateEnrollment(id, enrollmentData)
    this.clearCache()
    return enrollment
  }
}

// Create and export a singleton instance
const dataService = new DataService()
export default dataService
