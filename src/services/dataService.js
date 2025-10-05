import coursesData from '../data/courses.json'
import categoriesData from '../data/categories.json'

class DataService {
  constructor() {
    this.courses = coursesData
    this.categories = categoriesData
    this.updateCategoryCounts()
  }

  // Update category course counts based on actual courses
  updateCategoryCounts() {
    this.categories = this.categories.map(category => ({
      ...category,
      courseCount: this.courses.filter(course => course.categoryId === category.id).length
    }))
  }

  // Get all courses
  getAllCourses() {
    return this.courses
  }

  // Get all categories
  getAllCategories() {
    return this.categories
  }

  // Get course by ID
  getCourseById(id) {
    return this.courses.find(course => course.id === id)
  }

  // Get category by ID
  getCategoryById(id) {
    return this.categories.find(category => category.id === id)
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
    const totalStudents = this.courses.reduce((sum, course) => sum + course.numberOfStudents, 0)
    const totalCourses = this.courses.length
    const averageRating = this.courses.reduce((sum, course) => sum + course.rating, 0) / totalCourses
    const totalInstructors = new Set(this.courses.map(course => course.instructor.name)).size

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
