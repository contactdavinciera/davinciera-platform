import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { 
  Play, 
  Star, 
  Users, 
  Clock, 
  Award,
  Download,
  Share,
  Heart,
  ShoppingCart,
  CheckCircle,
  Globe,
  Smartphone,
  Trophy,
  MessageSquare
} from 'lucide-react'

const CourseDetail = ({ addToCart }) => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('overview')

  // Mock course data - in real app, fetch based on id
  const course = {
    id: parseInt(id),
    title: "Complete Web Development Bootcamp",
    subtitle: "Master modern web development from HTML/CSS to React and Node.js",
    instructor: {
      name: "Leonardo Martinez",
      title: "Senior Full Stack Developer",
      rating: 4.9,
      students: 45000,
      courses: 12,
      avatar: "/api/placeholder/80/80"
    },
    rating: 4.9,
    reviews: 2340,
    students: 15420,
    duration: "42 hours",
    lectures: 156,
    price: 89.99,
    originalPrice: 199.99,
    category: "Technology",
    level: "Beginner to Advanced",
    language: "English",
    subtitles: ["English", "Spanish", "French"],
    lastUpdated: "October 2024",
    certificate: true,
    lifetime: true,
    mobile: true,
    description: "This comprehensive course will take you from zero to hero in web development. You'll learn HTML, CSS, JavaScript, React, Node.js, and much more. Perfect for beginners who want to become professional web developers.",
    whatYouLearn: [
      "Build responsive websites using HTML5 and CSS3",
      "Master JavaScript ES6+ and modern programming concepts",
      "Create dynamic web applications with React.js",
      "Develop backend APIs using Node.js and Express",
      "Work with databases using MongoDB",
      "Deploy applications to production servers",
      "Understand version control with Git and GitHub",
      "Apply best practices for web security and performance"
    ],
    requirements: [
      "No programming experience needed - we'll start from the basics",
      "A computer with internet connection",
      "Willingness to learn and practice coding",
      "Basic computer skills (file management, web browsing)"
    ],
    curriculum: [
      {
        section: "Getting Started",
        lectures: 8,
        duration: "2h 30m",
        lessons: [
          { title: "Course Introduction", duration: "15m", preview: true },
          { title: "Setting up Development Environment", duration: "25m", preview: false },
          { title: "Your First HTML Page", duration: "20m", preview: true }
        ]
      },
      {
        section: "HTML & CSS Fundamentals",
        lectures: 24,
        duration: "6h 45m",
        lessons: [
          { title: "HTML Structure and Semantics", duration: "35m", preview: false },
          { title: "CSS Styling and Layout", duration: "45m", preview: false },
          { title: "Responsive Design with Flexbox", duration: "40m", preview: false }
        ]
      },
      {
        section: "JavaScript Mastery",
        lectures: 32,
        duration: "8h 20m",
        lessons: [
          { title: "JavaScript Fundamentals", duration: "50m", preview: false },
          { title: "DOM Manipulation", duration: "45m", preview: false },
          { title: "Async JavaScript & APIs", duration: "55m", preview: false }
        ]
      }
    ]
  }

  const reviews = [
    {
      id: 1,
      user: "Sarah Johnson",
      rating: 5,
      date: "2 weeks ago",
      comment: "Excellent course! Leonardo explains everything clearly and the projects are very practical. I went from knowing nothing about web development to building my own websites."
    },
    {
      id: 2,
      user: "Mike Chen",
      rating: 5,
      date: "1 month ago",
      comment: "Best web development course I've taken. The curriculum is well-structured and up-to-date with modern technologies. Highly recommended!"
    },
    {
      id: 3,
      user: "Emma Wilson",
      rating: 4,
      date: "2 months ago",
      comment: "Great content and teaching style. The only minor issue is that some sections could be a bit more detailed, but overall fantastic value for money."
    }
  ]

  const relatedCourses = [
    {
      id: 2,
      title: "Advanced React Development",
      instructor: "Leonardo Martinez",
      rating: 4.8,
      price: 79.99,
      image: "/api/placeholder/200/120"
    },
    {
      id: 3,
      title: "Node.js Backend Development",
      instructor: "Leonardo Martinez",
      rating: 4.9,
      price: 69.99,
      image: "/api/placeholder/200/120"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-card border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="bg-primary text-primary-foreground text-sm px-3 py-1 rounded-full">
                    {course.category}
                  </span>
                  <span className="bg-yellow-500 text-white text-sm px-3 py-1 rounded-full">
                    Bestseller
                  </span>
                </div>
                
                <h1 className="text-3xl lg:text-4xl font-bold">{course.title}</h1>
                <p className="text-xl text-muted-foreground">{course.subtitle}</p>
                
                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{course.rating}</span>
                    <span className="text-muted-foreground">({course.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-muted rounded-full"></div>
                    <div>
                      <p className="font-medium">{course.instructor.name}</p>
                      <p className="text-sm text-muted-foreground">{course.instructor.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Preview Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-4 bg-card border rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-video bg-muted relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/50 text-white text-sm px-2 py-1 rounded">
                    Preview
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-3xl font-bold davinci-gradient-text">
                        ${course.price}
                      </span>
                      <span className="text-lg text-muted-foreground line-through">
                        ${course.originalPrice}
                      </span>
                      <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        55% OFF
                      </span>
                    </div>
                    <p className="text-sm text-red-600 font-medium">
                      2 days left at this price!
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <Button 
                      onClick={() => addToCart(course)}
                      className="w-full davinci-gradient text-lg py-6"
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" className="w-full">
                      Buy Now
                    </Button>
                  </div>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    30-Day Money-Back Guarantee
                  </div>
                  
                  <div className="space-y-3 pt-4 border-t">
                    <h4 className="font-semibold">This course includes:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration} on-demand video</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Download className="w-4 h-4" />
                        <span>Downloadable resources</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Smartphone className="w-4 h-4" />
                        <span>Access on mobile and TV</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Trophy className="w-4 h-4" />
                        <span>Certificate of completion</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 pt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Heart className="w-4 h-4 mr-2" />
                      Wishlist
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Share className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs */}
            <div className="border-b">
              <nav className="flex space-x-8">
                {['overview', 'curriculum', 'instructor', 'reviews'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-4 px-2 border-b-2 font-medium text-sm capitalize transition-colors ${
                      activeTab === tab
                        ? 'border-primary text-primary'
                        : 'border-transparent text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {course.whatYouLearn.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Course Description</h2>
                  <p className="text-muted-foreground leading-relaxed">{course.description}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                  <ul className="space-y-2">
                    {course.requirements.map((req, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Course Curriculum</h2>
                  <div className="text-sm text-muted-foreground">
                    {course.lectures} lectures • {course.duration}
                  </div>
                </div>
                
                <div className="space-y-4">
                  {course.curriculum.map((section, index) => (
                    <div key={index} className="border rounded-lg">
                      <div className="p-4 bg-muted/30">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{section.section}</h3>
                          <div className="text-sm text-muted-foreground">
                            {section.lectures} lectures • {section.duration}
                          </div>
                        </div>
                      </div>
                      <div className="divide-y">
                        {section.lessons.map((lesson, lessonIndex) => (
                          <div key={lessonIndex} className="p-4 flex items-center justify-between hover:bg-muted/20">
                            <div className="flex items-center space-x-3">
                              <Play className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm">{lesson.title}</span>
                              {lesson.preview && (
                                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                  Preview
                                </span>
                              )}
                            </div>
                            <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'instructor' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">About the Instructor</h2>
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 bg-muted rounded-full flex-shrink-0"></div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold">{course.instructor.name}</h3>
                      <p className="text-muted-foreground">{course.instructor.title}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div className="text-center">
                        <div className="font-semibold">{course.instructor.rating}</div>
                        <div className="text-muted-foreground">Instructor Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold">{course.instructor.students.toLocaleString()}</div>
                        <div className="text-muted-foreground">Students</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold">{course.instructor.courses}</div>
                        <div className="text-muted-foreground">Courses</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold">2,340</div>
                        <div className="text-muted-foreground">Reviews</div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground">
                      Leonardo is a seasoned full-stack developer with over 8 years of experience in web development. 
                      He has worked with major tech companies and has taught thousands of students worldwide. 
                      His passion for teaching and practical approach makes complex concepts easy to understand.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Student Reviews</h2>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{course.rating}</span>
                    <span className="text-muted-foreground">({course.reviews} reviews)</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {reviews.map(review => (
                    <div key={review.id} className="border-b pb-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-muted rounded-full flex-shrink-0"></div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">{review.user}</h4>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <p className="text-muted-foreground">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full">
                  Load More Reviews
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-card border rounded-xl p-6">
              <h3 className="font-semibold mb-4">Related Courses</h3>
              <div className="space-y-4">
                {relatedCourses.map(relatedCourse => (
                  <div key={relatedCourse.id} className="flex space-x-3">
                    <div className="w-16 h-12 bg-muted rounded flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium line-clamp-2">{relatedCourse.title}</h4>
                      <p className="text-xs text-muted-foreground">{relatedCourse.instructor}</p>
                      <div className="flex items-center justify-between mt-1">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs">{relatedCourse.rating}</span>
                        </div>
                        <span className="text-sm font-semibold">${relatedCourse.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail
