// API Service for connecting to the backend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  getAuthHeaders() {
    const token = localStorage.getItem('token');
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...this.getAuthHeaders(),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem('token');
          window.location.href = '/login';
        }
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }
      
      // Handle empty responses (like DELETE operations)
      if (response.status === 204) {
        return null;
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Authentication API
  async login(email, password) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async register(name, email, password, role = 'student') {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password, role }),
    });
  }

  async getProfile() {
    return this.request('/auth/profile');
  }

  // Users API
  async getUsers() {
    return this.request('/users');
  }

  async getUser(id) {
    return this.request(`/users/${id}`);
  }

  async createUser(userData) {
    return this.request('/users', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async updateUser(id, userData) {
    return this.request(`/users/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(userData),
    });
  }

  async deleteUser(id) {
    return this.request(`/users/${id}`, {
      method: 'DELETE',
    });
  }

  // Courses API
  async getCourses() {
    return this.request('/courses');
  }

  async getCourse(id) {
    return this.request(`/courses/${id}`);
  }

  async createCourse(courseData) {
    return this.request('/courses', {
      method: 'POST',
      body: JSON.stringify(courseData),
    });
  }

  async updateCourse(id, courseData) {
    return this.request(`/courses/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(courseData),
    });
  }

  async deleteCourse(id) {
    return this.request(`/courses/${id}`, {
      method: 'DELETE',
    });
  }

  // Enrollments API
  async getEnrollments() {
    return this.request('/enrollments');
  }

  async getEnrollment(id) {
    return this.request(`/enrollments/${id}`);
  }

  async createEnrollment(enrollmentData) {
    return this.request('/enrollments', {
      method: 'POST',
      body: JSON.stringify(enrollmentData),
    });
  }

  async updateEnrollment(id, enrollmentData) {
    return this.request(`/enrollments/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(enrollmentData),
    });
  }

  async deleteEnrollment(id) {
    return this.request(`/enrollments/${id}`, {
      method: 'DELETE',
    });
  }

  // Helper methods for dashboard data
  async getUserEnrollments(userId) {
    const enrollments = await this.getEnrollments();
    return enrollments.filter(enrollment => enrollment.userId === userId);
  }

  async getInstructorCourses(instructorId) {
    const courses = await this.getCourses();
    return courses.filter(course => course.instructorId === instructorId);
  }

  async getCourseEnrollments(courseId) {
    const enrollments = await this.getEnrollments();
    return enrollments.filter(enrollment => enrollment.courseId === courseId);
  }

  // Statistics methods
  async getStats() {
    try {
      const [users, courses, enrollments] = await Promise.all([
        this.getUsers(),
        this.getCourses(),
        this.getEnrollments()
      ]);

      const students = users.filter(user => user.role === 'student');
      const instructors = users.filter(user => user.role === 'instructor');
      const completedEnrollments = enrollments.filter(enrollment => enrollment.status === 'completed');
      
      // Calculate average rating
      const totalRating = courses.reduce((sum, course) => sum + (course.rating || 0), 0);
      const averageRating = courses.length > 0 ? (totalRating / courses.length).toFixed(1) : 0;

      return {
        activeStudents: students.length,
        expertInstructors: instructors.length,
        availableCourses: courses.length,
        averageRating: parseFloat(averageRating),
        completedCourses: completedEnrollments.length,
      };
    } catch (error) {
      console.error('Failed to fetch stats:', error);
      // Return fallback stats if API fails
      return {
        activeStudents: 0,
        expertInstructors: 0,
        availableCourses: 0,
        averageRating: 0,
        completedCourses: 0,
      };
    }
  }

  // Simple API methods for auth context
  get(endpoint, options = {}) {
    return this.request(endpoint, options);
  }

  post(endpoint, data, options = {}) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
  }

  put(endpoint, data, options = {}) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options,
    });
  }

  delete(endpoint, options = {}) {
    return this.request(endpoint, {
      method: 'DELETE',
      ...options,
    });
  }
}

export const apiService = new ApiService();
export default apiService;
