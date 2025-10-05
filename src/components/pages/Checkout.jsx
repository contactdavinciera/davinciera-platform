import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  CreditCard, 
  Lock, 
  Trash2, 
  Tag,
  Gift,
  Shield,
  CheckCircle,
  Clock,
  Star,
  Users
} from 'lucide-react'

const Checkout = ({ cart, removeFromCart }) => {
  const [couponCode, setCouponCode] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [appliedCoupon, setAppliedCoupon] = useState(null)

  // Mock cart data if empty
  const mockCart = cart.length > 0 ? cart : [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Leonardo Martinez",
      rating: 4.9,
      students: 15420,
      duration: "42 hours",
      price: 89.99,
      originalPrice: 199.99,
      image: "/api/placeholder/200/120"
    },
    {
      id: 2,
      title: "Digital Marketing Mastery",
      instructor: "Isabella Chen",
      rating: 4.8,
      students: 8930,
      duration: "28 hours",
      price: 79.99,
      originalPrice: 149.99,
      image: "/api/placeholder/200/120"
    }
  ]

  const subtotal = mockCart.reduce((sum, course) => sum + course.price, 0)
  const discount = appliedCoupon ? subtotal * 0.1 : 0
  const total = subtotal - discount

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === 'davinci10') {
      setAppliedCoupon({ code: 'DAVINCI10', discount: 10 })
    }
  }

  const removeCoupon = () => {
    setAppliedCoupon(null)
    setCouponCode('')
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-card border rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-6">
                  {mockCart.length} Course{mockCart.length !== 1 ? 's' : ''} in Cart
                </h2>
                
                <div className="space-y-4">
                  {mockCart.map(course => (
                    <div key={course.id} className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                      <div className="w-24 h-16 bg-muted rounded flex-shrink-0">
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded"></div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold line-clamp-2">{course.title}</h3>
                        <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                        
                        <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span>{course.rating}</span>
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
                      </div>
                      
                      <div className="text-right">
                        <div className="space-y-1">
                          <div className="text-lg font-bold davinci-gradient-text">
                            ${course.price}
                          </div>
                          <div className="text-sm text-muted-foreground line-through">
                            ${course.originalPrice}
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(course.id)}
                          className="mt-2 text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-card border rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button
                      onClick={() => setPaymentMethod('card')}
                      className={`p-4 border rounded-lg text-center transition-colors ${
                        paymentMethod === 'card' 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <CreditCard className="w-6 h-6 mx-auto mb-2" />
                      <div className="text-sm font-medium">Credit Card</div>
                    </button>
                    
                    <button
                      onClick={() => setPaymentMethod('pix')}
                      className={`p-4 border rounded-lg text-center transition-colors ${
                        paymentMethod === 'pix' 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="w-6 h-6 mx-auto mb-2 bg-green-500 rounded"></div>
                      <div className="text-sm font-medium">PIX</div>
                    </button>
                    
                    <button
                      onClick={() => setPaymentMethod('boleto')}
                      className={`p-4 border rounded-lg text-center transition-colors ${
                        paymentMethod === 'boleto' 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="w-6 h-6 mx-auto mb-2 bg-blue-500 rounded"></div>
                      <div className="text-sm font-medium">Boleto</div>
                    </button>
                  </div>

                  {paymentMethod === 'card' && (
                    <div className="space-y-4 mt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Card Number</label>
                          <input
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            className="w-full p-3 border border-border rounded-lg bg-background"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Cardholder Name</label>
                          <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full p-3 border border-border rounded-lg bg-background"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Expiry Date</label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full p-3 border border-border rounded-lg bg-background"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">CVV</label>
                          <input
                            type="text"
                            placeholder="123"
                            className="w-full p-3 border border-border rounded-lg bg-background"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <div className="bg-card border rounded-xl p-6 sticky top-4">
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  
                  {appliedCoupon && (
                    <div className="flex items-center justify-between text-green-600">
                      <span>Discount ({appliedCoupon.code})</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="davinci-gradient-text">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-6 davinci-gradient text-lg py-6">
                  <Lock className="w-5 h-5 mr-2" />
                  Complete Purchase
                </Button>
                
                <div className="flex items-center justify-center space-x-2 mt-4 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4" />
                  <span>30-day money-back guarantee</span>
                </div>
              </div>

              {/* Coupon Code */}
              <div className="bg-card border rounded-xl p-6">
                <h3 className="font-semibold mb-4">Have a coupon?</h3>
                
                {appliedCoupon ? (
                  <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium text-green-800">
                        {appliedCoupon.code} applied ({appliedCoupon.discount}% off)
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" onClick={removeCoupon}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 p-3 border border-border rounded-lg bg-background"
                    />
                    <Button variant="outline" onClick={applyCoupon}>
                      <Tag className="w-4 h-4 mr-2" />
                      Apply
                    </Button>
                  </div>
                )}
                
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center space-x-2 text-blue-800">
                    <Gift className="w-4 h-4" />
                    <span className="text-sm font-medium">Try code: DAVINCI10</span>
                  </div>
                </div>
              </div>

              {/* Course Benefits */}
              <div className="bg-card border rounded-xl p-6">
                <h3 className="font-semibold mb-4">What's included</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Lifetime access to courses</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Access on mobile and desktop</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Downloadable resources</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Direct instructor support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>30-day money-back guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
