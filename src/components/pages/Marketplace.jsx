import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { 
  Filter, 
  Grid, 
  List, 
  Star, 
  Users, 
  Clock, 
  Play,
  Heart,
  ShoppingCart,
  ChevronDown,
  Search,
  X
} from 'lucide-react'

const Marketplace = ({ addToCart }) => {
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('popularity')
  const [filterCategory, setFilterCategory] = useState('all')
  const [filterLevel, setFilterLevel] = useState('all')
  const [filterPrice, setFilterPrice] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Leonardo Martinez",
      rating: 4.9,
      reviews: 2340,
      students: 15420,
      duration: "42 hours",
      price: 89.99,
      originalPrice: 199.99,
      image: "/api/placeholder/300/200",
      category: "Technology",
      level: "Beginner to Advanced",
      description: "Master modern web development from HTML/CSS to React and Node.js",
      bestseller: true,
      updated: "2024"
    },
    {
      id: 2,
      title: "Digital Marketing Mastery",
      instructor: "Isabella Chen",
      rating: 4.8,
      reviews: 1890,
      students: 8930,
      duration: "28 hours",
      price: 79.99,
      originalPrice: 149.99,
      image: "/api/placeholder/300/200",
      category: "Marketing",
      level: "Intermediate",
      description: "Complete digital marketing course covering SEO, PPC, social media, and analytics",
      bestseller: false,
      updated: "2024"
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      instructor: "Marco Rossi",
      rating: 4.9,
      reviews: 1560,
      students: 12340,
      duration: "35 hours",
      price: 94.99,
      originalPrice: 179.99,
      image: "/api/placeholder/300/200",
      category: "Design",
      level: "Beginner",
      description: "Learn user interface and user experience design principles and tools",
      bestseller: true,
      updated: "2024"
    },
    {
      id: 4,
      title: "Python for Data Science",
      instructor: "Dr. Sarah Johnson",
      rating: 4.7,
      reviews: 2100,
      students: 18500,
      duration: "45 hours",
      price: 99.99,
      originalPrice: 189.99,
      image: "/api/placeholder/300/200",
      category: "Technology",
      level: "Intermediate",
      description: "Master Python programming for data analysis, visualization, and machine learning",
      bestseller: true,
      updated: "2024"
    },
    {
      id: 5,
      title: "Business Strategy & Leadership",
      instructor: "Michael Thompson",
      rating: 4.6,
      reviews: 890,
      students: 5670,
      duration: "25 hours",
      price: 69.99,
      originalPrice: 129.99,
      image: "/api/placeholder/300/200",
      category: "Business",
      level: "Advanced",
      description: "Develop strategic thinking and leadership skills for business success",
      bestseller: false,
      updated: "2024"
    },
    {
      id: 6,
      title: "Mobile App Development with React Native",
      instructor: "Alex Rodriguez",
      rating: 4.8,
      reviews: 1450,
      students: 9800,
      duration: "38 hours",
      price: 84.99,
      originalPrice: 159.99,
      image: "/api/placeholder/300/200",
      category: "Technology",
      level: "Intermediate",
      description: "Build cross-platform mobile apps using React Native and JavaScript",
      bestseller: false,
      updated: "2024"
    }
  ]

  const categories = ['all', 'Technology', 'Business', 'Design', 'Marketing']
  const levels = ['all', 'Beginner', 'Intermediate', 'Advanced', 'Beginner to Advanced']
  const priceRanges = ['all', 'Free', 'Under $50', '$50-$100', 'Over $100']

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = filterCategory === 'all' || course.category === filterCategory
    const matchesLevel = filterLevel === 'all' || course.level === filterLevel
    const matchesPrice = filterPrice === 'all' || 
                        (filterPrice === 'Free' && course.price === 0) ||
                        (filterPrice === 'Under $50' && course.price < 50) ||
                        (filterPrice === '$50-$100' && course.price >= 50 && course.price <= 100) ||
                        (filterPrice === 'Over $100' && course.price > 100)
    
    return matchesSearch && matchesCategory && matchesLevel && matchesPrice
  })

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'popularity':
        return b.students - a.students
      case 'rating':
        return b.rating - a.rating
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'newest':
        return new Date(b.updated) - new Date(a.updated)
      default:
        return 0
    }
  })

  const CourseCard = ({ course, isListView = false }) => (
    <div className={`group bg-card rounded-xl overflow-hidden border card-hover ${isListView ? 'flex' : ''}`}>
      <div className={`${isListView ? 'w-64 flex-shrink-0' : 'aspect-video'} bg-muted relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
          <Play className="w-12 h-12 text-white opacity-80 group-hover:scale-110 transition-transform" />
        </div>
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
            {course.category}
          </span>
          {course.bestseller && (
            <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
              Bestseller
            </span>
          )}
        </div>
        <div className="absolute top-4 right-4">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <div className={`p-6 space-y-4 ${isListView ? 'flex-1' : ''}`}>
        <div className="space-y-2">
          <Link to={`/course/${course.id}`}>
            <h3 className={`font-semibold group-hover:text-primary transition-colors line-clamp-2 ${isListView ? 'text-lg' : 'text-base'}`}>
              {course.title}
            </h3>
          </Link>
          <p className="text-sm text-muted-foreground">by {course.instructor}</p>
          {isListView && (
            <p className="text-sm text-muted-foreground line-clamp-2">{course.description}</p>
          )}
        </div>
        
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{course.rating}</span>
            <span>({course.reviews})</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{course.students.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
        </div>
        
        <div className={`flex items-center ${isListView ? 'justify-between' : 'justify-between'}`}>
          <div className="space-x-2">
            <span className="text-xl font-bold davinci-gradient-text">
              ${course.price}
            </span>
            <span className="text-sm text-muted-foreground line-through">
              ${course.originalPrice}
            </span>
          </div>
          {isListView && (
            <Button 
              onClick={() => addToCart(course)}
              className="davinci-gradient"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          )}
        </div>
        
        {!isListView && (
          <Button 
            onClick={() => addToCart(course)}
            className="w-full davinci-gradient"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        )}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Course Marketplace</h1>
              <p className="text-muted-foreground">
                Discover {courses.length} courses to advance your skills
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses, instructors, topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={() => setSearchQuery('')}
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-64 flex-shrink-0`}>
            <div className="space-y-6 sticky top-4">
              <div>
                <h3 className="font-semibold mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={filterCategory === category}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className="text-primary"
                      />
                      <span className="text-sm capitalize">
                        {category === 'all' ? 'All Categories' : category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Level</h3>
                <div className="space-y-2">
                  {levels.map(level => (
                    <label key={level} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="level"
                        value={level}
                        checked={filterLevel === level}
                        onChange={(e) => setFilterLevel(e.target.value)}
                        className="text-primary"
                      />
                      <span className="text-sm capitalize">
                        {level === 'all' ? 'All Levels' : level}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Price</h3>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <label key={range} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        value={range}
                        checked={filterPrice === range}
                        onChange={(e) => setFilterPrice(e.target.value)}
                        className="text-primary"
                      />
                      <span className="text-sm capitalize">
                        {range === 'all' ? 'All Prices' : range}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                
                <span className="text-sm text-muted-foreground">
                  {sortedCourses.length} courses found
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border border-border rounded-lg px-3 py-2 bg-background"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>

                <div className="flex items-center border border-border rounded-lg">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-l-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Course Grid/List */}
            <div className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' 
              : 'space-y-6'
            }>
              {sortedCourses.map(course => (
                <CourseCard 
                  key={course.id} 
                  course={course} 
                  isListView={viewMode === 'list'} 
                />
              ))}
            </div>

            {sortedCourses.length === 0 && (
              <div className="text-center py-12">
                <div className="text-muted-foreground mb-4">
                  <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-semibold mb-2">No courses found</h3>
                  <p>Try adjusting your filters or search terms</p>
                </div>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('')
                    setFilterCategory('all')
                    setFilterLevel('all')
                    setFilterPrice('all')
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Marketplace
