import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

// Authentication
import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './components/auth/ProtectedRoute'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/pages/HomePage'
import Marketplace from './components/pages/Marketplace'
import CourseDetail from './components/pages/CourseDetail'
import StudentDashboardPage from './components/pages/StudentDashboardPage'
import InstructorDashboardPage from './components/pages/InstructorDashboardPage'
import Checkout from './components/pages/Checkout'
import AffiliateDashboardPage from './components/pages/AffiliateDashboardPage'

// Auth Pages
import LoginPage from './components/auth/LoginPage'
import RegisterPage from './components/auth/RegisterPage'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (course) => {
    setCart(prev => [...prev, course])
  }

  const removeFromCart = (courseId) => {
    setCart(prev => prev.filter(course => course.id !== courseId))
  }

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-background text-foreground">
          <Header cartCount={cart.length} />
          
          <main className="flex-1">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/marketplace" element={<Marketplace addToCart={addToCart} />} />
              <Route path="/course/:id" element={<CourseDetail addToCart={addToCart} />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              {/* Protected Routes */}
              <Route 
                path="/student-dashboard" 
                element={
                  <ProtectedRoute requiredRole="student">
                    <StudentDashboardPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/instructor-dashboard" 
                element={
                  <ProtectedRoute requiredRole="instructor">
                    <InstructorDashboardPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/affiliate-dashboard" 
                element={
                  <ProtectedRoute requiredRole="affiliate">
                    <AffiliateDashboardPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/checkout" 
                element={
                  <ProtectedRoute>
                    <Checkout cart={cart} removeFromCart={removeFromCart} />
                  </ProtectedRoute>
                } 
              />

              {/* Legacy route for affiliates */}
              <Route 
                path="/affiliates" 
                element={
                  <ProtectedRoute requiredRole="affiliate">
                    <AffiliateDashboardPage />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
