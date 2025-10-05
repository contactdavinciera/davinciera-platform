import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/pages/HomePage'
import Marketplace from './components/pages/Marketplace'
import CourseDetail from './components/pages/CourseDetail'
import StudentDashboard from './components/pages/StudentDashboard'
import InstructorDashboard from './components/pages/InstructorDashboard'
import Checkout from './components/pages/Checkout'
import Affiliates from './components/pages/Affiliates'

function App() {
  const [user, setUser] = useState(null)
  const [cart, setCart] = useState([])

  const addToCart = (course) => {
    setCart(prev => [...prev, course])
  }

  const removeFromCart = (courseId) => {
    setCart(prev => prev.filter(course => course.id !== courseId))
  }

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Header user={user} cartCount={cart.length} />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/marketplace" element={<Marketplace addToCart={addToCart} />} />
            <Route path="/course/:id" element={<CourseDetail addToCart={addToCart} />} />
            <Route path="/student-dashboard" element={<StudentDashboard user={user} />} />
            <Route path="/instructor-dashboard" element={<InstructorDashboard user={user} />} />
            <Route path="/checkout" element={<Checkout cart={cart} removeFromCart={removeFromCart} />} />
            <Route path="/affiliates" element={<Affiliates />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
