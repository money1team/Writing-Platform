import { ArrowLeft, Calendar, Clock, Mail, Users, Target, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function FitLifeMembershipCampaign() {
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
              <Badge className="bg-orange-100 text-orange-800">Fitness</Badge>
              <Badge className="bg-purple-100 text-purple-800">Email Campaign</Badge>
              <Badge className="bg-green-100 text-green-800">72% Open Rate</Badge>
              <Badge className="bg-blue-100 text-blue-800">Membership Renewal</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              FitLife Membership Renewal: The Email Campaign That Achieved 72% Open Rates
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              A strategic 6-email sequence that transformed FitLife's membership renewal process, achieving
              industry-leading open rates and generating $847,000 in renewed memberships while reducing churn by 43%.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                Campaign Period: October 2024
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                4-week campaign
              </div>
              <div className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                12,847 members targeted
              </div>
            </div>
          </div>

          {/* Challenge & Context */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">The Challenge: Declining Membership Renewals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-600">
                FitLife, a premium fitness center chain with 8 locations, was experiencing a significant drop in
                membership renewals. Their previous email campaigns were generic, poorly timed, and failed to address
                the real reasons why members were considering leaving.
              </p>
              <div className="bg-red-50 border-l-4 border-red-400 p-6">
                <h4 className="font-semibold text-red-800 mb-3">Pre-Campaign Challenges:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-red-700 mb-2">Performance Issues</h5>
                    <ul className="text-red-600 space-y-1 text-sm">
                      <li>• Renewal rate: 58% (industry average: 75%)</li>
                      <li>• Email open rate: 23% (fitness industry: 28%)</li>
                      <li>• Click-through rate: 3.2%</li>
                      <li>• Member satisfaction score: 6.8/10</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-red-700 mb-2">Root Causes Identified</h5>
                    <ul className="text-red-600 space-y-1 text-sm">
                      <li>• Generic, one-size-fits-all messaging</li>
                      <li>• Poor timing (sent too close to expiration)</li>
                      <li>• No personalization or member journey consideration</li>
                      <li>• Lack of value reinforcement</li>
                      <li>• No addressing of common objections</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                <h4 className="font-semibold text-blue-800 mb-2">Strategic Opportunity</h4>
                <p className="text-blue-700">
                  Research revealed that 73% of non-renewing members still valued their fitness goals but felt
                  disconnected from the gym community and unsure about their progress. This insight became the
                  foundation for our renewal campaign strategy.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Campaign Strategy */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Target className="mr-3 h-6 w-6 text-emerald-600" />
                Campaign Strategy: The "Your Fitness Journey Continues" Approach
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-600">
                Instead of focusing on membership features and pricing, we developed a narrative around personal
                transformation and community belonging. The campaign was designed to remind members of their progress,
                reconnect them with their goals, and position renewal as the next step in their fitness journey.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-emerald-800 mb-2">Personalization Strategy</h4>
                  <ul className="text-emerald-700 text-sm space-y-1">
                    <li>• Member workout history analysis</li>
                    <li>• Personal achievement highlights</li>
                    <li>• Customized goal recommendations</li>
                    <li>• Preferred class and trainer mentions</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Emotional Connection</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Progress celebration and recognition</li>
                    <li>• Community and belonging emphasis</li>
                    <li>• Future goal visualization</li>
                    <li>• Success story integration</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Value Reinforcement</h4>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• ROI of fitness investment</li>
                    <li>• Exclusive member benefits highlight</li>
                    <li>• Cost comparison with alternatives</li>
                    <li>• Limited-time renewal incentives</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Email Sequence Breakdown */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">The 6-Email Sequence: A Journey of Reconnection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="border-l-4 border-emerald-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Email 1: "Look How Far You've Come, [Name]"</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Sent 45 days before expiration - Personal achievement celebration
                </p>
                <div className="bg-emerald-50 p-4 rounded-lg mb-3">
                  <h5 className="font-medium text-emerald-800 mb-2">Key Elements:</h5>
                  <ul className="text-emerald-700 text-sm space-y-1">
                    <li>• Personalized workout statistics (classes attended, calories burned, etc.)</li>
                    <li>• Before/after progress visualization</li>
                    <li>• Specific achievements and milestones reached</li>
                    <li>• Motivational message about continued growth</li>
                  </ul>
                </div>
                <div className="flex gap-4 text-sm">
                  <span className="text-emerald-600 font-semibold">Open Rate: 78.3%</span>
                  <span className="text-blue-600 font-semibold">Click Rate: 34.7%</span>
                  <span className="text-purple-600 font-semibold">Engagement: 12.4 min avg.</span>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Email 2: "Your FitLife Family Misses You"</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Sent 35 days before expiration - Community and belonging focus
                </p>
                <div className="bg-blue-50 p-4 rounded-lg mb-3">
                  <h5 className="font-medium text-blue-800 mb-2">Community Highlights:</h5>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Messages from favorite trainers and workout buddies</li>
                    <li>• Upcoming community events and challenges</li>
                    <li>• Member spotlight featuring similar fitness journeys</li>
                    <li>• Social proof of community support and motivation</li>
                  </ul>
                </div>
                <div className="flex gap-4 text-sm">
                  <span className="text-emerald-600 font-semibold">Open Rate: 74.1%</span>
                  <span className="text-blue-600 font-semibold">Click Rate: 28.9%</span>
                  <span className="text-purple-600 font-semibold">Social Shares: 247</span>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Email 3: "What's Next on Your Fitness Journey?"</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Sent 25 days before expiration - Future goal setting and planning
                </p>
                <div className="bg-purple-50 p-4 rounded-lg mb-3">
                  <h5 className="font-medium text-purple-800 mb-2">Goal-Setting Focus:</h5>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• Personalized next-level fitness goals based on current progress</li>
                    <li>• New class recommendations and trainer introductions</li>
                    <li>• Seasonal fitness challenges and programs</li>
                    <li>• Success visualization and motivation techniques</li>
                  </ul>
                </div>
                <div className="flex gap-4 text-sm">
                  <span className="text-emerald-600 font-semibold">Open Rate: 71.8%</span>
                  <span className="text-blue-600 font-semibold">Click Rate: 31.2%</span>
                  <span className="text-purple-600 font-semibold">Goal Setting: 67% completed</span>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Email 4: "Exclusive Renewal Benefits Just for You"</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Sent 15 days before expiration - Value proposition and exclusive offers
                </p>
                <div className="bg-orange-50 p-4 rounded-lg mb-3">
                  <h5 className="font-medium text-orange-800 mb-2">Exclusive Benefits:</h5>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• Early access to new equipment and facilities</li>
                    <li>• Complimentary personal training sessions</li>
                    <li>• Guest pass privileges for friends and family</li>
                    <li>• Nutrition consultation and meal planning</li>
                  </ul>
                </div>
                <div className="flex gap-4 text-sm">
                  <span className="text-emerald-600 font-semibold">Open Rate: 69.4%</span>
                  <span className="text-blue-600 font-semibold">Click Rate: 42.6%</span>
                  <span className="text-purple-600 font-semibold">Renewal Rate: 23.7%</span>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Email 5: "Don't Let Your Progress Stop Here"</h4>
                <p className="text-gray-600 text-sm mb-3">Sent 7 days before expiration - Urgency and loss aversion</p>
                <div className="bg-red-50 p-4 rounded-lg mb-3">
                  <h5 className="font-medium text-red-800 mb-2">Urgency Elements:</h5>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• Risk of losing momentum and progress made</li>
                    <li>• Limited-time renewal pricing (expires with membership)</li>
                    <li>• Waitlist for popular classes if membership lapses</li>
                    <li>• Testimonials from members who took breaks and regretted it</li>
                  </ul>
                </div>
                <div className="flex gap-4 text-sm">
                  <span className="text-emerald-600 font-semibold">Open Rate: 73.2%</span>
                  <span className="text-blue-600 font-semibold">Click Rate: 38.9%</span>
                  <span className="text-purple-600 font-semibold">Renewal Rate: 31.4%</span>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">Email 6: "Welcome Back! Your Journey Continues"</h4>
                <p className="text-gray-600 text-sm mb-3">Sent on renewal day - Celebration and next steps</p>
                <div className="bg-green-50 p-4 rounded-lg mb-3">
                  <h5 className="font-medium text-green-800 mb-2">Celebration & Onboarding:</h5>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Congratulations on commitment to health and fitness</li>
                    <li>• Immediate next steps and goal-setting session booking</li>
                    <li>• Introduction to new features and programs</li>
                    <li>• Community welcome back and support network activation</li>
                  </ul>
                </div>
                <div className="flex gap-4 text-sm">
                  <span className="text-emerald-600 font-semibold">Open Rate: 81.7%</span>
                  <span className="text-blue-600 font-semibold">Click Rate: 45.3%</span>
                  <span className="text-purple-600 font-semibold">Goal Sessions Booked: 89%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results & Impact */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <BarChart className="mr-3 h-6 w-6 text-emerald-600" />
                Campaign Results: Record-Breaking Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Email Performance Metrics</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-emerald-50 rounded">
                      <span className="text-gray-700">Average Open Rate</span>
                      <span className="font-bold text-emerald-600">72.4% (+214% vs. previous)</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                      <span className="text-gray-700">Average Click-Through Rate</span>
                      <span className="font-bold text-blue-600">36.8% (+1,050% vs. previous)</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                      <span className="text-gray-700">Unsubscribe Rate</span>
                      <span className="font-bold text-purple-600">0.3% (-85% vs. previous)</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                      <span className="text-gray-700">Forward/Share Rate</span>
                      <span className="font-bold text-orange-600">8.7% (new metric)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Business Impact Metrics</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                      <span className="text-gray-700">Membership Renewal Rate</span>
                      <span className="font-bold text-green-600">84.3% (+45% vs. previous year)</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-teal-50 rounded">
                      <span className="text-gray-700">Revenue Generated</span>
                      <span className="font-bold text-teal-600">$847,000 (+67% vs. target)</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-indigo-50 rounded">
                      <span className="text-gray-700">Member Satisfaction Score</span>
                      <span className="font-bold text-indigo-600">8.9/10 (+31% improvement)</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-pink-50 rounded">
                      <span className="text-gray-700">Referral Rate Increase</span>
                      <span className="font-bold text-pink-600">156% (renewed members)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3">Long-Term Impact (6 Months Post-Campaign)</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">43%</div>
                    <div className="text-green-700 text-sm">Reduction in Member Churn</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">$2.1M</div>
                    <div className="text-green-700 text-sm">Additional Annual Revenue</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">267%</div>
                    <div className="text-green-700 text-sm">ROI on Campaign Investment</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sample Email Content */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Sample Email: "Look How Far You've Come, Sarah"</CardTitle>
              <CardDescription>The highest-performing email in the sequence (78.3% open rate)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg border">
                <div className="mb-4">
                  <div className="text-sm text-gray-500 mb-2">Subject Line:</div>
                  <div className="font-semibold">🏆 Sarah, your 6-month transformation is incredible!</div>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4">Hi Sarah,</p>
                  <p className="text-gray-700 mb-4">
                    I was looking at your FitLife journey today, and I had to reach out. Do you realize what you've
                    accomplished in just 6 months?
                  </p>
                  <div className="bg-emerald-50 border border-emerald-200 p-4 rounded mb-4">
                    <h4 className="font-semibold text-emerald-800 mb-2">Your Amazing Progress:</h4>
                    <ul className="text-emerald-700 space-y-1">
                      <li>✅ 47 workout classes completed (that's dedication!)</li>
                      <li>✅ 23,400 calories burned (equivalent to 6.7 lbs of fat)</li>
                      <li>✅ Increased your deadlift from 95 lbs to 135 lbs</li>
                      <li>✅ Went from struggling with 5 push-ups to crushing 25</li>
                      <li>✅ Made 12 new workout buddies (including your Tuesday Zumba crew!)</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Remember when you first walked through our doors? You told me you just wanted to "feel stronger and
                    more confident." Well, Sarah, you didn't just achieve that goal—you absolutely crushed it.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Your trainer Mike mentioned how proud he is of your progress, and the Tuesday Zumba group always
                    asks about you when you miss a class. You've become such an inspiration to our FitLife community.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded mb-4">
                    <p className="text-blue-800 font-semibold mb-2">What's next on your fitness journey?</p>
                    <p className="text-blue-700">
                      I'd love to help you set some exciting new goals for the next 6 months. Whether it's training for
                      that 5K you mentioned or finally mastering those pull-ups, we're here to support you every step of
                      the way.
                    </p>
                  </div>
                  <div className="text-center my-6">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg">
                      Continue My Fitness Journey →
                    </Button>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Keep being amazing, Sarah. Your FitLife family is cheering you on!
                  </p>
                  <p className="text-gray-600 text-sm mt-4">
                    Proud of you,
                    <br />
                    Jessica
                    <br />
                    <em>Member Success Manager, FitLife</em>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Client Testimonial */}
          <Card className="mb-8 bg-gradient-to-r from-orange-50 to-red-50">
            <CardContent className="p-8">
              <blockquote className="text-xl italic text-gray-700 mb-6">
                "This email campaign completely transformed our member retention strategy. The personalization and
                emotional connection we achieved was unlike anything we'd done before. Our members felt truly seen and
                valued, which reflected in not just our renewal rates but also in the overall gym atmosphere. People are
                more engaged, more motivated, and more connected to our community than ever before."
              </blockquote>
              <div className="flex items-center">
                <img
                  src="/placeholder.svg?height=80&width=80"
                  alt="Marcus Rodriguez"
                  className="w-20 h-20 rounded-full mr-6"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-lg">Marcus Rodriguez</div>
                  <div className="text-gray-600">General Manager, FitLife Fitness Centers</div>
                  <div className="text-gray-500 text-sm">Former Operations Director at 24 Hour Fitness</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Success Factors */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">What Made This Campaign So Successful</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Strategic Elements</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-800">Deep Personalization</p>
                        <p className="text-gray-600 text-sm">
                          Used actual member data to create truly personal experiences
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-800">Emotional Storytelling</p>
                        <p className="text-gray-600 text-sm">
                          Focused on transformation and community rather than features
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-800">Perfect Timing</p>
                        <p className="text-gray-600 text-sm">Started early and built momentum over 6 weeks</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Execution Excellence</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-800">Data-Driven Insights</p>
                        <p className="text-gray-600 text-sm">Leveraged member behavior and preference data</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-800">Community Integration</p>
                        <p className="text-gray-600 text-sm">Involved trainers and staff in the personal touch</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-800">Value Reinforcement</p>
                        <p className="text-gray-600 text-sm">
                          Consistently reminded members of their investment's worth
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-emerald-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Email Marketing?</h3>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                Get email campaigns that build genuine connections with your audience and drive measurable business
                results. Let's create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/#contact">Start Your Email Campaign</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-emerald-600"
                  asChild
                >
                  <Link href="/portfolio/email-campaigns/techgadget-launch">View Next Campaign</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
