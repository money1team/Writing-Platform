import { ArrowLeft, Calendar, Clock, Users, CheckCircle, BarChart, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function TechVisionCaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <svg className="h-8 w-8 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
              <polyline points="14,2 14,8 20,8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10,9 9,9 8,9" />
            </svg>
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
              <Badge className="bg-emerald-100 text-emerald-800">SaaS</Badge>
              <Badge className="bg-blue-100 text-blue-800">Case Study</Badge>
              <Badge className="bg-green-100 text-green-800">43% Conversion Increase</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              TechVision SaaS Platform: From Technical Jargon to Customer-Centric Messaging
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              How I transformed a struggling B2B SaaS platform's messaging to increase conversions by 43%, reduce bounce
              rates by 34%, and generate $2.3M in additional annual recurring revenue through strategic content
              optimization.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                March - May 2024
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                8-week project
              </div>
              <div className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                B2B SaaS, 50-500 employees
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <Card className="mb-8 bg-gradient-to-r from-emerald-50 to-teal-50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Target className="mr-3 h-6 w-6 text-emerald-600" />
                Executive Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                TechVision, a project management SaaS serving mid-market companies, was losing potential customers due
                to confusing messaging and poor content structure. Despite having superior features compared to
                competitors like Asana and Monday.com, their conversion rates remained stagnant at 2.1%.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-2xl font-bold text-emerald-600">43%</div>
                  <div className="text-sm text-gray-600">Conversion Rate Increase</div>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-2xl font-bold text-blue-600">$2.3M</div>
                  <div className="text-sm text-gray-600">Additional ARR Generated</div>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-2xl font-bold text-purple-600">34%</div>
                  <div className="text-sm text-gray-600">Bounce Rate Reduction</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* The Challenge */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">The Challenge: When Great Features Don't Translate to Sales</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-400 p-6">
                <h4 className="font-semibold text-red-800 mb-3">Initial Situation Analysis</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-red-700 mb-2">Performance Metrics (Before)</h5>
                    <ul className="text-red-600 space-y-1 text-sm">
                      <li>• Landing page conversion: 2.1%</li>
                      <li>• Bounce rate: 68%</li>
                      <li>• Average session duration: 1:23</li>
                      <li>• Demo request rate: 0.8%</li>
                      <li>• Trial-to-paid conversion: 12%</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-red-700 mb-2">Content Issues Identified</h5>
                    <ul className="text-red-600 space-y-1 text-sm">
                      <li>• Heavy technical jargon</li>
                      <li>• Feature-focused vs. benefit-driven</li>
                      <li>• Unclear value proposition</li>
                      <li>• Poor information hierarchy</li>
                      <li>• Weak calls-to-action</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">Real Example: Before vs. After Messaging</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-red-600 mb-2">❌ Original Homepage Headline</h5>
                    <div className="bg-white p-4 border border-red-200 rounded">
                      <p className="text-gray-700 italic">
                        "Advanced Project Management Solution with Integrated Workflow Automation, Resource Allocation
                        Optimization, and Real-Time Collaborative Analytics Dashboard"
                      </p>
                    </div>
                    <p className="text-sm text-red-600 mt-2">Problems: Too technical, no clear benefit, overwhelming</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-emerald-600 mb-2">✅ New Homepage Headline</h5>
                    <div className="bg-white p-4 border border-emerald-200 rounded">
                      <p className="text-gray-700 font-medium">"Stop Chasing Deadlines. Start Hitting Them."</p>
                      <p className="text-gray-600 text-sm mt-2">
                        The project management platform that helps teams deliver projects 40% faster without the chaos.
                      </p>
                    </div>
                    <p className="text-sm text-emerald-600 mt-2">
                      Benefits: Clear problem/solution, specific outcome, emotional hook
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Research & Strategy */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Research & Strategy: Understanding the Real Customer Journey</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Customer Research Findings</h4>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-medium text-blue-800 mb-2">Primary Pain Points Discovered:</h5>
                    <ul className="text-blue-700 space-y-1 text-sm">
                      <li>• Projects consistently running over deadline</li>
                      <li>• Lack of visibility into team workload</li>
                      <li>• Too much time spent in status meetings</li>
                      <li>• Difficulty tracking project profitability</li>
                      <li>• Team members working in silos</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Competitive Analysis</h4>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-medium text-purple-800 mb-2">Key Differentiators Identified:</h5>
                    <ul className="text-purple-700 space-y-1 text-sm">
                      <li>• Advanced resource forecasting (unique to TechVision)</li>
                      <li>• Built-in profitability tracking</li>
                      <li>• Industry-specific templates</li>
                      <li>• Superior integration capabilities</li>
                      <li>• White-label options for agencies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-400 p-6">
                <h4 className="font-semibold text-emerald-800 mb-3">Strategic Content Framework Developed</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-medium text-emerald-700 mb-2">1. Problem-First Approach</h5>
                    <p className="text-emerald-600 text-sm">
                      Lead with customer pain points before introducing solutions
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-emerald-700 mb-2">2. Outcome-Driven Messaging</h5>
                    <p className="text-emerald-600 text-sm">Focus on business results rather than feature lists</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-emerald-700 mb-2">3. Social Proof Integration</h5>
                    <p className="text-emerald-600 text-sm">Weave customer success stories throughout the journey</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content Transformation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Content Transformation: Page-by-Page Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Homepage Redesign</h4>
                  <p className="text-gray-600 mb-3">Complete messaging overhaul focusing on customer outcomes</p>
                  <div className="bg-gray-50 p-4 rounded">
                    <h5 className="font-medium mb-2">New Structure:</h5>
                    <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                      <li>Problem-focused headline with emotional hook</li>
                      <li>Specific outcome promise with social proof</li>
                      <li>Three core benefits with customer quotes</li>
                      <li>Interactive demo preview</li>
                      <li>Risk-free trial CTA with no credit card required</li>
                    </ol>
                  </div>
                  <div className="mt-3 text-sm text-emerald-600">
                    <strong>Result:</strong> Conversion rate increased from 2.1% to 3.0% (+43%)
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Features Pages Rewrite</h4>
                  <p className="text-gray-600 mb-3">Transformed technical specifications into business benefits</p>
                  <div className="bg-gray-50 p-4 rounded">
                    <h5 className="font-medium mb-2">Example Transformation:</h5>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-red-600 font-medium">Before:</p>
                        <p className="text-gray-700 italic">
                          "Advanced Gantt chart functionality with critical path analysis and resource leveling
                          algorithms"
                        </p>
                      </div>
                      <div>
                        <p className="text-emerald-600 font-medium">After:</p>
                        <p className="text-gray-700">
                          "See exactly when your project will finish and automatically balance your team's workload to
                          hit every deadline"
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 text-sm text-blue-600">
                    <strong>Result:</strong> Feature page engagement increased by 89%
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Pricing Page Optimization</h4>
                  <p className="text-gray-600 mb-3">Restructured pricing presentation to reduce decision paralysis</p>
                  <div className="bg-gray-50 p-4 rounded">
                    <h5 className="font-medium mb-2">Key Changes:</h5>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      <li>Added "Most Popular" badge to guide decision-making</li>
                      <li>Included ROI calculator for each tier</li>
                      <li>Simplified feature comparisons with benefit-focused language</li>
                      <li>Added customer success stories for each plan level</li>
                    </ul>
                  </div>
                  <div className="mt-3 text-sm text-purple-600">
                    <strong>Result:</strong> Trial sign-ups increased by 67%
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Deep Dive */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <BarChart className="mr-3 h-6 w-6 text-emerald-600" />
                Results: Measurable Business Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Traffic & Engagement Metrics</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-emerald-50 rounded">
                      <span className="text-gray-700">Landing Page Conversion Rate</span>
                      <span className="font-bold text-emerald-600">2.1% → 3.0% (+43%)</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                      <span className="text-gray-700">Bounce Rate</span>
                      <span className="font-bold text-blue-600">68% → 45% (-34%)</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                      <span className="text-gray-700">Average Session Duration</span>
                      <span className="font-bold text-purple-600">1:23 → 4:17 (+209%)</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                      <span className="text-gray-700">Demo Request Rate</span>
                      <span className="font-bold text-orange-600">0.8% → 2.1% (+156%)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Business Impact Metrics</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                      <span className="text-gray-700">Trial-to-Paid Conversion</span>
                      <span className="font-bold text-green-600">12% → 18% (+50%)</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-teal-50 rounded">
                      <span className="text-gray-700">Customer Acquisition Cost</span>
                      <span className="font-bold text-teal-600">$847 → $592 (-30%)</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-indigo-50 rounded">
                      <span className="text-gray-700">Monthly Recurring Revenue</span>
                      <span className="font-bold text-indigo-600">+$192K/month</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-pink-50 rounded">
                      <span className="text-gray-700">Annual Recurring Revenue</span>
                      <span className="font-bold text-pink-600">+$2.3M/year</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3">6-Month Post-Launch Impact</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">847</div>
                    <div className="text-green-700 text-sm">New Customers Acquired</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">$2.3M</div>
                    <div className="text-green-700 text-sm">Additional ARR Generated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">4.2x</div>
                    <div className="text-green-700 text-sm">ROI on Content Investment</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Client Testimonial */}
          <Card className="mb-8 bg-gradient-to-r from-emerald-50 to-teal-50">
            <CardContent className="p-8">
              <blockquote className="text-xl italic text-gray-700 mb-6">
                "The content transformation EliteScribe delivered was nothing short of remarkable. We went from
                struggling to explain our value to having prospects tell us they finally 'get it.' Our sales team
                reports that demos are now conversations about implementation rather than education. The $2.3M in
                additional ARR speaks for itself, but the real value is in how our entire go-to-market strategy has been
                elevated."
              </blockquote>
              <div className="flex items-center">
                <img
                  src="/placeholder.svg?height=80&width=80"
                  alt="Sarah Johnson"
                  className="w-20 h-20 rounded-full mr-6"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-lg">Sarah Johnson</div>
                  <div className="text-gray-600">VP of Marketing, TechVision</div>
                  <div className="text-gray-500 text-sm">Former Marketing Director at Salesforce</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Methodology */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Methodology: The 8-Week Transformation Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-emerald-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-sm font-bold text-emerald-600">1-2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Discovery & Research Phase (Weeks 1-2)</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Conducted 12 customer interviews across different segments</li>
                      <li>• Analyzed 6 months of website analytics and user behavior data</li>
                      <li>• Performed competitive content analysis of 8 direct competitors</li>
                      <li>• Reviewed sales call recordings to identify common objections</li>
                      <li>• Surveyed 247 trial users who didn't convert to paid plans</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-sm font-bold text-emerald-600">3-4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Strategy & Framework Development (Weeks 3-4)</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Developed customer journey mapping with pain point identification</li>
                      <li>• Created messaging hierarchy and value proposition framework</li>
                      <li>• Established content guidelines and brand voice documentation</li>
                      <li>• Designed conversion optimization strategy for each page type</li>
                      <li>• Built content performance measurement framework</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-sm font-bold text-emerald-600">5-7</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Content Creation & Testing (Weeks 5-7)</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Rewrote homepage, 5 feature pages, pricing page, and about page</li>
                      <li>• Created 12 customer success story case studies</li>
                      <li>• Developed email nurture sequence for trial users</li>
                      <li>• A/B tested headlines, CTAs, and page structures</li>
                      <li>• Implemented progressive disclosure for complex features</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-sm font-bold text-emerald-600">8</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Launch & Optimization (Week 8)</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Coordinated phased rollout with performance monitoring</li>
                      <li>• Provided team training on new messaging framework</li>
                      <li>• Established ongoing optimization process and KPI tracking</li>
                      <li>• Created content maintenance guidelines for future updates</li>
                      <li>• Delivered comprehensive performance report and recommendations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Learnings */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Key Learnings & Best Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">What Worked Best</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800">Problem-First Messaging</p>
                        <p className="text-gray-600 text-sm">
                          Leading with customer pain points increased engagement by 89%
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800">Specific Outcome Promises</p>
                        <p className="text-gray-600 text-sm">
                          Quantified benefits (40% faster delivery) outperformed vague claims
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800">Social Proof Integration</p>
                        <p className="text-gray-600 text-sm">
                          Customer quotes throughout the journey increased trust and conversions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Critical Success Factors</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800">Deep Customer Research</p>
                        <p className="text-gray-600 text-sm">
                          12 customer interviews revealed insights analytics couldn't show
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800">Iterative Testing Approach</p>
                        <p className="text-gray-600 text-sm">
                          A/B testing every major change ensured data-driven decisions
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800">Cross-Team Collaboration</p>
                        <p className="text-gray-600 text-sm">
                          Sales and support team insights were crucial for authentic messaging
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
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your SaaS Messaging?</h3>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                See how strategic content transformation can drive similar results for your business. Get a free content
                audit and personalized strategy session.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/#contact">Get Your Free Content Audit</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-emerald-600"
                  asChild
                >
                  <Link href="/portfolio/case-studies/greenlife-eco">View Next Case Study</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
