import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Link as LinkIcon,
  Copy,
  BarChart3,
  Calendar,
  Award,
  Target,
  Share,
  CheckCircle,
  ExternalLink,
  Gift,
  Zap
} from 'lucide-react'

const Affiliates = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [copiedLink, setCopiedLink] = useState('')

  const stats = [
    { label: "Total Earnings", value: "$2,450", change: "+25%", icon: DollarSign, color: "text-green-500" },
    { label: "Referrals", value: "89", change: "+12", icon: Users, color: "text-blue-500" },
    { label: "Conversion Rate", value: "8.5%", change: "+2.1%", icon: Target, color: "text-purple-500" },
    { label: "Commission Rate", value: "30%", change: "Standard", icon: TrendingUp, color: "text-orange-500" }
  ]

  const affiliateLinks = [
    {
      id: 1,
      course: "Complete Web Development Bootcamp",
      instructor: "Leonardo Martinez",
      commission: "30%",
      link: "https://davinciera.com/course/web-dev?ref=affiliate123",
      clicks: 245,
      conversions: 23,
      earnings: 687.70
    },
    {
      id: 2,
      course: "Digital Marketing Mastery",
      instructor: "Isabella Chen",
      commission: "30%",
      link: "https://davinciera.com/course/digital-marketing?ref=affiliate123",
      clicks: 189,
      conversions: 15,
      earnings: 449.85
    },
    {
      id: 3,
      course: "UI/UX Design Fundamentals",
      instructor: "Marco Rossi",
      commission: "30%",
      link: "https://davinciera.com/course/ui-ux-design?ref=affiliate123",
      clicks: 156,
      conversions: 18,
      earnings: 512.82
    }
  ]

  const recentActivity = [
    {
      type: "conversion",
      message: "New conversion: Complete Web Development Bootcamp",
      amount: "$26.97",
      time: "2 hours ago"
    },
    {
      type: "click",
      message: "Link clicked: Digital Marketing Mastery",
      amount: null,
      time: "4 hours ago"
    },
    {
      type: "payout",
      message: "Commission payout processed",
      amount: "$450.00",
      time: "2 days ago"
    },
    {
      type: "conversion",
      message: "New conversion: UI/UX Design Fundamentals",
      amount: "$28.49",
      time: "3 days ago"
    }
  ]

  const copyLink = (link) => {
    navigator.clipboard.writeText(link)
    setCopiedLink(link)
    setTimeout(() => setCopiedLink(''), 2000)
  }

  const benefits = [
    {
      icon: DollarSign,
      title: "High Commissions",
      description: "Earn up to 30% commission on every sale you refer"
    },
    {
      icon: Zap,
      title: "Real-time Tracking",
      description: "Monitor your performance with detailed analytics"
    },
    {
      icon: Gift,
      title: "Bonus Programs",
      description: "Unlock bonus rewards for top performers"
    },
    {
      icon: Award,
      title: "Marketing Materials",
      description: "Access professional banners and promotional content"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="davinci-gradient text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">
              DaVinciEra Affiliate Program
            </h1>
            <p className="text-xl opacity-90">
              Earn generous commissions by promoting world-class online courses. 
              Join thousands of affiliates already earning with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Join Now - It's Free
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Benefits Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Why Join Our Affiliate Program?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card border rounded-xl p-6 text-center">
                <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card border rounded-xl p-6">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="flex items-center space-x-1 text-sm">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-green-500">{stat.change}</span>
                <span className="text-muted-foreground">from last month</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="border-b mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'links', label: 'Affiliate Links' },
              { id: 'analytics', label: 'Analytics' },
              { id: 'payouts', label: 'Payouts' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Recent Activity */}
              <div className="bg-card border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.type === 'conversion' ? 'bg-green-500' :
                        activity.type === 'click' ? 'bg-blue-500' :
                        'bg-purple-500'
                      }`}></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm">{activity.message}</p>
                          {activity.amount && (
                            <span className="text-sm font-semibold davinci-gradient-text">
                              {activity.amount}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Performing Links */}
              <div className="bg-card border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Top Performing Links</h3>
                <div className="space-y-4">
                  {affiliateLinks.slice(0, 3).map(link => (
                    <div key={link.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div>
                        <h4 className="font-medium">{link.course}</h4>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{link.clicks} clicks</span>
                          <span>{link.conversions} conversions</span>
                          <span className="davinci-gradient-text font-semibold">
                            ${link.earnings}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="bg-card border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">This Month</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Clicks</span>
                    <span className="font-semibold">590</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Conversions</span>
                    <span className="font-semibold">56</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Earnings</span>
                    <span className="font-semibold davinci-gradient-text">$1,650.37</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Conversion Rate</span>
                    <span className="font-semibold">9.5%</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-card border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button className="w-full justify-start davinci-gradient">
                    <LinkIcon className="w-4 h-4 mr-2" />
                    Generate New Link
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Share className="w-4 h-4 mr-2" />
                    Marketing Materials
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    View Full Analytics
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Request Payout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'links' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">My Affiliate Links</h2>
              <Button className="davinci-gradient">
                <LinkIcon className="w-4 h-4 mr-2" />
                Generate New Link
              </Button>
            </div>

            <div className="grid gap-6">
              {affiliateLinks.map(link => (
                <div key={link.id} className="bg-card border rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold">{link.course}</h3>
                      <p className="text-sm text-muted-foreground">by {link.instructor}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Commission</div>
                      <div className="font-semibold davinci-gradient-text">{link.commission}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-semibold">{link.clicks}</div>
                      <div className="text-sm text-muted-foreground">Clicks</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold">{link.conversions}</div>
                      <div className="text-sm text-muted-foreground">Conversions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold davinci-gradient-text">${link.earnings}</div>
                      <div className="text-sm text-muted-foreground">Earnings</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-3 bg-muted/30 rounded-lg">
                    <input
                      type="text"
                      value={link.link}
                      readOnly
                      className="flex-1 bg-transparent text-sm"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyLink(link.link)}
                    >
                      {copiedLink === link.link ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Performance Analytics</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-card border rounded-xl p-6">
                <h3 className="font-semibold mb-4">Click Trends</h3>
                <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-16 h-16 text-muted-foreground" />
                </div>
              </div>
              
              <div className="bg-card border rounded-xl p-6">
                <h3 className="font-semibold mb-4">Conversion Rates</h3>
                <div className="space-y-4">
                  {affiliateLinks.map(link => {
                    const conversionRate = ((link.conversions / link.clicks) * 100).toFixed(1)
                    return (
                      <div key={link.id} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="truncate">{link.course}</span>
                          <span className="font-medium">{conversionRate}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="davinci-gradient h-2 rounded-full"
                            style={{ width: `${Math.min(parseFloat(conversionRate) * 10, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'payouts' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Payout History</h2>
              <Button className="davinci-gradient">
                <DollarSign className="w-4 h-4 mr-2" />
                Request Payout
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-card border rounded-xl p-6">
                <h3 className="font-semibold mb-4">Recent Payouts</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-medium">October 2024 Payout</div>
                      <div className="text-sm text-muted-foreground">Processed on Oct 1, 2024</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold davinci-gradient-text">$450.00</div>
                      <div className="text-sm text-green-600">Completed</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-medium">September 2024 Payout</div>
                      <div className="text-sm text-muted-foreground">Processed on Sep 1, 2024</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold davinci-gradient-text">$380.50</div>
                      <div className="text-sm text-green-600">Completed</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-card border rounded-xl p-6">
                  <h3 className="font-semibold mb-4">Current Balance</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Available</span>
                      <span className="font-semibold davinci-gradient-text">$245.50</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Pending</span>
                      <span className="font-semibold">$89.20</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Total Earned</span>
                      <span className="font-semibold">$2,450.00</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card border rounded-xl p-6">
                  <h3 className="font-semibold mb-4">Payout Settings</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Minimum Payout</span>
                      <span>$50.00</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Payment Method</span>
                      <span>PayPal</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Payout Schedule</span>
                      <span>Monthly</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-4">
                      Update Settings
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Affiliates
