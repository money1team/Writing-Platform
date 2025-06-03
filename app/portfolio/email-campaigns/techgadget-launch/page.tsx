import { ArrowLeft, Calendar, Clock, DollarSign, Mail, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function TechGadgetEmailCampaign() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Mail className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-900">EliteScribe</span>
          </Link>
          <Button asChild>
            <Link href="/#contact">Get Quote</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/#portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>

        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-purple-100 text-purple-800">Consumer Tech</Badge>
              <Badge className="bg-orange-100 text-orange-800">Email Campaign</Badge>
              <Badge className="bg-green-100 text-green-800">$430K Revenue</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              TechGadget Product Launch: Email Campaign That Generated $430K
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              A comprehensive pre-launch and launch email sequence for TechGadget's revolutionary wireless charging pad
              that generated $430,000 in revenue and achieved a 340% increase over their previous best campaign.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                Campaign Period: Sept 2024
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                6-week campaign
              </div>
              <div className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                45,000 subscribers
              </div>
            </div>
          </div>

          {/* Campaign Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Campaign Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                TechGadget approached us to create an email marketing campaign for their new wireless charging pad
                launch. The challenge was to build anticipation, educate the market about the product's unique features,
                and drive pre-orders in a highly competitive consumer electronics market.
              </p>
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                <h4 className="font-semibold text-purple-800 mb-2">Campaign Objectives:</h4>
                <ul className="list-disc list-inside text-purple-700 space-y-1">
                  <li>Generate $300K in pre-launch and launch sales</li>
                  <li>Build anticipation and buzz around the new product</li>
                  <li>Educate subscribers about unique product features</li>
                  <li>Achieve 25% open rate and 8% click-through rate</li>
                  <li>Grow email list by 20% during campaign period</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Email Sequence Breakdown */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Email Sequence Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Email 1: "Something Revolutionary is Coming"</h4>
                  <p className="text-gray-600 text-sm mb-2">Teaser email to build anticipation</p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>Open Rate: 34.2%</span>
                    <span>Click Rate: 12.8%</span>
                  </div>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Email 2: "The Problem Every Tech User Faces"</h4>
                  <p className="text-gray-600 text-sm mb-2">Problem identification and market education</p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>Open Rate: 31.7%</span>
                    <span>Click Rate: 15.3%</span>
                  </div>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Email 3: "Introducing ChargePad Pro"</h4>
                  <p className="text-gray-600 text-sm mb-2">Product reveal with key features and benefits</p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>Open Rate: 38.9%</span>
                    <span>Click Rate: 18.7%</span>
                  </div>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Email 4: "Early Bird Special - 48 Hours Only"</h4>
                  <p className="text-gray-600 text-sm mb-2">Limited-time pre-order offer</p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>Open Rate: 42.1%</span>
                    <span>Click Rate: 24.6%</span>
                  </div>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Email 5: "Last Chance - Early Bird Ends Tonight"</h4>
                  <p className="text-gray-600 text-sm mb-2">Urgency-driven final call for pre-orders</p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>Open Rate: 45.3%</span>
                    <span>Click Rate: 28.2%</span>
                  </div>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Email 6: "ChargePad Pro is Here!"</h4>
                  <p className="text-gray-600 text-sm mb-2">Official launch announcement</p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>Open Rate: 41.8%</span>
                    <span>Click Rate: 22.4%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Campaign Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-green-600">$430K</div>
                  <div className="text-gray-600">Total Revenue Generated</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-purple-600">340%</div>
                  <div className="text-gray-600">Increase vs. Previous Best</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <Mail className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-blue-600">38.7%</div>
                  <div className="text-gray-600">Average Open Rate</div>
                </div>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <h4 className="font-semibold text-green-800 mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside text-green-700 space-y-1">
                  <li>Generated $430,000 in total revenue (43% above target)</li>
                  <li>Achieved 38.7% average open rate (54% above industry average)</li>
                  <li>20.3% average click-through rate (154% above industry average)</li>
                  <li>Converted 12.8% of email subscribers to customers</li>
                  <li>Grew email list by 34% during campaign period</li>
                  <li>Generated 2,847 social media shares from email content</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Sample Email Content */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Sample Email: "Early Bird Special"</CardTitle>
              <CardDescription>The highest-performing email in the sequence</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg border">
                <div className="mb-4">
                  <div className="text-sm text-gray-500 mb-2">Subject Line:</div>
                  <div className="font-semibold">🚀 ChargePad Pro Early Bird: Save 30% (48 Hours Only)</div>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4">Hi [First Name],</p>
                  <p className="text-gray-700 mb-4">
                    Remember that wireless charging frustration I mentioned? The slow speeds, the constant
                    repositioning, the heat buildup that damages your phone?
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>ChargePad Pro solves all of that.</strong>
                  </p>
                  <p className="text-gray-700 mb-4">
                    ✅ 3x faster charging than standard wireless pads
                    <br />✅ Smart positioning technology (no more "sweet spot" hunting)
                    <br />✅ Advanced cooling system protects your device
                    <br />✅ Works with ANY Qi-enabled device
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded mb-4">
                    <p className="text-blue-800 font-semibold mb-2">Early Bird Special (48 Hours Only):</p>
                    <p className="text-blue-700">
                      ~~$129~~ <span className="text-2xl font-bold text-blue-800">$89</span> + FREE shipping
                    </p>
                  </div>
                  <p className="text-gray-700 mb-4">
                    This is the same technology that powers Tesla's charging stations, now available for your everyday
                    devices.
                  </p>
                  <div className="text-center my-6">
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
                      Claim Your Early Bird Discount →
                    </Button>
                  </div>
                  <p className="text-gray-600 text-sm">
                    P.S. Only 500 Early Bird units available. Once they're gone, the price goes back to $129.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Client Testimonial */}
          <Card className="mb-8 bg-gradient-to-r from-purple-50 to-pink-50">
            <CardContent className="p-8">
              <blockquote className="text-xl italic text-gray-700 mb-4">
                "This email campaign exceeded every expectation we had. Not only did we hit our revenue target, we
                absolutely crushed it. The storytelling approach and strategic sequence building created genuine
                excitement around our product. Our customer service team said they'd never seen so many enthusiastic
                customers before."
              </blockquote>
              <div className="flex items-center">
                <img
                  src="/placeholder.svg?height=60&width=60"
                  alt="Robert Kim"
                  className="w-15 h-15 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">Robert Kim</div>
                  <div className="text-gray-600">Email Marketing Lead, TechGadget</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Strategy Insights */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Strategy Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">What Made This Campaign Successful</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Problem-first approach before product introduction</li>
                    <li>• Strategic use of scarcity and urgency</li>
                    <li>• Benefit-focused messaging over feature lists</li>
                    <li>• Compelling subject lines with emojis and urgency</li>
                    <li>• Clear, single call-to-action in each email</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Performance Drivers</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Personalization beyond just first names</li>
                    <li>• Mobile-optimized design and copy</li>
                    <li>• A/B tested subject lines and send times</li>
                    <li>• Social proof integration throughout sequence</li>
                    <li>• Strategic email timing and frequency</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-emerald-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Launch Your Next Email Campaign?</h3>
              <p className="text-emerald-100 mb-6">
                Get email sequences that build anticipation, drive engagement, and convert subscribers into customers.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/#contact">Start Your Email Campaign</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
