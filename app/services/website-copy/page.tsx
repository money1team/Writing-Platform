import { ArrowLeft, CheckCircle, Globe, Target, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function WebsiteCopyService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-900">EliteScribe</span>
          </Link>
          <Button asChild>
            <Link href="/#contact">Get Quote</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="mb-12">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800">Website Copy & Landing Pages</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Website Copy That Converts Visitors Into Customers
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Transform your website from a digital brochure into a powerful sales machine. Get conversion-optimized
              copy that speaks directly to your customers' needs and drives measurable business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                <Link href="/#contact">Get Your Website Audit</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#portfolio-examples">View Copy Examples</Link>
              </Button>
            </div>
          </div>

          {/* Results Preview */}
          <Card className="mb-8 bg-gradient-to-r from-emerald-50 to-teal-50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <BarChart className="mr-3 h-6 w-6 text-emerald-600" />
                Typical Results from Website Copy Optimization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white rounded-lg border">
                  <div className="text-3xl font-bold text-emerald-600">156%</div>
                  <div className="text-gray-600">Average Conversion Increase</div>
                  <div className="text-xs text-gray-500 mt-1">Based on 47 client projects</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border">
                  <div className="text-3xl font-bold text-blue-600">67%</div>
                  <div className="text-gray-600">Reduction in Bounce Rate</div>
                  <div className="text-xs text-gray-500 mt-1">Visitors stay and engage</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border">
                  <div className="text-3xl font-bold text-purple-600">3.2x</div>
                  <div className="text-gray-600">Increase in Lead Quality</div>
                  <div className="text-xs text-gray-500 mt-1">Better qualified prospects</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Complete Website Copy Solutions</CardTitle>
              <CardDescription>From homepage to checkout, every page optimized for maximum conversions</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="homepage" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="homepage">Homepage</TabsTrigger>
                  <TabsTrigger value="landing">Landing Pages</TabsTrigger>
                  <TabsTrigger value="product">Product Pages</TabsTrigger>
                  <TabsTrigger value="about">About & Services</TabsTrigger>
                </TabsList>

                <TabsContent value="homepage" className="mt-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Homepage Copy That Makes First Impressions Count</h4>
                    <p className="text-gray-600">
                      Your homepage has 8 seconds to capture attention and communicate value. I craft homepage copy that
                      immediately connects with your ideal customers and guides them toward conversion.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-gray-800 mb-2">What's Included:</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="mr-2 h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                            Compelling headline that stops scrolling
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="mr-2 h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                            Clear value proposition and benefits
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="mr-2 h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                            Social proof and credibility indicators
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="mr-2 h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                            Strategic calls-to-action placement
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-800 mb-2">Optimization Focus:</h5>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li className="flex items-start">
                            <Target className="mr-2 h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            Reduce bounce rate by 40%+
                          </li>
                          <li className="flex items-start">
                            <Target className="mr-2 h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            Increase time on page by 200%+
                          </li>
                          <li className="flex items-start">
                            <Target className="mr-2 h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            Improve conversion rate by 150%+
                          </li>
                          <li className="flex items-start">
                            <Target className="mr-2 h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            Generate more qualified leads
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="landing" className="mt-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">High-Converting Landing Pages</h4>
                    <p className="text-gray-600">
                      Purpose-built landing pages designed for specific campaigns, products, or audiences. Each page
                      follows proven conversion optimization principles to maximize your advertising ROI.
                    </p>
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                      <h5 className="font-medium text-blue-800 mb-2">Landing Page Specialties:</h5>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <ul className="text-blue-700 space-y-1">
                          <li>• Lead generation pages</li>
                          <li>• Product launch pages</li>
                          <li>• Event registration pages</li>
                          <li>• Free trial sign-up pages</li>
                        </ul>
                        <ul className="text-blue-700 space-y-1">
                          <li>• Webinar registration pages</li>
                          <li>• E-book download pages</li>
                          <li>• Sales promotion pages</li>
                          <li>• Demo request pages</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="product" className="mt-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Product Pages That Sell</h4>
                    <p className="text-gray-600">
                      Transform product descriptions from boring feature lists into compelling sales copy that addresses
                      customer pain points and drives purchase decisions.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                        <h5 className="font-medium text-purple-800 mb-2">E-commerce Focus:</h5>
                        <ul className="text-purple-700 text-sm space-y-1">
                          <li>• Benefit-driven product descriptions</li>
                          <li>• Compelling product headlines</li>
                          <li>• Trust-building elements</li>
                          <li>• Urgency and scarcity messaging</li>
                          <li>• Cross-sell and upsell copy</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                        <h5 className="font-medium text-green-800 mb-2">SaaS/Service Focus:</h5>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• Feature-to-benefit translations</li>
                          <li>• Use case scenarios</li>
                          <li>• ROI calculators and value props</li>
                          <li>• Comparison tables</li>
                          <li>• Implementation timelines</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="about" className="mt-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">About & Service Pages That Build Trust</h4>
                    <p className="text-gray-600">
                      Move beyond generic company descriptions to create pages that build credibility, showcase
                      expertise, and position your brand as the obvious choice for your ideal customers.
                    </p>
                    <div className="space-y-4">
                      <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                        <h5 className="font-medium text-orange-800 mb-2">About Page Elements:</h5>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <ul className="text-orange-700 space-y-1">
                            <li>• Compelling company story</li>
                            <li>• Mission and values alignment</li>
                            <li>• Team credibility and expertise</li>
                            <li>• Customer success stories</li>
                          </ul>
                          <ul className="text-orange-700 space-y-1">
                            <li>• Awards and recognition</li>
                            <li>• Industry partnerships</li>
                            <li>• Company milestones</li>
                            <li>• Clear next steps for visitors</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Pricing */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Website Copy Packages</CardTitle>
              <CardDescription>Transparent pricing for every type of website project</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">Single Page</h3>
                  <div className="text-3xl font-bold text-emerald-600 mb-4">
                    $0.12<span className="text-sm text-gray-500">/word</span>
                  </div>
                  <div className="text-sm text-gray-500 mb-4">Starting at $600</div>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li>• Homepage or landing page</li>
                    <li>• Conversion optimization</li>
                    <li>• 2 revision rounds</li>
                    <li>• 5-7 day turnaround</li>
                    <li>• Performance recommendations</li>
                  </ul>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/#contact">Get Started</Link>
                  </Button>
                </div>
                <div className="border-2 border-emerald-500 rounded-lg p-6 relative">
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500">
                    Most Popular
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2">Complete Website</h3>
                  <div className="text-3xl font-bold text-emerald-600 mb-4">
                    $0.11<span className="text-sm text-gray-500">/word</span>
                  </div>
                  <div className="text-sm text-gray-500 mb-4">Starting at $2,500</div>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li>• 5-8 pages of copy</li>
                    <li>• Content strategy included</li>
                    <li>• Unlimited revisions</li>
                    <li>• 2-3 week turnaround</li>
                    <li>• SEO optimization</li>
                    <li>• Conversion tracking setup</li>
                  </ul>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                    <Link href="/#contact">Get Started</Link>
                  </Button>
                </div>
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                  <div className="text-3xl font-bold text-emerald-600 mb-4">
                    $0.10<span className="text-sm text-gray-500">/word</span>
                  </div>
                  <div className="text-sm text-gray-500 mb-4">Starting at $5,000</div>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li>• 10+ pages of copy</li>
                    <li>• Multi-site projects</li>
                    <li>• Brand voice development</li>
                    <li>• Priority support</li>
                    <li>• A/B testing strategy</li>
                    <li>• Ongoing optimization</li>
                  </ul>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/#contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Portfolio Examples */}
          <Card className="mb-8" id="portfolio-examples">
            <CardHeader>
              <CardTitle className="text-2xl">Before & After: Real Copy Transformations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="border-l-4 border-emerald-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-3">NovaTech Solutions - Homepage Rewrite</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-red-600 mb-2">❌ Before (Conversion Rate: 1.2%)</h5>
                    <div className="bg-red-50 border border-red-200 p-4 rounded">
                      <p className="text-gray-700 italic text-sm">
                        "NovaTech Solutions provides comprehensive enterprise-grade software solutions with advanced
                        integration capabilities, scalable architecture, and robust security protocols for modern
                        businesses seeking digital transformation initiatives."
                      </p>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-emerald-600 mb-2">✅ After (Conversion Rate: 3.1%)</h5>
                    <div className="bg-emerald-50 border border-emerald-200 p-4 rounded">
                      <p className="text-gray-700 font-medium text-sm">"Stop Losing Customers to Outdated Systems"</p>
                      <p className="text-gray-600 text-sm mt-2">
                        Get the modern software platform that grows with your business—without the complexity, downtime,
                        or security risks of legacy systems.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <span className="text-emerald-600 font-semibold">Result:</span>
                  <span className="text-gray-600"> 156% increase in conversions, 67% reduction in bounce rate</span>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-3">Wellness Collective - Product Page</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-red-600 mb-2">❌ Before (Cart Completion: 34%)</h5>
                    <div className="bg-red-50 border border-red-200 p-4 rounded">
                      <p className="text-gray-700 italic text-sm">
                        "Premium Organic Wellness Supplement - Contains 25 essential vitamins and minerals with
                        bioavailable compounds for optimal absorption and maximum efficacy."
                      </p>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-600 mb-2">✅ After (Cart Completion: 92%)</h5>
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded">
                      <p className="text-gray-700 font-medium text-sm">
                        "Finally, Energy That Lasts All Day (Without the 3pm Crash)"
                      </p>
                      <p className="text-gray-600 text-sm mt-2">
                        Wake up refreshed, stay focused through meetings, and still have energy for your family—all with
                        one daily supplement that actually works.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <span className="text-blue-600 font-semibold">Result:</span>
                  <span className="text-gray-600"> 92% cart completion rate, 170% increase in average order value</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Process */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">My Website Copy Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-emerald-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-sm font-bold text-emerald-600">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Discovery & Research</h4>
                    <p className="text-gray-600 mb-2">
                      Deep dive into your business, customers, and competitors to understand what makes your audience
                      tick and what drives them to buy.
                    </p>
                    <ul className="text-gray-500 text-sm space-y-1">
                      <li>• Customer interviews and surveys</li>
                      <li>• Competitor analysis and positioning</li>
                      <li>• Current website performance audit</li>
                      <li>• Brand voice and messaging review</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-sm font-bold text-emerald-600">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Strategy & Structure</h4>
                    <p className="text-gray-600 mb-2">
                      Develop a conversion-focused content strategy that guides visitors through your sales funnel with
                      clear, compelling messaging.
                    </p>
                    <ul className="text-gray-500 text-sm space-y-1">
                      <li>• Information architecture planning</li>
                      <li>• Conversion funnel mapping</li>
                      <li>• Messaging hierarchy development</li>
                      <li>• Call-to-action strategy</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-sm font-bold text-emerald-600">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Copy Creation & Optimization</h4>
                    <p className="text-gray-600 mb-2">
                      Write compelling copy that speaks directly to your customers' needs, addresses their objections,
                      and motivates them to take action.
                    </p>
                    <ul className="text-gray-500 text-sm space-y-1">
                      <li>• Headline and subheading optimization</li>
                      <li>• Benefit-focused content creation</li>
                      <li>• Social proof integration</li>
                      <li>• SEO optimization for organic traffic</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-sm font-bold text-emerald-600">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Testing & Refinement</h4>
                    <p className="text-gray-600 mb-2">
                      Implement A/B testing strategies and provide ongoing optimization recommendations to continuously
                      improve performance.
                    </p>
                    <ul className="text-gray-500 text-sm space-y-1">
                      <li>• A/B testing setup and analysis</li>
                      <li>• Performance monitoring and reporting</li>
                      <li>• Conversion rate optimization recommendations</li>
                      <li>• Ongoing copy refinements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial */}
          <Card className="mb-8 bg-gradient-to-r from-emerald-50 to-teal-50">
            <CardContent className="p-8">
              <blockquote className="text-xl italic text-gray-700 mb-6">
                "The website copy transformation EliteScribe delivered was incredible. Our conversion rate went from
                1.2% to 3.1% in just two weeks after launch. More importantly, the quality of leads improved
                dramatically—our sales team reports that prospects are much more qualified and ready to buy when they
                reach out."
              </blockquote>
              <div className="flex items-center">
                <img
                  src="/placeholder.svg?height=80&width=80"
                  alt="Emma Thompson"
                  className="w-20 h-20 rounded-full mr-6"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-lg">Emma Thompson</div>
                  <div className="text-gray-600">Digital Director, NovaTech Solutions</div>
                  <div className="text-gray-500 text-sm">Former Marketing Manager at Microsoft</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-emerald-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Website Copy?</h3>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                Get a free website copy audit and see exactly how to improve your conversions. No obligations, just
                actionable insights you can implement immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/#contact">Get Your Free Website Audit</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-emerald-600"
                  asChild
                >
                  <Link href="/portfolio/website-copy/novatech-homepage">View Complete Case Study</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
