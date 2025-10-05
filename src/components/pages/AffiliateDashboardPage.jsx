import React from 'react'
import { Link } from 'react-router-dom'
import {
  DollarSign,
  Link as LinkIcon,
  Users, // For referrals
  Award, // For commission rates
  ChevronRight,
  BarChart2,
  Settings
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import dataService from '@/services/dataService'

const AffiliateDashboardPage = () => {
  // Mock authenticated user for now
  const currentUser = dataService.getUserById('usr-003') // Charlie Brown

  if (!currentUser || currentUser.role !== 'affiliate') {
    return <div className="container mx-auto py-10 text-center">Please log in as an affiliate to view this dashboard.</div>
  }

  // Mock affiliate data
  const mockAffiliateStats = {
    totalCommissions: 250.75,
    pendingCommissions: 50.20,
    paidCommissions: 200.55,
    referrals: 15,
    conversionRate: 0.10, // 10%
    commissionRate: 0.15 // 15%
  }

  const affiliateLink = `https://yourplatform.com?ref=${currentUser.affiliateCode}`

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8">Welcome, Affiliate {currentUser.name}!</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        {/* Overview Card */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><BarChart2 className="w-5 h-5" /> Your Affiliate Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-4xl font-bold davinci-gradient-text">${mockAffiliateStats.totalCommissions.toFixed(2)}</p>
                <p className="text-muted-foreground">Total Commissions</p>
              </div>
              <div>
                <p className="text-4xl font-bold davinci-gradient-text">${mockAffiliateStats.pendingCommissions.toFixed(2)}</p>
                <p className="text-muted-foreground">Pending Commissions</p>
              </div>
              <div>
                <p className="text-4xl font-bold davinci-gradient-text">{mockAffiliateStats.referrals}</p>
                <p className="text-muted-foreground">Total Referrals</p>
              </div>
              <div>
                <p className="text-4xl font-bold davinci-gradient-text">{(mockAffiliateStats.conversionRate * 100).toFixed(0)}%</p>
                <p className="text-muted-foreground">Conversion Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions / Links Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><LinkIcon className="w-5 h-5" /> Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between text-primary">
              <span>Your Affiliate Code: <span className="font-semibold">{currentUser.affiliateCode}</span></span>
            </div>
            <div className="flex items-center justify-between text-primary">
              <span>Commission Rate: <span className="font-semibold">{(mockAffiliateStats.commissionRate * 100).toFixed(0)}%</span></span>
            </div>
            <div className="space-y-2 mt-4">
              <p className="text-sm text-muted-foreground">Your Affiliate Link:</p>
              <div className="flex items-center border rounded-md p-2 bg-muted">
                <input type="text" readOnly value={affiliateLink} className="flex-grow bg-transparent outline-none text-sm" />
                <Button variant="ghost" size="sm" onClick={() => navigator.clipboard.writeText(affiliateLink)}>
                  Copy
                </Button>
              </div>
            </div>
            <Link to="/affiliate/settings" className="flex items-center justify-between text-primary hover:underline mt-4">
              <span><Settings className="inline-block w-4 h-4 mr-2" /> Payout Settings</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Recent Referrals/Commissions (Placeholder) */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Recent Commissions</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-muted-foreground">No recent commissions to display. Share your link to start earning!</p>
            {/* In a real app, this would be a table of recent transactions */}
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

export default AffiliateDashboardPage
